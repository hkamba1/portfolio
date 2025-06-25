"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Database,
  Cloud,
  Award,
  Calendar,
  GraduationCap,
  Briefcase,
  User,
  Home,
  FolderOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Education", href: "#education", icon: GraduationCap },
]

const skills = {
  languages: ["Python", "JavaScript", "Java", "C++", "Go", "R", "Shell Script", "Redis", "YAML"],
  databases: ["MySQL", "PostgreSQL", "Cassandra DB", "Maria DB", "Firebase", "MongoDB", "PL/SQL"],
  frameworks: [
    "Flask",
    "Node JS",
    "Express JS",
    "Spring Boot",
    "Django",
    "Docker",
    "Ansible",
    "Fast API",
    "PyTorch",
    "Pandas",
    "NumPy",
    "NLTK",
  ],
  tools: [
    "Elasticsearch",
    "Dramatiq",
    "Git",
    "TensorFlow",
    "Keras",
    "JIRA",
    "Confluence",
    "Power BI",
    "Tableau",
    "Excel",
    "CDN",
  ],
  cloud: [
    "AWS (EC2, S3, Lambda, SageMaker, Athena, Redshift)",
    "Azure",
    "GCP",
    "Snowflake",
    "Apache Airflow",
    "Spark",
    "Kafka",
    "Hadoop",
  ],
}

const experiences = [
  {
    company: "Nissan, USA",
    role: "Full Stack Developer",
    period: "Jun 2024 - Current",
    achievements: [
      "Participated in the full Software Development Life Cycle (SDLC) using Agile methodology (SCRUM)",
      "Created responsive user interfaces with HTML, CSS, jQuery, JavaScript, and Angular.js",
      "Built backend services using Spring MVC and Spring Boot with Spring Security frameworks",
      "Deployed Spring web services on AWS using Docker containers within Docker Swarm cluster",
    ],
  },
  {
    company: "Sodexo, USA",
    role: "Full Stack Developer Intern",
    period: "Dec 2022 - May 2024",
    achievements: [
      "Achieved 80% reduction in processing time for large datasets through data extraction scripts",
      "Engineered backend infrastructure using Express, PostgreSQL, and AWS EC2 with Redis cache",
      "Developed microservices-based applications utilizing Spring Boot and Spring Cloud",
      "Led development of Mobihealth mobile application, improving user satisfaction by 25%",
    ],
  },
  {
    company: "Cognizant, INDIA",
    role: "Full Stack Developer",
    period: "Apr 2019 - Aug 2022",
    achievements: [
      "Created NLP solution achieving 5x reduction in response time with 95% accuracy",
      "Designed 20+ interactive data visualization dashboards using Power BI",
      "Engineered comprehensive database schema using SQL and React JS",
      "Reduced GPU costs by 80% through automated monitoring implementation",
      "Saved $100,000 across 20 cluster deployments through AWS optimization",
    ],
  },
]

const projects = [
  {
    name: "Carpool",
    description:
      "Car Pool app that matches users with drivers based on destination proximity, optimizing ride-sharing by listing drivers heading in the same direction.",
  },
  {
    name: "Code 4 Share",
    description:
      "1-to-1 video sharing platform with integrated text editor functionalities, enabling seamless interviews and real-time collaboration.",
  },
  {
    name: "ManageMe",
    description:
      "Application enabling users to monetize social media accounts like Telegram and Discord with automated subscription management and role assignment.",
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
              HKA
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      activeSection === item.href.substring(1)
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20" style={{ y }}>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </motion.div>

        <div className="text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.8)",
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Hari Krishna Amba
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-purple-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Franklin, TN</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>harikrishnaamba@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(607) 235-8481</span>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="text-blue-400" size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="text-gray-300" size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="text-white" size={32} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Experienced Full Stack developer with 5 years in scalable microservices architecture using Python,
                  Java, and Node.js. Proficient in designing GraphQL/REST APIs, implementing cloud solutions with AWS,
                  and optimizing database performance. Strong in DevOps practices, enhancing server-side security, and
                  collaborating within Agile teams for continuous integration and deployment. Skilled in building
                  responsive user interfaces with React and Angular, ensuring seamless user experiences across devices.
                  Committed to leveraging best practices in coding, testing, and documentation to deliver high-quality
                  software solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-purple-300 text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-purple-600/20 text-purple-300 border-purple-400">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-300 flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-purple-400 mr-2">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white capitalize flex items-center">
                      {category === "languages" && <Code className="mr-2" size={20} />}
                      {category === "databases" && <Database className="mr-2" size={20} />}
                      {category === "cloud" && <Cloud className="mr-2" size={20} />}
                      {!["languages", "databases", "cloud"].includes(category) && <Award className="mr-2" size={20} />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-400/50">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">M.S. in Computer Science</CardTitle>
                  <CardDescription className="text-purple-300">
                    Binghamton University | GPA: 3.43 / 4.00
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="bg-purple-600/20 text-purple-300 border-purple-400">
                    Aug 2022 – May 2024
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">B.Tech. in Electrical & Electronics</CardTitle>
                  <CardDescription className="text-purple-300">J.N.T.U Anantapur | GPA: 7.51 / 10.00</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="bg-purple-600/20 text-purple-300 border-purple-400">
                    Aug 2015 – May 2019
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>

          <div className="space-y-6">
            {[
              'Secured 1st place for "Most Creative Use of Redis Cloud" at HackNJIT Oct 2023',
              "Two-time Chess Comp winner at PRAVAH (2015-2018) | Leetcode Global Top 20% Developer",
              "Led a team of ~4 Developers over the course of various projects and Hackathons",
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Award className="text-yellow-400 mr-3" size={24} />
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to bring innovative solutions to your team. Let's discuss how we can work together.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a href="mailto:harikrishnaamba@gmail.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  <Mail className="mr-2" size={20} />
                  Email Me
                </Button>
              </motion.a>

              <motion.a href="tel:(607)235-8481" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="bg-transparent border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3"
                >
                  <Phone className="mr-2" size={20} />
                  Call Me
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Hari Krishna Amba. Built with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}
