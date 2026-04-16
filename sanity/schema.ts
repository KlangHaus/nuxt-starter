// Sanity schema stub — configure in your Sanity Studio project.
// This file documents the expected document types.
//
// Expected types:
//   - page: { title, slug, body }
//
// See: https://www.sanity.io/docs/schema-types

export const pageType = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
  ],
};
