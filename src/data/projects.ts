import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "SaaS Billing & Accounting Platform",
    description: "Multi-tenant SaaS platform with subscription management, inventory control, invoicing, payroll, and financial reporting with Stripe integration and Google 2FA.",
    tech: ["PHP", "Laravel", "Livewire", "Bootstrap", "PostgreSQL", "Stripe"],
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    link: "https://billingapiv2.digitalmatty.com.au"
  },
  {
    title: "Coding Course Platform",
    description: "Responsive coding course platform with secure authentication, email-based 2FA, payment integration (Razorpay, UPI, Card), live class scheduling, and profile management.",
    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "Razorpay", "Cloudinary"],
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    link: "https://coding-course-platform.onrender.com/"
  },
  {
    title: "Religious Service Booking Platform",
    description: "Dual-role platform with real-time chat, referral system, secure login, and comprehensive booking management for religious services.",
    tech: ["Node.js", "Express.js", "React", "MongoDB", "Socket.io"],
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
    link: "https://www.livesharmaji.com"
  },
  {
    title: "Tutor-Student Management Platform",
    description: "Education management system with REST APIs supporting class creation, subject management, student enrollment, and automated test-series workflows with Swagger documentation.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Swagger", "REST API"],
    image: "bg-gradient-to-br from-orange-500 to-red-500",
    link: "https://apiprod.pathshalaa.in/api/documentation"
  }
];
