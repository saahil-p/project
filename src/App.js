import NavBar from "./components/NavBar";
import Cust_lgin from "./components/Cust_lgin";
import Qr_page from "./components/Qr_page";
import New_pass from "./components/New_pass";
import Payments from "./components/Payments";
import Landing from "./components/Landing";
import Signup from "./components/Signup";


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
    </>
  );
}

export default App;
