function Header() {
  return (
    <header className="bg-background h-28 flex flex-col justify-end">
      <nav className="flex items-center justify-between p-4">
        <div className="flex">
          <img src="./public/logo.svg" alt="" />
          <h1 className="text-xl text-primary font-light">TravelBuddy</h1>
        </div>
        <div className="flex gap-4">
            <img src="./public/account_circle.svg" alt="" />
            <img src="./public/menu.svg" alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
