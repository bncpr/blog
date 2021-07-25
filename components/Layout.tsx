import Head from "next/head"
import { FC } from "react"

const Layout: FC = ({ children }) => {
  return (
    <div className='mx-auto flex flex-col space-y-10'>
      <Head>
        <title>My Solutions Blog</title>
        <meta name='description' content='A blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='font-mono md:self-center text-6xl mt-8 px-2 md:px-0'>
        My Solutions Blog.
      </h1>
      <main>{children}</main>
    </div>
  )
}

export default Layout
