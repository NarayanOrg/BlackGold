import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "who-you-work-with",
    question: "What businesses do you work with?",
    answer:
      "We work with startups, SMEs, established businesses, NGOs, and institutions across multiple industries.",
  },
  {
    id: "startups",
    question: "Do you assist startups?",
    answer:
      "Yes. We help startups with financial planning, accounting systems, business plans, financial models, and investment readiness.",
  },
  {
    id: "investors",
    question: "Do you prepare businesses for investors?",
    answer:
      "Yes. We develop financial models, valuation analyses, investment memoranda, and investor pitch materials.",
  },
  {
    id: "ongoing-advisory",
    question: "Do you provide ongoing advisory services?",
    answer:
      "Yes. We offer both project-based engagements and ongoing advisory support.",
  },
  {
    id: "outside-ghana",
    question: "Can you help businesses outside Ghana?",
    answer:
      "Yes. We serve clients across Africa and internationally through virtual consulting engagements.",
  },
];

export default function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-4"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="rounded-xl border bg-background px-6"
        >
          <AccordionTrigger className="py-5 text-left text-lg font-bold hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-muted-foreground leading-7">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}