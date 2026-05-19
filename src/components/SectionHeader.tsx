import React from "react";

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}: { 
  title: React.ReactNode; 
  subtitle?: React.ReactNode; 
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-6 ${centered ? 'text-center' : 'text-left'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      <h2 className={`mb-3 text-4xl text-slate-900 md:text-4xl font-headline ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-white/80' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-secondary mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
