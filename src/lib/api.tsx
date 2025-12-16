import type { StrapiResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

export class APIError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'APIError';
  }
}

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function fetchAPI<T>(
  path: string,
  options: FetchOptions = {}
): Promise<StrapiResponse<T>> {
  const { params, ...init } = options;

  // Build URL with query parameters
  const url = new URL(`/api${path}`, API_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
      ...init,
    });

    if (!response.ok) {
      throw new APIError(response.status, `An error occurred while fetching ${path}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
}
