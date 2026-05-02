import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-muted hover:text-on-background transition-colors mb-12 font-label-caps text-sm"
          >
            <ArrowLeft size={16} /> BACK TO PROJECTS
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h1 className="font-h1 text-4xl md:text-5xl text-on-background mb-6">{project.title}</h1>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="gradient-border-btn px-6 py-3 rounded-xl text-on-background flex items-center gap-2"
                  >
                    Live Demo <img src="https://cdn.simpleicons.org/rocket" className="w-5 h-5 invert dark:invert-0" alt="Live" />
                  </Link>
                )}
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="gradient-border-btn px-6 py-3 rounded-xl text-on-background flex items-center gap-2"
                >
                  Source Code <img src="https://skillicons.dev/icons?i=github" className="w-5 h-5" alt="GitHub" />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="font-h3 text-xl text-on-background">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass-card rounded-lg text-sm text-primary/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-auto rounded-3xl overflow-hidden border border-outline-variant">
              <Image
                src={project.image}
                alt={project.title}
                fill
                suppressHydrationWarning
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-h3 text-2xl text-on-background mb-6">Key Challenges</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <CheckCircle2 className="text-blue-400 shrink-0" size={20} />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-h3 text-2xl text-on-background mb-6">Future Improvements</h3>
              <ul className="space-y-4">
                {project.improvements.map((improvement, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
