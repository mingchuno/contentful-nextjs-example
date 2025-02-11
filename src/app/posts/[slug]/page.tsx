import { IPostFields } from '@/contentful';
import { getPostBySlug } from '@/lib/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function Post({ params }: {params: Promise<{ slug: string }>}) {
	const slug = (await params).slug
	const post = await getPostBySlug(slug)
  const postFields: IPostFields = post.fields as IPostFields
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{postFields.title}</h1>
      <div className="prose lg:prose-xl">
        {postFields.richBody ? documentToReactComponents(postFields.richBody) : postFields.body}
      </div>
    </div>
  );
}