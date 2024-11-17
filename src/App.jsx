import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./pages/main";
import About from "./pages/header/about/about";
import Service from "./pages/header/services/service";
import Work from "./pages/header/works/work";
import Contact from "./pages/header/contact/contact";
import Casestudy from "./pages/header/casestudy/casestudy";
import Blogs from "./pages/header/blogs/blogs";
import Whitepaper from "./pages/header/whitepaper/whitepaper";
import Blogscontent from "./pages/header/blogsContent/blogsContent";
import Streamline from "./pages/header/streamline/streamline";

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

import Cloud from "./components/services/cloudAndDevops/cloudDevops";
import Implementation from "./components/services/cloudAndDevops/devOpsImplementationService";
import Assessment from "./components/services/cloudAndDevops/devOpsAssessmentServices";
import Automation from "./components/services/cloudAndDevops/devosAutomation";
import DevopsMonitoring from "./components/services/cloudAndDevops/devopsMonitoring";
import DevSecOps from "./components/services/cloudAndDevops/devSecOps";
import CloudServices from "./components/services/cloudAndDevops/cloudDevOpsServices";
import DevOpsSupport from "./components/services/cloudAndDevops/devOpsSupportServices";
import Cybersecurity from "./components/services/cloudAndDevops/cybersecurity";
import Reliability from "./components/services/cloudAndDevops/siteReliabilityEngineering";

import ServiceAutomation from "./components/services/automation/automation";
import HRAutomation from "./components/services/automation/hrAutomation";
import IntelligentAutomation from "./components/services/automation/intelligentAutomation";
import ProcessAutomation from "./components/services/automation/processAutomation";
import SalesMarketingAutomation from "./components/services/automation/salesAndMarketingAutomation";

import Customframework from "./components/services/customFramework/customFramework";
import Dotnet from "./components/services/customFramework/dotNet";
import Java from "./components/services/customFramework/java";
import Nodejs from "./components/services/customFramework/nodejs";
import PHP from "./components/services/customFramework/php";

import AI from "./components/services/emergingTech/ai";
import MachineLearning from "./components/services/emergingTech/machineLearning";
import NLP from "./components/services/emergingTech/naturalLanguageProcessing";
import CVS from "./components/services/emergingTech/computerVisionServices";
import EmergingTech from "./components/services/emergingTech/emergingTech";
import Analyst from "./components/services/emergingTech/roboticProcessAutomation";

import WebApps from "./components/services/webApps/webApps";
import SocialNetworking from "./components/services/webApps/socialNetworking";
import ContentManagement from "./components/services/webApps/contentManagement";
import ProductivityTools from "./components/services/webApps/productivityTools";
import FinancialServices from "./components/services/webApps/financialServices";
import EducationalPlatforms from "./components/services/webApps/educationalPlatforms";
import BookingReservations from "./components/services/webApps/bookingAndReservations";

import ECommerce from "./components/services/eCommerce/eCommerce";
import B2BECommerce from "./components/services/eCommerce/b2bCommerce";
import B2CECommerce from "./components/services/eCommerce/b2cCommerce";
import ChatgptECommerce from "./components/services/eCommerce/chatgptIntegration";
import Customization from "./components/services/eCommerce/customization";
import Omnichannel from "./components/services/eCommerce/omnichannel";

import ProductEngineering from "./components/services/productEngineering/productEngineering";
import ProductApplicationCatalogue from "./components/services/productEngineering/productApplicationCatalogue";
import SolutionArchitecture from "./components/services/productEngineering/solutionArchitecture";
import Productdevelopment from "./components/services/productEngineering/productDevelopment";
import TechSupport from "./components/services/productEngineering/techSupport";

import MVPs from "./components/services/prototypingUIUX/mvps";
import Highprototyping from "./components/services/prototypingUIUX/highFidelityPrototypes";
import Lowprototyping from "./components/services/prototypingUIUX/lowFidelityPrototypes";
import Prototyping from "./components/services/prototypingUIUX/prototyping";
import Rapidprototyping from "./components/services/prototypingUIUX/rapidPrototypes";
import Uiuxprototyping from "./components/services/prototypingUIUX/uiux";

