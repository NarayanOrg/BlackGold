'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, MapPin, Clock, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

export default function JobOpeningList({ items = [], onApply }) {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className="flex flex-col divide-y divide-border border-y border-border">
      {items.map((job, i) => {
        const isOpen = openId === job.id
        return (
          <FadeIn key={job.id} delay={100 + i * 75} as="div">
            <div className="py-2">
              <button
                type="button"
                onClick={() => toggle(job.id)}
                aria-expanded={isOpen}
                aria-controls={`job-panel-${job.id}`}
                className="w-full flex items-center justify-between gap-4 py-6 px-2 text-left group cursor-pointer"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
                    {job.department && <span>{job.department}</span>}
                    {job.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    )}
                    {job.type && (
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    )}
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={`job-panel-${job.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-8 pt-1">
                      {job.description && (
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          {job.description}
                        </p>
                      )}

                      {job.responsibilities?.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            What You&apos;ll Do
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {job.responsibilities.map((r) => (
                              <li key={r} className="text-sm text-muted-foreground flex gap-2.5">
                                <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.requirements?.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            What We&apos;re Looking For
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {job.requirements.map((r) => (
                              <li key={r} className="text-sm text-muted-foreground flex gap-2.5">
                                <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => onApply?.(job)}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all cursor-pointer"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        )
      })}
    </div>
  )
}