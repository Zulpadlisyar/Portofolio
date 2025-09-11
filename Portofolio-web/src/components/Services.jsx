import React from "react"
import { Card, CardHeader, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Layers } from 'lucide-react';
import { PanelsTopLeft } from 'lucide-react';
import { Database } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { Link } from "react-router-dom";




function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      {/* Section Heading */}
      <div className="text-center mb-12 space-y-4">
        <div> 
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">What i offers</h3>
          <h1 className="text-3xl font-bold">My services</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I am a frontend developer from California, USA with 10 years of
          experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Fullstack Dev */}
        <Card className="text-center p-4">
          <CardHeader>
            <Layers className="mx-auto w-10 h-10 text-primary" />
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="font-bold">Fullstack Dev</h2>
            <p className="text-sm text-muted-foreground">
              Building web applications from frontend to backend with modern
              technologies.
            </p>
            <Link to="/fullstack">
            <Button variant="ghost" className="text-sm">
              Read more →
            </Button>
          </Link>
          </CardContent>
        </Card>

        {/* Frontend Dev */}
        <Card className="text-center p-4">
          <CardHeader>
            <PanelsTopLeft className="mx-auto w-10 h-10 text-primary" />
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="font-bold">Frontend Dev</h2>
            <p className="text-sm text-muted-foreground">
              Crafting responsive, accessible, and high-performing user
              interfaces.
            </p>
            <Link to="/frontend">
            <Button variant="ghost" className="text-sm">
              Read more →
            </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Backend Dev */}
        <Card className="text-center p-4">
          <CardHeader>
            <Database className="mx-auto w-10 h-10 text-primary" />
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="font-bold">Backend Dev</h2>
            <p className="text-sm text-muted-foreground">
              Designing scalable server-side logic and secure APIs.
            </p>
            <Link to="/backend">
            <Button variant="ghost" className="text-sm">
              Read more →
            </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Data Analyst */}
        <Card className="text-center p-4">
          <CardHeader>
            <ChartLine className="mx-auto w-10 h-10 text-primary" />
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="font-bold">Data Analyst</h2>
            <p className="text-sm text-muted-foreground">
              Turning data into actionable insights for smarter decision making.
            </p>
            <Link to="/data-analyst">
            <Button variant="ghost" className="text-sm">
              Read more →
            </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Services
