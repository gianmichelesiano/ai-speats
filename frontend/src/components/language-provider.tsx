import * as React from "react"
import { translations, type Language } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en")

  React.useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "de", "it"].includes(saved)) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }, [])

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language, setLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
