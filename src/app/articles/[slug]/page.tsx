import { importArticle } from '#/lib/getAllArticles'
import React from 'react'

export async function generateMetadata({ params: { slug } }) {
  const { meta } = await importArticle(`${slug}/index.mdx`)
  return meta
}

export default async function Page({ params: { slug } }) {
  const { component: Content } = await importArticle(`${slug}/index.mdx`)
  return (
    <div>
      <Content />
    </div>
  )
}
