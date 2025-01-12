import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";

import Careers from "./components/careers/careers";
import BlockchainDeveloper from "./components/careers/blockchainDeveloper";
import DataAnalyst from "./components/careers/dataAnalyst";
import FrontendDeveloper from "./components/careers/frontendDeveloper";
import SoftwareDeveloper from "./components/careers/softwareDeveloper";
import CloudEngineer from "./components/careers/cloudEngineer";
import UXUIDesigner from "./components/careers/uiuxDesigner";
import DevOpsEngineer from "./components/careers/devOpsEngineer";
import BlockchainTeamLead from "./components/careers/blockchainTeamLead";
import SoftwareTesting from "./components/careers/softwareTesting";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/careers/" element={<Careers />} />
        <Route path="/careers/blockchain-developer/" element={<BlockchainDeveloper />} />
        <Route path="/careers/data-analyst/" element={<DataAnalyst />} />
        <Route path="/careers/frontend-developer/" element={<FrontendDeveloper />} />
        <Route path="/careers/software-developer/" element={<SoftwareDeveloper />} />
        <Route path="/careers/cloud-engineer/" element={<CloudEngineer />} />
        <Route path="/careers/ux-ui-designer/" element={<UXUIDesigner />} />
        <Route path="/careers/devops-engineer/" element={<DevOpsEngineer />} />
        <Route path="/careers/blockchain-teamLead/" element={<BlockchainTeamLead />} />
        <Route path="/careers/software-testing/" element={<SoftwareTesting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
