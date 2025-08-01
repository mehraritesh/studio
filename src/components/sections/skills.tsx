import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Database, Code } from 'lucide-react';

const skillsData = {
  languages: ['JavaScript', 'HTML', 'CSS'],
  frameworks: ['React Native CLI', 'Expo', 'React.js', 'Redux Toolkit', 'WebSocket.io'],
  platforms: ['Android (Java/Kotlin)', 'iOS', 'Web'],
  tools: ['Git & GitHub', 'Jenkins', 'TestFlight', 'App Store', 'Google Play Store', 'ChatGPT', 'GitHub Copilot', 'Cursor.AI'],
  integrations: ['REST APIs', 'Stripe', 'Firebase Crashlytics', 'In-app purchases', 'Google Maps API', 'Twilio'],
  stateManagement: ['Redux Toolkit', 'Context API', 'Redux']
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">My Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies and tools I am proficient in.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg animate-fade-in transition-transform duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center gap-4">
              <Code className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Languages & Frameworks</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
              {skillsData.frameworks.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg animate-fade-in transition-transform duration-300 hover:scale-105" style={{ animationDelay: '200ms' }}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Smartphone className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Platforms & State Management</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
               {skillsData.platforms.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
              {skillsData.stateManagement.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg animate-fade-in transition-transform duration-300 hover:scale-105" style={{ animationDelay: '400ms' }}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Database className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline">Tools & Integrations</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
               {skillsData.integrations.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
