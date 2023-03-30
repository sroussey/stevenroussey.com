import glob from 'fast-glob'
import * as path from 'path'

export async function importArticle(articleFilename: string) {
  let { meta, default: component } = await import(
    `#/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // @ts-expect-error
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
