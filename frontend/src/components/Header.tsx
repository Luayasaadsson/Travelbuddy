function Header() {
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
                    <img src="/menu.svg" alt="" className="w-11" />
                </div>
            </nav>
        </header>
    );
}

export default Header;
