"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code2,
  Rocket,
  User,
  MessageCircle,
  MapPin,
  Calendar,
  Star,
  Zap,
  ChevronDown,
  Terminal,
  Globe,
  Smartphone,
  Database,
  Cpu,
  Palette,
  GitBranch,
  Menu,
  X,
  ArrowRight,
  Play,
  Award,
  Target,
  Coffee,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com carrinho, pagamentos Stripe, painel admin e sistema de avaliações",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      github: "https://github.com/brunobiapina/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      status: "Concluído",
    },
    {
      id: 2,
      title: "Task Manager Pro",
      description: "Aplicativo avançado de gerenciamento com drag & drop, colaboração em tempo real e relatórios",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Chart.js"],
      github: "https://github.com/brunobiapina/task-manager-pro",
      demo: "https://taskmanager-pro.vercel.app",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      status: "Em desenvolvimento",
    },
    {
      id: 3,
      title: "AI Weather Bot",
      description: "Bot inteligente do Telegram com IA para previsões personalizadas e alertas meteorológicos",
      technologies: ["Python", "OpenAI API", "Telegram API", "FastAPI"],
      github: "https://github.com/brunobiapina/ai-weather-bot",
      demo: "https://t.me/ai_weather_bruno_bot",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      status: "Concluído",
    },
    {
      id: 4,
      title: "DevPortfolio CMS",
      description: "Sistema de gerenciamento de conteúdo para portfólios de desenvolvedores com editor visual",
      technologies: ["Next.js", "Tailwind", "Supabase", "Framer Motion"],
      github: "https://github.com/brunobiapina/devportfolio-cms",
      demo: "https://devportfolio-cms.vercel.app",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      status: "Concluído",
    },
    {
      id: 5,
      title: "CryptoTracker Mobile",
      description: "App mobile para acompanhar criptomoedas com gráficos em tempo real e alertas de preço",
      technologies: ["React Native", "Expo", "Firebase", "CoinGecko API"],
      github: "https://github.com/brunobiapina/crypto-tracker-mobile",
      demo: "https://expo.dev/@bruno/crypto-tracker",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      status: "Em desenvolvimento",
    },
    {
      id: 6,
      title: "Code Snippet Vault",
      description: "Plataforma colaborativa para compartilhar snippets com syntax highlighting e sistema de tags",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/brunobiapina/snippet-vault",
      demo: "https://snippet-vault.vercel.app",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      status: "Concluído",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 92, icon: Terminal, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 88, icon: Code2, color: "from-blue-400 to-blue-600" },
    { name: "React", level: 90, icon: Cpu, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", level: 85, icon: Globe, color: "from-gray-700 to-gray-900" },
    { name: "Node.js", level: 82, icon: Database, color: "from-green-400 to-green-600" },
    { name: "Tailwind CSS", level: 94, icon: Palette, color: "from-teal-400 to-cyan-500" },
    { name: "Git", level: 87, icon: GitBranch, color: "from-orange-400 to-red-500" },
    { name: "React Native", level: 78, icon: Smartphone, color: "from-purple-400 to-pink-500" },
  ]

  const achievements = [
    { title: "10+ Projetos", description: "Desenvolvidos e publicados", icon: Rocket },
    { title: "2 Anos", description: "Estudando programação", icon: Calendar },
    { title: "2 Linguagens", description: "Dominadas atualmente", icon: Code2 },
    { title: "100% Dedicação", description: "Gosto de aprender", icon: Heart },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cursor personalizado */}
      <div
        className="fixed w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Background animado */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Bruno Ibiapina
                </span>
                <p className="text-xs text-muted-foreground">Software Engineer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {["Home", "Sobre", "Projetos", "Habilidades", "Contato"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium hover:text-primary transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-9 w-9 px-0">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mt-3">
            <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20 animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping" />
              Disponível para oportunidades
            </Badge>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {["Home", "Sobre", "Projetos", "Habilidades", "Contato"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            {/* Avatar com efeito */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow" />
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>

            {/* Texto principal */}
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Bruno Ibiapina
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
                <Terminal className="h-6 w-6 text-primary" />
                <span>Desenvolvedor Full Stack</span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transformando <span className="text-primary font-semibold">ideias</span> em
                <span className="text-primary font-semibold"> código</span>. Estudante apaixonado por criar
                soluções inovadoras que fazem a diferença.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 bg-muted/30 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <achievement.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold text-primary">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Baixar Currículo
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 group">
                <Rocket className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Ver Projetos
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <User className="h-3 w-3 mr-1" />
              Sobre mim
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Desenvolvedor <span className="text-primary"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">Minha Missão</h3>
                        <p className="text-sm text-muted-foreground">Criar impacto através da tecnologia</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Sou estudante de{" "}
                      <span className="text-primary font-semibold">Engenharia de Software no ICEV</span>, transformar ideias complexas em soluções digitais e funcionais.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">Experiência</h3>
                        <p className="text-sm text-muted-foreground">Projetos reais</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Já desenvolvi{" "}
                      <span className="text-primary font-semibold">
                        sites responsivos e bots inteligentes
                      </span>
                      . Cada projeto é uma oportunidade de aprender e crescer como desenvolvedor.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">Objetivo</h3>
                        <p className="text-sm text-muted-foreground">Crescimento profissional</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Busco uma{" "}
                      <span className="text-primary font-semibold">oportunidade de estágio ou posição júnior</span>
                      onde possa contribuir com tecnologia e continuar evoluindo.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Informações pessoais */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Informações Pessoais</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Localização</p>
                          <p className="text-sm text-muted-foreground">Teresina/Pi</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Disponibilidade</p>
                          <p className="text-sm text-muted-foreground">Imediata para estágio</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <Coffee className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Trabalho</p>
                          <p className="text-sm text-muted-foreground">Código e aprendizado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Projetos</div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">2</div>
                      <div className="text-sm text-muted-foreground">Anos de estudo</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                      <CardDescription className="mb-4 text-sm leading-relaxed">{project.description}</CardDescription>
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

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="h-3 w-3 mr-1" />
              Habilidades técnicas
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnologias que <span className="text-primary">Domino</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ferramentas e linguagens que uso para criar soluções incríveis
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-lg">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <MessageCircle className="h-3 w-3 mr-1" />
              Entre em contato
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos <span className="text-primary">Conversar</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Estou sempre aberto a novas oportunidades e projetos interessantes
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  Envie uma mensagem
                </CardTitle>
                <CardDescription>Preencha o formulário e entrarei em contato em breve</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome completo</label>
                    <Input placeholder="Seu nome" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Assunto</label>
                  <Input placeholder="Assunto da mensagem" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Conte-me sobre sua oportunidade ou projeto..."
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Mail className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                  Enviar Mensagem
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    Informações de Contato
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">brunoibiapina@me.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-sm text-muted-foreground">+55 (86) 999224515</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Localização</p>
                        <p className="text-sm text-muted-foreground">Teresina/Pi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    Redes Sociais
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-16 flex-col gap-2 hover:bg-primary/10 hover:border-primary/30 group"
                      asChild
                    >
                      <Link href="https://github.com/BrunoIbiapina" target="_blank">
                        <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">GitHub</span>
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex-col gap-2 hover:bg-primary/10 hover:border-primary/30 group"
                      asChild
                    >
                      <Link href="https://www.linkedin.com/in/bruno-ibiapina-b55aa2116/" target="_blank">
                        <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">LinkedIn</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Pronto para Começar!</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Estou animado para contribuir com sua equipe e crescer junto com profissionais experientes. Vamos
                    criar algo incrível juntos!
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Disponível para oportunidades</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Bruno Ibiapina
                </span>
                <p className="text-xs text-muted-foreground">Desenvolvedor Full Stack</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                © 2025 Bruno Ibiapina. Feito usando Next.js e Tailwind CSS.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button size="sm" variant="ghost" asChild>
                <Link href="https://github.com/BrunoIbiapina" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <Link href="https://www.linkedin.com/in/bruno-ibiapina-b55aa2116/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
