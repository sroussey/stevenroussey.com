import { importArticle } from '#/lib/getAllArticles'
import React from 'react'

export async function generateMetadata({ params: { slug } }) {
  const { meta, component } = await importArticle(`${slug}/index.mdx`)
  return meta
}

export default async function Page({ params: { slug } }) {
  const { meta, component: Content } = await importArticle(`${slug}/index.mdx`)
  return (
    <div>
      <Content />
    </div>
  )
}
