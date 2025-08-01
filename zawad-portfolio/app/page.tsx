"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import { useState, useEffect } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Globe,
  Server,
  Zap,
  Trophy,
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react"
import Link from "next/link"


export default function Portfolio() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showStatus1, setShowStatus1] = useState(false)
  const [showStatus2, setShowStatus2] = useState(false)
  const [showStatus3, setShowStatus3] = useState(false)
  const [showStatus4, setShowStatus4] = useState(false)
  const [showStatus5, setShowStatus5] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // Trigger the sequence when component mounts
  useEffect(() => {
    setTimeout(() => setShowTitle(true), 500)
    setTimeout(() => setShowStatus1(true), 1500)
    setTimeout(() => setShowStatus2(true), 2000)
    setTimeout(() => setShowStatus3(true), 2500)
    setTimeout(() => setShowStatus4(true), 3500)
    setTimeout(() => setShowStatus5(true), 4000)
    setTimeout(() => setShowButton(true), 4500)
    setTimeout(() => setShowHint(true), 5000)
  }, [])

  type Project = {
    title: string
    description: string
    longDescription: string
    technologies: string[]
    status: string
    category: string
    links: {
      code: string | null
      demo: string | null
    }
  }

  const projects: Project[] = [
    {
      title: "You Know Ball",
      description: "NBA stock market-style web app where fans can buy and sell virtual shares of their favorite players based on performance. Combines sports analytics with financial trading concepts.",
      longDescription: 
      "Currently developed most of the backend routes for players and users. Next steps are to work on the UI/UX design.",
      technologies: ["REST API", "Express", "Node.js", "TypeScript", "Firebase", "React.js"],
      status: "In Development",
      category: "Full Stack",
      links: {
        code: "https://github.com/zawadsdomain/YouKnowBall",
        demo: null
      }
    },
    {
      title: "Sports Court Mobile App",
      description:
        "Mobile app connecting sports enthusiasts for pickup games. Features real-time game creation, user matching, and location-based discovery.",
      longDescription:
        "Developed backend routes/controllers, constructed PostgreSQL database hosted on NeonDB, designed UI/UX, and implemented frontend using React Native.",
      technologies: ["React Native", "Express", "PostgreSQL", "TypeScript", "Neon DB", "Railway", "Expo"],
      status: "Deployed",
      category: "Mobile",
      links: {
        code: "https://github.com/knika01/sportscourt",
        demo: "https://www.youtube.com/watch?v=fo9J7Y5X6Qg"
      }
    },
    {
      title: "Personal Website",
      description: "Personal website built with Next.js, Tailwind CSS, and TypeScript. It showcases my projects, skills, and experiences.",
      longDescription: 
      "Created the design and implemented the frontend using Next.js, still working to add my own spin to it.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      status: "Deployed",
      category: "Frontend",
      links: {
        code: "https://github.com/zawadsdomain/personal-website/",
        demo: null
      }
    },
    {
      title: "YouTube Bulk Downloader",
      description:
        "Web application for downloading entire YouTube playlists efficiently with batch processing capabilities.",
      longDescription:
        "Built with FastAPI for high-performance API routes and utilized ytmpeg framework for video processing.",
      technologies: ["Python", "FastAPI", "REST API", "ytmpeg"],
      status: "In Development",
      category: "Web App",
      links: {
        code: "https://github.com/zawadsdomain/youtube-playlist-bulk-downloader",
        demo: null
      }
    },
    {
      title: "Search Engine",
      description:
        "Custom search engine processing 1,000+ webpages using tf-idf algorithms and MapReduce for distributed computing.",
      longDescription:
        "Built inverted index with MapReduce partitioning, implemented page ranking algorithms, and created REST API for query processing.",
      technologies: ["Python", "MapReduce", "REST API", "tf-idf"],
      status: "Complete",
      category: "Backend",
      links: {
        code: null,
        demo: null
      }
    },
    {
      title: "Instagram Clone",
      description:
        "Full-stack social media application replicating core Instagram features with modern web technologies.",
      longDescription:
        "Developed all endpoints including user management, photo posting, commenting system using Flask backend and React frontend.",
      technologies: ["Python", "Flask", "React.js", "REST API", "Database"],
      status: "Complete",
      category: "Full Stack",
      links: {
        code: null,
        demo: null
      }
    },
    {
      title: "Artist Search App",
      description:
        "Music discovery web application integrating iTunes API for comprehensive artist and track information.",
      longDescription:
        "Features artist search with track details, album covers, and pricing information using Vue.js and Bootstrap.",
      technologies: ["Vue.js", "Bootstrap", "JavaScript", "iTunes API", "HTML/CSS"],
      status: "Complete",
      category: "Frontend",
      links: {
        code: null,
        demo: null
      }
    }    
  ] 

  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "C++", "C", "Java"],
    Frontend: ["React.js", "Vue.js", "React Native", "Bootstrap", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Flask", "FastAPI", "REST APIs", "Spring Boot"],
    Databases: ["PostgreSQL", "Firebase", "NoSQL", "Neon DB"],
    "Tools & Platforms": ["Git", "Railway", "Expo", "MapReduce", "Vercel"],
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/Zawad_Chowdhury_Resume.pdf'
    link.download = 'Zawad_Chowdhury_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleWelcomeContinue = () => {
    setFadeOut(true)
    setTimeout(() => {
      setShowWelcome(false)
    }, 500) // Wait for fade-out animation to complete
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try{
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          subject: subject,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      console.log('Email sent successfully:', result)
      // clear form fields and set to default values
      setFirstName('')
      setLastName('')
      setEmail('')
      setSubject('')
      setMessage('')

    } catch (error) {
      console.error("Error sending email:", error)

    } finally {
      setIsLoading(false)
    }
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Welcome Screen Overlay */}
      {showWelcome && (
        <div className={`fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center text-white">
            <div className="mb-8">
              <div className={`text-green-400 text-sm font-mono mb-2 transition-opacity duration-500 ${showStatus1 ? 'opacity-100' : 'opacity-0'}`}>SYSTEM: INITIALIZING...</div>
              <div className={`text-green-400 text-sm font-mono mb-2 transition-opacity duration-500 ${showStatus2 ? 'opacity-100' : 'opacity-0'}`}>SECURITY CLEARANCE: PENDING</div>
              <div className={`text-green-400 text-sm font-mono mb-4 transition-opacity duration-500 ${showStatus3 ? 'opacity-100' : 'opacity-0'}`}>ACCESS LEVEL: DOMAIN ENTRY</div>
            </div>
            
            <h1 className={`text-6xl lg:text-8xl font-bold mb-8 animate-pulse transition-opacity duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>W</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '100ms' }}>e</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '200ms' }}>l</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '300ms' }}>c</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '400ms' }}>o</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '500ms' }}>m</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '600ms' }}>e</span>
              <span className="inline-block animate-bounce mx-4" style={{ animationDelay: '700ms' }}> </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '800ms' }}>t</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '900ms' }}>o</span>
              <span className="inline-block animate-bounce mx-4" style={{ animationDelay: '1000ms' }}> </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1100ms' }}>t</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1200ms' }}>h</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1300ms' }}>e</span>
              <span className="inline-block animate-bounce mx-4" style={{ animationDelay: '1400ms' }}> </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1500ms' }}>D</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1600ms' }}>o</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1700ms' }}>m</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1800ms' }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1900ms' }}>i</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '2000ms' }}>n</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '2100ms' }}>.</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '2200ms' }}>.</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '2300ms' }}>.</span>
            </h1>
            
            <div className="mb-6">
              <div className={`text-green-400 text-sm font-mono mb-2 transition-opacity duration-500 ${showStatus4 ? 'opacity-100' : 'opacity-0'}`}>STATUS: ACCESS GRANTED</div>
              <div className={`text-green-400 text-sm font-mono transition-opacity duration-500 ${showStatus5 ? 'opacity-100' : 'opacity-0'}`}>AUTHORIZATION: APPROVED</div>
            </div>
            
            <div className={`transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 transition-all duration-300 hover:scale-105 border-2 border-green-400 shadow-lg shadow-green-500/50 font-mono"
                onClick={handleWelcomeContinue}
              >
                <span className="mr-2">[</span>
                ENTER DOMAIN
                <span className="ml-2">]</span>
              </Button>
            </div>
            
            <div className={`mt-6 text-gray-400 text-xs font-mono transition-opacity duration-500 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
              <div>Press to proceed with clearance...</div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className = "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className = "flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">Zawad&apos;s Domain</div>
          <div className = "hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className = "flex space-x-4">
            <Button variant="outline" size="sm" onClick={handleResumeDownload}>
              <Download className="w-4 h-4 mr-2"/>
              Resume
            </Button>
          </div>
          
          </div>

        </div>
      </nav>


      {/* Hero Section */}

      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                Z
              </div>
            </div>
            <h1 className ="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zawad&apos;s Domain
              </span>
            </h1>
            <p className = "text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Passionate Software Engineer & Recent Graduate from the University of Michigan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="w-5 h-5 mr-2"/>
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="https://github.com/zawadsdomain" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/zawad-chowdhury-b9a706222" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:zawadchowdhury53@gmail.com" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id = "about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className = "text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  University of Michigan Graduate
                </Badge>
              </div>
              <p className = "text-gray-600 mb-8">
                As a new graduate entering the tech industry, I bring fresh perspectives, cutting-edge knowledge, and an
                unwavering enthusiasm for creating innovative solutions. My academic journey has equipped me with a
                solid foundation in computer science principles, and I&apos;m eager to apply these skills to real-world
                scenarios.
              </p>
              <div className = "grid sm:grid-cols-3 gap-6">
                <div className = "text-center p-6 bg-blue-50 rounded-lg">
                <Server className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
                <p className="text-sm text-gray-600">Server-side logic, databases, and API design</p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
                  <p className="text-sm text-gray-600">User interfaces and interactive experiences</p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Full Stack Development</h4>
                  <p className="text-sm text-gray-600">End-to-end web and mobile applications</p>
                </div>

              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className = "flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">Based in Michigan, USA</span>
                </div>
                
                <div className="flex items-center">
                <Trophy className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">8+ Projects Completed</span>
                </div>

                <div className="flex items-center">
                  <Code className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Full Stack Developer</span>
                </div>

                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Computer Science Degree</span>
                </div>
                
              </div>

              <div className = "mt-8 p-4 bg-white rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 font-medium">
                &quot;I&apos;m actively seeking opportunities in backend, frontend, and full-stack roles where I can contribute
                to meaningful projects while continuing to grow and learn from experienced professionals. I&apos;m open to relocation.&quot;
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section id = "projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through diverse projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.status === "In Development" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription className ="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className = "text-sm text-gray-600 mb-4">{project.longDescription}</p>
                  <div className = "flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0,4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {project.links.code ? (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => project.links.code && window.open(project.links.code, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(`mailto:zawadchowdhury53@gmail.com?subject=Request Access: ${project.title}&body=Hi Zawad,%0D%0A%0D%0AI&apos;m interested in viewing the code for your ${project.title} project. Could you please provide access?%0D%0A%0D%0AThanks!`, '_blank')}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Request Access
                      </Button>
                    )}
                    
                    {project.links.demo ? (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => project.links.demo && window.open(project.links.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        disabled
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        No Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Skills Section */}
        
      <section id = "skills" className="py-20 bg-white">
        <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className = "text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className = "text-xl text-gray-600">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key = {index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                  {category === "Languages" && <Code className="w-5 h-5 mr-2 text-blue-600" />}
                    {category === "Frontend" && <Globe className="w-5 h-5 mr-2 text-purple-600" />}
                    {category === "Backend" && <Server className="w-5 h-5 mr-2 text-green-600" />}
                    {category === "Databases" && <Database className="w-5 h-5 mr-2 text-orange-600" />}
                    {category === "Tools & Platforms" && <Zap className="w-5 h-5 mr-2 text-red-600" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key = {skillIndex} variant="secondary" className="hover:bg-blue-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}

      <section id = "contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Ready to build something amazing together?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                I&apos;m actively seeking new opportunities and would love to hear from you. Whether you have a project in
                mind or just want to connect, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-4" />
                  <span className="text-gray-700">zawadchowdhury53@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-4" />
                  <span className="text-gray-700">+1 (586) 354-7867</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-4" />
                  <span className="text-gray-700">Michigan, USA -- Open to Relocation</span> 
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/zawadsdomain', '_blank')}>
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('https://linkedin.com/in/zawad-chowdhury-b9a706222', '_blank')}>
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className = "space-y-4" onSubmit={handleSubmit}>
                  <div className = "grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id = "lastName" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id = "email" type = "email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id = "subject" placeholder="Let's work together..." value={subject} onChange={(e) => setSubject(e.target.value)}/>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      className="min-h-[120px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    <Mail className="w-4 h-4 mr-2" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>




        </div>
      </section>

      {/* Footer Section */}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Zawad&apos;s Domain</div>
            <p className = "text-gray-400 mb-6">Building the future, one line of code at a time.</p>
            <div className="flex justify-center space-x-6 mb-8">
            <Link href="https://github.com/zawadsdomain" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/zawad-chowdhury-b9a706222" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:zawadchowdhury53@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© {new Date().getFullYear()} Zawad. All rights reserved.</p>
            </div>
            
          </div>
        </div>
      </footer>


  </div>
    
  )
  
}