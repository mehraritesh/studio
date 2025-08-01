import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a passionate and driven software engineer with a knack for creating elegant, efficient, and user-friendly web applications. With a strong foundation in modern web technologies, I thrive on solving complex problems and continuously learning to stay at the forefront of the ever-evolving tech landscape.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-lg">
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
