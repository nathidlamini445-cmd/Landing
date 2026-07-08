type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="heading-display mt-3 text-slate-900">{title}</h2>
      {description ? (
        <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 sm:text-[1.0625rem]">{description}</p>
      ) : null}
    </div>
  )
}
