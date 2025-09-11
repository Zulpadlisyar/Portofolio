import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <div className="text-center mb-12 space-y-4">
        <h3 className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
          Connect with me
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold">Get in touch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a question, feedback, or just 
          want to say hi, drop a message below and I’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto grid gap-6 grid-cols-2 p-8 rounded-xl shadow-sm">
        {/* Name */}
        <div className="flex flex-col col-span-2 md:col-span-1">
          <label htmlFor="name" className="mb-2 text-sm font-medium text-muted-foreground">
            Name
          </label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>

        {/* Email */}
        <div className="flex flex-col col-span-2 md:col-span-1">
          <label htmlFor="email" className="mb-2 text-sm font-medium text-muted-foreground">
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        {/* Message */}
        <div className="flex flex-col col-span-2">
          <label htmlFor="message" className="mb-2 text-sm font-medium text-muted-foreground">
            Message
          </label>
          <Textarea id="message" rows="5" placeholder="Write your message..." />
        </div>

        {/* Button */}
        <div className="col-span-2 text-center">
          <Button
            type="submit"
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
          >
            Send Message
          </Button>
        </div>
      </form>
    </section>
  )
}

export default Contact
