import { GetStaticProps } from "next"
import Link from "next/link"
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
    <div className='flex flex-col mt-6 px-14 space-y-2'>
      {allPostsData.map(({ id, date, title }: PostData) => (
        <Link href={"/posts/" + id} key={id}>
          <a className='py-1 hover:bg-purple-50 pl-5'>
            <ul>
              <li>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            </ul>
          </a>
        </Link>
      ))}
    </div>
  )
}
