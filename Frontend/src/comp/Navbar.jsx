
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown.jsx";

export default function Navbar() {
  const [connectDropdownOpen, setConnectDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const connectDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const location = useLocation();
  const { role } = useSelector((state) => state.auth);

 
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        connectDropdownRef.current &&
        !connectDropdownRef.current.contains(event.target)
      ) {
        setConnectDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="">
      <nav className="flex items-center justify-between h-20 px-6 bg-white border-b shadow-md">
       
        <div className="flex gap-6">
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
            ref={servicesDropdownRef}
          >
            <button className="flex items-center gap-1">
              SERVICES <FaChevronDown />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute left-0 z-20 w-40 mt-2 bg-gray-600 border rounded-md shadow-md t">
                <DropdownItem title="Shirodhara"  />
                <DropdownItem title="Acupressure" />
                <DropdownItem title="Stream Bath" />
              </div>
            )}
          </div>
          <NavItem title="TESTIMONIALS" />
        </div>

        {/* Center */}
        <div className="text-2xl font-bold text-green-900">HOME</div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <NavItem title="ABOUT" />
          <div className="relative" ref={connectDropdownRef}>
            <button
              className="flex items-center gap-1"
              onClick={() => setConnectDropdownOpen((prev) => !prev)}
            >
              CONNECT <FaChevronDown />
            </button>
            {connectDropdownOpen && (
              <div className="absolute right-0 z-20 w-40 mt-2 bg-gray-600 border rounded-md shadow-md">
                <DropdownItem title="Facebook" />
                <DropdownItem title="Twitter" />
                <DropdownItem title="LinkedIn" />
              </div>
            )}
          </div>

       
          {role === "user" &&  (
            <>
              <nav>
                <Link
                  to="/postDetails"
                  className="font-medium text-gray-700 transition-all duration-150 text-md hover:underline"
                > UserDetails
                </Link>
              </nav>
              <nav>
                <Link
                  to="/profile"
                  className="font-medium text-gray-700 transition-all duration-150 text-md hover:underline"
                >
                  Profile
                </Link>
              </nav>
            </>
          )}



          
          {role === "admin" &&  (
            <>
              <nav>
                <Link
                  to="/dashboard"
                  className="font-medium text-gray-700 transition-all duration-150 text-md hover:underline"
                >
                  Dashboard
                </Link>
              </nav>
              <nav>
                <Link
                  to="/therepyform"
                  className="font-medium text-gray-700 transition-all duration-150 text-md hover:underline"
                >
                  TherepyForm
                </Link>
              </nav>
            </>
          )}




















          

          {role === null &&
            location.pathname !== "/reg" &&
            location.pathname !== "/login" && (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="px-5 py-2 text-white transition-all duration-200 ease-in-out bg-green-500 rounded-full hover:bg-green-600 hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/reg"
                  className="px-5 py-2 text-white transition-all duration-200 ease-in-out bg-red-500 rounded-full hover:bg-red-600 hover:scale-105"
                >
                  Register
                </Link>
              </div>
            )}

          {location.pathname === "/reg" && (
            <span>
              Already Registered?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Login
              </Link>
            </span>
          )}

          {role && (
            <nav>
              <ProfileDropdown role={role} />
            </nav>
          )}
        </div>
      </nav>
    </header>
  );
}

function NavItem({ title }) {
  return <button className="hover:text-green-700">{title}</button>;
}

function DropdownItem({ title }) {
  return (
    <div className="px-4 py-2 cursor-pointer hover:bg-gray-100">{title}</div>
  );
}

