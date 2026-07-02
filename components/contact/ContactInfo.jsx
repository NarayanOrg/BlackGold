'use client'
import React from 'react'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const businessHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "By Appointment" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl border border-border bg-muted/30 p-8"
    >
      <h2 className="text-xl font-semibold text-foreground">Office Information</h2>

      <address className="mt-6 space-y-5 not-italic">
        <div className="flex items-start gap-4">
          <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-foreground">Address</p>
            <p className="mt-1 text-sm text-muted-foreground">123 Independence Avenue, Accra, Ghana</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-foreground">Phone</p>
            <p className="mt-1 text-sm text-muted-foreground">
              <a href="tel:+233000000000" className="hover:text-primary">+233 00 000 0000</a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-foreground">Email</p>
            <p className="mt-1 text-sm text-muted-foreground">
              <a href="mailto:hello@blackgoldadvisory.com" className="hover:text-primary">hello@blackgoldadvisory.com</a>
            </p>
          </div>
        </div>
      </address>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center gap-2">
          <Clock className="size-5 text-primary" aria-hidden="true" />
          <h3 className="text-sm font-semibold text-foreground">Business Hours</h3>
        </div>

        <dl className="mt-4 space-y-2">
          {businessHours.map((item) => (
            <div key={item.day} className="flex items-center justify-between text-sm">
              <dt className="text-muted-foreground">{item.day}</dt>
              <dd className="font-medium text-foreground">{item.hours}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  )
}