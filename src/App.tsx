import { motion } from "framer-motion"; 
import { 
  SiCplusplus, 

  SiSwift, 

  SiJavascript, 

  SiHtml5, 

  SiXcode, 

  SiNodedotjs, 

  SiCss 

} from "react-icons/si"; 

import { FaJava, FaGitAlt } from "react-icons/fa"; 
import { VscVscode } from "react-icons/vsc"; 
import { FiCode, FiCpu } from "react-icons/fi"; 
import { FiMail } from "react-icons/fi";
import { FaGithub, FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


function App() { 
  const [menuOpen, setMenuOpen] = useState(false);
  const card = 
    "group bg-slate-800/80 backdrop-blur border border-white/10 rounded-xl shadow-lg shadow-black/40 hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"; 
  const techCard = 
    "group bg-slate-800/80 backdrop-blur border border-white/10 rounded-lg p-5 flex flex-col items-center gap-2 shadow-lg shadow-black/40 hover:bg-slate-700/80 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300"; 
  return ( 
<div className="min-h-[100dvh] overflow-x-hidden bg-gradient-to-br from-[#020617] via-[#020617] to-[#1e1b4b] text-white">
<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]"></div>
 
{/* NAVBAR */}

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700/40">

<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

<h1 className="font-bold text-xl">
RA<span className="text-cyan-400">.</span>
</h1>

{/* Desktop Menu */}

<div className="hidden md:flex gap-8 text-sm">
<a href="#about" className="hover:text-cyan-400">About</a>
<a href="#skills" className="hover:text-cyan-400">Skills</a>
<a href="#projects" className="hover:text-cyan-400">Projects</a>
<a href="#experience" className="hover:text-cyan-400">Experience</a>
<a href="#beyond" className="hover:text-cyan-400">Beyond Coding</a>
<a href="#contact" className="hover:text-cyan-400">Contact</a>
</div>

{/* Mobile Hamburger */}

<button
className="md:hidden text-2xl"
onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? <FiX /> : <FiMenu />}
</button>

</div>

{/* Mobile Dropdown */}

{menuOpen && (
<div className="md:hidden bg-slate-900 border-t border-slate-700/40 px-6 pb-6 flex flex-col gap-4">

<a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
<a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
<a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a>
<a href="#experience" onClick={()=>setMenuOpen(false)}>Experience</a>
<a href="#beyond" onClick={()=>setMenuOpen(false)}>Beyond Coding</a>
<a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>

</div>
)}

</nav>

{/* HERO */}
<section className="relative pt-24 md:pt-40 pb-20 md:pb-32">

  {/* glow background */}
  <div className="pointer-events-none absolute top-32 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

  <div className="max-w-6xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-start max-w-4xl"
    >

      <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/60 backdrop-blur text-cyan-400 text-sm font-medium">
        <span>&gt;_</span>
        Hello, World!
      </div>

      <h1 className="text-5xl md:text-[90px] font-bold mb-6 leading-[1.05]">
        I'm <span className="text-cyan-400">Robert Arroyo</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
        Computer Science Student & Software Developer
      </h2>

      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
        I enjoy building software, experimenting with technology,
        and creating content. Constantly learning and pushing
        the boundaries of what I can create.
      </p>

      <div className="flex flex-wrap gap-4">

        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-400 hover:-translate-y-1 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-cyan-400 hover:-translate-y-1 transition"
        >
          Contact Me
        </a>

      </div>

    </motion.div>
  </div>
</section>

{/* ABOUT */}
<motion.section
  id="about"
  className="bg-slate-900 border-t border-slate-700/40 py-24"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-10">About Me</h2>

    <div className="grid md:grid-cols-2 gap-12">

      <div>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          I am a junior computer science student deeply interested in software development,
          iOS development, and the ever-evolving world of technology.
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div className={`${card} p-6`}>
            <FiCode size={32} className="text-cyan-400 mb-3 group-hover:scale-110 transition"/>
            <h3 className="font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400 text-sm">
              Writing maintainable and efficient solutions.
            </p>
          </div>

          <div className={`${card} p-6`}>
            <FiCpu size={32} className="text-purple-400 mb-3 group-hover:scale-110 transition"/>
            <h3 className="font-semibold mb-2">Tech Driven</h3>
            <p className="text-gray-400 text-sm">
              Always exploring new frameworks and tools.
            </p>
          </div>

        </div>
      </div>

      <div className={`${card} p-10 flex flex-col items-center justify-center`}>
        <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-6">
          &gt;_
        </div>

        <h3 className="text-xl font-semibold">Student & Builder</h3>

        <p className="text-gray-400 text-sm mt-2">
          Turning caffeine into code since year one.
        </p>
      </div>

    </div>
  </div>
</motion.section>

{/* TECH STACK */}

<section id="skills" className="py-32 border-t border-slate-700/40">

<motion.div
className="max-w-6xl mx-auto px-6"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true, margin: "-100px" }}
>

