import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const educationData = [
  {
    institution: 'Sagar Institute of Research and Technology, Bhopal, M.P',
    degree: 'B.Tech – Electronics & Communication Engineering',
    years: '2021',
    description: 'Graduated with a focus on electronics and communication. This academic background provided me with a solid foundation in engineering principles that I apply to software development.',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Education</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background has provided me with a solid foundation in engineering principles.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-lg animate-fade-in">
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
