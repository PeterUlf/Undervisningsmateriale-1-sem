import type { APIRoute } from 'astro';
import { baseCss, solutions } from '../../../data/layoutdiagram-solutions';

export function getStaticPaths() {
  return solutions.map((solution) => ({
    params: { opgave: solution.slug },
    props: { solution },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { solution } = props as { solution: (typeof solutions)[number] };
  return new Response(`<!doctype html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Layoutdiagrammer – opgave ${solution.number}</title>
    <style>${baseCss}\n\n${solution.css}</style>
  </head>
  <body>
    ${solution.html}
  </body>
</html>`, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
