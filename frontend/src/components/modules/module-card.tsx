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
    <Card className="group transition-all hover:shadow-lg">
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
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link to={href}>{t.open}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
