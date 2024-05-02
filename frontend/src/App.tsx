import Settings from "./components/Settings/Settings"
import Header from "./components/Header"
import GetStarted from "./components/GetStarted"
import ProfileStart from "./components/ProfileStart"
import MyProfile from "./components/Settings/MyProfile"
import ProfileSettings from "./components/Settings/ProfileSettings"
import ChangePassword from "./components/Settings/ChangePassword"
import Notifications from "./components/Settings/Notifications"
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import ChatBot from "./components/ChatBotComponents/ChatBot"
// import Footer from "./components/Footer"
import MoreAbout from "./components/MoreAbout"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import RateTheApp from "./components/RateTheApp"
import DesktopImage from "./components/DesktopImage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* <div className=" flex h-1/2 w-full items-center justify-center">
                        <LogIn />
                        <DesktopImage />
                    </div> */}
                    <Route path="/" element={<GetStarted />} />
                    <Route
                        path="/login"
                        element={
                            <div className=" flex h-1/2 w-full items-center justify-center">
                                <LogIn />
                                <DesktopImage />
                            </div>
                        }
                    />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profilestart" element={<ProfileStart />} />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/chatbot" element={<ChatBot />} />
                    <Route path="/moreabout" element={<MoreAbout />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route
                        path="/profilesettings"
                        element={<ProfileSettings />}
                    />
                    <Route
                        path="/changepassword"
                        element={<ChangePassword />}
                    />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                    <Route path="/resetpassword" element={<ResetPassword />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/ratetheapp" element={<RateTheApp />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
            </BrowserRouter>
            {/* <Footer /> */}
        </>
    )
}

export default App
