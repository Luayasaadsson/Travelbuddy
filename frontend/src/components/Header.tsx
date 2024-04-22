import { useState } from "react"
function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="absolute flex h-28 w-full flex-col justify-end bg-background">
            <nav className="flex items-center justify-between p-4">
                <div className="flex items-center justify-center">
                    <img src="/logo.svg" alt="" className="w-11" />
                    <h1 className="text-base font-light">TravelBuddy</h1>
                </div>
                <div className="flex gap-4">
                    <img
                        src="/account_circle.svg"
                        alt=""
                        className="w-11 hover:cursor-pointer"
                    />

                    <img
                        src={isOpen ? "/icons/menu_open.svg" : "/menu.svg"}
                        alt=""
                        className="w-11 hover:cursor-pointer"
                        onClick={handleMenu}
                    />
                </div>
            </nav>

            <div
                className="absolute top-28 w-full origin-top overflow-hidden bg-white transition-transform  duration-300 ease-in-out"
                style={{
                    transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                    zIndex: "1000",
                }}
            >
                <ul className="flex flex-col items-center justify-center bg-background">
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="cursor-pointer py-2 text-2xl transition-opacity duration-300 ease-in-out hover:text-primary-foreground"
                    >
                        Home
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className=" cursor-pointer py-2 text-2xl transition-opacity duration-300 ease-in-out hover:text-primary-foreground"
                    >
                        Bot
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="cursor-pointer py-2 text-2xl transition-opacity duration-300 ease-in-out hover:text-primary-foreground"
                    >
                        Setting
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="cursor-pointer py-2 text-2xl transition-opacity duration-300 ease-in-out hover:text-primary-foreground"
                    >
                        About us
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
