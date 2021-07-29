import { Switch } from "@headlessui/react"
import Head from "next/head"
import { FC, useLayoutEffect, useState } from "react"
import GithubIcon from "../public/github.svg"
import TwitterIcon from "../public/twitterIcon.svg"
import { ExternalLink } from "./ExternalLink"

const Layout: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useLayoutEffect(() => {
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
  })

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
    <div className='flex flex-col mx-auto0'>
      <Head>
        <title>My Solutions Blog</title>
        <meta name='description' content='A blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex absolute left-0 p-3'>
        <label className='text-xs my-auto font-semibold mr-1'>DARK:</label>
        <Switch
          checked={darkMode}
          onChange={onChangeDarkMode}
          className={`${
            darkMode ? "bg-purple-900" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11 scale-90 my-auto`}
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
          <TwitterIcon className='w-8 h-8 text-blue-500 fill-current hover:brightness-105' />
          <span className='sr-only'>Twitter Account</span>
        </ExternalLink>
        <ExternalLink href='https://github.com/bncpr/my-solutions-blog-next'>
          <GithubIcon className='w-8 h-8 text-purple-600 fill-current dark:text-purple-400 hover:brightness-105' />
          <span className='sr-only'>GitHub Repository</span>
        </ExternalLink>
      </div>
      <h1 className='px-2 mt-8 font-mono text-6xl md:self-center md:px-0 py-8'>
        My Solutions Blog.
      </h1>

      <main>{children}</main>
    </div>
  )
}

export default Layout
