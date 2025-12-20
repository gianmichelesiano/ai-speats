import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModuleCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  color: string
  href: string
}

export function ModuleCard({ icon: Icon, title, subtitle, description, color, href }: ModuleCardProps) {
  const { t } = useLanguage()

  return (
    <Card className={cn(
      "group transition-all",
      // Dark mode styles
      "dark:bg-[#1a1625] dark:border-[rgba(99,102,241,0.2)]",
      "dark:hover:border-[rgba(139,92,246,0.4)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]",
      // Light mode styles
      "bg-white border-[rgba(99,102,241,0.15)] shadow-[0_1px_3px_rgba(99,102,241,0.08)]",
      "hover:border-[rgba(99,102,241,0.3)] hover:shadow-[0_4px_12px_rgba(99,102,241,0.12)]"
    )}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white", color)}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-xs">{subtitle}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant="outline" 
          className={cn(
            "w-full transition-all",
            // Dark mode button styles
            "dark:bg-transparent dark:border-[rgba(99,102,241,0.4)] dark:hover:bg-[rgba(99,102,241,0.15)] dark:hover:border-[#6366F1]",
            // Light mode button styles
            "bg-[#6366F1] text-white border-[#6366F1] hover:bg-[#4f46e5] hover:border-[#4f46e5]"
          )}
        >
          <Link to={href}>{t.open}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
