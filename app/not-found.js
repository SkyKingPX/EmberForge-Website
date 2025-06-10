'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  // Verhindere Hydration-Fehler
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header
          className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur theme-transition mb-8">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl text-primary">EmberForge</Link>
          </div>
          <ThemeToggle/>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 4, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative mx-auto"
          >
            <h1 className="text-9xl font-bold text-primary">404</h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2 text-primary">Page not found</h1>
            <p className="text-muted-foreground mb-6">
              The requested page could not be found. It may have been removed, renamed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.history.back()} 
                variant="outline" 
                className="gap-2 hover-lift"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Link href="/">
                <Button className="gap-2 bg-primary hover:bg-primary/90 hover-lift w-full">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-6 border-t border-border/40">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EmberForge Development | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}