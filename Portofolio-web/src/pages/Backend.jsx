import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";
import { DiDocker } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

function Backend() {
  return (
    <section id="backend" className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
          Role
        </h3>
        <h1 className="text-3xl font-bold mt-2 flex items-center justify-center gap-2">
          <Database className="w-7 h-7 text-primary" /> Backend Developer
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A Backend Developer builds server-side logic, APIs, databases, and
          authentication systems.
        </p>
      </div>

      {/* Tools */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center">
            <FaNodeJs color="#339933" size={48} />{" "}
            <span className="text-sm mt-2">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress color="#000000" size={48} />
            <span className="text-sm mt-2">Express</span>
          </div>
          <div className="flex flex-col items-center">
            <BiLogoPostgresql color="#336791" size={48} />
            <span className="text-sm mt-2">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb color="#47A248" size={48} />
            <span className="text-sm mt-2 ">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <DiDocker color="#2496ED" size={48} />
            <span className="text-sm mt-2">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/src/assets/git.png" alt="Git" className="w-12 h-12" />
            <span className="text-sm mt-2">Git</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Backend Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-api.jpg"
              alt="API"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">REST API Service</h3>
              <p className="text-sm text-muted-foreground mt-2">
                API for mobile/web apps with JWT authentication and role-based
                access.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-chat.jpg"
              alt="Chat Server"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Chat Server</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Real-time chat backend using WebSocket and Redis for scaling.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-payment.jpg"
              alt="Payment System"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Payment System</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Secure payment backend with third-party gateway integration.
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

export default Backend;
