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

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next Images](https://nextjs.org/docs/app/api-reference/components/image)
- [React icons](https://react-icons.github.io/react-icons/)

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
