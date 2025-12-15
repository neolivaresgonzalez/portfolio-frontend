export interface StrapiMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiData<T> {
  id: number;
  documentId: string;
  attributes: T;
}

export interface Project {
  title: string;
  slug: string;
  Summary: string;
  projectType: 'professional' | 'personal' | 'open_source' | 'freelance' | 'volunteer';
  projectStatus: 'planned' | 'in_progress' | 'completed' | 'archived';
  isFeatured: boolean;
}

export interface StrapiResponse<T> {
  data: StrapiData<T>[] | StrapiData<T>;
  meta: StrapiMeta;
}

export interface StrapiSingleResponse<T> {
  data: StrapiData<T>;
  meta: StrapiMeta;
}

export interface StrapiListResponse<T> {
  data: StrapiData<T>[];
  meta: StrapiMeta;
}
