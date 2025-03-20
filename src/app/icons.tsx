import { FaJava, FaDocker, FaGit, FaLinux, FaJenkins } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiTailwindcss, SiReact, SiJavascript, SiHtml5 } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import { ReactNode } from "react";

type Category = "Backend" | "Frontend" | "LLD" | "Tools";

const icon: Record<Category, Record<string, ReactNode>> = {
  Backend: {
    Java: <FaJava className="text-orange-600 text-2xl" />,
    "Spring Boot": <SiSpringboot className="text-green-500 text-2xl" />,
    "REST API": <MdApi className="text-blue-500 text-2xl" />,
    Maven: <FaJava className="text-red-500 text-2xl" />,
  },
  Frontend: {
    Javascript: <SiJavascript className="text-yellow-500 text-2xl" />,
    "React JS": <SiReact className="text-blue-400 text-2xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400 text-2xl" />,
    HTML: <SiHtml5 className="text-orange-500 text-2xl" />,
  },
  LLD: {
    "SOLID Design Principles": <DiAptana className="text-gray-500 text-2xl" />,
    "Three-Layer Architecture": <DiAptana className="text-gray-500 text-2xl" />,
  },
  Tools: {
    Jenkins: <FaJenkins className="text-blue-900 text-2xl" />,
    Docker: <FaDocker className="text-blue-500 text-2xl" />,
    PostgreSQL: <SiPostgresql className="text-blue-700 text-2xl" />,
    Linux: <FaLinux className="text-gray-500 text-2xl" />,
    Git: <FaGit className="text-red-500 text-2xl" />,
  },
};

export default icon;
