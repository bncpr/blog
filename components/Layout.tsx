import Head from "next/head"
import { FC } from "react"
import GithubIcon from "../public/github.svg"
import TwitterIcon from "../public/twitter.svg"

const Layout: FC = ({ children }) => {
  return (
    <div className='mx-auto flex flex-col space-y-10'>
      <Head>
        <title>My Solutions Blog</title>
        <meta name='description' content='A blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='absolute flex flex-row right-0 m-2 space-x-2 md:h-8 h-5 w-16' >
        <a
          href='https://twitter.com/_bncpr'
          rel='noopener noreferrer'
          target='_blank'
        >
          <TwitterIcon className='w-full h-full h-fuw-full fill-current text-blue-500' />
          <span className='sr-only'>Twitter Account</span>
        </a>
        <a
          href='https://github.com/bncpr/my-solutions-blog-next'
          rel='noopener noreferrer'
          target='_blank'
        >
          <GithubIcon className='w-full h-full  fill-current text-gray-600 p-0.5' />
          <span className='sr-only'>GitHub Repository</span>
        </a>
      </div>
      <h1 className='font-mono md:self-center text-6xl mt-8 px-2 md:px-0'>
        My Solutions Blog.
      </h1>
      
      <main>{children}</main>
    </div>
  )
}

export default Layout
