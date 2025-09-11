import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PanelsTopLeft } from "lucide-react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";

function Frontend() {
  return (
    <section id="frontend" className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
          Role
        </h3>
        <h1 className="text-3xl font-bold mt-2 flex items-center justify-center gap-2">
          <PanelsTopLeft className="w-7 h-7 text-primary" /> Frontend Developer
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A Frontend Developer focuses on building the user interface of web
          applications, ensuring they are responsive, accessible, and visually
          appealing.
        </p>
      </div>

      {/* Tools */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center">
            <FaHtml5 color="#E34F26" size={48} />
            <span className="text-sm mt-2">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt color="#1572B6" size={48} />
            <span className="text-sm mt-2">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript color="#F7DF1E" size={48} />
            <span className="text-sm mt-2">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact color="#61DAFB" size={48} />
            <span className="text-sm mt-2">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss color="#06B6D4" size={48} />
            <span className="text-sm mt-2">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFigma color="#F24E1E" size={48} />
            <span className="text-sm mt-2">Figma</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Frontend Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-portfolio.jpg"
              alt="Portfolio"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Portfolio Website</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Personal portfolio website with animations, responsive layout,
                and interactive UI.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-landing.jpg"
              alt="Landing Page"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Landing Page</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Modern product landing page with clear call-to-actions and
                design system.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-dashboard.jpg"
              alt="Dashboard"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Admin Dashboard</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Interactive analytics dashboard with charts, tables, and
                filters.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Frontend;
