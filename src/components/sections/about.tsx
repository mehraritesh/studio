import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground mx-auto lg:mx-0 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a Mobile App Developer with 2+ years of hands-on experience in full-cycle development of cross-platform applications using React Native. Skilled in building scalable mobile solutions, integrating RESTful APIs, and implementing
                responsive UI components.
              </p>
              <p className="max-w-[600px] text-muted-foreground mx-auto lg:mx-0 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Proficient in mobile architecture, state management, and third-party integrations. Strong
                background in Agile methodology, team collaboration, and technical problem-solving. Available immediately for both
                on-site and remote opportunities.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center animate-float">
            <Card className="overflow-hidden rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Profile Picture"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint="professional headshot"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
