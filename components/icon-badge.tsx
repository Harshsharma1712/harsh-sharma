"use client"

import type * as React from "react"

type IconBadgeProps = {
  icon: React.ElementType
  label: string
}

export default function IconBadge({ icon: Icon, label }: IconBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-muted text-muted-foreground border border-border/60 text-sm hover:text-foreground transition-colors"
      aria-label={label}
    >
      <Icon size={16} className="shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </span>
  )
}
