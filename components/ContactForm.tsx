import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import {
  MessageCircle,
  Mail,
  ArrowRight,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Star,
} from "lucide-react"

/**
 * Formulário de contato com informações e links sociais.
 */
export default function ContactForm() {
  return (
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
                  Estou animado para contribuir com sua equipe e crescer junto com profissionais experientes. Vamos criar algo incrível juntos!
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
  )
}
