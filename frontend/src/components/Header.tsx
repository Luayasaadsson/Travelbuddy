import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearMessageList } from "@/store/slices/chatSlice"

function Header() {
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        if (location.pathname !== "/chatbot") {
            dispatch(clearMessageList())
        }
    }, [location, dispatch])

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                handleCloseMenu()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <header className="absolute z-10 flex h-16 w-full flex-col bg-transparent">
            <nav className="z-2 flex items-center justify-between p-4">
                <Link to="/" className="flex items-center justify-center">
                    <img
                        src="/images/logo.svg"
                        alt=""
                        className="w-11 md:w-16"
                    />
                    <h1 className="pl-3 text-lg font-semibold tracking-wide md:text-2xl">
                        TravelBuddy
                    </h1>
                </Link>
                <div className="flex gap-4">
                    <Link to="/settings" className="flex items-center">
                        <img
                            src="/images/account_circle.svg"
                            alt=""
                            className="w-10 hover:cursor-pointer"
                        />
                    </Link>

                    <img
                        src={
                            isOpen ? "/icons/menu_open.svg" : "/images/menu.svg"
                        }
                        alt=""
                        className="w-11 hover:cursor-pointer"
                        onClick={handleMenu}
                    />
                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed left-0 top-0 h-full w-full bg-transparent"
                    onClick={handleCloseMenu}
                />
            )}

            <div
                ref={menuRef}
                className="absolute top-16 w-full origin-top overflow-hidden bg-white transition-transform duration-300  ease-in-out md:top-20"
                style={{
                    transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                    zIndex: "1000",
                }}
            >
                <ul className="flex flex-col md:flex-row md:justify-around items-center justify-center gap-2 bg-background py-2">
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground"
                    >
                        <Link to="/" onClick={handleCloseMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground"
                    >
                        <Link to="/profilestart" onClick={handleCloseMenu}>
                            Bot
                        </Link>
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground"
                    >
                        <Link to="/settings" onClick={handleCloseMenu}>
                            Settings
                        </Link>
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="flex h-12 cursor-pointer items-center text-2xl transition-opacity duration-300 ease-in-out hover:text-secondary-foreground"
                    >
                        <Link to="/aboutus" onClick={handleCloseMenu}>
                            About us
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
