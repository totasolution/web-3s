export type ArticleBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'cta'; text: string; href: string }

export type ArticleImage = {
  src: string
  alt: { id: string; en: string }
}

export type Article = {
  slug: string
  datePublished: string
  title: { id: string; en: string }
  description: { id: string; en: string }
  image?: ArticleImage
  body: { id: ArticleBlock[]; en: ArticleBlock[] }
}
