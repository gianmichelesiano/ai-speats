import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const { t } = useLanguage()

  const handleSend = () => {
    if (message.trim()) {
      console.log("[Speats AI] Chat message:", message)
      setMessage("")
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-[350px] shadow-2xl">
          <div className="flex h-[500px] flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between rounded-t-lg border-b bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold">{t.chat.title}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-primary-foreground/20 text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="rounded-lg bg-muted px-3 py-2 text-sm">{t.chat.greeting}</div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder={t.chat.placeholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">{t.chat.send}</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Chat Bubble Button */}
      <Button
        size="icon"
        className={cn("h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110", isOpen && "hidden")}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
