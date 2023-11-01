import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="mx-auto text-center">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Gideon Bamuleseyo</h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4"></h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">Hi, my name is Gideon. I am a Software Engineer.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-16">Javascript | Typescript | Python | Golang </p>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">Featured Posts</h3>
        <BlogPostCard
          title="Notes on Migrating Data from One Database to Another"
          slug="db-migration-firebase-mongo"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          publishedAt="2021-10-16"
          summary="As your company grows, you will find a need to scale. This may cause you to revise the stack or architecture you started with. And one of the items you may look into changing is the underlying database you are using."
        />
        <Link
          href="/blog"
          className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
          Read all posts<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>

        </Link>
      </div>
    </Container>
  );
}
