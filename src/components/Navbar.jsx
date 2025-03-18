import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="sticky top-0 flex flex-row bg-transparent overflow-hidden w-full border-b-2 border-b-slate-800 rounded-lg">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-8">
        {/* Navbar */}
        <nav className="flex justify-center">
          <ul className="flex flex-wrap items-center font-medium text-lg text-white drop-shadow-lg">
            <li className="p-4 lg:px-6 hover:text-gray-300 transition duration-300">
              <a href="#">Home</a>
            </li>
            <li className="p-4 lg:px-6 hover:text-gray-300 transition duration-300">
              <a href="#">Skills</a>
            </li>
            <li className="p-4 lg:px-6 hover:text-gray-300 transition duration-300">
              <a href="#">Project</a>
            </li>
            <li className="p-4 lg:px-6 hover:text-gray-300 transition duration-300">
              <a href="#">Experience</a>
            </li>
            <li className="p-4 lg:px-6 hover:text-gray-300 transition duration-300">
              <a href="#">Certifications</a>
            </li>

            
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
