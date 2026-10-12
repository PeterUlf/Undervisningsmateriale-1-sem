import type { CollectionEntry } from 'astro:content';

type Doc = CollectionEntry<'docs'>;

export function docSlug(doc: Pick<Doc, 'id'>): string {
  return doc.id.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '').replace(/\/$/, '');
}

export const publicHref = (doc: Pick<Doc, 'id'>) => `/${docSlug(doc)}${docSlug(doc) ? '/' : ''}`;
export const draftHref = (doc: Pick<Doc, 'id'>) => `/draft/${docSlug(doc) || 'forside'}/`;
export const docTheme = (doc: Doc) => doc.data.sidebar?.badge?.text?.match(/^Tema\s+(\d+)/)?.[1] || '';

const groupNames: Record<string, string> = {
  astro: 'Astro', css: 'CSS', diverse: 'Diverse', git: 'Git & GitHub',
  guides: 'Guides', html: 'HTML', javascript: 'JavaScript', lyd: 'Lyd',
  photo: 'Foto og video', photoshop: 'Photoshop', premiere: 'Premiere Pro',
  projektledelse: 'Projektledelse', quiz: 'Quizzer', reference: 'Reference',
  svg: 'SVG', test: 'Test', ux: 'UX',
};

export function docGroup(doc: Doc): string {
  const slug = docSlug(doc);
  if (slug.startsWith('dette-site') || slug === 'om-dette-site' || slug === 'guides/forbedringsforslag-materiale-draft') return 'Dette site';
  if (slug.startsWith('astro/figma/')) return 'Figma';
  const folder = slug.split('/')[0];
  if (/^tema-\d+$/.test(folder)) return folder.replace('tema-', 'Tema ');
  return groupNames[folder] || 'Øvrige sider';
}

export function groupDocs(docs: Doc[]) {
  const groups = new Map<string, Doc[]>();
  for (const doc of docs) {
    const group = docGroup(doc);
    groups.set(group, [...(groups.get(group) || []), doc]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a === b ? 0 : a === 'Dette site' ? -1 : b === 'Dette site' ? 1 : a.localeCompare(b, 'da', { numeric: true }))
    .map(([label, entries]) => ({
      label,
      docs: entries.sort((a, b) => (a.data.sidebar?.order ?? 999) - (b.data.sidebar?.order ?? 999) || a.data.title.localeCompare(b.data.title, 'da')),
    }));
}

export function draftSidebar(docs: Doc[]) {
  return [
    { label: 'Alle sider inkl. drafts', link: '/draft/?tema=all' },
    ...groupDocs(docs).map((group) => ({
      label: group.label,
      collapsed: group.label !== 'Dette site',
      items: group.docs.map((doc) => ({
        label: doc.data.sidebar?.label || doc.data.title,
        link: draftHref(doc),
        ...(doc.data.draft ? { badge: { text: 'Draft', variant: 'caution' as const } } : {}),
      })),
    })),
  ];
}
