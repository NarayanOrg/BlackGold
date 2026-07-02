'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"


const nav = [
  {
    label: "Home",
    url: "/",
    categories: false,
  },
  {
    label: "About",
    url: "/about",
    categories: false,
  },
  {
    label: "Services",
    url: "/services",
    categories: true,
    categoriesList: [
      {
        label: "Accounting & Tax",
        url: "/services/accounting-and-tax",
      },
      {
        label: "Financial Modeling",
        url: "/services/financial-modeling",
      },
      {
        label: "Capital Raising",
        url: "/services/capital-raising",
      },
      {
        label: "Compliance",
        url: "/services/compliance",
      },
    ],
  },
  {
    label: "Industries",
    url: "/industries",
    categories: false,
  },
  // {
  //   label: "Insights",
  //   url: "/insights",
  //   categories: false,
  // },
  // {
  //   label: "Case Studies",
  //   url: "/case-studies",
  //   categories: false,
  // },
  {
    label: "Contact",
    url: "/contact",
    categories: false,
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="py-4 px-6 bg-background sticky top-0 z-50 border-b border-border">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" height={50} width={50} alt="BlackGold Advisory logo" />
          <h1 className="text-lg md:text-2xl font-bold flex flex-col md:flex-row leading-tight">
            BLACKGOLD <span className="text-primary md:ml-1.5">ADVISORY</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <NavigationMenu>
            <NavigationMenuList>
              {nav.map((item) =>
                item.categories && item.categoriesList ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-70 gap-1 p-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.url}
                              className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground"
                            >
                              All Services
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {item.categoriesList.map((cat) => (
                          <li key={cat.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={cat.url}
                                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                              >
                                {cat.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.url}
                        className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-1 pt-4">
              {nav.map((item) =>
                item.categories && item.categoriesList ? (
                  <li key={item.label}>
                    <button
                      className="flex w-full items-center justify-between px-3 py-2.5 text-base font-medium hover:bg-primary hover:text-primary-foreground"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-list"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.ul
                          id="mobile-services-list"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden pl-4"
                        >
                          <li>
                            <Link
                              href={item.url}
                              className="block px-3 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              All Services
                            </Link>
                          </li>
                          {item.categoriesList.map((cat) => (
                            <li key={cat.label}>
                              <Link
                                href={cat.url}
                                className="block px-3 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                                onClick={() => setMobileOpen(false)}
                              >
                                {cat.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.url}
                      className="block px-3 py-2.5 text-base font-medium hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Book a Consultation
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}