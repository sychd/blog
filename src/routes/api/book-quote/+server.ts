import { json } from '@sveltejs/kit';
import { CATEGORIES, LANGUAGES, type Post } from '$lib/types';

export const prerender = true;

async function getPosts() {
  let posts: Post[] = [];

  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;

      if (post.categories.some((cat) => !CATEGORIES.includes(cat))) {
        throw new Error(`Category is incorrect in ${slug}`);
      }

      if (!LANGUAGES.includes(post.language)) {
        throw new Error(`Language is incorrect in ${slug}`);
      }

      if (post.published) {
        posts.push(post);
      }
    }
  }

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  return posts;
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
