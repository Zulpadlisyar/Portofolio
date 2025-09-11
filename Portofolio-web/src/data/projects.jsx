// src/data/projects.js
export const projectsData = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    desc: "Platform e-commerce lengkap dengan produk, cart, pembayaran, dan dashboard admin.",
    category: "Fullstack",
    image: "/src/assets/project1.jpg",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Authentication & Authorization",
      "Cart & Checkout",
      "Payment Gateway",
      "Admin Dashboard",
    ],
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    id: "social-media",
    title: "Social Media App",
    desc: "Aplikasi media sosial dengan login, posting, likes, dan komentar.",
    category: "Fullstack",
    image: "/src/assets/project2.jpg",
    tools: ["Next.js", "Prisma", "PostgreSQL"],
    features: [
      "Authentication",
      "Posting & Feed",
      "Like & Comment",
      "Responsive UI",
    ],
    link: "https://github.com/yourusername/social-media",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    desc: "Website pribadi dengan React + Tailwind untuk menampilkan karya & profil.",
    category: "Frontend",
    image: "/src/assets/project3.jpg",
    tools: ["React", "TailwindCSS", "Vite"],
    features: ["Responsive Layout", "Dark Mode", "Animated Components"],
    link: "https://github.com/yourusername/portfolio",
  },
];
