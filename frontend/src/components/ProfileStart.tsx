import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

function ProfileStart() {
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center items-center w-11/12 p-2 gap-8">
                <Avatar
                    className="border-4 border-secondary"
                    style={{
                        borderRadius: "50% 50% 0% 50% / 50% 50% 0% 50%",
                    }}
                >
                    <AvatarImage src={"./profile-picture.jpg"} />
                    <AvatarFallback>?</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-primary text-3xl text-center w-45">
                        Hi, Sofia!
                    </h1>
                    <p className="text-secondary text-sm text-center">
                        How can i help you today?
                    </p>
                </div>
                <Button className="flex justify-between w-full">
                    Find your dream vacation
                    <img src="./icons/icon-location.svg" alt="" />
                </Button>
                <Button className="flex justify-between w-full">
                    Places to stay nearby
                    <img src="./icons/icon-bed.svg" alt="" />
                </Button>
                <Button className="flex justify-between w-full">
                    Let’s find a place to eat nearby
                    <img src="./icons/icon-food.svg" alt="" />
                </Button>
                <Button className="flex justify-between w-full">
                    Experiences & Activities
                    <img src="./icons/icon-activity.svg" alt="" />
                </Button>
                {/* </div> */}
            </div>
        </main>
    );
}

export default ProfileStart;
