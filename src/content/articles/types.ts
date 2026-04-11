export type ArticleBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type Article = {
  slug: string
  datePublished: string
  title: { id: string; en: string }
  description: { id: string; en: string }
  body: { id: ArticleBlock[]; en: ArticleBlock[] }
}
