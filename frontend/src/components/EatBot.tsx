import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function EatBot() {
    return (
        <main className="h-screen pt-28 flex flex-col gap-4 items-center justify-between">
            <div className="flex flex-col items-center justify-center gap-4 max-w-96">
                <div className="flex flex-col justify-center items-center w-11/12 p-2 gap-2">
                    <h1 className="text-secondary text-3xl text-center w-45">
                        Let's Find a Bite!
                    </h1>
                    <p className="text-secondary text-sm text-center">
                        Choose below or type in your cravings at the bottom for
                        restaurants near you!
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center w-11/12">
                    <Button variant="greenOutline" size="prompt">
                        Pizza
                    </Button>
                    <Button variant="greenOutline" size="prompt">
                        Hamburger
                    </Button>
                    <Button variant="greenOutline" size="prompt">
                        Italian
                    </Button>
                    <Button variant="greenOutline" size="prompt">
                        Pasta
                    </Button>
                    <Button variant="greenOutline" size="prompt">
                        Thai
                    </Button>
                    <Button variant="greenOutline" size="prompt">
                        French
                    </Button>
                </div>
            </div>
            <div className="h-full w-10/12 max-w-96 flex flex-col gap-2 overflow-y-auto">
                <style jsx>{`
                    /* Göm scrollbarer */
                    ::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <p
                    style={{
                        borderRadius: "16px 16px 16px 0px / 16px 16px 16px 0px",
                        whiteSpace: "pre-line",
                    }}
                    className="p-3 gap-2 bg-[#A9CBE3] text-primary-foreground text-base font-normal leading-5 tracking-tight"
                >
                    Sure! Here are some options for pizza places in Gustavsberg:
                    {"\n\n"}
                    [Pizzeria Uno] - Known for their delicious wood-fired pizzas
                    with fresh ingredients.
                    {"\n\n"}
                    [Pizza Italia] - Offers a wide variety of traditional and
                    gourmet pizzas.
                    {"\n\n"}
                    [Gustavsberg Pizza & Grill] - Popular for their generous
                    toppings and fast service.
                    {"\n\n"}Would you like more information about any of these
                    options or assistance with something else?
                </p>
            </div>

            <div className="w-11/12 max-w-96 mb-8">
                <Label className="text-primary">Whats your cravings?</Label>
                <Input placeholder="Enter Your Cravings" />
            </div>
        </main>
    );
}
