import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Rocket, Github, Play, ExternalLink } from "lucide-react"

/**
 * Representa um projeto exibido na seção de destaque.
 */
export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image: string
  featured: boolean
  status: string
}

/**
 * Props para o componente {@link FeaturedProjects}.
 */
interface FeaturedProjectsProps {
  /** Lista de projetos a serem exibidos. */
  projects: Project[]
}

/**
 * Renderiza as seções de projetos em destaque e outros projetos.
 */
export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="projetos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Rocket className="h-3 w-3 mr-1" />
            Meus projetos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma seleção dos meus melhores trabalhos, demonstrando habilidades técnicas e criatividade
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">🌟 Projetos em Destaque</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge
                      className={`absolute top-4 right-4 ${
                        project.status === "Concluído"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="h-3 w-3 mr-1" />
                            Código
                          </Link>
                        </Button>
                        <Button size="sm" className="bg-primary/80 hover:bg-primary" asChild>
                          <Link href={project.demo} target="_blank">
                            <Play className="h-3 w-3 mr-1" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">💼 Outros Projetos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge
                        className={`absolute top-2 right-2 text-xs ${
                          project.status === "Concluído"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="mb-2 text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mb-3 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-3 w-3 mr-1" />
                          Código
                        </Link>
                      </Button>
                      <Button size="sm" className="flex-1 text-xs" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
