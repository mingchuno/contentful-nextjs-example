import { getPostBySlug } from '@/lib/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function Post({ params }: {params: Promise<{ slug: string }>}) {
	const slug = (await params).slug
	const post = await getPostBySlug(slug)
  return (
    <div className="container mx-auto px-4 py-8">
      {/* @ts-expect-error FIXME*/}
      <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
      <div className="prose lg:prose-xl">
        {/* @ts-expect-error FIXME*/}
        {post.fields.richBody ? documentToReactComponents(post.fields.richBody) : post.fields.body}
      </div>
    </div>
  );
}