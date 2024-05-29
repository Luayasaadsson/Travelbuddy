import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"
import App from "./App.tsx"
import "./index.css"
import { ThemeProvider } from "./Theme/ThemeContext.tsx"
import { BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <GoogleOAuthProvider
                    clientId={
                        "299817103719-sgecp2fpqbapdk20c4b8go2e6g8v9t4f.apps.googleusercontent.com"
                    }
                >
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </GoogleOAuthProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
