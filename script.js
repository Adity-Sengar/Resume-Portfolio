/* ====================================
   CSS Reset and Variables
==================================== */
:root {
    /* Dark Theme (Default) */
    --bg-color: #050810;
    --primary-color: #38bdf8;
    --primary-color-hover: #0369a1;
    --secondary-color: #8b5cf6;
    --text-light: #f8fafc;
    --text-muted: #94a3b8;
    --card-bg: rgba(30, 41, 59, 0.6);
    --nav-bg: rgba(5, 8, 16, 0.85);
    --border-color: rgba(255, 255, 255, 0.08);
    --shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    --shadow-hover: 0 10px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.1);
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.light-theme {
    /* Light Theme */
    --bg-color: #f1f5f9;
    --primary-color: #0ea5e9;
    --primary-color-hover: #0284c7;
    --secondary-color: #6366f1;
    --text-light: #0f172a;
    --text-muted: #475569;
    --card-bg: rgba(255, 255, 255, 0.7);
    --nav-bg: rgba(241, 245, 249, 0.85);
    --border-color: rgba(0, 0, 0, 0.08);
    --shadow: 0 8px 32px rgba(15, 23, 42, 0.05);
    --shadow-hover: 0 10px 40px rgba(15, 23, 42, 0.1), 0 0 20px rgba(14, 165, 233, 0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    color: var(--text-light);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    transition: background-color 0.4s ease, color 0.4s ease;
}

/* Preloader */
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0f0f23, #1a1a2e);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}
#preloader.hide {
    opacity: 0;
    visibility: hidden;
}
.preloader-content {
    text-align: center;
    color: #38bdf8;
}
.spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(56, 189, 248, 0.2);
    border-top: 4px solid #38bdf8;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.preloader-content h3 {
    font-size: 1.2rem;
    font-weight: 500;
}

/* Scroll Reveal Animations */
.reveal {
    opacity: 0;
    transition: all 0.8s ease-out;
}
.reveal.active {
    opacity: 1;
    transform: translate(0, 0);
}
.fade-up { transform: translateY(50px); }
.fade-left { transform: translateX(-50px); }
.fade-right { transform: translateX(50px); }

/* Base Styles */
h1, h2, h3, h4, h5, h6 { font-weight: 700; }
a { text-decoration: none; color: inherit; transition: var(--transition); }
.section-padding { padding: 100px 8%; }
.section-title { font-size: 2.5rem; margin-bottom: 3rem; text-align: center; position: relative; }
.section-title span { color: var(--primary-color); }
.text-center { text-align: center; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
.mt-1 { margin-top: 1.5rem; }
.mb-0 { margin-bottom: 0.5rem; }
.accent { color: var(--primary-color); font-weight: 500; }

/* Glassmorphism Classes */
.glass-card {
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
    transform-style: preserve-3d;
}

.glass-card:hover {
    transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow: var(--shadow-hover);
}

/* Skills Section Icon Cards */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
}

.skill-card {
    background: rgba(30, 41, 59, 0.65);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 1.6rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
    cursor: default;
}

.skill-card i {
    font-size: 2.4rem;
    color: var(--primary-color);
}

.skill-card span {
    color: var(--text-light);
    font-weight: 600;
    font-size: 0.95rem;
    line-height: 1.2;
}

.skill-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: var(--shadow-hover);
    border-color: rgba(56, 189, 248, 0.45);
    background: rgba(56, 189, 248, 0.12);
}

@media (max-width: 768px) {
    .skills-grid { gap: 0.9rem; }
    .skill-card { padding: 1.3rem 0.9rem; }
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 1.05rem;
    cursor: pointer;
    transition: var(--transition);
    border: 2px solid transparent;
}
.small-btn { padding: 8px 16px; font-size: 0.9rem; border-radius: 6px; }

.primary-btn {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
}

.primary-btn:hover {
    box-shadow: 0 6px 20px rgba(56, 189, 248, 0.5);
    transform: translateY(-2px);
}

.secondary-btn {
    background: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.secondary-btn:hover {
    background: rgba(56, 189, 248, 0.1);
    transform: translateY(-2px);
}

/* ====================================
   Layout Components
==================================== */

/* Scroll Progress Indicator */
#scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1001;
}
#scroll-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    width: 0%;
    transition: width 0.25s ease;
}

/* Particles Background */
#particles-js {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
.light-theme #particles-js { opacity: 0.3; }

/* Navbar */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: transparent;
    transition: var(--transition);
}

