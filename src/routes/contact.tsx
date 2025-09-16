import { createFileRoute } from '@tanstack/react-router'
import Contact from "@/pages/contact/contact.tsx";

export const Route = createFileRoute('/contact')({
  component: Contact,
})
