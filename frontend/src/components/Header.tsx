function Header() {
    return (
        <header className="bg-background h-28 flex flex-col justify-end absolute w-full">
            <nav className="flex items-center justify-between p-4">
                <div className="flex">
                    <img src="/logo.svg" alt="" />
                    <h1 className="text-xl text-primary font-light">
                        TravelBuddy
                    </h1>
                </div>
                <div className="flex gap-4">
                    <img src="/account_circle.svg" alt="" />
                    <img src="/menu.svg" alt="" />
                </div>
            </nav>
        </header>
    );
}

export default Header;
