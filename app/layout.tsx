import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'BookVSFlow — Salon Booking on Autopilot',
  description: 'Automate bookings, clients, reminders, payments and reports directly inside Telegram. The Telegram-first salon automation platform for beauty businesses.',
  keywords: ['salon booking', 'telegram bot', 'beauty salon', 'appointment scheduling', 'salon management', 'barbershop', 'nail studio'],
  authors: [{ name: 'BookVSFlow' }],
  openGraph: {
    title: 'BookVSFlow — Salon Booking on Autopilot',
    description: 'Automate bookings, clients, reminders, payments and reports directly inside Telegram.',
    url: 'https://bookvsflow.com',
    siteName: 'BookVSFlow',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookVSFlow — Salon Booking on Autopilot',
    description: 'Automate bookings, clients, reminders, payments and reports directly inside Telegram.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#f8f7f4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
