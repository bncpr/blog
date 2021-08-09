import Head from "next/head"
import { FC, useEffect, useState } from "react"
import GithubIcon from "../public/github.svg"
import Moon from "../public/moon.svg"
import TwitterIcon from "../public/twitter-circle-hollow.svg"
import { ExternalLink } from "./ExternalLink"

const Layout: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    }
  }, [])

  const onChangeDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    if (!darkMode) {
      localStorage.setItem("theme", "dark")
      setDarkMode(true)
    } else {
      localStorage.removeItem("theme")
      setDarkMode(false)
    }
  }

  return (
    <div className='flex flex-col mx-auto'>
      <Head>
        <title>My Solutions Blog</title>
        <meta name='description' content='A blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='absolute left-0 p-2 m-2 transition-colors rounded-md dark:hover:bg-opacity-10 hover:bg-gray-200'>
        <Moon
          className='w-5 h-5 text-gray-900 cursor-pointer fill-current dark:text-white'
          onClick={onChangeDarkMode}
        />
      </div>
      <div className='absolute right-0 flex flex-row m-2 mr-3 space-x-3'>
        <ExternalLink href='https://twitter.com/_bncpr'>
          <TwitterIcon className='w-6 h-6 text-blue-500 fill-current md:w-8 md:h-8 hover:brightness-105' />
          <span className='sr-only'>Twitter Account</span>
        </ExternalLink>
        <ExternalLink href='https://github.com/bncpr/my-solutions-blog-next'>
          <GithubIcon className='w-6 h-6 text-purple-600 fill-current md:w-8 md:h-8 hover:brightness-110' />
          <span className='sr-only'>GitHub Repository</span>
        </ExternalLink>
      </div>
      <h1 className='px-3 py-5 mt-8 font-mono text-4xl md:py-8 md:text-6xl md:self-center md:px-0'>
        My Solutions Blog.
      </h1>

      <main>{children}</main>
    </div>
  )
}

export default Layout
