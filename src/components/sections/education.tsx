import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const educationData = [
  {
    institution: 'University of Technology',
    degree: 'Bachelor of Science in Computer Science',
    years: '2016 - 2020',
    description: 'Graduated with honors. Focused on software development, algorithms, and data structures. Active member of the coding club and participated in several hackathons.',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Education</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background has provided me with a solid foundation in computer science principles.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-headline">{edu.institution}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{edu.degree}</CardDescription>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">{edu.years}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
