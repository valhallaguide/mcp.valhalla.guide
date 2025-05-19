"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function Home() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [activeExample, setActiveExample] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = ["hero", "get", "how-to-use", "example"]
      let currentSection = "hero"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: t("nav.home") },
    { id: "get", label: t("nav.getMcp") },
    { id: "how-to-use", label: t("nav.howToUse") },
    { id: "example", label: t("nav.example") },
  ]

  const examples = [
    {
      id: 0,
      text: t("example.item1"),
      image: "/claude01.png",
    },
    {
      id: 1,
      text: t("example.item2"),
      image: "/claude02.png",
    },
    {
      id: 2,
      text: t("example.item3"),
      image: "/claude03.png",
    },
    {
      id: 3,
      text: t("example.item4"),
      image: "/claude04.png",
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-amber-900/30" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="https://valhalla.guide">
                <Image 
                  src="/logo.png" 
                  alt="OdinFun MCP Logo" 
                  width={120} 
                  height={40} 
                  style={{ height: 'auto' }}
                  className="object-contain" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id ? "text-amber-400" : "text-gray-300 hover:text-amber-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-amber-400 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-amber-900/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === item.id
                      ? "text-amber-400 bg-gray-800"
                      : "text-gray-300 hover:bg-gray-800 hover:text-amber-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
      >
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%)'
        }}></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 animate-pulse">
            {t("hero.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-yellow-500 mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">{t("hero.subtitle")}</h2>
          <button
            onClick={() => scrollToSection("how-to-use")}
            className="px-8 py-3 border-2 border-amber-400 text-amber-400 rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">{t("hero.tryNow")}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-amber-400" />
        </div>
      </section>

      {/* Get OdinFun MCP Section */}
      <section id="get" className="py-20 px-4 bg-black relative">
        <div className="absolute inset-0 bg-gradient-radial from-amber-900/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400">{t("getMcp.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GitHub Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="h-16 w-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">{t("getMcp.github.title")}</h3>
              <p className="text-gray-400 text-center mb-6">{t("getMcp.github.description")}</p>
              <div className="text-center">
                <Link
                  href="https://github.com/valhallaguide/odinfun-mcp"
                  className="px-6 py-2 bg-transparent border border-amber-400 text-amber-400 rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  {t("getMcp.github.button")}
                </Link>
              </div>
            </div>

            {/* NPM Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="h-16 w-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M4 8v8h16V8H4z" />
                  <path d="M4 8v8h8V8H4z" />
                  <path d="M12 8v8h8V8h-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">{t("getMcp.npm.title")}</h3>
              <p className="text-gray-400 text-center mb-6">{t("getMcp.npm.description")}</p>
              <div className="text-center">
                <Link
                  href="https://www.npmjs.com/package/odinfun-mcp"
                  className="px-6 py-2 bg-transparent border border-amber-400 text-amber-400 rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  {t("getMcp.npm.button")}
                </Link>
              </div>
            </div>

            {/* MCP Store Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="h-16 w-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-white">{t("getMcp.mcp.title")}</h3>
              <p className="text-gray-400 text-center mb-6">{t("getMcp.mcp.description")}</p>
              <div className="text-center">
                <Link
                  href="https://mcp.so/server/odinfun-mcp/valhallaguide"
                  className="px-6 py-2 bg-transparent border border-amber-400 text-amber-400 rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  {t("getMcp.mcp.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 px-4 bg-black/95 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400">{t("howToUse.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50 hover:border-amber-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl opacity-90">
                1
              </div>
              <div className="pt-6 pl-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{t("howToUse.step1.title")}</h3>
                <div className="text-gray-400 mb-4 space-y-4">
                  <p className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-amber-800 flex-shrink-0 flex items-center justify-center text-black font-bold text-xs mr-2 mt-0.5">
                      1
                    </span>
                    <span>
                      {t("howToUse.step1.item1")}
                      <br />
                      <a
                        href="https://claude.ai/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:underline"
                      >
                        https://claude.ai/download
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-amber-800 flex-shrink-0 flex items-center justify-center text-black font-bold text-xs mr-2 mt-0.5">
                      2
                    </span>
                    <span>
                      {t("howToUse.step1.item2")}
                      <br />
                      <a
                        href="https://nodejs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:underline"
                      >
                        https://nodejs.org
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50 hover:border-amber-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl opacity-90">
                2
              </div>
              <div className="pt-6 pl-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{t("howToUse.step2.title")}</h3>
                <p className="text-gray-400 mb-4">{t("howToUse.step2.description")}</p>
                <div className="bg-gray-900 p-3 rounded-md relative group">
                  <pre className="text-amber-300 overflow-x-auto">
                    <code>{`"odinfun-mcp": {
  "command": "npx",
  "args": [
    "-y",
    "odinfun-mcp"
  ]
}`}</code>
                  </pre>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`"odinfun-mcp": {
  "command": "npx",
  "args": [
    "-y",
    "odinfun-mcp"
  ]
}`)
                    }}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy to clipboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50 hover:border-amber-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl opacity-90">
                3
              </div>
              <div className="pt-6 pl-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{t("howToUse.step3.title")}</h3>
                <p className="text-gray-400 mb-4">{t("howToUse.step3.description")}</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section id="example" className="py-20 px-4 bg-black relative">
        <div className="absolute inset-0 bg-gradient-radial from-amber-900/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-amber-400">{t("example.title")}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Text Options */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50">
              <h3 className="text-xl font-semibold mb-6 text-white">{t("example.subtitle")}</h3>

              <div className="space-y-4">
                {examples.map((example, index) => (
                  <div
                    key={example.id}
                    onClick={() => setActiveExample(index)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-start ${
                      activeExample === index
                        ? "bg-gradient-to-r from-amber-900/30 to-transparent border-l-4 border-amber-400"
                        : "hover:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-black font-bold text-sm mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <p className={`${activeExample === index ? "text-amber-300" : "text-gray-300"}`}>{example.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image Display */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-900/50 flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                {examples.map((example, index) => (
                  <div
                    key={example.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeExample === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={example.image || "/placeholder.svg"}
                        alt={`Example ${index + 1}: ${example.text}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-amber-900/30">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })} | <a href="https://valhalla.guide" className="hover:text-amber-400 transition-colors">valhalla.guide</a></p>
        </div>
      </footer>
    </main>
  )
}
