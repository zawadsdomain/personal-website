import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  const projects = [
    {
      title: "You Know Ball",
      description: "NBA stock market-style web app where fans can buy and sell virtual shares of their favorite players based on performance. Combines sports analytics with financial trading concepts.",
      longDescription: 
      "Currently developed most of the backend routes for players and users. Next steps are to work on the UI/UX design.",
      technologies: ["REST API", "Express", "Node.js", "TypeScript", "Firebase", "React.js"],
      status: "In Development",
      category: "Full Stack",
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
    }    
  ] 

  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "C++", "C", "Java"],
    Frontend: ["React.js", "Vue.js", "React Native", "Bootstrap", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Flask", "FastAPI", "REST APIs"],
    Databases: ["PostgreSQL", "Firebase", "NoSQL", "Neon DB"],
    "Tools & Platforms": ["Git", "Railway", "Expo", "MapReduce", "Vercel"],
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className = "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className = "flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">Zawad's Domain</div>
          <div className = "hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className = "flex space-x-4">
            <Button variant="outline" size="sm">
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
                Zawad's Domain
              </span>
            </h1>
            <p className = "text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Passionate Software Engineer & Recent Graduate from the University of Michigan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="bg-blue-600 hover:bg-blue-700"/>
                Get In Touch
              </Button>
              <Button size = "lg" variant="outline">
              <Github className="w-5 h-5 mr-2" />
              View Projects
              </Button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
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
                solid foundation in computer science principles, and I'm eager to apply these skills to real-world
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
                "I'm actively seeking opportunities in backend, frontend, and full-stack roles where I can contribute
                to meaningful projects while continuing to grow and learn from experienced professionals. I'm open to relocation."
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
                  <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Ready to build something amazing together?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
              I'm actively seeking new opportunities and would love to hear from you. Whether you have a project in
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
                <Button variant="outline" size="lg">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className = "space-y-4">
                  <div className = "grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id = "lastName" placeholder="Doe"/>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id = "email" type = "email" placeholder="john@example.com"/>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id = "subject" placeholder="Let's work together..."/>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>




        </div>
      </section>


  </div>
    
  )
  
}