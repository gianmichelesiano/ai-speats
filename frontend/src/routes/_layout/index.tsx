import { createFileRoute } from "@tanstack/react-router"
import { Mail, Building2 } from "lucide-react"

import useAuth from "@/hooks/useAuth"
import { useLanguage } from "@/components/language-provider"
import { ModuleGrid } from "@/components/modules/module-grid"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: "Dashboard - Speats AI",
      },
    ],
  }),
})

function getGreeting(t: ReturnType<typeof useLanguage>["t"]) {
  const hour = new Date().getHours()
  if (hour < 12) return t.goodMorning
  if (hour < 18) return t.goodAfternoon
  return t.goodEvening
}

function Dashboard() {
  const { user: currentUser } = useAuth()
  const { t } = useLanguage()

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          {getGreeting(t)}, {currentUser?.full_name || currentUser?.email?.split("@")[0]}
        </h2>
        <div className="mt-2 flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>{currentUser?.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>Speats Solutions</span>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div>
        <h3 className="mb-6 text-lg font-semibold">{t.myModules}</h3>
        <ModuleGrid />
      </div>
    </div>
  )
}
