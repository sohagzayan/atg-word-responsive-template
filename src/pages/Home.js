import React, { useState } from "react";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import GroupBody from "../components/GroupBody/GroupBody";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ToolsMobileView from "../components/ToolsMobileView/ToolsMobileView";
import "./Home.css";
const Home = () => {
  const [showAccountCreateModal, setShowAccountCreateModal] = useState(false);
  return (
    <div className="position-relative">
      <Header setShowAccountCreateModal={setShowAccountCreateModal} />
      <Hero />
      <GroupBody />
      <ToolsMobileView />
      <CreateAccount
        showAccountCreateModal={showAccountCreateModal}
        setShowAccountCreateModal={setShowAccountCreateModal}
      />
    </div>
  );
};

export default Home;
