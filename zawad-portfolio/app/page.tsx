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
      









  </div>
    
  )
  
}