<h2 className="text-4xl font-bold mb-16 text-center">
Tech Stack
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* LANGUAGES */}

<div className={`${card} p-8`}>

<h3 className="text-lg font-semibold mb-6 text-gray-200">
Languages
</h3>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6">

<div className={techCard}>
<SiCplusplus size={34} className="text-blue-400 group-hover:scale-110 transition"/>
C++
</div>

<div className={techCard}>
<FaJava size={34} className="text-red-400 group-hover:scale-110 transition"/>
Java
</div>

<div className={techCard}>
<SiSwift size={34} className="text-orange-400 group-hover:scale-110 transition"/>
Swift
</div>

<div className={techCard}>
<SiJavascript size={34} className="text-yellow-400 group-hover:scale-110 transition"/>
JavaScript
</div>

<div className={techCard}>
<SiHtml5 size={34} className="text-orange-500 group-hover:scale-110 transition"/>
HTML
</div>

<div className={techCard}>
<SiCss size={34} className="text-blue-500 group-hover:scale-110 transition"/>
CSS
</div>

</div>
</div>

{/* TOOLS */}

<div className={`${card} p-8`}>

<h3 className="text-lg font-semibold mb-6 text-gray-200">
Tools & Environments
</h3>

<div className="grid grid-cols-2 gap-6">

<div className={techCard}>
<FaGitAlt size={34} className="text-orange-500 group-hover:scale-110 transition"/>
Git
</div>

<div className={techCard}>
<VscVscode size={34} className="text-blue-500 group-hover:scale-110 transition"/>
VS Code
</div>

<div className={techCard}>
<SiXcode size={34} className="text-blue-400 group-hover:scale-110 transition"/>
Xcode
</div>

<div className={techCard}>
<SiNodedotjs size={34} className="text-green-500 group-hover:scale-110 transition"/>
Node.js
</div>

</div>
</div>

</div>

</motion.div>

</section>

{/* PROJECTS */}

<motion.section
id="projects"
className="bg-slate-900 border-t border-slate-700/40 py-32"
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

<motion.div
className="grid md:grid-cols-2 gap-10"
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={{
visible: {
transition: {
staggerChildren: 0.15
}
}
}}
>

