import { useGoogleLogin } from "@react-oauth/google"
import { Button } from "./ui/button"

const GoogleLoginButton = () => {
    const login = useGoogleLogin({
        onSuccess: async () => {
            window.location.href =
                "https://localhost:7038/api/Auth/login-google"
        },
        onError: (error) => {
            console.error("Google Login Failed", error)
        },
    })

    return (
        <Button variant="google" onClick={() => login()}>
            <img src="./icons/google-logo.svg" alt="Google Logo" />
            <span className="flex-grow">Continue with Google</span>
        </Button>
    )
}

export default GoogleLoginButton
