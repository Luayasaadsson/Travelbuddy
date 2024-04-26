import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="absolute flex h-28 w-full flex-col justify-end bg-transparent">
            <nav className="z-2 flex items-center justify-between p-4">
                <Link to="/" className="flex items-center justify-center">
                    <img src="/images/logo.svg" alt="" className="w-11" />
                    <h1 className="text-base font-light">TravelBuddy</h1>
                </Link>
                <div className="flex gap-4">
                    <Link to="/settings">
                        <img
                            src="/images/account_circle.svg"
                            alt=""
                            className="w-11 hover:cursor-pointer"
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
                    className="fixed top-0 left-0 w-full h-full bg-transparent"
                    onClick={handleCloseMenu}
                />
            )}

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
                        <Link to="/" onClick={handleCloseMenu}>
                            Home
                        </Link>
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
                        <Link to="/settings" onClick={handleCloseMenu}>
                            Setting
                        </Link>
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
    );
}

export default Header;
