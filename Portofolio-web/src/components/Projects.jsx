import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FaFileCode } from "react-icons/fa";

// Data project
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    desc: "A modern online store with shopping cart, payment gateway, and admin dashboard.",
    // image: "/icons/project1.svg", // optional
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "A responsive personal portfolio showcasing skills, services, and contact form.",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    desc: "Interactive dashboard with data visualization and real-time updates.",
  },
  {
    id: 4,
    title: "Mobile App",
    desc: "Cross-platform mobile app built with React Native and Firebase.",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-12 space-y-4">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
            My portfolio
          </h3>
          <h1 className="text-3xl font-bold">My latest project</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="text-center p-4 hover:shadow-lg transition"
          >
            <CardHeader>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mx-auto w-10 h-10"
                />
              ) : (
                <FaFileCode className="mx-auto w-10 h-10 text-indigo-600" />
              )}
            </CardHeader>
            <CardContent className="space-y-2">
              <h2 className="font-bold">{project.title}</h2>
              <p className="text-sm text-muted-foreground">{project.desc}</p>
              <Button asChild variant="ghost" className="text-sm">
                <Link to={`/projects/${project.id}`}>View project →</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="flex justify-center mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/projectsPage">See all projects →</Link>
        </Button>
      </div>
    </section>
  );
}

export default Projects;
