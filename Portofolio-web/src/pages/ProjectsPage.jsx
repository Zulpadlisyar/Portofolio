// src/pages/Projects.jsx
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaFileCode } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    desc: "Fullstack e-commerce app dengan cart, payment, dan dashboard.",
    category: "Fullstack",
  },
  {
    id: 2,
    title: "Social Media App",
    desc: "Platform social media dengan auth, posting, dan komentar.",
    category: "Fullstack",
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Personal website dengan React + Tailwind.",
    category: "Frontend",
  },
  {
    id: 4,
    title: "REST API Backend",
    desc: "API backend dengan Node.js + Express + MongoDB.",
    category: "Backend",
  },
  {
    id: 5,
    title: "Data Dashboard",
    desc: "Dashboard analitik dengan chart dan integrasi API.",
    category: "Data Analyst",
  },
];

function Projects() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Fullstack",
    "Frontend",
    "Backend",
    "Data Analyst",
  ];

  const filteredProjects =
    category === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === category);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
          Portfolio
        </h3>
        <h1 className="text-3xl font-bold mt-2">My Projects</h1>
        <p className="text-muted-foreground mt-3">
          Berikut adalah beberapa project yang sudah saya kerjakan, dibagi
          berdasarkan kategori.
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "default" : "outline"}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden text-center p-6 hover:shadow-lg transition"
          >
            <CardHeader>
              <FaFileCode className="mx-auto w-12 h-12 text-indigo-600" />
            </CardHeader>
            <CardContent className="p-2 space-y-2">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.desc}</p>
              <Button asChild variant="ghost" className="mt-3 text-sm">
                <Link to={`/projects/${project.id}`}>View Details →</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
