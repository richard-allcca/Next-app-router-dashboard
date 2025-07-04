This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features of this repository

- useState

- use-client

- Next Link

- Next Image

- Manejo de Metadata dinámica

- Páginas generadas del lado del servidor - SGR

- Páginas de errores

- Validación de argumentos

- Redirecciones

- Prioridad de Carga de imágenes

- Tipos de revalidación con Fetch y sin Fetch

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next Images](https://nextjs.org/docs/app/api-reference/components/image)
- [React icons](https://react-icons.github.io/react-icons/)
- [Next.js Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Next.js Image priority](https://nextjs.org/docs/app/api-reference/components/image#priority)
- [Next.js Handling Errors](https://nextjs.org/docs/app/getting-started/error-handling)

## How to Use Images

To use images in your Next.js project, you can utilize the `next/image` component. This component optimizes images on-demand for faster loading and better performance.

You need settings in your `next.config.js` file to specify the domains from which you want to load images. Here’s an example configuration:

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```
