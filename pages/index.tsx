import { GetStaticProps } from "next"
import Link from "next/link"
import { FunctionComponent } from "react"
import { Date } from "../components/Date"
import { getSortedPostsData } from "../lib/posts"
import { PostData } from "../types/postData"

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
      <p className='max-w-full prose prose-xl'>
        Welcome to my solutions blog. I created this blog to motivate me into
        solving more exercises, whether from a textbook I&apos;m studying in
        order to put the new knowledge into practice, or from projects like the
        Euler Project to further hone existing programming skills. This is not
        an expert&apos;s blog, but a learner&apos;s blog. Feedback and
        discussions are welcomed and appreciated.
      </p>
      {allPostsData.map(({ id, date, title }: PostData) => (
        <Link href={"/posts/" + id} key={id}>
          <a className='pl-5 transition duration-300 rounded hover:bg-purple-50 hover:shadow-inner focus:ring-2 focus:ring-purple-100 '>
            <article className='p-2'>
              <h3 className='font-mono text-xl uppercase'>{title}</h3>
              <Date dateString={date} className='font-mono' />
            </article>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Home
