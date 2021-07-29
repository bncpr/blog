import { Switch } from "@headlessui/react"
import Head from "next/head"
import { FC, useEffect, useState } from "react"
import GithubIcon from "../public/github.svg"
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
      <div className='absolute left-0 flex items-center p-3 space-x-1'>
        <label className='mr-1 text-xs font-semibold'>DARK:</label>
        <Switch
          checked={darkMode}
          onChange={onChangeDarkMode}
          className={`${
            darkMode ? "bg-blue-800" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11 md:scale-90 scale-75`}
        >
          <span className='sr-only'>Enable notifications</span>
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
      <div className='absolute right-0 flex flex-row m-2 mr-3 space-x-3'>
        <ExternalLink href='https://twitter.com/_bncpr'>
          <TwitterIcon className='box-border w-6 h-6 text-blue-500 fill-current md:w-8 md:h-8 hover:brightness-105' />
          <span className='sr-only'>Twitter Account</span>
        </ExternalLink>
        <ExternalLink href='https://github.com/bncpr/my-solutions-blog-next'>
          <GithubIcon className='w-6 text-purple-600 fill-current h-6md:w-8 md:h-8 hover:brightness-110' />
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
