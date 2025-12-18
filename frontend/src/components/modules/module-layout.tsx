import { type ReactNode, useState } from "react"
import { Link, useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { ChatBubble } from "@/components/chat-bubble"
import { useLanguage } from "@/components/language-provider"
import { Home, LayoutDashboard, Settings, FileText, BarChart3, Users, ChevronLeft, Menu, X, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import useAuth from "@/hooks/useAuth"

interface ModuleLayoutProps {
  children: ReactNode
  moduleId: string
  title: string
  description: string
}

export function ModuleLayout({ children, moduleId, title, description }: ModuleLayoutProps) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { t } = useLanguage()
  const { logout } = useAuth()

  const menuItems = [
    { icon: LayoutDashboard, label: t.dashboard, href: "" },
    { icon: FileText, label: t.documents, href: "/documents" },
    { icon: BarChart3, label: t.statistics, href: "/stats" },
    { icon: Users, label: t.team, href: "/team" },
    { icon: Settings, label: t.settings, href: "/settings" },
  ]

  const handleLogout = () => {
    logout()
    navigate({ to: "/login" })
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card transition-transform duration-300 lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex h-16 items-center justify-between border-b border-border px-6">
            <h2 className="font-semibold">{title}</h2>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              const href = `/modules/${moduleId}${item.href}`
              return (
                <Link key={item.label} to={href}>
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Back Button */}
          <div className="border-t border-border p-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-2 bg-transparent"
              onClick={() => navigate({ to: "/" })}
            >
              <ChevronLeft className="h-4 w-4" />
              {t.backToModules}
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 border-b border-border bg-primary text-primary-foreground">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-primary-foreground/10"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-xs text-primary-foreground/70">{description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                <Link to="/">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">{t.home}</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>

      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>
  )
}