{[
{
img:"budgetapp.png",
title:"Budget Tracker App",
desc:"A budgeting app built with Swift that helps users track expenses, manage deposits and deductions, and maintain better control over their personal finances.",
tech:["Swift","iOS","CoreData"]
},
{
img:"flacapp.png",
title:"FLAC iOS Player",
desc:"High-quality music player designed for iOS that supports lossless FLAC audio playback. The app delivers rich, detailed sound while maintaining an intuitive and modern interface. Users can easily manage their music library, enjoy seamless playback, and experience studio-quality audio directly from their device.",
tech:["Swift","iOS","Audio"]
},
{
img:"mariohack.jpg",
title:"Super Mario 64 Horror ROM Hack",
desc:"Custom horror-themed modification of Super Mario 64 that redesigns environments and gameplay elements to create a darker and more suspenseful experience.",
tech:["C","Assembly","Game Modding"],
demo:"https://www.tiktok.com/@irob_27/video/7581801434375621918?is_from_webapp=1&sender_device=pc&web_id=7616207936117573150"
},
{
img:"currentprojects.jpeg",
title:"Current Projects",
desc:"Developing experimental web applications and audio software that explore new ideas in user interaction, sound processing, and creative digital experiences.",
tech:["React","Swift","Node.js"]
}
].map(project => (

<motion.div
key={project.title}
className={`${card} overflow-hidden`}
variants={{
hidden: { opacity: 0, y: 50 },
visible: { opacity: 1, y: 0 }
}}
transition={{ duration: 0.6 }}
>

<img
src={`/projects/${project.img}`}
className="h-60 w-full object-cover brightness-90"
/>

<div className="p-6">

<h3 className="text-2xl font-semibold mb-2">
{project.title}
</h3>

<p className="text-gray-400 mb-4">
{project.desc}
</p>

<div className="flex items-center justify-between mt-4">

<div className="flex gap-3 text-sm text-cyan-400">
{project.tech.map(t => (
<span key={t}>{t}</span>
))}
</div>

{project.demo && (
<a
href={project.demo}
target="_blank"
rel="noopener noreferrer"
className="text-sm text-cyan-400 hover:text-cyan-300 font-medium"
>
Watch Demo →
</a>
)}

</div>

</div>

</motion.div>

))}

</motion.div>

</div>

</motion.section>

{/* EXPERIENCE */}

<motion.section
id="experience"
className="bg-slate-900/40 border-t border-slate-700/40 py-24"
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16">
Education
</h2>

<div className="relative space-y-16">

{/* timeline line */}
<div className="absolute left-3 top-0 bottom-0 w-[2px] bg-cyan-400/30"></div>


{/* EDUCATION - UHCL */}

<div className="relative pl-14">

<div className="absolute left-3 -translate-x-1/2 top-4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>

<div className={`${card} p-6`}>

<div className="flex justify-between items-start">

<h3 className="text-xl font-bold font-semibold">
B.S. Computer Information Systems
</h3>

<span className="text-sm text-gray-400">
Expected Graduation: 2027
</span>

</div>

<p className="text-cyan-400 mb-3">
University of Houston – Clear Lake
</p>

<p className="text-gray-400">
Pursuing a Bachelor's degree in Computer Information Systems with a focus on software development. 
<br></br>
<strong>Relevant coursework: </strong>
<br></br>
• Data Structures • Algorithims • Software Development • Object Oriented Programming
</p>

</div>

</div>


{/* EDUCATION - SAN JACINTO */}

<div className="relative pl-14">

<div className="absolute left-3 -translate-x-1/2 top-4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>

<div className={`${card} p-6`}>

<div className="flex justify-between items-start">

<h3 className="text-xl font-semibold">
Associate Degree
</h3>

<span className="text-sm text-gray-400">
2016 – 2022
</span>

</div>

<p className="text-cyan-400 mb-3">
San Jacinto Community College
</p>

<p className="text-gray-400">
Completed an associate degree before transferring to the University of Houston–Clear Lake to pursue a Bavhelor's in Computer Information Systems.
</p>

</div>

</div>
<h2 className="text-4xl font-bold text-center mb-16">
Work Experience
</h2>

{/* T-Mobile */}

<div className="relative pl-14">

<div className="absolute left-3 -translate-x-1/2 top-4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>

<motion.div
className={`${card} p-6`}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>

<div className="flex justify-between items-start">

<h3 className="text-xl font-semibold">
Mobile Expert / Key Holder
</h3>

<span className="text-sm text-gray-400">
2019 – Present
</span>

</div>

<p className="text-cyan-400 mb-3">
T-Mobile
</p>

<p className="text-gray-400">
Assited customers with mobile device troubleshooting, software issues and technical support while helping manage daily store operations and team responsibilities.
</p>

</motion.div>

</div>


{/* Best Buy */}

<div className="relative pl-14">

<div className="absolute left-3 -translate-x-1/2 top-4 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>

<motion.div
className={`${card} p-6`}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>

<div className="flex justify-between items-start">

<h3 className="text-xl font-semibold">
Inventory Specialist
</h3>

