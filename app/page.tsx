"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"
import RotatingText from "@/components/rotating-text"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSkillCategory, setActiveSkillCategory] = useState(0)
  // Contact form state
  const [contactEmail, setContactEmail] = useState("")
  const [contactSubject, setContactSubject] = useState("")
  const [contactReason, setContactReason] = useState("")
  const [contactMessage, setContactMessage] = useState("")

  const projects = [
    {
      id: 1,
      title: "Billing Software for Retail Management",
      description: "Python-based billing software using the Tkinter library to streamline retail operations. The software features a user-friendly graphical interface for managing customer details, item categories (medical supplies, groceries, and beverages), and generating itemized bills.",
      tags: ["Python", "Tkinter"],
      image: "/task-management-interface.jpg",
      link: "https://github.com/rituraj981/Billing-Software-for-Retail-Management.git",
    },
    {
      id: 2,
      title: "ETL & Anomaly Detection Pipeline",
      description: "This project consolidates orders, payments, and refunds data, performs ETL cleaning, computes daily metrics, and detects anomalies in e-commerce transactions.",
      tags: ["Python (Openpyxl, JSON, Argparse, Pathlib, Datetime)", "ETL", "OOP", "CLI Development."],
      image: "/ETL codebase.jpg",
      link: "https://github.com/rituraj981/ETL_Anomaly_Detection-using-Python.git",
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience. The site features a clean, modern design with smooth animations and responsive layouts for an optimal viewing experience across devices.",
      tags: ["React", "Tailwind CSS", "Next.js"],
      image: "/My-Portfolio.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "My Portfolio",
      description: "A personal portfolio website built with Google sites to showcase my projects, skills, and experience.",
      tags: ["Google Sites"],
      image: "/My-Portfolio2.jpg",
      link: "https://sites.google.com/view/riturajresume/home",
    },
  ]

  const experience = [
    {
      title: "Data Science intern",
      company: "Viqasys Innovation Pvt. Ltd.",
      duration: "April 2024 - Oct 2024",
      description: "During this internship, gathered, cleaned, and organized data into structured formats using Excel, Power BI, and Python. Stored and managed data in MySQL, wrote Python scripts to extract insights, and created interactive Power BI dashboards. My dedication, accuracy, and professionalism were consistently commendable throughout the internship.",
      link: "#"
    },
    {
      title: "Ai intern",
      company: "Pantech Solutions",
      duration: "Jan 2024",
      description: "Developed a Python-based retail billing software using Tkinter with a user-friendly interface for managing customers, product categories, and automated bill generation. Additionally built a facial recognition model using Python and OpenCV, improving identification accuracy and enhancing secure access control within the organization.",
      link: "#"
    },
    {
      title: "PWC SWITZERLAND POWER BI JOB SIMULATION",
      company: "Forage",
      duration: "Feb 2024",
      description: "Completed a job simulation where I strengthened my PowerBI skills to better understand clients and Demonstrated expertise in data visualization through the creation of Power BI dashboards that effectively conveyed KPIs, showcasing the ability to respond to client requests with well-designed solutions. ",
      link: "#"
    },
  ]

  const skills = [
    {
      category: "Data Analysis",
      items: ["Python", "PowerBI", "Excel", "Sql", "Looker studio", "Analytics"],
      proficiency: 90,
      icon: "🛠️",
    },    
    {
      category: "Frontend and Backend",
      items: ["React", "Tailwind CSS", "Python", "Django", "SQL"],
      proficiency: 60,
      icon: "🎨",
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Docker", "VS Code", "versal"],
      proficiency: 70,
      icon: "⚙️",
    },
    {
      category: "Soft skills",
      items: ["Problem Solving", "Communication", "Teamwork", "Adaptability"],
      proficiency: 90,
      icon: "✨",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RR</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-b border-border">
            <div className="flex flex-col gap-4 px-4 py-4">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Welcome to my Portfolio
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-balance">
                I am Rituraj Pandey
              </h1>
              <RotatingText />

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty max-w-2xl mt-8">
                Passionate about understanding data. Excited about building products. Combining Data Analytics with Full Stack Development to create future-ready solutions.
              </p>
              <div className="flex gap-6 items-center mt-10">
                <a
                  href="https://github.com/rituraj981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 group"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/riturajpandey07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:riturajpandey981@gmail.com"
                  className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 group"
                  aria-label="Email Contact"
                >
                  <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>

                {/* Image container */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-1 overflow-hidden">
                  <div className="rounded-2xl overflow-hidden h-96 bg-card">
                    <img
                      src="/professional-developer-portrait.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl backdrop-blur-sm">
                  <p className="text-sm font-semibold text-primary">3+</p>
                  <p className="text-xs text-muted-foreground">hands-on Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I started my journey in tech with a love for understanding how things work—and that curiosity led me to Data Analytics. I enjoy cleaning messy datasets, solving analytical problems, and creating dashboards that tell clear stories.
                <br />
                Recently, I discovered the joy of building products, so I’m learning Full Stack Development to bring ideas to life. From APIs to UI design, I’m exploring the complete development cycle and loving every part of it.


              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I’m passionate, consistent, and always eager to learn something new every day.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-primary mb-3">Frontend & Backend</h3>
                  <p className="text-muted-foreground">React, Tailwind CSS, Python, Django, PostgreSQL, MongoDB, REST APIs</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Data Analysis</h3>
                  <p className="text-muted-foreground"> SQL, Excel, Power BI, Python (pandas, NumPy, Matplotlib) </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl h-96 overflow-hidden">
              <img src="/developer-workspace.jpg" alt="Developer workspace" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Core Competencies</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A comprehensive toolkit of technologies and methodologies I've mastered to build world-class digital
              experiences.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {skills.map((skillGroup, index) => (
              <button
                key={index}
                onClick={() => setActiveSkillCategory(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeSkillCategory === index
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                <span className="mr-2">{skillGroup.icon}</span>
                {skillGroup.category}
              </button>
            ))}
          </div>

          {/* Skills Grid with Animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-card to-card/50 rounded-xl border border-border backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:border-primary hover:shadow-xl hover:shadow-primary/20 ${
                  activeSkillCategory === index ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {/* Background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>

                  {/* Proficiency Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-bold text-primary">{skillGroup.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: activeSkillCategory === index ? `${skillGroup.proficiency}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-8 bg-card/50 rounded-xl border border-border hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">Curiosity-Driven</div>
              <p className="text-muted-foreground">Exploring Data & Development Daily</p>
            </div>
            <div className="p-8 bg-card/50 rounded-xl border border-border hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">Project-Focused</div>
              <p className="text-muted-foreground">Building Real Applications to Learn Faster</p>
            </div>
            <div className="p-8 bg-card/50 rounded-xl border border-border hover:border-primary transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">Growth-Minded</div>
              <p className="text-muted-foreground">Improving Skills Every Single Day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Selected Work</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              A collection of projects that showcase my experience and expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={project.link}>
                <div className="group cursor-pointer h-full">
                  <div className="relative h-72 overflow-hidden bg-primary/5 rounded-xl mb-6">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium pt-2">
                      View Project <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Form */}
            <div className="bg-background/30 p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold mb-4">Submit a request</h2>
              <p className="text-sm text-muted-foreground mb-6">Please fill out the form and I'll get back to you as soon as possible.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // Basic validation
                  if (!contactEmail || !contactSubject || !contactMessage) {
                    // simple client-side validation - you can enhance with better UX
                    alert("Please complete the required fields: Email, Subject, and Description.")
                    return
                  }

                  const subject = encodeURIComponent(contactSubject)
                  const body = encodeURIComponent(`Reason: ${contactReason || "-"}\n\n${contactMessage}\n\nFrom: ${contactEmail}`)
                  // Opens user's default mail client composing to site owner
                  window.location.href = `mailto:riturajpandey981@gmail.com?subject=${subject}&body=${body}`
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Your email address <span className="text-xs text-muted-foreground">(required)</span></label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Subject <span className="text-xs text-muted-foreground">(required)</span></label>
                  <input
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Short summary"
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">What best describes the reason you're contacting us today? <span className="text-xs text-muted-foreground">(required)</span></label>
                  <select
                    value={contactReason}
                    onChange={(e) => setContactReason(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground"
                  >
                    <option value="">-</option>
                    <option>General Inquiry</option>
                    <option>Project Inquiry</option>
                    <option>Bug Report</option>
                    <option>Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Description <span className="text-xs text-muted-foreground">(required)</span></label>
                  <textarea
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    rows={8}
                    placeholder="Please enter the details of your request. A member of our support staff will respond as soon as possible."
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Request
                  </button>
                  <p className="text-xs text-muted-foreground">We'll reply to the email you provide above.</p>
                </div>
              </form>
            </div>

            {/* Right: Contact summary & socials */}
            <div className="p-8 rounded-xl border border-border bg-gradient-to-br from-card/60 to-card/40">
              <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <a href="mailto:riturajpandey981@gmail.com" className="text-muted-foreground hover:text-primary">riturajpandey981@gmail.com</a>
                </div>

                <div>
                  <h4 className="font-semibold text-primary">Social</h4>
                  <div className="flex gap-4 mt-2">
                    <a href="https://github.com/rituraj981" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/riturajpandey07" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary">Availability</h4>
                  <p className="text-muted-foreground">Open to freelance and full-time opportunities — typically replies within 2 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 Rituraj Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
