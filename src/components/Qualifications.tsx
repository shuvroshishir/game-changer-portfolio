"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Qualifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-section-padding px-8 bg-surface-container/30" id="qualifications">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-h2 text-4xl md:text-h2 text-on-background font-bold">Qualifications</h2>
          <p className="font-label-caps text-blue-400 tracking-widest uppercase">My Journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Education */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-blue-400" size={40} />
              <h3 className="font-h3 text-2xl md:text-h3 text-on-background">Education</h3>
            </div>
            <div className="relative timeline-line space-y-12 pl-12">
              {[
                {
                  title: "B.Sc. in Computer Science",
                  subtitle: "Daffodil International University • 2021 - Present",
                  desc: "Currently pursuing my undergraduate degree with a focus on software engineering and algorithmic complexity.",
                },
                {
                  title: "Higher Secondary Certificate (HSC)",
                  subtitle: "Science Group • 2018 - 2020",
                  desc: "",
                },
                {
                  title: "Secondary School Certificate (SSC)",
                  subtitle: "Science Group • 2016 - 2018",
                  desc: "",
                },
              ].map((item, i) => (
                <div key={i} className="timeline-item relative">
                  <div className="absolute -left-[53px] top-1 w-10 h-10 rounded-full glass-card flex items-center justify-center border-blue-400/50">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <h4 className="font-h3 text-[20px] text-on-background">{item.title}</h4>
                  <p className="text-muted font-label-caps text-xs mb-4">{item.subtitle}</p>
                  {item.desc && <p className="text-muted text-body-md">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-cyan-400" size={40} />
              <h3 className="font-h3 text-2xl md:text-h3 text-on-background">Experience</h3>
            </div>
            <div className="relative timeline-line space-y-12 pl-12">
              {[
                {
                  title: "Frontend Developer Intern",
                  subtitle: "Tech Solutions Ltd • Jan 2023 - June 2023",
                  desc: "Developed responsive web applications using React and integrated REST APIs for real-time data processing.",
                },
                {
                  title: "Freelance Web Developer",
                  subtitle: "Remote • 2021 - 2022",
                  desc: "Collaborated with diverse clients to deliver high-quality portfolio websites and e-commerce solutions.",
                },
              ].map((item, i) => (
                <div key={i} className="timeline-item relative">
                  <div className="absolute -left-[53px] top-1 w-10 h-10 rounded-full glass-card flex items-center justify-center border-cyan-400/50">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <h4 className="font-h3 text-[20px] text-on-background">{item.title}</h4>
                  <p className="text-muted font-label-caps text-xs mb-4">{item.subtitle}</p>
                  {item.desc && <p className="text-muted text-body-md">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
