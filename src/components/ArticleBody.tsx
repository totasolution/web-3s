import type { ArticleBlock } from '@/content/articles/types'

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-bold text-brand-dark font-headline mt-10 mb-4 first:mt-0"
            >
              {block.text}
            </h2>
          )
        }
        if (block.type === 'p') {
          return (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
              {block.text}
            </p>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul
              key={i}
              className="list-disc pl-6 space-y-2 text-gray-600 mb-6 text-base md:text-lg marker:text-brand-primary"
            >
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        }
        if (block.type === 'cta') {
          return (
            <div key={i} className="my-8 p-6 bg-brand-lighter rounded-xl border border-brand-light">
              <a
                href={block.href}
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
              >
                {block.text}
                <span aria-hidden>→</span>
              </a>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