nav.scrolled {
    background: var(--nav-bg);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    transition: var(--transition);
}

nav.scrolled .nav-container { padding: 15px 8%; }

.logo { font-size: 1.8rem; font-weight: 800; letter-spacing: 1px; }
.logo span { color: var(--primary-color); }

.nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.nav-item {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-light);
    position: relative;
    padding-bottom: 5px;
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-item:hover::after, .nav-item.active::after { width: 100%; }
.nav-item:hover, .nav-item.active { color: var(--primary-color); }

.nav-actions { display: flex; align-items: center; gap: 1.5rem; }

#theme-toggle {
    background: none;
    border: none;
    color: var(--text-light);
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition);
}
#theme-toggle:hover { color: var(--primary-color); transform: rotate(15deg); }

.hamburger { display: none; font-size: 1.5rem; cursor: pointer; color: var(--text-light); }

/* ====================================
   Sections
==================================== */

/* Hero Section */
.hero { min-height: 100vh; display: flex; align-items: center; position: relative; }
.hero-content { flex: 1; z-index: 1; }
.greeting { font-size: 1.5rem; color: var(--text-muted); font-weight: 500; }
.hero h1 { font-size: 4.5rem; line-height: 1.1; margin: 10px 0; }
.hero h1 span {
    color: transparent;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
}
.typing-text { font-size: 1.8rem; font-weight: 400; color: var(--text-muted); margin-bottom: 2rem; }
.hero-buttons { display: flex; gap: 1.5rem; margin-bottom: 3rem; }

.social-links { display: flex; gap: 1.5rem; }
.social-links a {
    display: flex; align-items: center; justify-content: center;
    width: 45px; height: 45px; border-radius: 50%;
    background: var(--card-bg); border: 1px solid var(--border-color);
    font-size: 1.2rem; color: var(--text-light);
}
.social-links a:hover {
    background: var(--primary-color); color: #fff;
    transform: translateY(-5px); box-shadow: 0 5px 15px rgba(56, 189, 248, 0.4);
}

.hero-image { flex: 1; display: flex; justify-content: center; position: relative; z-index: 1; }
.geometric-shape {
    width: 380px; height: 380px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    overflow: hidden; position: relative;
    animation: morph 8s ease-in-out infinite, glow 4s ease-in-out infinite alternate;
    border: 3px solid rgba(56, 189, 248, 0.5);
}

@keyframes morph {
    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
    50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
    75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
}
@keyframes glow {
    0% { box-shadow: 0 0 15px rgba(56, 189, 248, 0.2); }
    100% { box-shadow: 0 0 35px rgba(139, 92, 246, 0.6); }
}

.geometric-shape img { width: 100%; height: 100%; object-fit: cover; }

/* Floating Tech Icons */
.floating-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}
.floating-icon {
    position: absolute;
    font-size: 2rem;
    color: rgba(56, 189, 248, 0.3);
    animation: float 6s ease-in-out infinite;
}
.floating-icon:nth-child(1) { top: 20%; left: 10%; }
.floating-icon:nth-child(2) { top: 60%; left: 80%; }
.floating-icon:nth-child(3) { top: 30%; left: 85%; }
.floating-icon:nth-child(4) { top: 70%; left: 15%; }
.floating-icon:nth-child(5) { top: 10%; left: 60%; }
.floating-icon:nth-child(6) { top: 80%; left: 40%; }

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
}

/* About Section */
.about p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem; }
.about strong { color: var(--text-light); font-weight: 600; }
.about-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

/* Education Section */
.education p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem; }
.education strong { color: var(--text-light); font-weight: 600; }
.education-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.timeline { list-style: none; margin-top: 1.5rem; position: relative; }
.timeline::before {
    content: ''; position: absolute; left: 8px; top: 5px; bottom: 5px;
    width: 2px; background: var(--border-color);
}
.timeline li { margin-bottom: 1.5rem; position: relative; padding-left: 30px; }
.timeline li::before {
    content: ''; position: absolute; left: 0; top: 5px; width: 14px; height: 14px;
    border-radius: 50%; background: var(--primary-color); box-shadow: 0 0 10px var(--primary-color);
}
.timeline h4 { color: var(--text-light); margin-bottom: 0.2rem; }
.timeline p { font-size: 0.95rem; margin-bottom: 0.2rem; color: var(--text-muted); }
.timeline p.highlight { color: var(--primary-color); font-weight: 600; }

.education-summary {
    width: 100%;
}

