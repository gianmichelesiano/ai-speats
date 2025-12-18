import { useState } from "react"
import { createFileRoute, Link, redirect } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { AlertCircle, Bell, Check, ChevronDown, Home, Info, Sparkles, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { isLoggedIn } from "@/hooks/useAuth"

export const Route = createFileRoute("/components")({
  component: ComponentsPage,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
})

function ComponentsPage() {
  const { t } = useLanguage()
  const [progress, setProgress] = useState(33)
  const [sliderValue, setSliderValue] = useState([50])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <h1 className="text-xl font-semibold">Speats AI</h1>
            </div>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary-foreground/10">
                  <Home className="h-4 w-4" />
                  {t.componentsDemo.backToHome}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">{t.componentsDemo.title}</h2>
          <p className="mt-2 text-muted-foreground">{t.componentsDemo.description}</p>
        </div>

        <div className="space-y-8">
          {/* Buttons Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t.componentsDemo.buttons}</CardTitle>
              <CardDescription>{t.componentsDemo.buttonsDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Button disabled>Disabled</Button>
                <Button>
                  <Check className="mr-2 h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Forms Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t.componentsDemo.formElements}</CardTitle>
              <CardDescription>{t.componentsDemo.formElementsDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here" rows={4} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="it">Italy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the terms and conditions
                </Label>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Enable notifications</Label>
                <Switch id="notifications" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit Form</Button>
            </CardFooter>
          </Card>

          {/* Alerts Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t.componentsDemo.alerts}</CardTitle>
              <CardDescription>{t.componentsDemo.alertsDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational alert message.</AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again.</AlertDescription>
              </Alert>

              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    toast({
                      title: "Success",
                      description: "Your changes have been saved successfully.",
                    })
                  }}
                >
                  Show Success Toast
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    toast({
                      variant: "destructive",
                      title: "Error",
                      description: "There was a problem with your request.",
                    })
                  }}
                >
                  Show Error Toast
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dialog & Dropdown Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t.componentsDemo.dialogs}</CardTitle>
              <CardDescription>{t.componentsDemo.dialogsDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Action</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to proceed with this action? This cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsDialogOpen(false)}>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Open Menu
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t.componentsDemo.tabs}</CardTitle>
              <CardDescription>{t.componentsDemo.tabsDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">{t.overview}</TabsTrigger>
                  <TabsTrigger value="analytics">{t.analytics}</TabsTrigger>
                  <TabsTrigger value="reports">{t.reports}</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    This is the overview tab content. Here you can see a summary of all your data.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Analytics tab with detailed metrics and insights about your performance.
                  </p>
                </TabsContent>
                <TabsContent value="reports" className="space-y-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                    Access all your generated reports and historical data here.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Progress & Sliders Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t.componentsDemo.progress}</CardTitle>
              <CardDescription>{t.componentsDemo.progressDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <Label>Progress</Label>
                  <span className="text-muted-foreground">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    -10%
                  </Button>
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    +10%
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <Label>Slider</Label>
                  <span className="text-muted-foreground">{sliderValue[0]}</span>
                </div>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Badges Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t.componentsDemo.badges}</CardTitle>
              <CardDescription>{t.componentsDemo.badgesDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
                <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Cards Showcase */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description text</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is the card content area where you can place any information.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Action
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats Card</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Check className="mr-2 h-4 w-4" />
                  Complete Task
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  )
}
