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
                            <button className="btn btn-pink" onClick={() => {document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});}}>
                                Let's Connect
                            </button>
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
                                    Expected Graduation: Feb 2026 | GPA: 3.8/4.5<br /><br />
                                </p>
                            </div>

                            <div className="card pink-accent">
                                <h3>🚀 Career Goals</h3>
                                <p>
                                    Frontend-focused developer with hands-on experience in web application development and ERP systems.<br />
                                    Interested in building intuitive, user-centered applications while continuously improving technical expertise.
                                </p>
                            </div>

                            <div className="card purple-accent experience-card">
                                <h3>💼 Experience</h3>
                                <p>
                                    <strong>Software Developer Intern</strong><br />
                                    Woongjin, Inc. | Jan 2026 – Aug 2026<br /><br />
                                    • Maintained and customized <strong>ERP systems</strong> and e-commerce platforms based on client requirements.<br />
                                    • Developed and updated web applications using <strong>React, JavaScript, HTML, CSS, PHP, and MSSQL</strong>.<br />
                                    • Investigated and resolved software issues while providing production support for business systems.
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
                            <div className="skill-item"><span className="skill-icon">⚛️</span><div className="skill-name">React / React Native</div></div>
                            <div className="skill-item"><span className="skill-icon">🌐</span><div className="skill-name">JavaScript</div></div>
                            <div className="skill-item"><span className="skill-icon">🎨</span><div className="skill-name">HTML / CSS</div></div>
                            <div className="skill-item"><span className="skill-icon">🧩</span><div className="skill-name">ASP (VBScript)</div></div>
                            <div className="skill-item"><span className="skill-icon">🗄️</span><div className="skill-name">MSSQL (Microsoft SQL Server)</div></div>
                            <div className="skill-item"><span className="skill-icon">🖥️</span><div className="skill-name">PHP</div></div>
                            <div className="skill-item"><span className="skill-icon">🛠️</span><div className="skill-name">Node.js</div></div>
                            <div className="skill-item"><span className="skill-icon">🔥</span><div className="skill-name">Firebase</div></div>
                            <div className="skill-item"><span className="skill-icon">🖌️</span><div className="skill-name">UI/UX Design</div></div>
                            <div className="skill-item"><span className="skill-icon">📱</span><div className="skill-name">Swift</div></div>
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
                                    <img src={`${process.env.PUBLIC_URL}/images/ct_logo.png`} alt="Culture & Trip App Logo" className="project-logo-ct" />
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
                                    <img src={`${process.env.PUBLIC_URL}/images/dm_logo.png`} alt="Diary Music App Logo" className="project-logo-dm" />
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
                        <a href="https://github.com/SAE-A" target="_blank" rel="noreferrer">https://github.com/SAE-A</a>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
