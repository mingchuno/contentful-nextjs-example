import { createClient } from 'contentful';
import { IPost } from '@/contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export async function getAllPosts(): Promise<IPost[]> {
  const response = await client.getEntries({
    content_type: 'post',
    order: ['-fields.publishDate'],
  });

  return response.items as IPost[];
}

export async function getPostBySlug(slug: string): Promise<IPost> {
  const response = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0] as IPost;
}