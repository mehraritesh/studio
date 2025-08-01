import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto text-center px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="space-y-2 animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline text-primary">
              Ritesh Mehra
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground" style={{ animationDelay: '200ms' }}>
              React Native Developer | Mobile App Developer
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" style={{ animationDelay: '300ms' }}>
              Crafting high-quality, scalable, and user-centric digital experiences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#contact">
                Contact Me <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
