import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { highlight } from 'sugar-high'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

// Import layouts statically to avoid dynamic require issues in Next.js 14
import PostLayout from '../layouts/PostLayout'
import PostSimple from '../layouts/PostSimple'
import AuthorLayout from '../layouts/AuthorLayout'
import ListLayout from '../layouts/ListLayout'

const layouts = {
  PostLayout,
  PostSimple,
  AuthorLayout,
  ListLayout,
}

// Code component using sugar-high for syntax highlighting
function Code({ children, className, ...props }) {
  // Check if this is a code block (inside pre) or inline code
  const isCodeBlock =
    className?.startsWith('language-') || (typeof children === 'string' && children.includes('\n'))

  if (isCodeBlock && typeof children === 'string') {
    const codeHTML = highlight(children)
    return <code className={className} dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  }

  // For inline code, just render normally
  return (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  code: Code,
  BlogNewsletterForm: BlogNewsletterForm,
  // Add img mapping for standard markdown images
  img: ({ src, alt, ...props }) => (
    <Image src={src} alt={alt || ''} width={800} height={450} {...props} />
  ),
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = layouts[layout]
    if (!Layout) {
      console.error(`Layout "${layout}" not found`)
      return <div {...rest} />
    }
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
