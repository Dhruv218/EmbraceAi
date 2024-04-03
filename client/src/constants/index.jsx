import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const URL='https://embraceai.onrender.com/api'

export const navItems = [
  { label: "Datasets", href: "" },
  { label: "Profile", href: "" },
 
];

export const testimonials = [
  {
    user: "Amanda Patel",
    company: "Data Science Enthusiast",
    image: user1,
    text: "Hugging Face has been an invaluable resource for my AI projects. The models and datasets provided are top-notch, and the community support is fantastic. Highly recommended!",
  },
  {
    user: "Mohammed Khan",
    company: "AI Researcher",
    image: user2,
    text: "I've been using Hugging Face for my research projects, and I'm impressed by the quality and variety of models available. The platform's ease of use and collaborative features make it a must-have for any AI enthusiast.",
  },
  {
    user: "Anna Chen",
    company: "Machine Learning Engineer",
    image: user3,
    text: "Hugging Face has revolutionized the way I approach AI development. The pre-trained models and fine-tuning capabilities have saved me countless hours of work, allowing me to focus on innovation and experimentation.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Extensive Datasets",
    description:
      "Access a vast library of high-quality datasets covering various domains, ready to fuel your AI projects.",
  },
  {
    icon: <Fingerprint />,
    text: "State-of-the-Art Models",
    description:
      "Explore and utilize cutting-edge AI models for tasks such as natural language processing, computer vision, and more.",
  },
  {
    icon: <ShieldHalf />,
    text: "Model Fine-Tuning",
    description:
      "Fine-tune pre-trained models to adapt them to your specific use cases and data, empowering your AI applications.",
  },
  {
    icon: <BatteryCharging />,
    text: "Interactive Playground",
    description:
      "Experiment with models and datasets in real-time through an interactive playground, fostering innovation and exploration.",
  },
  {
    icon: <PlugZap />,
    text: "Community Collaboration",
    description:
      "Engage with a vibrant community of developers, researchers, and enthusiasts to collaborate and share insights.",
  },
  {
    icon: <GlobeLock />,
    text: "Secure and Private",
    description:
      "Ensure data privacy and security with built-in safeguards and encryption mechanisms for your AI projects.",
  },
];


export const checklistItems = [
  {
    title: "Effortless Model Deployment",
    description:
      "Deploy AI models seamlessly and efficiently, making them accessible to users worldwide.",
  },
  {
    title: "Streamlined Model Review Process",
    description:
      "Easily review and evaluate AI models with comprehensive tools and workflows, ensuring high quality and reliability.",
  },
  {
    title: "AI Assistance for Rapid Development",
    description:
      "Leverage AI-powered tools and assistance to accelerate the development process and reduce time-to-market for your projects.",
  },
  {
    title: "Collaborative Workspace",
    description:
      "Collaborate with team members and share work effortlessly, facilitating teamwork and innovation.",
  },
];


export const pricingOptions = [
  {
    title: "Starter",
    price: "Free",
    features: [
      "Access to Basic Models",
      "Limited Datasets",
      "Community Support",
      "Limited Usage",
    ],
  },
  {
    title: "Pro",
    price: "$99",
    features: [
      "Access to Advanced Models",
      "Expanded Datasets",
      "Priority Support",
      "Unlimited Usage",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom Quote",
    features: [
      "Custom Model Development",
      "Bespoke Datasets",
      "Dedicated Account Manager",
    ],
  },
];

export const resourcesLinks = [
  { href: "", text: "Getting Started" },
  { href: "", text: "Documentation" },
  { href: "", text: "Tutorials" },
  { href: "", text: "API Reference" },
  { href: "", text: "Community Forums" },
];

export const platformLinks = [
  { href: "", text: "Features" },
  { href: "", text: "Supported Devices" },
  { href: "", text: "System Requirements" },
  { href: "", text: "Downloads" },
  { href: "", text: "Release Notes" },
];

export const communityLinks = [
  { href: "", text: "Events" },
  { href: "", text: "Meetups" },
  { href: "", text: "Conferences" },
  { href: "", text: "Hackathons" },
  { href: "", text: "Jobs" },
];
