"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Globe, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".contact-info-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(".contact-form-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-section-padding px-8 relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-radial -z-10 opacity-20"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-h2 text-4xl md:text-h2 text-on-background font-bold">Get in Touch</h2>
          <p className="font-label-caps text-blue-400 tracking-widest uppercase">Let&apos;s Create Something Together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-h3 text-[24px] text-on-background mb-8">Talk to me</h4>
            
            <div className="contact-info-card glass-card p-6 rounded-2xl group hover:border-blue-400 transition-colors">
              <Mail className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h5 className="text-on-background font-h3 text-[18px]">Email</h5>
              <p className="text-muted text-sm mb-4">shuvroshishir.dev@gmail.com</p>
              <a
                href="mailto:shuvroshishir.dev@gmail.com"
                className="text-blue-400 flex items-center gap-2 font-label-caps text-xs group-hover:gap-4 transition-all"
              >
                Write me <ArrowRight size={14} />
              </a>
            </div>

            <div className="contact-info-card glass-card p-6 rounded-2xl group hover:border-cyan-400 transition-colors">
              <Globe className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h5 className="text-on-background font-h3 text-[18px]">LinkedIn</h5>
              <p className="text-muted text-sm mb-4">shishirkarmokar</p>
              <a
                href="https://www.linkedin.com/in/shishirkarmokar/"
                target="_blank"
                className="text-cyan-400 flex items-center gap-2 font-label-caps text-xs group-hover:gap-4 transition-all"
              >
                Write me <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8 contact-form-container">
            <div className="glass-card p-8 md:p-10 rounded-[32px] relative overflow-hidden">
              <h4 className="font-h3 text-[24px] text-on-background mb-8">Write me your project</h4>
              <form action="mailto:shuvroshishir.dev@gmail.com" method="post" encType="text/plain" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-caps text-muted text-xs">NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Insert your name"
                      className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-blue-500 focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-muted text-xs">MAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Insert your email"
                      className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-blue-500 focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-muted text-xs">PROJECT</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your project details"
                    className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-background focus:border-blue-500 focus:ring-0 outline-none transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="gradient-border-btn w-full md:w-auto px-12 py-4 rounded-xl font-h3 text-[18px] text-on-background flex items-center justify-center gap-3 transition-transform active:scale-95"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
