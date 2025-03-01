"use client";

import { useState, useEffect } from "react";
import {  Code2, Mail, ChevronDown, Linkedin, Menu, X } from "lucide-react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";



import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {TECKNOLOGIES, WALLPAPERS, YOUTUBE_LAST_VIDEOS, YOUTUBE_VIDEOS} from "@/app/utils/constants";

import Image from "next/image";
// import nextImage from '@/images/next.png';


export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };



  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side: Text (e.g., logo or name) */}
            <div className="text-orange-600 text-lg font-semibold">
                WanDerCode
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {["about", "experience", "youtube", "contact"].map((section) => (
                  <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize ${
                          activeSection === section
                              ? "text-white border-b-2 border-orange-600"
                              : "text-gray-300 hover:text-orange-500"
                      } transition-colors`}
                  >
                    {section}
                  </button>
              ))}
            </div>
          </div>

          {/* Mobile navigation menu */}
          {isMenuOpen && (
              <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm">
                <div className="px-4 py-2 space-y-2">
                  {["about", "experience", "youtube", "wallpapers", "contact"].map((section) => (
                      <button
                          key={section}
                          onClick={() => scrollToSection(section)}
                          className={`block w-full text-left px-4 py-2 capitalize ${
                              activeSection === section
                                  ? "text-white bg-gray-800"
                                  : "text-gray-300 hover:text-white hover:bg-gray-800"
                          } transition-colors rounded-md`}
                      >
                        {section}
                      </button>
                  ))}
                </div>
              </div>
          )}
        </div>
      </nav>

      <div>

      </div>


      {/* Main Content */}
      <div className="pt-16">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex-1">
                <img
                    src="/images/portret.png"
                    alt="Profile"
                    className="object-cover mx-auto shadow-xl rounded-2xl w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Software Engineer</h1>
                <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 ml-40">&</h1>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Content Creator</h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  I'm a Web Developer & Content Creator passionate about building modern, high-performance web applications. With expertise in React, Next.js, and JavaScript, I create sleek, responsive user experiences.
                  Beyond coding, I share insights through YouTube videos and tech content, helping developers sharpen their skills. Let's build something awesome together!                 </p>
                <div className="flex gap-4 mt-8 justify-center md:justify-start">
                  <Button variant="outline" size="icon" onClick={() => window.location.href = "https://github.com/sukiasyan"}>
                    <FaGithub className="h-5 w-5 text-gray-800 hover:text-orange-500" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.location.href = "https://www.linkedin.com/in/hakob-sukiasyan/"}>
                    <Linkedin className="h-5 w-5 text-gray-800 hover:text-orange-500" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.location.href = "https://www.youtube.com/@HakSukiasyan"}>
                    <FaYoutube className="h-5 w-5 text-gray-800 hover:text-orange-500" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Experience Section */}
        <section id="experience" className="h-auto flex items-center justify-center bg-gray-800 py-20">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Technologies I Work With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {TECKNOLOGIES.map((tech) => (
                  <Card key={tech.label} className="p-4 md:p-6 text-center bg-gray-200 border-gray-700">
                    <Image
                        src={`/images/${tech.icon}`}
                        alt=""
                        width={50}
                        height={50}
                        className="rounded-full mx-auto mb-4 shadow-lg"
                    />
                    <p className="font-semibold text-sm md:text-base">{tech.label}</p>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section id="youtube" className="h-auto flex items-center justify-center py-20">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold items-center justify-center py-20">My Youtube Channel</h2>
            </div>
            {/* First Row: Text and Latest Video */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* First Column: Text Content */}
              <div className="space-y-6">
                <h3 className="md:text-3xl ">Channel Focus</h3>
                <p className="text-lg text-gray-300 pt-4">
                  Helping developers level up their skills with practical insights, real-world coding examples, and industry best practices.
                </p>
              <p>  What You’ll Learn:</p>
                <ul className="text-gray-300 space-y-2">
                  <li>•Modern Web & Full-stack Development</li>
                  <li>• Scalable System Design & Architecture</li>
                  <li>•Productivity Hacks for Developers</li>
                  <li>• Code Reviews & Best Practices</li>
                </ul>
                <p>Join me on this journey to become a better developer!</p>
                <a
                    href="https://youtube.com/your-channel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-800 transition-colors"
                >
                  Visit My Channel
                </a>
              </div>

              {/* Second Column: Latest Video Card */}
              <div className="space-y-6 flex flex-col items-end">
              <a
                  href={YOUTUBE_LAST_VIDEOS.url}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <h3 className=" md:text-3xl  mb-12 ">Featured Videos</h3>
                <Card className="overflow-hidden bg-gray-800 border-gray-700 w-fit">
                  <img
                      src={YOUTUBE_LAST_VIDEOS.thumbnail}
                      alt={YOUTUBE_LAST_VIDEOS.title}
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-300 text-white transition-colors text-sm md:text-base">
                      {YOUTUBE_LAST_VIDEOS.title}
                    </h3>
                  </div>
                </Card>
              </a>
              </div>
            </div>

            {/* Second Row: Featured Videos Grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pt-16">
              {YOUTUBE_VIDEOS.map((video, index) => (
                  <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                  >
                    <Card className="overflow-hidden bg-gray-800 border-gray-700 w-full max-w-[320px] mx-auto">
                      <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold group-hover:text-blue-300 text-white transition-colors text-sm md:text-base">
                          {video.title}
                        </h3>
                      </div>
                    </Card>
                  </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-[600px] flex items-center justify-center bg-gray-700">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Get in Touch</h2>
            <div className="flex flex-col  gap-6">
              <div className="flex items-center gap-4">
                Open for freelance opportunities and collaborations.
                Or just lets have a <FaCoffee className="text-orange-600 text-2xl"/> and chat.
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                <a href="mailto:your.email@example.com" className="text-lg md:text-xl hover:text-white transition-colors">
                  s.hakob@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationDot className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                  The Hague, The Netherlands
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-gray-800 hover:text-red-800" onClick={()=> window.location.href = "https://github.com/sukiasyan"}>
                  <FaGithub className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-gray-800 hover:text-red-800" onClick={()=> window.location.href = "https://www.linkedin.com/in/hakob-sukiasyan/"}>
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-gray-800 hover:text-red-800" onClick={()=> window.location.href = "https://www.youtube.com/@HakSukiasyan"}
                >
                  <FaYoutube className="h-5 w-5 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
