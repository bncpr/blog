import Head from "next/head"
import { FC } from "react"
import GithubIcon from "../public/github.svg"
import TwitterIcon from "../public/twitterIcon.svg"
import { ExternalLink } from "./ExternalLink"

const Layout: FC = ({ children }) => {
  return (
    <div className='flex flex-col mx-auto space-y-10'>
      <Head>
        <title>My Solutions Blog</title>
        <meta name='description' content='A blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='absolute right-0 flex flex-row m-2 space-x-2'>
        <ExternalLink href='https://twitter.com/_bncpr'>
          <TwitterIcon className='w-8 h-8 text-blue-500 fill-current' />
          <span className='sr-only'>Twitter Account</span>
        </ExternalLink>
        <ExternalLink href='https://github.com/bncpr/my-solutions-blog-next'>
          <GithubIcon className='w-8 h-8 text-purple-600 fill-current' />
          <span className='sr-only'>GitHub Repository</span>
        </ExternalLink>
      </div>
      <h1 className='px-2 mt-8 font-mono text-6xl md:self-center md:px-0'>
        My Solutions Blog.
      </h1>

      <main>{children}</main>
    </div>
  )
}

export default Layout
