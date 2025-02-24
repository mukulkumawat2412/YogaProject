
import { Toaster } from 'sonner'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SignUp from './User/SignUp'
import Login from './User/Login'
import Home from './pages/Home'
import Dashboard from './Admin/Dashboard'

import ProtectedRoute from './comp/ProtectedRoute'

import Therepyform from './Admin/Therepyform'
import Applyform from './comp/Applyform'
import UserDetails from './comp/UserDetails'
import UpdateForm from "./Admin/UpdateForm";



function App() {



  return (
    <>

    <Routes>
    <Route path='/reg' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/" element={<Home />} />
   
    
    <Route element={<ProtectedRoute allowedRoles={["admin"]}/>}>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/therepyform' element={<Therepyform/>}/>
    <Route path="/yogupdate/:id" element={<UpdateForm/>}/>
   
    </Route>

  

    
    <Route element={<ProtectedRoute allowedRoles={["user","admin"]}/>}>
   
    <Route path='/postDetails' element={<UserDetails/>}/>
    <Route path='/applyTherepy' element={<Applyform/>}/>
    </Route>



    </Routes>
   
   <Toaster position='bottom-center' richColors
    
    />
      </>
  )
}

export default App
