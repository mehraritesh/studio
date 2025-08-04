"use client";

import * as React from 'react';
import { Code, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Ritesh Mehra</span>
        </a>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
           <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-4">
                  <a href="#" className="mb-8 flex items-center space-x-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Ritesh Mehra</span>
                  </a>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
