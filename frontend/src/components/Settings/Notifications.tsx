function Notifications() {
  return (
    <main className="h-screen pt-28 flex flex-col gap-4 items-center justify-start">
      <div className="flex flex-col items-center max-w-96 w-11/12 gap-6">
        <div className="flex justify-center">
          <h1 className="text-primary text-2xl font-bold">Notifications</h1>
        </div>
        <div className="flex max-w-96 w-11/12 flex-col items-start gap-2">
          <p className="text-primary text-xl">Office support</p>
          <p className="text-primary text-xs">
            Get important updates about your travels, your account and our
            privacy policy. These updates will be sent to you via email.
          </p>
        </div>
        <div className="flex flex-col w-80 h-5 ">
          <div className="flex justify-between">
            <p className="text-secondary">E-mail</p>
            <img src="./icons/Off.svg" alt="Icon" />
          </div>
        </div>
        <div className="flex flex-col w-80 h-5 ">
          <div className="flex justify-between">
            <p className="text-secondary">Notifications in the app</p>
            <img src="./icons/Off.svg" alt="Notifications" />
          </div>
        </div>
        <div className="flex max-w-96 w-11/12 flex-col items-start gap-2">
          <p className="text-primary text-xl">Travel guides</p>
          <p className="text-primary text-xs">
            Advice from locals, experts and other travelers on how to get the
            most out of your destination.
          </p>
        </div>
        <div className="flex flex-col w-80 h-5 ">
          <div className="flex justify-between">
            <p className="text-secondary">E-mail</p>
            <img src="./icons/Off.svg" alt="Icon" />
          </div>
        </div>
        <div className="flex flex-col w-80 h-5 ">
          <div className="flex justify-between">
            <p className="text-secondary">Notifications in the app</p>
            <img src="./icons/Off.svg" alt="Notifications" />
          </div>
        </div>
        <div className="flex max-w-96 w-11/12 flex-col items-start gap-2">
          <p className="text-primary text-xl">Reviews</p>
          <p className="text-primary text-xs">
            Get reminded to rate for activities you've done recently.
          </p>
        </div>
        <div className="flex flex-col w-80 h-5 ">
          <div className="flex justify-between">
            <p className="text-secondary">E-mail</p>
            <img src="./icons/Off.svg" alt="Icon" />
          </div>
        </div>
        <div className="flex flex-col w-80 h-5 ">
          <div className="flex justify-between">
            <p className="text-secondary">Notifications in the app</p>
            <img src="./icons/Off.svg" alt="Notifications" />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Notifications;
