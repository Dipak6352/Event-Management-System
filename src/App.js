import React from "react";

import { Home } from "./components/Home";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Gallary } from "./components/Gallary";
import { Route, Routes } from "react-router-dom";
import { Events } from "./components/Events";
import { Cards } from "./components/Cards";

import { Eventone } from "./components/Eventone";
import { Account } from "./components/Account";
import { ChangeDetail } from "./components/ChangeDetail";
import { Changepassword } from "./components/Changepassword";
import Userlist from "./components/Userlist";
import Postevent from "./components/Postevent";
import Postcategory from "./components/Postcategory";
import Adminlogin from "./components/Adminlogin";
import ChangepassAdmin from "./components/ChangepassAdmin";
import Message from "./components/Message";

import { Layout } from "./Layout";

import Admindashboard from "./components/Admindashboard";
import CurrentAdmin from "./components/CurrentAdmin";
import Contactlist from "./components/Contactlist";
import Bookevent from "./components/Bookevent";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Gallary" element={<Gallary />} />
          <Route path="Events" element={<Events />} />
          <Route path="Cards" element={<Cards />} />
          <Route path="Eventone" element={<Eventone />} />
          <Route path="Account" element={<Account />} />
          
          <Route path="ChangeDetail" element={<ChangeDetail />} />
          <Route path="Changepassword" element={<Changepassword />} />
        </Route>
        <Route path="/adminlogin" element={<Adminlogin />} />

        <Route path="/adminpage/" element={<Admindashboard />}>
          <Route path="" element={<Userlist />} />
          <Route path="contactlist" element={<Contactlist />} />
          <Route path="postevent" element={<Postevent />} />
          <Route path="postcategory" element={<Postcategory />} />
          <Route path="changepassadmin" element={<ChangepassAdmin />} />
          <Route path="message" element={<Message />} />
          <Route path="bookevent" element={<Bookevent />} />
          <Route path="admindetails" element={<CurrentAdmin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
