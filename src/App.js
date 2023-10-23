import NavBar from "./components/NavBar";
import Cust_lgin from "./components/Cust_lgin";
import Qr_page from "./components/Qr_page";
import New_pass from "./components/New_pass";
import Payments from "./components/Payments";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import Managelot from "./components/Managelot";
import U_slots from "./components/U_slots";
import Report_vio from "./components/Report_vio";
import U_rate from "./components/U_rate";
import View_vio from "./components/View_vio"


function App() {
  return (
    <>
      <NavBar/>
      <Landing/>
      <Signup/>
      <Cust_lgin/>
      <Qr_page/>
      <New_pass/>
      <Payments/>

      <Admin day = "30" month = "2" year = "1"/>
      <Managelot/>
      <U_slots slots = "30"/>
      <Report_vio/>
      <U_rate/>
      <View_vio/>
    </>
  );
}

export default App;
