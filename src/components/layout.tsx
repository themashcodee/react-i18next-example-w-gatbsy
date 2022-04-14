import React from "react"
import { Link } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

const LanguageCodeToName = {
  en: "English",
  ja: "日本",
}

type LanguagesCodes = "en" | "ja"

export const Layout = ({ children }) => {
  const { languages, changeLanguage, language, originalPath } = useI18next()

  return (
    <main className="flex flex-col">
      <header className="h-14 w-full bg-violet-500 text-white flex items-center text-2xl justify-between px-8">
        <ul className="flex gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/using-ssr">SSR</Link>
          </li> */}
        </ul>

        <select
          className="bg-transparent"
          defaultValue={language}
          onChange={e => changeLanguage(e.target.value)}
        >
          {languages.map(lng => (
            <option key={lng} className="text-black" value={lng}>
              {LanguageCodeToName[lng]}
            </option>
          ))}
        </select>
      </header>
      <section className="p-12 text-xl">{children}</section>
    </main>
  )
}