<span className="text-sm text-gray-400">
2018 – 2020
</span>

</div>

<p className="text-cyan-400 mb-3">
Best Buy
</p>

<p className="text-gray-400">
Maintained accurate tracking of technical inventory and developed strong familiarity with consumer electronics and hardware systems.
</p>

</motion.div>

</div>

</div>

</div>

</motion.section>

 {/* BEYOND CODING */}

<motion.section
id="beyond"
className="bg-slate-900 border-t border-slate-700/40 py-24"
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-10">
Beyond Coding
</h2>

<p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
Outside of programming, I enjoy traveling and exploring new places. Traveling allows me to experience different environments, broadening my perspective and inspiring creativity that I bring back to my work.
Whether it's discovering hidden city gems or exploring natural landscapes, I find that sometimes stepping away is the best way to recharge.
</p>

<div className="grid md:grid-cols-2 gap-6">

{["travel1","travel2","travel3","travel4"].map(img => (
<motion.div
  key={img}
  className="rounded-xl overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

<img
  src={`/projects/${img}.jpg`}
  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
  loading="lazy"
/>

</motion.div>
))}

</div>

</div>

</motion.section>

{/* CONTACT */}

<motion.section
id="contact"
className="relative bg-slate-900/40 border-t border-white/10 py-20 md:py-28 overflow-hidden"
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{ once: true }}
>

{/* background glow */}
<div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

<div className="relative max-w-5xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-4">
Let's Connect
</h2>

<p className="text-lg md:text-xl text-gray-400 mb-14 leading-relaxed max-w-2xl mx-auto">
Whether you have a question, a project idea, or just want to say hi,
my inbox is always open.
</p>


{/* CONTACT CARD */}

<motion.div
className="bg-slate-900/40 backdrop-blur border border-white/10 rounded-xl p-10 max-w-xl mx-auto shadow-lg shadow-black/40 hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>

<h3 className="text-lg font-semibold mb-8 text-left">
Contact Info
</h3>


<div className="space-y-6">


{/* EMAIL */}

<motion.div
className="flex items-center gap-4"
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
>

<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400">
<FiMail />
</div>

<div className="text-left">
<p className="text-sm text-gray-400">Email</p>
<a
href="mailto:robertarroyo27@gmail.com"
className="hover:text-cyan-400 transition"
>
robertarroyo27@gmail.com
</a>
</div>

</motion.div>


{/* GITHUB */}

<motion.div
className="flex items-center gap-4"
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5, delay: 0.1 }}
viewport={{ once: true }}
>

<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400">
<FaGithub />
</div>

<div className="text-left">
<p className="text-sm text-gray-400">GitHub</p>
<a
href="https://github.com/Rob2700"
className="hover:text-cyan-400 transition"
>
github.com/Rob2700
</a>
</div>

</motion.div>


{/* TIKTOK */}

<motion.div
className="flex items-center gap-4"
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
viewport={{ once: true }}
>

<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400">
<FaTiktok />
</div>

<div className="text-left">
<p className="text-sm text-gray-400">TikTok</p>
<a
href="https://www.tiktok.com/@irob_27"
className="hover:text-cyan-400 transition">iRob_27
</a>
</div>


</motion.div>

</div>

</motion.div>

</div>

</motion.section>

{/* FOOTER */}

<footer className="border-t border-white/10 py-10">

<div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-400">

<div>
<p className="font-semibold text-white">
Robert Arroyo<span className="text-cyan-400">.</span>
</p>

<p>© 2026 All rights reserved.</p>
</div>

<div className="flex gap-6 text-lg">

<a
href="https://github.com/Rob2700"
className="hover:text-cyan-400 transition"
>
<FaGithub />
</a>

<a
href="https://www.tiktok.com/@irob_27"
className="hover:text-cyan-400 transition"
>
<FaTiktok />
</a>

<a
href="mailto:robertarroyo27@gmail.com"
className="hover:text-cyan-400 transition"
>
<FiMail />
</a>
</div>
</div>
</footer>
</div> 

  ); 

} 

export default App; 