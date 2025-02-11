import { getAllPosts } from '@/lib/api';

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article key={post.sys.id} className="border rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">
            {/* @ts-expect-error FIXME*/}
            {post.fields.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {/* @ts-expect-error FIXME*/}
            {post.fields.excerpt}
          </p>
          <a
            href={`/posts/${post.fields.slug}`}
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </article>
      ))}
    </div>
  </div>
  );
}
