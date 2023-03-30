import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    img: ({ alt, src, ...props }) => {
      console.log('useMDXComponents', props)
      return <Image alt={alt} src={src} />
    },
  }
}