import MobileApps from "./components/services/mobileApps/mobileApps";
import Android from "./components/services/mobileApps/android";
import IOS from "./components/services/mobileApps/iOS";
import Hybrid from "./components/services/mobileApps/hybrid";
import PWAS from "./components/services/mobileApps/pWAS";

import DigitalMarketing from "./components/services/digitalMarketing/digitalMarketing";
import ContentMarketing from "./components/services/digitalMarketing/contentMarketing";
import ORM from "./components/services/digitalMarketing/orm";
import SEO from "./components/services/digitalMarketing/seo";
import SMO from "./components/services/digitalMarketing/smo";

import EDT from "./components/services/enterpriseDigitalTransformation/enterpriseDigitalTransformation";
import ESS from "./components/services/enterpriseDigitalTransformation/enterpriseSoftwareSolutions";
import MD from "./components/services/enterpriseDigitalTransformation/metaverseDevelopment";
import PH from "./components/services/enterpriseDigitalTransformation/processHarmonization";
import WS from "./components/services/enterpriseDigitalTransformation/workflowSolutions";

import Salesforce from "./components/services/salesforce/salesforce";
import SalesforceManagedServices from "./components/services/salesforce/salesforceManagedServices";
import SalesforceImplementation from "./components/services/salesforce/salesforceImplementation";
import SalesforceIntegration from "./components/services/salesforce/salesforceIntegration";
import SalesforceServiceCloud from "./components/services/salesforce/salesforceServiceCloud";
import SalesforceAutomation from "./components/services/salesforce/salesforceAutomation";

import Blockchain from "./components/services/blockchain/blockchain";
import ICOSolutions from "./components/services/blockchain/iCOSolutions";
import IEOSolutions from "./components/services/blockchain/iEOSolutions";
import STOSolutions from "./components/services/blockchain/sTOSolutions";
import DAppDevelopment from "./components/services/blockchain/dAppDevelopment";
import CryptoCurrencyExchange from "./components/services/blockchain/cryptoCurrencyExchange";

import AutomationTesting from "./components/services/testing/automationTesting";
import Functional from "./components/services/testing/functionalTesting";
import ManualTeasting from "./components/services/testing/manualTesting";
import TestingQA from "./components/services/testing/testingAndQA";
import VAPT from "./components/services/testing/vapt";

import IOT from "./components/services/iot/iot";
import IPAM from "./components/services/iot/iotPoweredAssetManagement";
import IPAMO from "./components/services/iot/iotPoweredAssetMonitoring";
import IPFA from "./components/services/iot/iotPoweredFactoryAutomation";
import IPFM from "./components/services/iot/iotPoweredFleetManagement";
import IPH from "./components/services/iot/iotPoweredHealthcare";
import IPP from "./components/services/iot/iotPoweredParking";
import IPR from "./components/services/iot/iotPoweredRetail";
import IPSS from "./components/services/iot/iotPoweredSchoolSolutions";
import IPW from "./components/services/iot/iotPoweredWarehouse";

import Dashboard from "./components/services/dashboard/dashboard";
import FinanceDashboard from "./components/services/dashboard/financeDashboard";
import HRDashboard from "./components/services/dashboard/hrDashboard";
import MarketingDashboard from "./components/services/dashboard/marketingDashboard";
import OperationalDashboard from "./components/services/dashboard/operationalDashboard";
import ManagementDashboard from "./components/services/dashboard/projectManagementDashboard";
import SalesDashboard from "./components/services/dashboard/salesDashboard";

import BlockchainWallet from "./components/solutions/blockchain/blockchainWallet";
import DecentralisedFinance from "./components/solutions/blockchain/decentralisedFinance";
import EnterpriceBlockchain from "./components/solutions/enterpriseBlockchain";
import Exchange from "./components/solutions/blockchain/exchange";
import Nft from "./components/solutions/blockchain/nft";
import Workforce from "./components/solutions/workforce";
import ProcessTransformation from "./components/solutions/processTransformation";
import WebCMS from "./components/solutions/webCMS";

import ProductDesign from "./components/solutions/prototypingPOCAndWireframing/productDesign";
import PrototypeDashboard from "./components/solutions/prototypingPOCAndWireframing/prototypeDashboard";
import PrototypeMobileApps from "./components/solutions/prototypingPOCAndWireframing/prototypeMobileApps";
import PrototypesWebsite from "./components/solutions/prototypingPOCAndWireframing/prototypesWebsite";
import Wireframe from "./components/solutions/prototypingPOCAndWireframing/wireframe";

