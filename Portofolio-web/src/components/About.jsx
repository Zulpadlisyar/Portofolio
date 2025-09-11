import React from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 md:px-8 py-20 scroll-mt-24">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
          Introduction
        </h3>
        <h1 className="text-3xl font-bold mt-2">About me</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="./src/assets/profile.png"
            alt="Profile"
            className="w-72 h-96 object-cover shadow-lg rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am an experienced Frontend Developer and Data Analyst with over a
            decade of professional expertise in the field. Throughout my career,
            I have had the privilege of collaborating with prestigious
            organizations, contributing to their success and growth.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardHeader>
                <img src="./src/assets/code.png" alt="Code icon" className="mx-auto w-10 h-10" />
              </CardHeader>
              <CardContent>
                <h2 className="font-semibold">Languages</h2>
                <p className="text-sm text-muted-foreground">
                  HTML, CSS, JavaScript <br /> React Js, Next Js
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <img src="./src/assets/education.png" alt="Education icon" className="mx-auto w-10 h-10" />
              </CardHeader>
              <CardContent>
                <h2 className="font-semibold">Education</h2>
                <p className="text-sm text-muted-foreground">
                  B.Tech in Computer Science
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <img src="./src/assets/projects.png" alt="Project icon" className="mx-auto w-10 h-10" />
              </CardHeader>
              <CardContent>
                <h2 className="font-semibold">Projects</h2>
                <p className="text-sm text-muted-foreground">
                  Built more than 5 projects
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tools */}
          <div>
            <p className="font-medium mb-4">Tools I use</p>
            <div className="grid grid-cols-5 gap-6">
              <div className="flex flex-col items-center">
                <img src="./src/assets/react.png" alt="React" className="w-12 h-12 mx-auto" />
                <span className="mt-2 text-sm">React</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="./src/assets/tailwind.png" alt="Tailwind" className="w-12 h-12 mx-auto" />
                <span className="mt-2 text-sm">Tailwind</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="./src/assets/python.png" alt="Python" className="w-12 h-12 mx-auto" />
                <span className="mt-2 text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="./src/assets/figma.png" alt="Figma" className="w-12 h-12 mx-auto" />
                <span className="mt-2 text-sm">Figma</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="./src/assets/git.png" alt="Git" className="w-12 h-12 mx-auto" />
                <span className="mt-2 text-sm">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
