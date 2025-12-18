import { Sparkles } from "lucide-react"
import { Appearance } from "@/components/Common/Appearance"
import { Footer } from "./Footer"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-primary relative hidden lg:flex lg:flex-col lg:items-center lg:justify-center gap-6">
        <div className="flex items-center gap-3 text-primary-foreground">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
            <Sparkles className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-bold">Speats AI</h1>
        </div>
        <p className="text-primary-foreground/80 text-lg max-w-sm text-center">
          Your AI-powered modular platform
        </p>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold">Speats AI</span>
          </div>
          <div className="ml-auto">
            <Appearance />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
