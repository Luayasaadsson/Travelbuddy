import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import ProfileStart from "./components/ProfileStart";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import EatBot from "./components/EatBot";
import FooterMobile from "./components/Footer";

function App() {
    return (
        <>
            <Header />
           {/*  <GetStarted /> */}
            {/* <ProfileStart /> */}
       {/*      <LogIn /> */}
           {/* <SignUp /> */}
           {/* <ForgotPassword /> */}
           <ResetPassword />
           {/*  <EatBot /> */}
            <FooterMobile />
        </>
    );
}

export default App;
