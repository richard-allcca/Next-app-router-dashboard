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
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [General explain Redux](https://www.youtube.com/watch?v=uBJQTmsGI7Y)
- [Tutorial about Redux](https://www.youtube.com/watch?v=dDZvNZ9kyvg&list=PLCKuOXG0bPi3AWYFJewb-UhN7Y2VjooJL&index=5)

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

## How to Use Redux Toolkit

> First, you need to install Redux Toolkit and React-Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

- 2do paso, crea un store `index.ts` en la carpeta `store`:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

- 3er paso, crea un slice `counterSlice.ts` en la carpeta `store`:

```javascript
import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    // resto de código...
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

- 4to paso, crea un archivo `ReduxProvider.tsx` en la carpeta `app`:

```javascript
'use client';
import { store } from '../store/store';
import { Provider } from 'react-redux';

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
```

- 5to paso, envuelve tu aplicación con el `ReduxProvider` en el archivo `layout.js`:

```javascript
'use client';
import ReduxProvider from './store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
```
