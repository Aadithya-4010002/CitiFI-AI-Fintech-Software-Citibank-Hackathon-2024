
//   layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import Profile from "layouts/profile";
import SignUp from "layouts/authentication/sign-up";
import SignIn from "layouts/authentication/sign-in";
import AlertSystem from "layouts/alerts";
import HelpSec from "layouts/helpsection";
import LinkComponent from "./LinkComponent";



//  
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "route",
    name: "Home",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-building" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Relationship Manager",
    key: "tables",
    route: "/tables",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-money-coins" />
    ),
    component: <Tables />,
  },
  {
    type: "route",
    name: "Insights Dashboard",
    key: "billing",
    route: "/billing",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-chart-bar-32" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Finacial Guidance",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-credit-card" />,
    component: <VirtualReality />,
  },
  
  {
    type: "route",
    name: "Connect Bank",
    key: "alert-system",
    route: "/alert-system",
    icon: (
      <ArgonBox component="i" color="red" fontSize="14px" className="ni ni-credit-card" />
    ),
    component: <AlertSystem />,
  },
  {
    type: "route",
    key: "sign-in",
    name: "SignIn Authentication",
    icon: (
      <ArgonBox component="i" color="blue" fontSize="14px" className="ni ni-world-2" />
    ),
    route: "/authentication/sign-in",
    hidden: true,
    component: <SignIn />,
  },

  {
    type: "route",
    key: "sign-up",
    name: "Create User / SignUp",
    icon: (
      <ArgonBox component="i" color="gray" fontSize="14px" className="ni ni-planet" />
    ),
    route: "/authentication/sign-up",
    hidden: true,
    component: <SignUp />,
  },
  {
    type: "route",
    name: "Help Section",
    icon: (
      <ArgonBox component="i" color="peach" fontSize="14px" className="ni ni-folder-17" />
    ),
    key: "help",
    route: "/helpsection/help",
    hidden: true,
    component: <HelpSec />,
    
  },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    key: "plaid-link",
    route: "/plaid-link",
    component: <LinkComponent />,
    noCollapse: true,
},

];

export default routes;
