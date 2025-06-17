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
  
    
  )
  
}