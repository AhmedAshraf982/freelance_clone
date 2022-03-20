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

function App() {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  return (
    <>
      {!openSignup && !openSignin && (
        <Router>
          <Navbar
            closeLoginModal={setOpenSignin}
            closeSignupModal={setOpenSignup}
          />
          <Header />
          <Card />
          {/* <JobDetails />
          <SubmitProposal />  */}
          {/* <Message /> */}
          <Footer />
        </Router>
      )}

      {openSignin && <Login closeModal={setOpenSignin} />}
      {openSignup && <Register closeModal={setOpenSignup} />}
    </>
  );
}

export default App;
