import React from "react";
import { Menu, Avatar } from "@mantine/core";
import { User, BriefcaseBusiness, LogOut, LayoutDashboard } from "lucide-react";
import { logout } from "../redux/slices/LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileDropdown({ role }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  const renderItemBasedOnRole = (role) => {
    if (role === "user") {
      return (
        <Menu.Item leftSection={<BriefcaseBusiness className="text-gray-600" size={18} />}>
          My Applications
        </Menu.Item>
      );
    } else if (role === "admin") {
      return (
        <Menu.Item leftSection={<LayoutDashboard className="text-gray-600" size={18} />}>
          Dashboard
        </Menu.Item>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="relative">
      <Menu shadow="md" width={200} position="bottom-end" transition="pop-top-right">
        <Menu.Target>
          <Avatar
            className="cursor-pointer border-2 border-gray-300 hover:scale-105 transition-transform duration-200"
            src={null}
            alt="User Avatar"
            radius="xl"
            size="lg"
          />
        </Menu.Target>

        <Menu.Dropdown className="bg-white shadow-lg rounded-lg">
          <Menu.Label className="font-semibold text-gray-700">Account</Menu.Label>
          <Menu.Item leftSection={<User size={18} className="text-gray-600" />}>My Profile</Menu.Item>
          {renderItemBasedOnRole(role)}
          <Menu.Item onClick={handleLogout} color="red" leftSection={<LogOut size={24} />}>
            Log out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default ProfileDropdown;
