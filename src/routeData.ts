import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  route.siteTitleHref = '/tema-oversigt/?tema=all';

  if (/^\/draft(?:\/|$)/.test(context.url.pathname)) {
    route.entry.data.pagefind = false;
    route.head.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } });
  }
});
