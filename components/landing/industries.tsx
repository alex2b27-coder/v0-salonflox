"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles } from "lucide-react"

const industries = [
  {
    title: "Beauty Salons",
    description: "Full-service hair salons with multiple stylists and services.",
    icon: "💇‍♀️",
  },
  {
    title: "Barbershops",
    description: "Classic and modern barbershops of any size.",
    icon: "💈",
  },
  {
    title: "Nail Studios",
    description: "Manicure, pedicure, and nail art professionals.",
    icon: "💅",
  },
  {
    title: "Lash & Brow Studios",
    description: "Eyelash extensions, brow shaping, and microblading.",
    icon: "👁️",
  },
  {
    title: "Massage Studios",
    description: "Massage therapists and wellness practitioners.",
    icon: "💆",
  },
  {
    title: "Solo Professionals",
    description: "Independent beauty professionals working from home or rented spaces.",
    icon: "✨",
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Industries</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            Built for beauty businesses of all sizes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re a solo professional or manage a team, BookVSFlow scales with you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5" />
            <span className="text-sm">500+ Active Salons</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">50,000+ Bookings Monthly</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