import Education from "./components/industries/education";
import Finance from "./components/industries/financial";
import HealthCare from "./components/industries/healthCare";
import Hospitality from "./components/industries/hospitality";
import Travel from "./components/industries/travel";
import Retail from "./components/industries/retail";
import Transpotation from "./components/industries/transpotation";
import FoodBeverages from "./components/industries/foodAndBeverages";
import EnergyMining from "./components/industries/energyAndMining";
import Manufacturing from "./components/industries/manufacturing";
import Automotive from "./components/industries/automotive";
import BFSI from "./components/industries/bfsi";
import MediaEntertainment from "./components/industries/mediaAndEntertainment";
import RealEstate from "./components/industries/realEstate";
import Technology from "./components/industries/technology";

const App = () => {
  const ref = useRef(null);
  const path = useLocation();

  // useEffect(()=>{
  //     window.scrollTo(0,0)
  // },[path])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/services/" element={<Service />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/insights/casestudy/" element={<Casestudy />} />
        <Route path="/insights/blogs/" element={<Blogs />} />
        <Route path="/insights/whitepapers/" element={<Whitepaper />} />
        <Route path="/blogscontent/:id" element={<Blogscontent />} />
        <Route path="/streamline/" element={<Streamline />} />

        <Route path="/services/ecommerce/" element={<ECommerce />} />
        <Route path="/services/ecommerce/b2b-commerce/" element={<B2BECommerce />} />
        <Route path="/services/ecommerce/b2c-commerce/" element={<B2CECommerce />} />
        <Route path="/services/ecommerce/chatgpt-integration/" element={<ChatgptECommerce />} />
        <Route path="/services/ecommerce/customization/" element={<Customization />} />
        <Route path="/services/ecommerce/omnichannel/" element={<Omnichannel />} />

        <Route path="/services/cloud&devops/" element={<Cloud />} />
        <Route path="/services/cloud&devops/devops-implementation-service/" element={<Implementation />} />
        <Route path="/services/cloud&devops/devops-assessment-services/" element={<Assessment />} />
        <Route path="/services/cloud&devops/devos-automation/" element={<Automation />} />
        <Route path="/services/cloud&devops/devopsMonitoring/" element={<DevopsMonitoring />} />
        <Route path="/services/cloud&devops/devsecops/" element={<DevSecOps />} />
        <Route path="/services/cloud&devops/cloud-devops-services/" element={<CloudServices />} />
        <Route path="/services/cloud&devops/devops-support-services/" element={<DevOpsSupport />} />
        <Route path="/services/cloud&devops/cybersecurity/" element={<Cybersecurity />} />
        <Route path="/services/cloud&devops/site-reliability-engineering/" element={<Reliability />} />

        <Route path="/services/emerging-tech/" element={<EmergingTech />} />
        <Route path="/services/ai-development/" element={<AI />} />
        <Route path="/services/emerging-tech/robotic-process-automation/" element={<Analyst />} />
        <Route path="/services/emerging-tech/machine-learning/" element={<MachineLearning />} />
        <Route path="/services/emerging-tech/natural-language-processing/" element={<NLP />} />
        <Route path="/services/emerging-tech/computer-vision-services/" element={<CVS />} />

        <Route path="/services/web-apps-development/" element={<WebApps />} />
        <Route path="/services/web-apps/social-networking/" element={<SocialNetworking />} />
        <Route path="/services/web-apps/content-management/" element={<ContentManagement />} />
        <Route path="/services/web-apps/productivity-tools/" element={<ProductivityTools />} />
        <Route path="/services/web-apps/financial-services/" element={<FinancialServices />} />
        <Route path="/services/web-apps/educational-platforms/" element={<EducationalPlatforms />} />
        <Route path="/services/web-apps/booking-&-reservations/" element={<BookingReservations />} />

        <Route path="/services/mobile-apps-development/" element={<MobileApps />} />
        <Route path="/services/mobile-apps-development/android/" element={<Android />} />
        <Route path="/services/mobile-apps-development/ios/" element={<IOS />} />
        <Route path="/services/mobile-apps-development/hybrid/" element={<Hybrid />} />
        <Route path="/services/mobile-apps-development/paws/" element={<PWAS />} />

        <Route path="/services/salesforce-development/" element={<Salesforce />} />
        <Route path="/services/salesforce/salesforce-managed-services/" element={<SalesforceManagedServices />} />
        <Route path="/services/salesforce/salesforce-implementation/" element={<SalesforceImplementation />} />
        <Route path="/services/salesforce/salesforce-integration/" element={<SalesforceIntegration />} />
        <Route path="/services/salesforce/salesforce-service-cloud/" element={<SalesforceServiceCloud />} />
        <Route path="/services/salesforce/salesforce-automation/" element={<SalesforceAutomation />} />

        <Route path="/services/blockchain-development/" element={<Blockchain />} />
        <Route path="/services/blockchain/ico-solutions/" element={<ICOSolutions />} />
        <Route path="/services/blockchain/ieo-solutions/" element={<IEOSolutions />} />
        <Route path="/services/blockchain/sto-solutions/" element={<STOSolutions />} />
        <Route path="/services/blockchain/dapp-development/" element={<DAppDevelopment />} />
        <Route path="/services/blockchain/crypto-currency-exchange/" element={<CryptoCurrencyExchange />} />

        <Route path="/services/prototyping-&-ui-ux/" element={<Prototyping />} />
        <Route path="/services/prototyping-&-ui-ux/low-fidelity-prototypes/" element={<Lowprototyping />} />
        <Route path="/services/prototyping-&-ui-ux/high-fidelity-prototypes/" element={<Highprototyping />} />
        <Route path="/services/prototyping-&-ui-ux/rapid-prototypes/" element={<Rapidprototyping />} />
        <Route path="/services/prototyping-&-ui-ux/mvps/" element={<MVPs />} />
        <Route path="/services/prototyping-&-ui-ux/ui-ux/" element={<Uiuxprototyping />} />

        <Route path="/services/product-engineering/" element={<ProductEngineering />} />
        <Route path="/services/product-engineering/product-design/" element={<ProductDesign />} />
        <Route
          path="/services/product-engineering/product-application-catalogue/"
          element={<ProductApplicationCatalogue />}
        />
        <Route path="/services/product-engineering/solution-architecture/" element={<SolutionArchitecture />} />
        <Route path="/services/product-engineering/product-development/" element={<Productdevelopment />} />
        <Route path="/services/product-engineering/tech-support/" element={<TechSupport />} />

        <Route path="/services/automation/" element={<ServiceAutomation />} />
        <Route path="/services/automation/hr-automation/" element={<HRAutomation />} />
        <Route path="/services/automation/intelligent-automation/" element={<IntelligentAutomation />} />
        <Route path="/services/automation/process-automation/" element={<ProcessAutomation />} />
        <Route path="/services/automation/sales-marketing-automation/" element={<SalesMarketingAutomation />} />

        <Route path="/services/custom-framework/" element={<Customframework />} />
        <Route path="/services/custom-framework/dotnet/" element={<Dotnet />} />
        <Route path="/services/custom-framework/java/" element={<Java />} />
        <Route path="/services/custom-framework/nodejs/" element={<Nodejs />} />
        <Route path="/services/custom-framework/php/" element={<PHP />} />

        <Route path="/services/digital-marketing/" element={<DigitalMarketing />} />
        <Route path="/services/digital-marketing/content-marketing/" element={<ContentMarketing />} />
        <Route path="/services/digital-marketing/orm/" element={<ORM />} />
        <Route path="/services/digital-marketing/seo/" element={<SEO />} />
        <Route path="/services/digital-marketing/smo/" element={<SMO />} />

        <Route path="/services/enterprise-digital-transformation/" element={<EDT />} />
        <Route path="/services/enterprise-digital-transformation/enterprise-software-solutions/" element={<ESS />} />
        <Route path="/services/enterprise-digital-transformation/metaverse-development/" element={<MD />} />
        <Route path="/services/enterprise-digital-transformation/process-harmonization/" element={<PH />} />
        <Route path="/services/enterprise-digital-transformation/workflow-solutions/" element={<WS />} />

        <Route path="/industries/financial-services/" element={<Finance />} />
        <Route path="/industries/education/" element={<Education />} />
        <Route path="/industries/health-care/" element={<HealthCare />} />
        <Route path="/industries/hospitality/" element={<Hospitality />} />
        <Route path="/industries/tour&travel/" element={<Travel />} />
        <Route path="/industries/retail/" element={<Retail />} />
        <Route path="/industries/transpotation/" element={<Transpotation />} />
        <Route path="/industries/food&beverages/" element={<FoodBeverages />} />
        <Route path="/industries/energy-mining/" element={<EnergyMining />} />
        <Route path="/industries/manufacturing/" element={<Manufacturing />} />
        <Route path="/industries/automotive/" element={<Automotive />} />
        <Route path="/industries/real-estate/" element={<RealEstate />} />
        <Route path="/industries/bfsi/" element={<BFSI />} />
        <Route path="/industries/technology/" element={<Technology />} />
        <Route path="/industries/media-&-entertainment/" element={<MediaEntertainment />} />

        <Route path="/solutions/" element={<Work />} />
        <Route path="/solutions/blockchain/blockchain-wallet/" element={<BlockchainWallet />} />
        <Route path="/solutions/blockchain/decentralised-finance/" element={<DecentralisedFinance />} />
        <Route path="/solutions/blockchain/enterprise-blockchain/" element={<EnterpriceBlockchain />} />
        <Route path="/solutions/blockchain/p2p-c2c-exchange/" element={<Exchange />} />
        <Route path="/solutions/blockchain/nft-marketplace/" element={<Nft />} />
        <Route path="/solutions/process-transformation/" element={<ProcessTransformation />} />
        <Route path="/solutions/web-&-cms/" element={<WebCMS />} />
        <Route path="/solutions/workforce-assignment/" element={<Workforce />} />

        <Route path="/solutions/iot/" element={<IOT />} />
        <Route path="/solutions/iot/iot-powered-asset-management/" element={<IPAM />} />
        <Route path="/solutions/iot/iot-powered-asset-monitoring/" element={<IPAMO />} />
        <Route path="/solutions/iot/iot-powered-factory-automation/" element={<IPFA />} />
        <Route path="/solutions/iot/iot-powered-fleet-management/" element={<IPFM />} />
        <Route path="/solutions/iot/iot-powered-healthcare/" element={<IPH />} />
        <Route path="/solutions/iot/iot-powered-parking/" element={<IPP />} />
        <Route path="/solutions/iot/iot-powered-retail/" element={<IPR />} />
        <Route path="/solutions/iot/iot-powered-school-solutions/" element={<IPSS />} />
        <Route path="/solutions/iot/iot-powered-warehouse/" element={<IPW />} />

        <Route path="/solutions/prototyping-poc-&-wireframing/" element={<Wireframe />} />
        <Route path="/solutions/prototyping-poc-&-wireframing/prototype-dashboard/" element={<PrototypeDashboard />} />
        <Route
          path="/solutions/prototyping-poc-&-wireframing/prototype-mobile-apps/"
          element={<PrototypeMobileApps />}
        />
        <Route path="/solutions/prototyping-poc-&-wireframing/prototypes-website/" element={<PrototypesWebsite />} />

        <Route path="/solutions/testing/" element={<TestingQA />} />
        <Route path="/solutions/testing/automation-testing/" element={<AutomationTesting />} />
        <Route path="/solutions/testing/functional-testing/" element={<Functional />} />
        <Route path="/solutions/testing/manual-teasting/" element={<ManualTeasting />} />
        <Route path="/solutions/testing/vapt/" element={<VAPT />} />

        <Route path="/solutions/dashboard/" element={<Dashboard />} />
        <Route path="/solutions/dashboard/finance-dashboard/" element={<FinanceDashboard />} />
        <Route path="/solutions/dashboard/hr-dashboard/" element={<HRDashboard />} />
        <Route path="/solutions/dashboard/marketing-dashboard/" element={<MarketingDashboard />} />
        <Route path="/solutions/dashboard/operational-dashboard/" element={<OperationalDashboard />} />
        <Route path="/solutions/dashboard/project-management-dashboard/" element={<ManagementDashboard />} />
        <Route path="/solutions/dashboard/sales-dashboard/" element={<SalesDashboard />} />

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
    </>
  );
};

export default App;
