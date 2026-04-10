'use client';

import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

// Icons as simple SVG components
const Icons = {
  Email: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  GitHub: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Location: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Download: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Play: () => (
    <svg className="w-8 h-8 text-[var(--bg-body)] ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
};

// Video Embed Component (click-to-load for performance)
function VideoEmbed({ videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoInfo = (url) => {
    if (!url) return null;
    const ytMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch) return { platform: 'youtube', id: ytMatch[1] };

    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[1] };

    return null;
  };

  const video = getVideoInfo(videoUrl);
  if (!video) return null;

  const embedUrl = video.platform === 'youtube'
    ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`
    : `https://player.vimeo.com/video/${video.id}?autoplay=1`;

  const thumbnailUrl = video.platform === 'youtube'
    ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
    : null;

  if (isPlaying) {
    return (
      <div className="aspect-video relative rounded-md overflow-hidden">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Video demo"
        />
      </div>
    );
  }

  return (
    <div
      className="aspect-video relative rounded-md overflow-hidden cursor-pointer group/video bg-[var(--bg-inner)]"
      onClick={() => setIsPlaying(true)}
    >
      {thumbnailUrl ? (
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          onError={(e) => { e.target.src = thumbnailUrl; }}
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-inner)] to-[var(--bg-card)]" />
      )}
      <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[var(--accent-90)] group-hover/video:bg-[var(--accent)] group-hover/video:scale-110 transition-all flex items-center justify-center">
          <Icons.Play />
        </div>
      </div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'Experience', 'Projects', 'Publications', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-body-80)] backdrop-blur-lg border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-mono text-[var(--accent)] font-semibold text-lg">
            BG<span className="text-[var(--text-tertiary)]">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/CV_Bruk_Gebregziabher.pdf"
              className="flex items-center gap-2 px-4 py-2 border border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent-dim)] transition-colors text-sm"
            >
              <Icons.Download />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--text-secondary)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--border)] pt-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  const { personal, skills } = portfolioData;
  
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="animate-fade-in-up">
          <p className="font-mono text-[var(--accent)] mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-4">
            {personal.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-tertiary)] mb-6">
            {personal.title}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-4">
            {personal.subtitle}
          </p>
          <p className="text-[var(--text-secondary)] max-w-2xl mb-6 leading-relaxed">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {skills.primary.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-mono text-[var(--accent)] bg-[var(--accent-dim)] border border-[var(--accent-dim)] rounded"
              >
                {skill.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <Icons.Location />
              <span>{personal.location}</span>
            </div>
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              <Icons.Email />
              <span>{personal.email}</span>
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            >
              <Icons.LinkedIn />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            >
              <Icons.GitHub />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[var(--accent)] text-[var(--bg-body)] font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Section
function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 flex items-center gap-4">
          <span className="font-mono text-[var(--accent)] text-xl">01.</span>
          Experience
          <div className="flex-1 h-px bg-[var(--border)] ml-4" />
        </h2>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 card-hover">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {job.title}
                    </h3>
                    <p className="text-[var(--accent)] font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm text-[var(--text-secondary)]">{job.period}</p>
                    <p className="text-sm text-[var(--text-tertiary)]">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="text-[var(--text-secondary)] flex gap-3">
                      <span className="text-[var(--accent)] mt-1.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const { projects, demos } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 flex items-center gap-4">
          <span className="font-mono text-[var(--accent)] text-xl">02.</span>
          Projects
          <div className="flex-1 h-px bg-[var(--border)] ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 card-hover group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs font-mono bg-[var(--accent-dim)] text-[var(--accent)] rounded">
                  {project.type}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Icons.ExternalLink />
                  </a>
                )}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              {project.videoUrl && (
                <div className="mb-4">
                  <VideoEmbed videoUrl={project.videoUrl} />
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono text-[var(--text-tertiary)] bg-[var(--bg-inner)] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {demos && demos.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-16 mb-8 flex items-center gap-4">
              Featured Demos
              <div className="flex-1 h-px bg-[var(--border)] ml-4" />
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 card-hover"
                >
                  <VideoEmbed videoUrl={demo.videoUrl} />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-4 mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                    {demo.description}
                  </p>
                  {demo.tags && (
                    <div className="flex flex-wrap gap-2">
                      {demo.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-mono text-[var(--text-tertiary)] bg-[var(--bg-inner)] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Publications Section
function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 flex items-center gap-4">
          <span className="font-mono text-[var(--accent)] text-xl">03.</span>
          Publications
          <div className="flex-1 h-px bg-[var(--border)] ml-4" />
        </h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors inline-flex items-baseline gap-1.5">
                        {pub.title}
                        <span className="inline-block self-center"><Icons.ExternalLink /></span>
                      </a>
                    ) : pub.title}
                  </h3>
                  {pub.venue && <p className="text-[var(--text-secondary)]">{pub.venue}</p>}
                </div>
                <div className="text-right shrink-0">
                  <span className="px-3 py-1 text-xs font-mono bg-[var(--accent-dim)] text-[var(--accent)] rounded">
                    {pub.type}
                  </span>
                  <p className="font-mono text-sm text-[var(--text-tertiary)] mt-2">{pub.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 flex items-center gap-4">
          <span className="font-mono text-[var(--accent)] text-xl">04.</span>
          Skills
          <div className="flex-1 h-px bg-[var(--border)] ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills.technical).map(([category, items]) => (
            <div
              key={category}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6"
            >
              <h3 className="text-[var(--accent)] font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm text-[var(--text-secondary)] bg-[var(--bg-inner)] rounded border border-[var(--border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Education Section
function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-12 flex items-center gap-4">
          <span className="font-mono text-[var(--accent)] text-xl">05.</span>
          Education
          <div className="flex-1 h-px bg-[var(--border)] ml-4" />
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 flex-shrink-0"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {edu.degree}
              </h3>
              {edu.specialization && (
                <p className="text-[var(--accent)] text-sm">{edu.specialization}</p>
              )}
              <p className="text-[var(--text-secondary)] text-sm">{edu.institution}</p>
              {edu.thesis && (
                <p className="text-[var(--text-secondary)] text-sm mt-2">
                  <span className="text-[var(--text-tertiary)]">Thesis:</span> {edu.thesis}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-mono text-[var(--accent)] mb-4">06. What's Next?</p>
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">Get In Touch</h2>
        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
          I'm currently open to new opportunities in robotics and AI. Whether you have a question
          or just want to say hi, I'll do my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="px-8 py-4 border border-[var(--accent)] text-[var(--accent)] rounded-lg hover:bg-[var(--accent-dim)] transition-colors font-medium"
          >
            Say Hello
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[var(--accent)] text-[var(--bg-body)] rounded-lg hover:bg-[var(--accent-hover)] transition-colors font-medium"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-[var(--text-tertiary)]">
          Built with Next.js & Tailwind CSS
        </p>
        <p className="font-mono text-xs text-[var(--text-tertiary)] mt-2">
          © {new Date().getFullYear()} Bruk Gebregziabher
        </p>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Publications />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
