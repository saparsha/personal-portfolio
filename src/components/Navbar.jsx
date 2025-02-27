import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/sapar-shayan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com/saparsha" target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer hover:text-gray-400 transition duration-300" />
          </a>
        </div>
    </nav>
  );
};

export default Navbar;