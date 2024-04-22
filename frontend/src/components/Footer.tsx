function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full gap-10 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {/* Navigeringslänkar kommer senare */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-primary font-bold text-2xl">Guide trips</h2>
          <ul className="list-none space-y-2">
            <li className="text-primary text-xl">Try our AI-guide</li>
            <li className="text-primary text-xl">Find Restaurants</li>
            <li className="text-primary text-xl">Find places to stay</li>
            <li className="text-primary text-xl">Find activities</li>
          </ul>
        </div>
        {/* Navigeringslänkar kommer senare */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-primary font-bold text-2xl">About</h2>
          <ul className="list-none space-y-2">
            <li className="text-primary text-xl">Om Travel Buddy</li>
            <li className="text-primary text-xl">Explorer</li>
          </ul>
        </div>
        {/* Navigeringslänkar kommer senare */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-primary font-bold text-2xl">Feedback</h2>
          <ul className="list-none space-y-2">
            <li className="text-primary text-xl">Rate</li>
            <li className="text-primary text-xl">Ge feedback</li>
            <li className="text-primary text-xl">Blog</li>
          </ul>
        </div>
        {/* Navigeringslänkar kommer senare */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-primary font-bold text-2xl">Support</h2>
          <ul className="list-none space-y-2">
            <li className="text-primary text-xl">Contact</li>
            <li className="text-primary text-xl">FAQ</li>
            <li className="text-primary text-xl">Juridisk information</li>
            <li className="text-primary text-xl">Integritetspolicy</li>
            <li className="text-primary text-xl">Terms</li>
            <li className="text-primary text-xl">Privacy</li>
            <li className="text-primary text-xl">Cookies</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 order-first md:order-none">
        <img src="/logo.svg" alt="TravelBuddy Logo" className="w-14" />
        <h1 className="text-4xl text-primary font-light">TravelBuddy</h1>
      </div>
      <div className="flex gap-4">
        <img src="/icons/facebook.svg" alt="Facebook icon" />
        <img src="/icons/instagram.svg" alt="Instagram icon" />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-primary text-xl">
          © 2024- TravelBuddy. Stockholm Sweden
        </p>
      </div>
    </footer>
  );
}

export default Footer;
