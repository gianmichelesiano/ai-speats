import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router"
import { Sparkles, Settings, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ChatBubble } from "@/components/chat-bubble"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/components/language-provider"
import useAuth, { isLoggedIn } from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
})

function Layout() {
  const { t } = useLanguage()
  const { logout } = useAuth()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        className="border-b border-border text-primary-foreground"
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)'
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <h1 className="text-xl font-semibold">Speats AI</h1>
            </Link>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button asChild variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Link to="/settings">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">{t.settings}</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10"
                onClick={logout}
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-border py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          {t.systemEngineered}
        </div>
      </footer>

      {/* Chat Bubble */}
      <ChatBubble />
    </div>
  )
}

export default Layout
