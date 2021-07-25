import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import Link from "next/link"
import CodeBox from "../../components/CodeBox"
import { Date } from "../../components/Date"
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
  p: props => <p className='prose prose-xl max-w-full' {...props} />,
  pre: props => <div className='self-stretch' {...props} />,
  code: CodeBox,
}

export default function Post({ source, frontMatter }) {
  return (
    <div className='flex flex-col space-y-5 items-start max-w-screen-lg mx-auto px-3 lg:px-0 pb-3'>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <header>
        <h1 className='font-mono text-4xl uppercase'>{frontMatter.title}</h1>
        <Date dateString={frontMatter.date} className='font-mono' />
      </header>
      <MDXRemote {...source} components={components} />
      <Link href='/'>
        <a className='font-semibold block btn-purple'>BACK</a>
      </Link>
    </div>
  )
}
