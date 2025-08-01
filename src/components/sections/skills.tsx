import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Database, Code } from 'lucide-react';

const skillsData = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Redux'],
  backend: ['Node.js', 'Express', 'Python', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  tools: ['Git & GitHub', 'Docker', 'CI/CD', 'Jest', 'React Testing Library', 'Webpack', 'Figma'],
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">My Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies and tools I am proficient in.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Frontend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.frontend.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <Database className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Backend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.backend.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <Code className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Tools & Methods</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
