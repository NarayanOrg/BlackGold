'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle2 } from 'lucide-react'

const serviceOptions = [
  { value: "accounting-and-tax", label: "Accounting & Tax Services" },
  { value: "financial-modeling", label: "Financial Modeling & Analysis" },
  { value: "capital-raising", label: "Capital Raising & Investment Advisory" },
  { value: "compliance", label: "Compliance & Regulatory Support" },
  { value: "other", label: "Other / Not Sure" },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    fullName: "", company: "", email: "", phone: "", service: "", message: "",
  })

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    // TODO: replace with real submission (API route, Resend, Firestore, etc.)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('submitted')
  }

  if (status === 'submitted') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center rounded-xl border border-border bg-muted/30 p-10"
        role="status"
      >
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-semibold text-foreground">Message sent</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm">
          Thank you for reaching out. A member of our team will get back to you within one business day.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="text-2xl font-semibold text-foreground">Send Us a Message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" type="text" autoComplete="name" required value={formData.fullName} onChange={handleChange('fullName')} placeholder="Kwame Mensah" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" type="text" autoComplete="organization" value={formData.company} onChange={handleChange('company')} placeholder="Your company name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange('email')} placeholder="you@company.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange('phone')} placeholder="+233 00 000 0000" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Required</Label>
        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger id="service" name="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange('message')} placeholder="Tell us about your business and what you need help with." />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </motion.form>
  )
}