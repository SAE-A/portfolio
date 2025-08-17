// src/pages/Projects.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const projectData = [
  {
    id: "ct",
    category: "App",
    title: "Culture & Trip: AI-Powered Travel Planner App",
    date: "Feb 2025 – Jun 2025",
    description: "A mobile travel planner application that uses AI to generate personalized travel itineraries, combining cultural events like performances with sightseeing, lodging, and flights. Users can input their travel goals and preferences, and the app suggests a complete travel plan centered around cultural experiences.",
    logo: `${process.env.PUBLIC_URL}/images/ct_logo.png`,
    links: [
      { href: "https://github.com/ewnsong17/capstone2025_front", label: "GitHub (Frontend)" },
      { href: "https://github.com/ewnsong17/capstone2025_back", label: "GitHub (Backend)" },
      { href: "https://www.youtube.com/shorts/37vlsblHvTU", label: "Demo Video" },
    ],
    contribution: "* Team lead: UI design + frontend, AI-powered chat integration."
  },
  {
    id: "ov",
    category: "App",
    title: "OWN VOICE: Personal Voice Diary & Pronunciation Trainer",
    date: "Mar 2025 – Jun 2025",
    description: "A mobile application built with Swift in Xcode that helps users improve their pronunciation while keeping a voice diary. Users can record their voice, convert it to text automatically, and practice speaking with AI-based pronunciation feedback. The app also offers helpful vocal training tips to enhance vocal clarity and accuracy.",
    logo: `${process.env.PUBLIC_URL}/images/ov_logo.png`,
    links: [
      { href: "https://github.com/SAE-A/own-voice", label: "GitHub" },
      { href: "https://www.youtube.com/watch?v=IFuNeFWWp_U", label: "Demo Video" },
    ],
    contribution: "* Sole developer: UI, recording, transcription, AI feedback."
  },
  {
    id: "ip",
    category: "Web",
    title: "Investment Techniques Planner (IT + P)",
    date: "Sep 2024 – Dec 2024",
    description: "A web application that helps users manage household books, develop savings plans, and calculate the amount to achieve bucket list goals. It features income and expense tracking with monthly summaries, calculates available future funds based on lifespan and savings, helps users plan for bucket list goals with monthly saving targets, and provides curated financial study materials in areas like news, stocks, and real estate.",
    logo: `${process.env.PUBLIC_URL}/images/itp_logo.png`,
    links: [
      { href: "https://github.com/WFW-ITP/ITP", label: "GitHub" },
      { href: "/videos/itp_video.mp4", label: "Demo Video" },
    ],
    contribution: "* Team leader: planning, presentation, frontend development."
  },
  {
    id: "dm",
    category: "App",
    title: "Diary Music: Emotion-Based Music Recommendation App",
    date: "Sep 2024 – Dec 2024",
    description: "A mobile application that recommends personalized music based on the user's daily reflections and photos. Designed for users to unwind at the end of the day, the app allows them to briefly review their day, upload a photo and a journal entry, and receive music suggestions that match their mood.",
    logo: `${process.env.PUBLIC_URL}/images/dm_logo.png`,
    links: [
      { href: "https://github.com/SAE-A/DiaryMusic", label: "GitHub" },
      { href: "https://www.youtube.com/watch?v=H-qP-R8akSA", label: "Demo Video" },
    ],
    contribution: "* Team lead: UI planning, Genie Music API integration, Heart List feature."
  },
  {
    id: "mc",
    category: "App",
    title: "Music Note Craft (Mute Craft)",
    date: "Sep 2024 – Dec 2024",
    description: "The app supports real-time recording and sound merging between two clients. Users can record, combine, play, reset, and save their musical creations. It features a metronome for tempo control, and various instruments such as piano and acoustic/electric guitar that play sounds on button clicks.",
    logo: `${process.env.PUBLIC_URL}/images/mc_logo.png`,
    links: [
      { href: "https://github.com/SAE-A/MuteCraft", label: "GitHub" },
      { href: "/videos/mc_video.mp4", label: "Demo Video" },
    ],
    contribution: "* 2-person team: core features like piano UI and recording (Java)."
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projectData : projectData.filter(p => p.category === filter);

  return (
    <div>
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title black-accent">PROJECT SHOWCASE</h2>

          {/* Filter Buttons */}
          <div className="project-filter-buttons" style={{ marginBottom: "20px" }}>
            {["All", "Web", "App"].map(cat => (
              <button
                key={cat}
                className={`btn btn-pink ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
                style={{ marginRight: "10px" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="project-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-logo-wrapper">
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className={`project-logo-${project.id}`}
                  />
                </div>
                <h3>{project.title}</h3>
                <p className="project-date">{project.date}</p>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.links.map(link => (
                    <a href={link.href} target="_blank" rel="noreferrer" className="project-link" key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </div>
                <p className="contribution-note">{project.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
