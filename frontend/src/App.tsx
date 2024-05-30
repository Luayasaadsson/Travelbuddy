import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

import Settings from "./components/Settings/Settings"
import Header from "./components/Header"
import GetStarted from "./components/GetStarted"
import ProfileStart from "./components/ProfileStart"
import ProfileSettings from "./components/Settings/profileSettingsComponents/ProfileSettings"
import ChangePassword from "./components/Settings/ChangePassword"
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import FoodChatBot from "./components/ChatComponents/FoodChatBot/FoodChatBot"
import Footer from "./components/Footer"
import MoreAbout from "./components/MoreAbout"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import RateTheApp from "./components/RateTheApp"
import DesktopVector from "./components/DesktopVector"
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes"
import VacationChatBot from "./components/ChatComponents/VacationChatBot/VacationChatBot"
import { AppDispatch, RootState } from "./store/store"
import {
    fetchUserProfile,
    loginUser,
    logoutUser,
} from "./store/slices/userSlice"
import MainLoader from "./components/MainLoader"
import { setUserLocation } from "./store/slices/userSlice"

function App() {
    const userName = useSelector(
        (state: RootState) => state.user.profile.userName,
    )
    const location = useLocation()
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const loading = useSelector(
        (state: RootState) => state.settings.sessionInfo.isLoading,
    )
    const dispatch: AppDispatch = useDispatch()

    //hämtar användarens location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude

            try {
                const response = await axios.get(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
                )
                if (response.data && response.data.city) {
                    dispatch(setUserLocation(response.data.city))
                }
            } catch (error) {
                console.error("Failed to fetch city:", error)
            }
        })
    }, [])

    //ändrar styling beroende på skärmstorlek
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    //hämtar användarens data varje gång app.tsx laddas om
    useEffect(() => {
        if (!userName) {
            dispatch(fetchUserProfile())
        } else {
            return
        }
    }, [dispatch])

    //kollar om användaren redan är inloggad
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7038/api/Auth/user",
                    { withCredentials: true },
                )

                if (response.status === 200) {
                    dispatch(loginUser())
                } else {
                    dispatch(logoutUser())
                }
            } catch (error) {
                dispatch(logoutUser())
            } finally {
            }
        }

        fetchData()
    }, [dispatch])

    //loader för hela skärmen
    if (loading) {
        return (
            <>
                <Header />
                <div className="flex h-screen items-center justify-center">
                    <MainLoader />
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            {isLargeScreen ? <Hero /> : <GetStarted />}
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <div>
                            <LogIn />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <div>
                            <SignUp />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                <Route
                    path="/hero"
                    element={
                        <div>
                            <Hero />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                <Route
                    path="/forgotpassword"
                    element={
                        <div>
                            <ForgotPassword />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />
                {/* <Route path="/myprofile" element={<MyProfile />} /> */}

                <Route
                    path="/ratetheapp"
                    element={
                        <div>
                            <RateTheApp />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                <Route
                    path="/aboutus"
                    element={
                        <div>
                            <AboutUs />
                            <DesktopVector />
                            {isLargeScreen && <Footer />}
                        </div>
                    }
                />

                {/* Protected routes */}
                <Route element={<PrivateRoutes route="/login" />}>
                    <Route
                        path="/moreabout"
                        element={
                            <div>
                                <MoreAbout />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                    <Route
                        path="/profilestart"
                        element={
                            <div>
                                <ProfileStart />
                                <DesktopVector />
                            </div>
                        }
                    />
                    <Route
                        path="/resetpassword"
                        element={
                            <div>
                                <ResetPassword />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />

                    <Route
                        path="/foodchat"
                        element={
                            <div>
                                <FoodChatBot />
                                <DesktopVector />
                            </div>
                        }
                    />
                    <Route
                        path="/vacationchat"
                        element={
                            <div>
                                <VacationChatBot />
                                <DesktopVector />
                            </div>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <div>
                                <Settings />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                    <Route
                        path="/profilesettings"
                        element={
                            <div>
                                <ProfileSettings />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                    <Route
                        path="/changepassword"
                        element={
                            <div>
                                <ChangePassword />
                                <DesktopVector />
                                {isLargeScreen && <Footer />}
                            </div>
                        }
                    />
                </Route>
            </Routes>
        </>
    )
}

export default App
