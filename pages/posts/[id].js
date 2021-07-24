import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import Link from "next/link"
import CodeBox from "../../components/CodeBox"
import { getAllPostIds, getPostData } from "../../lib/posts"

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id)
  const { data, content } = matter(postData)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: false }
}

const components = {
  h1: props => <h1 className='font-serif text-4xl' {...props} />,
  h2: props => <h2 className='font-mono text-base' {...props} />,
  pre: props => <div className='w-max mx-auto' {...props} />,
  code: CodeBox,
}
export default function Post({ source, frontMatter }) {
  return (
    <div className='lg:px-20 md:px-10 px-0 mt-5 flex flex-col justify-items-start w-max'>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <MDXRemote {...source} components={components} />
      <Link href='/'>
        <a className='block'>back</a>
      </Link>
    </div>
  )
}
