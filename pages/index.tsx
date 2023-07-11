import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Date } from '../components/Date'
import { getSortedPostsData } from '../lib/posts'
import { PostData } from '../types/postData'

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

type HomeProps = {
  allPostsData: Record<string, any>
}

const Home: FunctionComponent<HomeProps> = ({ allPostsData }) => {
  return (
    <div className='flex flex-col items-stretch max-w-screen-lg px-2 mx-auto space-y-5 md:px-0'>
      <p className='max-w-full prose rounded md:prose-xl dark:text-white md:px-2'>
        A personal blog about learning technology and building stuff.
      </p>
      {allPostsData.map(({ id, date, title }: PostData) => (
        <Link href={'/posts/' + id} key={id}>
          <article className='p-2 rounded md:pl-5 hover:bg-purple-50 dark:hover:text-black dark:focus:ring-purple-500 dark:hover:bg-purple-400 hover:shadow-inner'>
            <h3 className='font-mono text-lg uppercase md:text-xl'>{title}</h3>
            <Date dateString={date} className='font-mono' />
          </article>
        </Link>
      ))}
    </div>
  )
}

export default Home
