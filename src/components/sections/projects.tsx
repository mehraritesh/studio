import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Tracker App',
    description: 'Developed the front end of an employee tracking and attendance management app. Integrated WebSocket for real-time location tracking and built offline functionality with background sync. Added Firebase for push notifications and crash reporting.',
    techStack: ['Kotlin', 'WebSocket', 'Firebase', 'Google Play Store'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile tracking app',
  },
  {
    title: 'The Mandarin Show – Language Learning App',
    description: 'A cross-platform React Native app for Mandarin language learning with secure Google/Apple login. Integrated video playback using ExoPlayer and gated content via in-app purchases (IAP). Emphasized intuitive user experience, and secure access control.',
    techStack: ['React Native', 'Google/Apple Login', 'ExoPlayer', 'In-App Purchases'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'language learning mobile app',
  },
  {
    title: 'Curbside Movers – Customer & Driver Apps',
    description: 'Led development of customer and driver-facing mobile applications. Implemented core features like real-time driver tracking, time slot booking, communication via Twilio, and payment integration via Stripe. Integrated Google Maps API and Firebase services.',
    techStack: ['React Native', 'React Native Web', 'Twilio', 'Stripe', 'Google Maps API', 'Firebase'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'delivery app logistics',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud to have worked on.
            </p>
          </div>
        </div>
        <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-1 p-6">
                <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <CardDescription className="flex-1 text-muted-foreground">{project.description}</CardDescription>
                <div className="mt-6 flex justify-end space-x-4">
                  <Button asChild variant="ghost" size="icon">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
