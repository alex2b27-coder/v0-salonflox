"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "@/components/brand/logo"
import { ArrowRight, Scissors, Sparkles, Calendar, Clock, Settings } from "lucide-react"

const industries = [
  { icon: Scissors, label: "Barbershops\n& Hair Salons" },
  { icon: Sparkles, label: "Beauty &\nMakeup" },
  { icon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 3c.5 0 1 .2 1.4.6l.6.6c.3.3.7.5 1.1.5h.9c.6 0 1.1.2 1.5.6.4.4.6.9.6 1.5v.9c0 .4.2.8.5 1.1l.6.6c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-.6.6c-.3.3-.5.7-.5 1.1v.9c0 .6-.2 1.1-.6 1.5-.4.4-.9.6-1.5.6h-.9c-.4 0-.8.2-1.1.5l-.6.6c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6l-.6-.6c-.3-.3-.7-.5-1.1-.5h-.9c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5v-.9c0-.4-.2-.8-.5-1.1l-.6-.6c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l.6-.6c.3-.3.5-.7.5-1.1v-.9c0-.6.2-1.1.6-1.5.4-.4.9-.6 1.5-.6h.9c.4 0 .8-.2 1.1-.5l.6-.6c.4-.4.9-.6 1.4-.6z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ), label: "Massage &\nWellness" },
  { icon: Calendar, label: "Online Booking\n24/7" },
  { icon: Settings, label: "Tailored\nSettings" },
]

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]">
          <LogoIcon className="w-full h-full" variant="dark" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo and Brand */}
            <div className="flex items-center gap-4 mb-8">
              <LogoIcon className="w-14 h-14 sm:w-16 sm:h-16" />
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">BookVSFlow</span>
            </div>

            {/* Tagline */}
            <h1 className="text-xl sm:text-2xl text-foreground mb-2">
              <span className="text-accent font-medium">All-in-one booking solution</span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-8 text-balance">
              for any type of service business
            </p>

            {/* Industries Icons */}
            <div className="flex flex-wrap items-start gap-6 mb-8 pb-8 border-b border-border">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="flex flex-col items-center text-center w-[72px]"
                >
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center mb-2 text-accent">
                    <industry.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-pre-line leading-tight">{industry.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-foreground"
            >
              More bookings. Fewer no-shows. <span className="text-accent font-medium">Smarter business.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/salon-questionnaire">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent/10">
                <Link href="https://t.me/bookvsflow" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Business Card Style Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Card Container */}
            <div className="relative bg-card rounded-xl shadow-2xl shadow-foreground/5 border border-border overflow-hidden p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                  <LogoIcon className="w-12 h-12" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">BookVSFlow</h3>
                    <p className="text-sm text-muted-foreground">Smart Booking System<br/>for Service Professionals</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-accent">
                      <circle cx="12" cy="8" r="4"/>
                      <path d="M20 21a8 8 0 10-16 0"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Vadym Shliapin</p>
                    <p className="text-xs text-muted-foreground">Founder</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-accent">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </div>
                  <span className="text-foreground">@bookvsflow</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-accent">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <span className="text-foreground">bookvsflow@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-accent">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <span className="text-foreground">bookvsflow.com</span>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-16 h-16 bg-foreground rounded flex items-center justify-center relative">
                    <div className="absolute inset-0.5 bg-card rounded-sm grid grid-cols-5 gap-px p-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-foreground' : 'bg-transparent'}`} />
                      ))}
                    </div>
                    {/* Gold corners */}
                    <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent" />
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent" />
                    <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent" />
                  </div>
                  <div>
                    <div className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center mb-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-accent">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-foreground">bookvsflow.com</p>
                    <p className="text-xs text-muted-foreground">Learn more here</p>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-16 h-16 bg-foreground rounded flex items-center justify-center relative">
                    <div className="absolute inset-0.5 bg-card rounded-sm grid grid-cols-5 gap-px p-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-foreground' : 'bg-transparent'}`} />
                      ))}
                    </div>
                    {/* Gold corners */}
                    <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent" />
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent" />
                    <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent" />
                  </div>
                  <div>
                    <div className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center mb-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-accent">
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M7 7h.01M7 12h.01M12 7h.01M12 12h.01M17 7h.01M17 12h.01M7 17h.01M12 17h.01"/>
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-foreground">Try Demo</p>
                    <p className="text-xs text-muted-foreground">Fill out the form<br/>and get access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative large B in background */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-[0.03] pointer-events-none">
              <LogoIcon className="w-full h-full" variant="dark" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
