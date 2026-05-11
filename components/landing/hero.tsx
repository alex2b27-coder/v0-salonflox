"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Telegram-First Automation Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-foreground text-balance"
          >
            BookVSFlow — salon booking on autopilot
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Automate bookings, clients, reminders, payments and reports directly inside Telegram.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/salon-questionnaire">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="https://t.me/bookvsflow_bot" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 w-4 h-4" />
                Open Telegram Bot
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "500+", label: "Active Salons" },
              { value: "50K+", label: "Bookings Monthly" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-2xl shadow-foreground/5 border border-border overflow-hidden">
              {/* Mock Dashboard UI */}
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                  <div className="w-3 h-3 rounded-full bg-chart-2/50" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-background rounded-md text-xs text-muted-foreground">
                    t.me/bookvsflow_bot
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Today&apos;s Schedule */}
                  <div className="bg-background rounded-xl p-5 border border-border">
                    <h3 className="font-semibold text-sm text-foreground mb-4">{"Today's Schedule"}</h3>
                    <div className="space-y-3">
                      {[
                        { time: "10:00", client: "Emma S.", service: "Haircut" },
                        { time: "11:30", client: "John D.", service: "Beard Trim" },
                        { time: "14:00", client: "Maria K.", service: "Color" },
                      ].map((appointment, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                          <span className="text-xs font-medium text-accent">{appointment.time}</span>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">{appointment.client}</div>
                            <div className="text-xs text-muted-foreground">{appointment.service}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="bg-background rounded-xl p-5 border border-border">
                    <h3 className="font-semibold text-sm text-foreground mb-4">Today&apos;s Overview</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Bookings</span>
                          <span className="font-semibold text-foreground">12/15</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-4/5 bg-accent rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Revenue</span>
                          <span className="font-semibold text-foreground">$1,240</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-3/5 bg-chart-2 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">New Clients</span>
                          <span className="font-semibold text-foreground">4</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-2/5 bg-chart-4 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-background rounded-xl p-5 border border-border">
                    <h3 className="font-semibold text-sm text-foreground mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        { icon: "📅", text: "New booking confirmed", time: "2m ago" },
                        { icon: "💬", text: "Reminder sent to Emma", time: "15m ago" },
                        { icon: "💳", text: "Payment received", time: "1h ago" },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="text-lg">{activity.icon}</span>
                          <div className="flex-1">
                            <div className="text-sm text-foreground">{activity.text}</div>
                            <div className="text-xs text-muted-foreground">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
