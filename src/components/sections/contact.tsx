import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <footer id="contact" className="w-full py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Get in Touch</h2>
          <p className="mt-4 mb-8 text-primary-foreground/80">
            I'm currently open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect!
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="secondary" size="icon" className="rounded-full">
              <a href="mailto:mehraritesh.831@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="icon" className="rounded-full">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="icon" className="rounded-full">
              <a href="https://www.linkedin.com/in/ritesh-mehra-6467a0210" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-12 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ritesh Mehra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
