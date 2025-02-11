"use client";

import { useState, useEffect } from "react";
import { Youtube, Code2, Image, Mail, ChevronDown, Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {TECKNOLOGIES, WALLPAPERS, YOUTUBE_VIDEOS} from "@/app/utils/constants";

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
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {["about", "experience", "youtube", "wallpapers", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? "text-white border-b-2 border-white"
                      : "text-gray-300 hover:text-white"
                  } transition-colors`}
                >
                  {section}
                </button>
              ))}
            </div>
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
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Profile"
                  className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-xl"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Software Engineer & Content Creator</h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Passionate about building exceptional software solutions and sharing knowledge through content creation. 
                  With expertise in full-stack development and a keen eye for design, I create impactful digital experiences.
                </p>
                <div className="flex gap-4 mt-8 justify-center md:justify-start">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <ChevronDown className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Technologies I Work With</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {TECKNOLOGIES.map((tech) => (
                <Card key={tech} className="p-4 md:p-6 text-center bg-gray-200 border-gray-700">
                  <Code2 className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 md:mb-4" />
                  <p className="font-semibold text-sm md:text-base">{tech}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section id="youtube" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Featured Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {YOUTUBE_VIDEOS.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="overflow-hidden bg-gray-800 border-gray-700">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-white transition-colors text-sm md:text-base">
                        {video.title}
                      </h3>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Wallpapers Section */}
        <section id="wallpapers" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">My Wallpapers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {WALLPAPERS.map((wallpaper, index) => (
                <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700">
                  <img
                    src={wallpaper}
                    alt={`Wallpaper ${index + 1}`}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Get in Touch</h2>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
                <a href="mailto:your.email@example.com" className="text-lg md:text-xl hover:text-white transition-colors">
                  your.email@example.com
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Youtube className="h-5 w-5 mr-2" />
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