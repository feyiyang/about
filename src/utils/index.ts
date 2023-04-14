import { MarkdownInstance } from "astro"

export interface Frontmatter {
  layout: string
  title: string
  date?: string
  image?: string
  imageDescription?: string
  tags?: Array<string>
  description: string
  draft?: boolean
}
