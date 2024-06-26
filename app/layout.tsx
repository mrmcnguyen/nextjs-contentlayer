import Link from "next/link"
import "./globals.css"
import "./styles.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })
const poppin = Poppins({
  subsets: ["latin"],
  weight: "600",
  style: "normal"
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="longer max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
              <h1 className={`${poppin.className} bigger-heading`}>ONEFLOW MUSIC</h1>
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link className={`${poppin.className} nav-bar`} href="/">HOME</Link>
                  <Link className={`${poppin.className} nav-bar`} href="/about">ABOUT</Link>
                </nav>
              </div>
            </header>
            <p>The ultimate roadmap to advance your musical career. For upcoming producers and artists, these guides will provide you value in giving you guidance and insightful information. These guides are designed to be read in chronological order and to help you use frameworks for self-improvement of your music.</p>
            <main>{children}</main>
            <ModeToggle />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}