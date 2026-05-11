"use client"

import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "white" | "dark"
}

const sizes = {
  sm: { icon: "w-8 h-8", text: "text-lg" },
  md: { icon: "w-10 h-10", text: "text-xl" },
  lg: { icon: "w-12 h-12", text: "text-2xl" },
  xl: { icon: "w-16 h-16", text: "text-3xl" },
}

export function Logo({ 
  className, 
  showText = true, 
  size = "md",
  variant = "default"
}: LogoProps) {
  const sizeConfig = sizes[size]
  
  // Color configuration based on variant
  const colors = {
    default: {
      black: "#1a1a1a",
      gold: "#C9A962",
      text: "text-foreground"
    },
    white: {
      black: "#ffffff",
      gold: "#C9A962",
      text: "text-white"
    },
    dark: {
      black: "#1a1a1a",
      gold: "#C9A962",
      text: "text-charcoal"
    }
  }
  
  const colorConfig = colors[variant]

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* BookVSFlow Logo - Stylized B with flow elements */}
      <svg 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={sizeConfig.icon}
      >
        {/* Main B shape - black part */}
        <path 
          d="M8 6h18c5.5 0 10 4.5 10 10 0 3.5-1.8 6.5-4.5 8.2 3.8 1.5 6.5 5.2 6.5 9.8 0 5.5-4.5 10-10 10H8V6z" 
          fill={colorConfig.black}
        />
        {/* Inner cutout for B */}
        <path 
          d="M14 12h10c2.2 0 4 1.8 4 4s-1.8 4-4 4H14V12z" 
          fill={variant === "white" ? "#1a1a1a" : "#f5f5f0"}
        />
        <path 
          d="M14 26h12c2.2 0 4 1.8 4 4s-1.8 4-4 4H14V26z" 
          fill={variant === "white" ? "#1a1a1a" : "#f5f5f0"}
        />
        {/* Gold accent - flow arrow */}
        <path 
          d="M32 24l8-6v4h4v4h-4v4l-8-6z" 
          fill={colorConfig.gold}
        />
        {/* Gold underline accent */}
        <path 
          d="M8 42h28" 
          stroke={colorConfig.gold}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      
      {showText && (
        <span className={cn("font-semibold tracking-tight", sizeConfig.text, colorConfig.text)}>
          BookVSFlow
        </span>
      )}
    </div>
  )
}

// Simplified icon-only version for smaller contexts
export function LogoIcon({ 
  className,
  variant = "default"
}: { 
  className?: string
  variant?: "default" | "white" | "dark"
}) {
  const colors = {
    default: { black: "#1a1a1a", gold: "#C9A962", bg: "#f5f5f0" },
    white: { black: "#ffffff", gold: "#C9A962", bg: "#1a1a1a" },
    dark: { black: "#1a1a1a", gold: "#C9A962", bg: "#f5f5f0" }
  }
  
  const colorConfig = colors[variant]

  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M8 6h18c5.5 0 10 4.5 10 10 0 3.5-1.8 6.5-4.5 8.2 3.8 1.5 6.5 5.2 6.5 9.8 0 5.5-4.5 10-10 10H8V6z" 
        fill={colorConfig.black}
      />
      <path 
        d="M14 12h10c2.2 0 4 1.8 4 4s-1.8 4-4 4H14V12z" 
        fill={colorConfig.bg}
      />
      <path 
        d="M14 26h12c2.2 0 4 1.8 4 4s-1.8 4-4 4H14V26z" 
        fill={colorConfig.bg}
      />
      <path 
        d="M32 24l8-6v4h4v4h-4v4l-8-6z" 
        fill={colorConfig.gold}
      />
      <path 
        d="M8 42h28" 
        stroke={colorConfig.gold}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
