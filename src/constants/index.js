import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import movie1 from "../assets/projects/react-movie.png";

export const HERO_CONTENT = `I love building things, whether it's coding an AI project, experimenting with new ideas, or creating something from scratch. I enjoy problem-solving and figuring out how things work, which is what drew me to coding in the first place. I graduated from the University of Denver with a Computer Science degree, and I’m always looking to grow my skills and take on new challenges. I’m originally from Kazakhstan, and my roots have shaped my perspective and drive to innovate. At the end of the day, I just enjoy creating, learning, and bringing ideas to life.`;

export const EXPERIENCES = [
  {
    year: "September 2024 - February 2025",
    role: "Software Engineer",
    company: "Stealth",
    description: `Developed and integrated an AI chat assistant using LiveKit and OpenAI’s GPT, boosting user engagement by 25%. Contributed to full-stack development and QA efforts, reducing post-release defects by 15%. Led cold outreach campaigns, increasing beta testing participation by 30% and collecting key user insights.`,
    technologies: ["Python", "LiveKit", "ChatGPT", "JavaScript", "Docker"],
  },
  {
    year: "June 2023 - August 2023",
    role: "Full Stack Software Engineer Intern",
    company: "Sovrn",
    description: `Built an internal admin tool that allowed non-technical team members to modify backend values without needing to code. Designed a simple, user-friendly table interface, which boosted admin productivity by 100% and freed up software engineers to focus on higher-priority tasks.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "SQL", "Docker"],
  },
];

export const PROJECTS = [
  {
    title: "Movie Application",
    image: movie1,
    description:
      "I built this movie app using React for the frontend, Appwrite for backend services, and TailwindCSS for styling. It connects to the TMDB API so users can search for movies, see what's trending, and explore details. The design is clean, responsive, and works well on any device.",
    technologies: ["JavaScript", "CSS", "TailWind", "Appwrite", "React"],
    link: "https://react-movie-app-mu-opal.vercel.app",
  },
  {
    title: "Python AI Voice Assistant",
    image: project1,
    description:
      "The assistant has capabilities to interact with a database and call Python functions.",
    technologies: ["JavaScript", "Python", "OpenAI", "LiveKit", "HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Predict Soccer Game Winners",
    image: project3,
    description:
      "Predict the winner of football matches in the English Premier League.",
    technologies: ["JupyerLab", "Python"],
  },
];

export const CONTACT = {
  phoneNo: "+1(619)-955-3560",
  email: "sapar.shay@gmail.com",
};
