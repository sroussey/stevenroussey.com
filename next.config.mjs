import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: false,
  experimental: {
    appDir: true,
    mdxRs: false,
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  // // extension: /\.mdx?$/,
  // options: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [rehypePrism],
  // },
})

const finalConfig = withMDX(nextConfig)

export default finalConfig
