import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./Theme/ThemeContext"
import { BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

const googleClientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <GoogleOAuthProvider clientId={googleClientId}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </GoogleOAuthProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
