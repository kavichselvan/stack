import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/register';
import Portal from './Portal';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/login/Profile';
import Askquestion from './components/contents/Askquestion';
import Answers from './components/contents/Answers';
import ForgetPassword from './components/login/ForgetPassword';
import Verification from './components/login/Verification';
import { UserProvider } from './context/UserContext';
import ChangePassword from './components/login/ChangePassword';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ForgetPassword' element={<ForgetPassword />} />
          <Route path='/Verification' element={<Verification />} />
          <Route path='/ChangePassword' element={<ChangePassword />} />
          <Route path='/Portal' element={<Portal />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Dashboard/Answers/:id" element={<Answers />} />
            <Route path="Dashboard/Askquestion" element={<Askquestion />} />
            <Route path="Dashboard/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </UserProvider>

    </BrowserRouter>
  );
}

export default App;

