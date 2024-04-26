import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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

            <div
                ref={menuRef}
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
                        <Link to="/" onClick={handleMenu}>
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
                        <Link to="/settings" onClick={handleMenu}>
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
