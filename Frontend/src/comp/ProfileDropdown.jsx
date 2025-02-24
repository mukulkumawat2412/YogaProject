import React from 'react'
import { Menu, Avatar} from '@mantine/core';
import { User,BriefcaseBusiness ,LogOut ,LayoutDashboard } from 'lucide-react';
import { logout } from '../redux/slices/LoginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProfileDropdown({role}) {

const dispatch = useDispatch();

const navigate = useNavigate()

  const handleLogout = async() => {
    await dispatch(logout());
    navigate('/login');
  };


  const renderItemBasedOnRole = (role) => {
    if(role === 'user'){
      return <Menu.Item  leftSection={<BriefcaseBusiness className='text-white' size={18}/>}>My Applications</Menu.Item>
    }else if(role === 'admin'){
      return <Menu.Item leftSection={<LayoutDashboard className='text-white' size={18}/>}>Dashboard</Menu.Item>
    }else{
      return null
    }
  }
  return (
    <div>
      <Menu  shadow="md" width={200}>
         <Menu.Target>
          <Avatar className='mr-5 text-red-600 cursor-pointer text-7xl' src={null} alt="no image here"></Avatar>
      </Menu.Target>

         <Menu.Dropdown className='bg-white'>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={ <User size={18} />} >
       My Profile
        </Menu.Item>
      {renderItemBasedOnRole}
      <Menu.Item onClick={handleLogout} color='red' leftSection={<LogOut size={24}/>}>
        Log out
      </Menu.Item>
      </Menu.Dropdown>
        </Menu> 
    </div>
  )
}

export default ProfileDropdown