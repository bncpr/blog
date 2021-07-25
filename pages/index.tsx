import { GetStaticProps } from "next"
import Link from "next/link"
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

export default function Home({
  allPostsData,
}: {
  allPostsData: Record<string, any>
}) {
  return (
    <div className='flex flex-col items-stretch space-y-5 md:px-0 px-2 max-w-screen-lg mx-auto'>
      <p className='prose prose-xl max-w-full'>
        Welcome to my solutions blog. I created this blog to motivate me into
        solving more exercises, whether from a textbook I&apos;m studying in
        order to put the new knowledge into practice, or from projects like the
        Euler Project to further hone existing programming skills. This is not
        an expert&apos;s blog, but a learner&apos;s blog. Feedback and
        discussions are welcomed and appreciated.
      </p>
      {allPostsData.map(({ id, date, title }: PostData) => (
        <Link href={"/posts/" + id} key={id}>
          <a className='transition duration-300 hover:bg-purple-50 hover:shadow-inner rounded pl-5 focus:ring-2 focus:ring-purple-200 '>
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
