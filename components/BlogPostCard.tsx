import Link from 'next/link';
import { parseISO, format } from 'date-fns';

export default function BlogPostCard({
  title,
  slug,
  gradient,
  summary,
  publishedAt
}) {
  return (
    (<Link href={`/blog/${slug}`} className="w-full">

      <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg font-medium w-full text-gray-800 dark:text-gray-100">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
        </p>
      </div>

    </Link>)
  );
}
