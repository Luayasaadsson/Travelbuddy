import Settings from "./components/Settings/Settings";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import ProfileStart from "./components/ProfileStart";
import MyProfile from "./components/Settings/MyProfile";
import ProfileSettings from "./components/Settings/ProfileSettings";
import ChangePassword from "./components/Settings/ChangePassword";
import Notifications from "./components/Settings/Notifications";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import EatBot from "./components/EatBot";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Settings />
            <GetStarted />
            <ProfileStart />
            <MyProfile />
            <ProfileSettings />
            <ChangePassword />
            <Notifications />
            {/*<LogIn /> */}
            {/*<SignUp /> */}
            {/* <ForgotPassword /> */}
            {/* <ResetPassword /> */}
            {/* <EatBot /> */}
            {/* <FooterMobile /> */}
        </>
    );
}

export default App;
