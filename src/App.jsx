import { useEffect, useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Pranava Health AI',
    points: [
      'AI-powered health diagnosis and doctor finder system',
      'Uses Gemini API and medical data to predict diseases',
      'Suggests medicines with dosage and duration',
      'Integrates Google Maps to find nearby doctors/hospitals',
      'Features chat interface with voice and multilingual support',
    ],
  },
  {
    title: 'Gesture-Controlled Racing Game',
    points: [
      'Built using OpenCV, MediaPipe, and PyAutoGUI',
      'Control game using hand gestures',
      'Voice commands integration (left, right, etc.)',
      'Includes sound effects, multiple vehicles, and dynamic obstacles',
    ],
  },
  {
    title: 'CashClip – Smart Expense Tracker',
    points: [
      'Voice + OCR-based expense tracking system',
      'Automatic categorization and budget alerts',
      'Pie chart analytics and cashback suggestions',
      'Built using Kivy and Node.js',
    ],
  },
  {
    title: 'English Buddy – AI Speaking Assistant',
    points: [
      'Speech-to-text grammar correction system',
      'Uses Gemini API for real-time feedback',
      'Supports multiple languages',
      'Helps improve spoken English fluency',
    ],
  },
];

const skills = [
  { name: 'Java', level: 80 },
  { name: 'Python', level: 85 },
  { name: 'HTML', level: 88 },
  { name: 'CSS', level: 82 },
  { name: 'React', level: 78 },
  { name: 'OpenCV', level: 75 },
  { name: 'MediaPipe', level: 70 },
  { name: 'Gemini API', level: 72 },
  { name: 'Git', level: 80 },
  { name: 'GitHub', level: 82 },
  { name: 'VS Code', level: 88 },
];

function App() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo" onClick={closeMenu}>
            HM
          </a>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-text fade-up">
              <p className="hero-tag">Aspiring AI & ML Developer</p>
              <h1>Hemawarshini Mahendran</h1>
              <p>
                I am a passionate AI & ML student who loves building intelligent applications that solve
                real-world problems. I enjoy working on AI-powered systems, web development, and
                innovative tech projects.
              </p>
              <div className="hero-meta">
                <span>Tamil Nadu, India</span>
                <span>B.E. CSE – Artificial Intelligence & Machine Learning</span>
                <span>2nd Year (2024–2028) · CGPA: 8.5</span>
              </div>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">
                  View Projects
                </a>
                <a className="btn ghost" href="/Hemawarshini_Mahendran_Resume.txt" download>
                  Download Resume
                </a>
              </div>
            </div>
            <div className="hero-art fade-in" aria-hidden="true">
              <div className="orb orb-1" />
              <div className="orb orb-2" />
              <div className="orb orb-3" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-card fade-up">
            <h2>About</h2>
            <p>
              I am currently pursuing B.E. CSE (AI & ML) at K.S. Rangasamy College of Technology. I am
              focused on developing practical AI-driven solutions and strengthening my software
              development skills through real-world projects.
            </p>
            <div className="quick-links">
              <a href="https://github.com/Hemamahe07" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hemawarshini-m-b41a0b377"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
              <article className="info-card">
                <h3>B.E. CSE (AI & ML)</h3>
                <p>K.S. Rangasamy College of Technology</p>
                <p>2024–2028 · CGPA: 8.5</p>
              </article>
              <article className="info-card">
                <h3>12th Grade</h3>
                <p>MRG Government Girls Higher Secondary School</p>
                <p>84%</p>
              </article>
              <article className="info-card">
                <h3>10th Grade</h3>
                <p>MRG Government Girls Higher Secondary School</p>
                <p>63%</p>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-head">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container section-card contact-card">
            <h2>Contact</h2>
            <p>Open to internships, collaborations, and AI/ML project opportunities.</p>
            <div className="contact-links">
              <a href="https://github.com/Hemamahe07" target="_blank" rel="noreferrer">
                github.com/Hemamahe07
              </a>
              <a
                href="https://www.linkedin.com/in/hemawarshini-m-b41a0b377"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/hemawarshini-m-b41a0b377
              </a>
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Hemawarshini Mahendran. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
