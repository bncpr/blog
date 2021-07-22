import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { getAllPostIds, getPostData } from "../../lib/posts"

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: false }
}

export default function Post({ postData: { title, id, date } }: any) {
  return (
    <div className='lg:px-20 md:px-10 sm: px-4 mt-5 flex flex-col justify-items-start'>
      <Head>
        <title>{title}</title>
      </Head>
      <h2 className='font-serif text-3xl md:text-4xl uppercase'>{title}</h2>
      <h3 className='text-base py-1'>{date}</h3>
      <Link href='/'>
        <a className='block'>back</a>
      </Link>
    </div>
  )
}
