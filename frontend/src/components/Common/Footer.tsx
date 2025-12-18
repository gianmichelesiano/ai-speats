export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-4 px-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-muted-foreground text-sm">
          Speats AI - {currentYear}
        </p>
        <p className="text-muted-foreground text-xs">
          System Engineered by SPEATS Solutions
        </p>
      </div>
    </footer>
  )
}
