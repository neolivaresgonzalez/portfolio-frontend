# Portfolio Frontend


This project is a modern portfolio frontend built with **React**, **TypeScript**, and **Vite**, styled with **TailwindCSS** and **shadcn/ui**. It features animated icons and a responsive design.

## Prerequisites

-   **Node.js**: v20 or higher
-   **npm**: v10 or higher

## Environment Setup

To run this project, you need to configure the environment variables. Create a `.env` file in the root directory (or copy `sample.env` to `.env`) and add the following variables:

| Variable | Description |
| :--- | :--- |
| `VITE_STRAPI_URL` | The URL of your Strapi CMS instance (e.g., `http://localhost:1337`). |
| `VITE_STRAPI_API_TOKEN` | API Token generated in Strapi (Settings -> API Tokens) with permissions to access content types. |
| `VITE_RECAPTCHA_SITE_KEY` | Your Google ReCaptcha v3 Site Key. |
| `VITE_RECAPTCHA_BACKEND_URL` | The URL of your backend service that verifies the ReCaptcha token. |
| `VITE_LOG_BUCKET_NAME` | (Optional) The name of the S3 bucket used for logging frontend events. |

## Installation

Install the project dependencies using npm:

```bash
npm install
```

## Running Locally

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Linting

To check for code quality issues:

```bash
npm run lint
```
