This a coding test for Mercado Libre Argentina. It was made using mostly [NextJS](https://nextjs.org/) and [Tailwind CSS]().

The decision behind using NextJS was the nature of e-commerce and SEO, browsers are still having trouble crawling SPA sites, so the Server Side Rendering provided by NextJS was a perfect fit.

For the tailwind part, is more biased but it's a must if you want a fast development space.

It wasn't necessary to use express on the backend side, as Nextjs has [API routes](https://nextjs.org/docs/api-routes/introduction) that make easy to build simple APIs like this one.

## Getting Started

For running the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For building a productive bundle

```bash
npx next build
#and
npx next run
```

## Demo

You can check a live example hosted in now.sh

https://meli-test.damjtoh.now.sh/
