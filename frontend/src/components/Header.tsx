function Header() {
    return (
        <header className="bg-white h-28 flex flex-col justify-end">
            <nav className="flex items-center justify-between p-4">
                <h1 className="text-xl font-bold">TravelBuddy</h1>
                <button className="text-red-500">X</button>
            </nav>
        </header>
    );
}

export default Header;
