// src/pages/Home.js
import React from "react";
import "../styles.css";

function Home() {
    return (
        <>
            <div className="floating-elements">
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
            </div>

            <main>
                {/* Home Section */}
                <section id="home" className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="pink-text">Front-End</span>{" "}
                            <span className="blue-text">ENGINEER</span>
                        </h1>
                        <p className="hero-subtitle">
                            Design-Focused Developer Turning Ideas Into Elegant Interfaces
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-pink">View My Work</a>
                            <a href="#contact" className="btn btn-pink">Let's Connect</a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="section">
                    <div className="container">
                        <h2 className="section-title black-accent">ABOUT ME</h2>
                        <div className="grid">
                            <div className="card blue-accent">
                                <h3>🎓 Education</h3>
                                <p>
                                    <strong>Bachelor of Computer Engineering</strong><br />
                                    Hansung University, Seoul, South Korea<br />
                                    Expected Graduation: Feb 2026 | GPA: 3.8/4.0<br /><br />
                                </p>
                                <p>
                                    Skilled in HTML, CSS, and JavaScript, with experience in C and Java.
                                </p>
                            </div>

                            <div className="card pink-accent">
                                <h3>🚀 Career Goals</h3>
                                <p>
                                    Seeking front-end opportunities to create intuitive, user-centered designs while growing my technical expertise.<br />
                                    Driven to build engaging interfaces and enhance user experience.<br />
                                    Passionate about teamwork, innovation, and delivering quality code.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section">
                    <div className="container">
                        <h2 className="section-title black-accent">TECHNICAL SKILLS</h2>
                        <div className="skills-container">
                            <div className="skill-item"><span className="skill-icon">🌐</span><div className="skill-name">HTML / CSS / JavaScript</div></div>
                            <div className="skill-item"><span className="skill-icon">⚛️</span><div className="skill-name">React / React Native</div></div>
                            <div className="skill-item"><span className="skill-icon">🎨</span><div className="skill-name">UI/UX Design</div></div>
                            <div className="skill-item"><span className="skill-icon">🛠️</span><div className="skill-name">Node.js</div></div>
                            <div className="skill-item"><span className="skill-icon">🔥</span><div className="skill-name">Firebase</div></div>
                            <div className="skill-item"><span className="skill-icon">📱</span><div className="skill-name">Swift</div></div>
                            <div className="skill-item"><span className="skill-icon">🧠</span><div className="skill-name">AI</div></div>
                            <div className="skill-item"><span className="skill-icon">🗄️</span><div className="skill-name">SQL / Databases</div></div>
                            <div className="skill-item"><span className="skill-icon">📊</span><div className="skill-name">Microsoft Office Suite (Excel, Word, PowerPoint, Access)</div></div>
                            <div className="skill-item"><span className="skill-icon">🖌️</span><div className="skill-name">Adobe Photoshop</div></div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="section">
                    <div className="container">
                        <h2 className="section-title black-accent">PROJECT SHOWCASE</h2>
                        <div className="project-grid">
                            <div className="project-card">
                                <div className="project-logo-wrapper">
                                    <img src="/images/ct_logo.png" alt="Culture & Trip App Logo" className="project-logo-ct" />
                                </div>
                                <h3>Culture & Trip: AI-Powered Travel Planner App</h3>
                                <p className="project-date">Feb 2025 – Jun 2025</p>
                                <p>
                                    A mobile travel planner application that uses AI to generate personalized travel itineraries...
                                </p>
                                <div className="project-links">
                                    <a href="https://github.com/ewnsong17/capstone2025_front" target="_blank" rel="noreferrer" className="project-link">GitHub (Frontend)</a>
                                    <a href="https://github.com/ewnsong17/capstone2025_back" target="_blank" rel="noreferrer" className="project-link">GitHub (Backend)</a>
                                    <a href="https://www.youtube.com/shorts/37vlsblHvTU" target="_blank" rel="noreferrer" className="project-link">Demo Video (Expo Go)</a>
                                </div>
                            </div>

                            <div className="project-card">
                                <div className="project-logo-wrapper">
                                    <img src="/images/dm_logo.png" alt="Diary Music App Logo" className="project-logo-dm" />
                                </div>
                                <h3>Diary Music: Emotion-Based Music Recommendation App</h3>
                                <p className="project-date">Sep 2024 – Dec 2024</p>
                                <p>
                                    A mobile application that recommends personalized music based on the user's daily reflections and photos...
                                </p>
                                <div className="project-links">
                                    <a href="https://github.com/SAE-A/DiaryMusic" target="_blank" rel="noreferrer" className="project-link">GitHub</a>
                                    <a href="https://www.youtube.com/watch?v=H-qP-R8akSA" target="_blank" rel="noreferrer" className="project-link">Demo Video (Expo Go)</a>
                                </div>
                            </div>
                        </div>

                        <div className="view-more-wrapper" style={{ textAlign: "center", marginTop: "30px" }}>
                            <a href="#projects" className="view-more-btn">View More ...</a>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="section">
                    <div className="container">
                        <h2 className="section-title black-accent">CONTACT</h2>

                        <p>Email me at:</p>
                        <ul>
                            <li>
                                <a href="mailto:sayaaaaa129@gmail.com">
                                    sayaaaaa129@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:sayaaa129@naver.com">
                                    sayaaa129@naver.com
                                </a>
                            </li>
                        </ul>

                        <p>Check out my GitHub:</p>
                        <a href="https://github.com/" target="_blank" rel="noreferrer">https://github.com/</a>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
