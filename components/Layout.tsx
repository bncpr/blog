import Head from "next/head"
import { FC } from "react"

const Layout: FC = ({ children }) => {
  return (
    <div className='flex flex-col justify-center container mx-auto'>
      <Head>
        <title>My Solutions Blog</title>
        <meta name='description' content='A blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='font-serif md:text-6xl text-5xl mt-8 px-10 py-4'>
        My Solutions Blog.
      </h1>
      <main>{children}</main>
    </div>
  )
}

export default Layout
