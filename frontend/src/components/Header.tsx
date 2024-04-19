import { useState } from "react";
function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="bg-background h-28 flex flex-col justify-end absolute w-full">
            <nav className="flex items-center justify-between p-4">
                <div className="flex justify-center items-center">
                    <img src="/logo.svg" alt="" className="w-11" />
                    <h1 className="text-base text-primary font-light">
                        TravelBuddy
                    </h1>
                </div>
                <div className="flex gap-4">
                    <img src="/account_circle.svg" alt="" className="w-11" />

                    <img
                        src={isOpen ? "/icons/menu_open.svg" : "/menu.svg"}
                        alt=""
                        className="w-11"
                        onClick={handleMenu}
                    />
                </div>
            </nav>

            <div
                className="origin-top absolute top-28 w-full bg-white overflow-hidden transition-transform  duration-300 ease-in-out"
                style={{ transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}
            >
                <ul className="bg-background flex flex-col items-center justify-center">
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="py-2 text-primary text-2xl transition-opacity duration-300 ease-in"
                    >
                        Home
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="py-2 text-primary text-2xl transition-opacity duration-300 ease-in"
                    >
                        Bot
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="py-2 text-primary text-2xl transition-opacity duration-300 ease-in"
                    >
                        Setting
                    </li>
                    <li
                        style={{ opacity: isOpen ? "1" : "0" }}
                        className="py-2 text-primary text-2xl transition-opacity duration-300 ease-in"
                    >
                        About us
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
