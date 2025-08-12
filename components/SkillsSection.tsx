import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { LucideIcon, Zap } from "lucide-react"

/**
 * Representa uma habilidade exibida com nome, nível e ícone.
 */
export interface Skill {
  name: string
  level: number
  icon: LucideIcon
  color: string
}

/**
 * Propriedades do componente {@link SkillsSection}.
 */
interface SkillsSectionProps {
  /** Lista de habilidades a serem exibidas. */
  skills: Skill[]
}

/**
 * Exibe um grid de habilidades com barra de progresso para cada tecnologia.
 */
export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
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
            {skills.map((skill) => (
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
  )
}
