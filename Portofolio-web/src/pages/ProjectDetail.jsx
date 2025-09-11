// src/pages/ProjectDetail.jsx
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id); // pastikan string

  const location = useLocation();
  const navigate = useNavigate();

  // Tentukan asal halaman
  const from = location.state?.from || "/#projects";

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => navigate(from)}
          >
            ← Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.desc}</p>
      </div>

      {/* Thumbnail */}
      {project.image && (
        <Card className="overflow-hidden mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        </Card>
      )}

      {/* Tools */}
      {project.tools && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Tools & Technologies</h2>
          <div className="flex gap-3 flex-wrap">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-gray-100 text-sm rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      {project.features && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-10">
        <Button variant="outline" onClick={() => navigate(from)}>
          ← Back to Projects
        </Button>
        {project.link && (
          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Code →
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;
