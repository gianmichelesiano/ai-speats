import { ModuleCard } from "./module-card"
import { useLanguage } from "@/components/language-provider"
import {
  MessageSquare,
  Palette,
  Database,
} from "lucide-react"

const moduleConfig = [
  { id: "conversations", icon: MessageSquare, color: "bg-primary", href: "/modules/conversations" },
  { id: "components", icon: Palette, color: "bg-primary", href: "/components" },
  { id: "crud-example", icon: Database, color: "bg-primary", href: "/items" },
] as const

export function ModuleGrid() {
  const { t } = useLanguage()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {moduleConfig.map((module) => {
        const moduleTranslation = t.modules[module.id as keyof typeof t.modules]
        return (
          <ModuleCard
            key={module.id}
            icon={module.icon}
            title={moduleTranslation.title}
            subtitle={moduleTranslation.subtitle}
            description={moduleTranslation.description}
            color={module.color}
            href={module.href}
          />
        )
      })}
    </div>
  )
}
