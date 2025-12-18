import { ModuleCard } from "./module-card"
import { useLanguage } from "@/components/language-provider"
import {
  MessageSquare,
  FileText,
  Users,
  Settings,
  AlertTriangle,
  Scale,
  GraduationCap,
  BarChart3,
  ClipboardCheck,
  FileCode,
  Palette,
} from "lucide-react"

const moduleConfig = [
  { id: "conversations", icon: MessageSquare, color: "bg-primary", href: "/modules/conversations" },
  { id: "resources", icon: FileText, color: "bg-secondary text-secondary-foreground", href: "/modules/resources" },
  { id: "experts", icon: Users, color: "bg-primary", href: "/modules/experts" },
  { id: "llm-config", icon: Settings, color: "bg-accent text-accent-foreground", href: "/modules/llm-config" },
  { id: "hazard", icon: AlertTriangle, color: "bg-primary", href: "/modules/hazard" },
  { id: "legal", icon: Scale, color: "bg-secondary text-secondary-foreground", href: "/modules/legal" },
  { id: "training", icon: GraduationCap, color: "bg-accent text-accent-foreground", href: "/modules/training" },
  { id: "sms-report", icon: BarChart3, color: "bg-primary", href: "/modules/sms-report" },
  { id: "audit", icon: ClipboardCheck, color: "bg-secondary text-secondary-foreground", href: "/modules/audit" },
  { id: "docgen", icon: FileCode, color: "bg-accent text-accent-foreground", href: "/modules/docgen" },
  { id: "components", icon: Palette, color: "bg-primary", href: "/components" },
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
