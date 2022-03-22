import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/Card";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import Footer from "./components/Footer";
import JobDetails from "./components/JobDetails";
import SubmitProposal from "./components/SubmitProposal";
import Header from "./components/Header";
import UserDashBoard from "./components/UserDashBoard";
import Message from "./components/Message";
import NavSideBar from "./components/NavSideBar";
import MessageDropDown from "./components/MessageDropDown";
import PostaJob from "./components/PostaJob";

function App() {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Navbar
          closeLoginModal={setOpenSignin}
          closeSignupModal={setOpenSignup}
          toggle={toggle}
        />

        <NavSideBar
          isOpen={isOpen}
          toggle={toggle}
          closeLoginModal={setOpenSignin}
          closeSignupModal={setOpenSignup}
        />
        <PostaJob />
        {/* <PostaJob />
        <Header />
        <UserDashBoard />
        <Card />
        <JobDetails />
        <SubmitProposal />
        <Message /> */}
        <Footer />
      </Router>

      <Login closeModal={setOpenSignin} openSignin={openSignin} />
      <Register closeModal={setOpenSignup} openSignup={openSignup} />
    </>
  );
}

export default App;
