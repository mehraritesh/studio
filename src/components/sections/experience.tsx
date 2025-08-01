import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experienceData = [
  {
    company: 'Sofmen Technologies',
    title: 'Software Engineer',
    years: 'Jan 2023 – Apr 2025',
    description: 'Worked on cross-platform mobile and web app development with a focus on performance, scalability, and clean UI/UX. Collaborated within Agile teams, participating in code reviews, and daily stand-ups. Maintained code repositories using Git and managed integration pipelines using Jenkins. Integrated third-party APIs, SDKs, and push notification services using Firebase. Resolved performance bottlenecks and ensured smooth user experiences through effective problem-solving and debugging.',
    skills: ['React Native', 'Agile', 'Git', 'Jenkins', 'Firebase', 'Unit Testing'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my professional journey and key contributions.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border md:left-1/2"></div>
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-8 flex justify-between items-start w-full md:even:flex-row-reverse animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
               <div className="hidden md:block md:w-5/12"></div>
               <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full shrink-0">
                <div className="mx-auto font-semibold text-sm text-primary-foreground">{index + 1}</div>
              </div>
               <div className="order-1 w-full md:w-5/12 ml-4 md:ml-0">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="mb-2 sm:mb-0">
                        <CardTitle className="font-headline">{exp.company}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{exp.title}</CardDescription>
                      </div>
                      <div className="text-left sm:text-right text-sm text-muted-foreground">{exp.years}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
