import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './pages/login.tsx';
import Register from './pages/Register.tsx';
//import ProfileForm from './pages/ProfileForm.tsx';
import MatchingSearch from './pages/MatchingSearch.tsx';
import SendMessage from './pages/SendMessage';
import Contacts from './pages/Contacts';
import ChooseProfileType from './pages/ChooseProfileType';
import InstitutionProfileForm from './pages/InstitutionProfileForm';
import MemberProfileForm from './pages/MemberProfileForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />

          <Route path="choose-profile-type" element={<ChooseProfileType />} />
          <Route path="profile-form-institution" element={<InstitutionProfileForm />} />
          <Route path="profile-form-member" element={<MemberProfileForm />} />

          <Route path="match" element={<MatchingSearch />} />


          <Route path="message" element={<SendMessage />} />
          <Route path="contacts" element={<Contacts />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
