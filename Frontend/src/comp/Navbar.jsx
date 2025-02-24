import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown.jsx";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between h-16 px-6">
      
        <div className="text-2xl font-bold text-green-900">HOME</div>

       
        <div className="hidden md:flex gap-6">
          <Dropdown
            title="SERVICES"
            isOpen={servicesDropdownOpen}
            setIsOpen={setServicesDropdownOpen}
            refProp={servicesDropdownRef}
            items={["Shirodhara", "Acupressure", "Stream Bath"]}
          />
          <NavItem title="TESTIMONIALS" />
          <NavItem title="ABOUT" />
          <Dropdown
            title="CONNECT"
            isOpen={connectDropdownOpen}
            setIsOpen={setConnectDropdownOpen}
            refProp={connectDropdownRef}
            items={["Facebook", "Twitter", "LinkedIn"]}
          />
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          {role === "user" && (
            <>
              <Link to="/postDetails" className="text-gray-700 hover:text-green-700">
                UserDetails
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-green-700">
                Profile
              </Link>
            </>
          )}
          {role === "admin" && (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-green-700">
                Dashboard
              </Link>
              <Link to="/therepyform" className="text-gray-700 hover:text-green-700">
                TherepyForm
              </Link>
            </>
          )}
          {!role && location.pathname !== "/reg" && location.pathname !== "/login" && (
            <div className="flex gap-3">
              <Link to="/login" className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600">
                Login
              </Link>
              <Link to="/reg" className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600">
                Register
              </Link>
            </div>
          )}
          {role && <ProfileDropdown role={role} />}
        </div>

       
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-100 py-4 space-y-4">
          <DropdownMobile title="SERVICES" items={["Shirodhara", "Acupressure", "Stream Bath"]} />
          <NavItem title="TESTIMONIALS" />
          <NavItem title="ABOUT" />
          <DropdownMobile title="CONNECT" items={["Facebook", "Twitter", "LinkedIn"]} />
          {role === "user" && (
            <>
              <Link to="/postDetails" className="text-gray-700 hover:text-green-700">
                UserDetails
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-green-700">
                Profile
              </Link>
            </>
          )}
          {role === "admin" && (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-green-700">
                Dashboard
              </Link>
              <Link to="/therepyform" className="text-gray-700 hover:text-green-700">
                TherepyForm
              </Link>
            </>
          )}
          {!role && location.pathname !== "/reg" && location.pathname !== "/login" && (
            <div className="flex flex-col items-center space-y-2">
              <Link to="/login" className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600">
                Login
              </Link>
              <Link to="/reg" className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600">
                Register
              </Link>
            </div>
          )}
          {role && <ProfileDropdown role={role} />}
        </div>
      )}
    </header>
  );
}

function NavItem({ title }) {
  return <button className="text-gray-700 hover:text-green-700">{title}</button>;
}

function Dropdown({ title, isOpen, setIsOpen, refProp, items }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={refProp}
    >
      <button className="flex items-center gap-1 text-gray-700 hover:text-green-700">
        {title} <FaChevronDown />
      </button>
      {isOpen && (
        <div className="absolute left-0 z-20 w-40 mt-2 bg-white border rounded-md shadow-md">
          {items.map((item, index) => (
            <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMobile({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-center">
      <button
        className="w-full py-2 text-gray-700 bg-gray-200 rounded-md"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title} <FaChevronDown />
      </button>
      {open && (
        <div className="mt-2 space-y-2">
          {items.map((item, index) => (
            <div key={index} className="py-2 text-gray-700">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