/* Skills Section */
.skill-category h3 {
    font-size: 1.25rem; margin-bottom: 1.2rem;
    display: flex; align-items: center; gap: 0.8rem;
    color: var(--text-light);
}
.skill-category h3 i { color: var(--primary-color); }
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.8rem; }
.skill-tags span {
    padding: 8px 16px; background: rgba(56, 189, 248, 0.08);
    border: 1px solid var(--border-color); border-radius: 20px;
    font-size: 0.95rem; color: var(--text-light);
    transition: var(--transition);
}
.skill-tags span:hover {
    background: var(--primary-color); color: white;
    transform: translateY(-3px); box-shadow: 0 4px 10px rgba(56, 189, 248, 0.3);
}

/* Projects Section */
.project-card { display: flex; flex-direction: column; height: 100%; }
.project-image {
    position: relative;
    overflow: hidden;
    border-radius: 12px 12px 0 0;
    height: 200px;
}
.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}
.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}
.project-card:hover .project-overlay {
    opacity: 1;
}
.overlay-content {
    display: flex;
    gap: 1rem;
}
.project-content h3 { font-size: 1.4rem; color: var(--text-light); margin-bottom: 0.3rem; }
.project-content .date { font-size: 0.9rem; color: var(--primary-color); margin-bottom: 1rem; font-weight: 500; }
.project-content p { color: var(--text-muted); margin-bottom: 1.5rem; }
.project-features { list-style: none; margin-bottom: 1.5rem; flex-grow: 1; }
.project-features li {
    position: relative; padding-left: 20px; margin-bottom: 0.8rem;
    color: var(--text-muted); font-size: 0.95rem; line-height: 1.4;
}
.project-features li::before {
    content: '\f058'; font-family: 'Font Awesome 6 Free'; font-weight: 900;
    position: absolute; left: 0; color: var(--primary-color);
}
.project-tech { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: auto; }
.project-tech span {
    font-size: 0.8rem; padding: 4px 10px;
    background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 6px; color: var(--secondary-color);
}

/* Summer Training */
.training-content { display: flex; gap: 3rem; align-items: center; flex-wrap: wrap; }
.training-info { flex: 1; min-width: 300px; }
.training-info h3 { font-size: 1.8rem; color: var(--text-light); margin-bottom: 0.5rem; }
.training-info h4 { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem; font-weight: 400; }
.date-badge {
    display: inline-block; padding: 4px 12px; background: rgba(56, 189, 248, 0.1);
    color: var(--primary-color); border-radius: 20px; font-size: 0.9rem; font-weight: 500;
}
.training-details { list-style: none; }
.training-details li {
    position: relative; padding-left: 20px; margin-bottom: 0.8rem;
    color: var(--text-muted); font-size: 1rem;
}
.training-details li::before {
    content: '\f101'; font-family: 'Font Awesome 6 Free'; font-weight: 900;
    position: absolute; left: 0; color: var(--primary-color);
}
.training-cert { flex: 0.8; min-width: 300px; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow); }
.training-cert img { width: 100%; height: auto; display: block; filter: brightness(0.9); transition: var(--transition); }
.training-cert:hover img { filter: brightness(1.1); transform: scale(1.02); }

/* Certifications Section */
.certificates-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    gap: 2rem; 
}
.cert-card { 
    display: flex; 
    flex-direction: column; 
    overflow: hidden;
    transition: var(--transition);
}
.cert-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}
.cert-link {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 12px 12px 0 0;
}
.cert-image {
    width: 100%;
    height: 220px;
    object-fit: contain;
    background-color: rgba(255, 255, 255, 0.03);
    padding: 0.5rem;
    transition: transform 0.3s ease;
}
.cert-link:hover .cert-image {
    transform: scale(1.05);
}
.cert-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px 12px 0 0;
}
.cert-link:hover .cert-overlay {
    opacity: 1;
}
.cert-overlay span {
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
}
.cert-info {
    padding: 1.5rem;
    flex-grow: 1;
}
.cert-info h3 { 
    font-size: 1.1rem; 
    color: var(--text-light); 
    margin-bottom: 0.5rem; 
    line-height: 1.4; 
}
.cert-info p { 
    color: var(--text-muted); 
    font-size: 0.9rem; 
}

