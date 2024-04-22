import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function MyProfile() {
  return (
    <main className="h-screen pt-28 flex flex-col gap-4 items-center justify-start">
      <div className="flex flex-col justify-center items-center w-11/12 gap-6">
        <Avatar
          className="border-4 border-secondary"
          style={{
            borderRadius: "50% 50% 0% 50% / 50% 50% 0% 50%",
          }}
        >
          <AvatarImage src={"./profile-picture.jpg"} />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-primary text-3xl">Sofia</h1>
          <div className="flex gap-2 text-2xl">
            <img
              className="w-8"
              src="./icons/Location.svg"
              alt="Locationicon"
            />
            <p className="text-secondary">Stockhom, Sweden</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-primary text-2xl font-bold">My profile</h2>
        </div>
      </div>
    </main>
  );
}

export default MyProfile;
