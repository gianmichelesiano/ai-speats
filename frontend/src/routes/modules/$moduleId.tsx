import { createFileRoute, redirect } from "@tanstack/react-router"
import { ModuleLayout } from "@/components/modules/module-layout"
import { useLanguage } from "@/components/language-provider"
import { isLoggedIn } from "@/hooks/useAuth"

const moduleConfigs = {
  conversations: {
    titleKey: "conversations",
  },
  resources: {
    titleKey: "resources",
  },
  experts: {
    titleKey: "experts",
  },
  "llm-config": {
    titleKey: "llm-config",
  },
  hazard: {
    titleKey: "hazard",
  },
  legal: {
    titleKey: "legal",
  },
  training: {
    titleKey: "training",
  },
  "sms-report": {
    titleKey: "sms-report",
  },
  audit: {
    titleKey: "audit",
  },
  docgen: {
    titleKey: "docgen",
  },
} as const

export const Route = createFileRoute("/modules/$moduleId")({
  component: ModulePage,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
  head: ({ params }) => ({
    meta: [
      {
        title: `${params.moduleId} - Speats AI`,
      },
    ],
  }),
})

function ModulePage() {
  const { moduleId } = Route.useParams()
  const { t } = useLanguage()

  const config = moduleConfigs[moduleId as keyof typeof moduleConfigs]

  if (!config) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Module not found</h1>
          <p className="text-muted-foreground">The requested module does not exist.</p>
        </div>
      </div>
    )
  }

  const moduleTranslation = t.modules[config.titleKey as keyof typeof t.modules]

  return (
    <ModuleLayout
      moduleId={moduleId}
      title={moduleTranslation.title}
      description={moduleTranslation.description}
    >
      {/* Module Dashboard Content */}
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Stats Cards */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="text-sm font-medium text-muted-foreground">Total Activities</div>
            <div className="mt-2 text-3xl font-bold">245</div>
            <p className="mt-2 text-xs text-muted-foreground">+12% from last month</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="text-sm font-medium text-muted-foreground">In Progress</div>
            <div className="mt-2 text-3xl font-bold">23</div>
            <p className="mt-2 text-xs text-muted-foreground">8 completed today</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="text-sm font-medium text-muted-foreground">Completed</div>
            <div className="mt-2 text-3xl font-bold">222</div>
            <p className="mt-2 text-xs text-muted-foreground">90.6% success rate</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg border border-border bg-card">
          <div className="border-b border-border p-6">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
          </div>
          <div className="divide-y divide-border">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between p-6">
                <div>
                  <div className="font-medium">Sample Activity #{item}</div>
                  <div className="text-sm text-muted-foreground">
                    Completed {item} {item === 1 ? "hour" : "hours"} ago
                  </div>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Completed
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
