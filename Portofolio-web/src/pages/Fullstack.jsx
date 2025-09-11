import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Database, Monitor, Code2 } from "lucide-react";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

function Fullstack() {
  return (
    <section id="fullstack" className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
          Role
        </h3>
        <h1 className="text-3xl font-bold mt-2 flex items-center justify-center gap-2">
          <Layers className="w-7 h-7 text-primary" /> Fullstack Developer
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A Fullstack Developer is responsible for building both the frontend
          and backend of web applications. They work with databases, servers,
          APIs, and user interfaces to deliver complete digital solutions.
        </p>
      </div>

      {/* Tools */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/react.png"
              alt="React"
              className="w-12 h-12"
            />
            <span className="text-sm mt-2">React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs color="#339933" size={48} />
            <span className="text-sm mt-2">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress color="#000000" size={48} />
            <span className="text-sm mt-2">Express</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb color="#47A248" size={48} />
            <span className="text-sm mt-2">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <BiLogoPostgresql color="#336791" size={48} />
            <span className="text-sm mt-2">Postgres</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/src/assets/git.png" alt="Git" className="w-12 h-12" />
            <span className="text-sm mt-2">Git</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Fullstack Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project1.jpg"
              alt="Project 1"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">E-Commerce Platform</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Built a complete e-commerce app with product listing, cart,
                payments, and admin dashboard using MERN stack.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project2.jpg"
              alt="Project 2"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Social Media App</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Developed a social media platform with authentication, posting,
                likes, and comments using Next.js + Prisma.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project3.jpg"
              alt="Project 3"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Data Dashboard</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Built a data visualization dashboard with charts,
                authentication, and API integration using React + Node.js.
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

export default Fullstack;
