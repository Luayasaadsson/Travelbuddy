import Settings from "./components/Settings/Settings"
import Header from "./components/Header"
import GetStarted from "./components/GetStarted"
import ProfileStart from "./components/ProfileStart"
/* import MyProfile from "./components/Settings/MyProfile" */
import ProfileSettings from "./components/Settings/ProfileSettings"
import ChangePassword from "./components/Settings/ChangePassword"
/* import Notifications from "./components/Settings/Notifications" */
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import ChatBot from "./components/ChatBotComponents/ChatBot"
import Footer from "./components/Footer"
import MoreAbout from "./components/MoreAbout"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import RateTheApp from "./components/RateTheApp"
import DesktopVector from "./components/DesktopVector"
// import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={
                    <div>
                    <GetStarted />
                    <DesktopVector />
                    </div>
                } />
                    <Route
                        path="/login"
                        element={
                            <div>
                                <LogIn />
                                <DesktopVector />
                            </div>
                        }
                    />
                    <Route path="/signup" element={
                    <div>
                    <SignUp />
                    <DesktopVector />
                    </div>
                } />

                    <Route path="/profilestart" element={
                    <div>
                    <ProfileStart />
                    <DesktopVector />
                    </div>
                } />
                    {/* Protected route */}
                    <Route path="/hero" element={
                    <div>
                    <Hero />
                    <DesktopVector />
                    </div>
                } />
                    {/* Protected route */}
                    <Route path="/chatbot" element={
                    <div>
                    <ChatBot />
                    <DesktopVector />
                    </div>
                } />

                    <Route path="/moreabout" element={
                    <div>
                    <MoreAbout />
                    <DesktopVector />
                    </div>
                } />
                    {/* Protected route */}
                    <Route path="/settings" element={
                    <div>
                    <Settings />
                    <DesktopVector />
                    </div>
                } />
                    {/* Protected route */}
                    <Route path="/profilesettings" element={
                    <div>
                    <ProfileSettings />
                    <DesktopVector />
                    </div>
                    }
                    />
                    {/* Protected route */}
                    <Route
                        path="/changepassword"
                        element={
                        <div>
                        <ChangePassword />
                        <DesktopVector />
                        </div>
                        }
                    />

                  {/*   <Route path="/notifications" element={
                    <div>
                    <Notifications />
                    <DesktopVector />
                    </div>
                } /> */}

                    <Route
                        path="/forgotpassword"
                        element={
                        <div>
                        <ForgotPassword />
                        <DesktopVector />
                        </div>
                        }
                    />
                    <Route path="/resetpassword" element={
                    <div>
                    <ResetPassword />
                    <DesktopVector />
                    </div>
                } />

             {/*        <Route path="/myprofile" element={<MyProfile />} /> */}

                    <Route path="/ratetheapp" element={
                    <div>
                    <RateTheApp />
                    <DesktopVector />
                    </div>
                } />

                    <Route path="/aboutus" element={
                    <div>
                    <AboutUs />
                    <DesktopVector />
                    </div>
                } 
                />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