/* Certificate Preview in Summer Training */
.cert-preview-link {
    display: inline-block;
    transition: transform 0.3s ease;
}
.cert-preview-link:hover {
    transform: scale(1.05);
}
.cert-preview-image {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
}
.cert-preview-link:hover .cert-preview-image {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Achievements Section */
.timeline-container {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}
.timeline {
    position: relative;
    padding-left: 30px;
}
.timeline::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
}
.timeline-item {
    position: relative;
    margin-bottom: 2rem;
    padding-left: 40px;
}
.timeline-marker {
    position: absolute;
    left: -22px;
    top: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--card-bg);
    border: 2px solid var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 1.2rem;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.1);
}
.timeline-content {
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
}
.timeline-content:hover {
    transform: translateX(10px);
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow: var(--shadow-hover);
}
.timeline-content h3 {
    font-size: 1.2rem;
    color: var(--text-light);
    margin-bottom: 0.5rem;
}
.timeline-content p {
    color: var(--text-muted);
    font-size: 0.95rem;
}
.timeline-content .date {
    color: var(--primary-color);
    font-weight: 500;
}

/* Resume Section */
.resume-card { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
.resume-card p { color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem; }

/* Contact Section */
.contact-info p { color: var(--text-muted); margin-bottom: 2rem; }
.info-items { display: flex; flex-direction: column; gap: 1.5rem; }
.info-item {
    display: flex; align-items: center; gap: 1rem; padding: 1rem;
    border-radius: 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color);
    transition: var(--transition);
}
.info-item:hover { 
    border-color: var(--primary-color); 
    background: rgba(56, 189, 248, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.2);
}
.info-item i {
    width: 50px; height: 50px; border-radius: 50%;
    background: rgba(56, 189, 248, 0.1); display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; color: var(--primary-color);
    transition: var(--transition);
}
.info-item:hover i {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1) rotate(5deg);
}
.info-item h4 { font-size: 1rem; margin-bottom: 0.2rem; color: var(--text-light); }
.info-item span { font-size: 0.9rem; color: var(--text-muted); }

/* Form */
.input-group { margin-bottom: 1.5rem; }
.input-group input, .input-group textarea {
    width: 100%; padding: 15px; background: rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color); border-radius: 8px;
    color: var(--text-light); font-size: 1rem; transition: var(--transition);
}
.light-theme .input-group input, .light-theme .input-group textarea { background: rgba(255, 255, 255, 0.5); }
.input-group textarea { resize: vertical; }
.input-group input:focus, .input-group textarea:focus {
    outline: none; border-color: var(--primary-color); box-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
}
.submit-btn { width: 100%; border: none; }

/* Footer */
footer { padding: 2rem 8%; background: var(--nav-bg); border-top: 1px solid var(--border-color); }
.footer-content { display: flex; justify-content: space-between; align-items: center; position: relative; }
.footer-content p span { color: var(--primary-color); font-weight: 500; }
.footer-social { display: flex; gap: 1rem; }
.footer-social a { color: var(--text-muted); font-size: 1.2rem; }
.footer-social a:hover { color: var(--primary-color); transform: translateY(-3px); }
.scroll-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
}
.scroll-top.show {
    opacity: 1;
    visibility: visible;
}
.scroll-top:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 6px 20px rgba(56, 189, 248, 0.5);
}

/* ====================================
   Responsive Design
==================================== */
@media screen and (max-width: 1024px) {
    .section-padding { padding: 80px 5%; }
    .hero h1 { font-size: 3.5rem; }
    .typing-text { font-size: 1.4rem; }
    .grid-2 { gap: 2rem; }
    .geometric-shape { width: 320px; height: 320px; }
    .training-content { flex-direction: column; }
    .training-cert { width: 100%; }
}

@media screen and (max-width: 768px) {
    .nav-links {
        position: fixed; right: -100%; top: 0; height: 100vh; width: 70%; max-width: 300px;
        background: var(--nav-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        transition: right 0.4s ease; border-left: 1px solid var(--border-color);
        box-shadow: -5px 0 20px rgba(0,0,0,0.5);
    }
    .light-theme .nav-links { box-shadow: -5px 0 20px rgba(0,0,0,0.1); }
    .nav-links.active { right: 0; }
    .hamburger { display: block; z-index: 1001; }
    
    .nav-actions { z-index: 1002; }

    .hero {
        flex-direction: column-reverse; justify-content: center; text-align: center;
        gap: 3rem; padding-top: 120px;
    }
    .hero-buttons { justify-content: center; }
    .social-links { justify-content: center; }
    
    .grid-2 { grid-template-columns: 1fr; }
    .section-title { font-size: 2rem; }
    
    .footer-content { flex-direction: column; gap: 1.5rem; text-align: center; }
    .scroll-top { position: static; margin-top: 1rem; }
}
