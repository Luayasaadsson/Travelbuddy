import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function EatBot() {
    return (
        <main className="flex h-screen flex-col items-center justify-between gap-4 pt-28">
            <div className="flex max-w-96 flex-col items-center justify-center gap-4">
                <div className="flex w-11/12 flex-col items-center justify-center gap-2 p-2">
                    <h1 className="w-45 text-center text-3xl text-secondary">
                        Let's Find a Bite!
                    </h1>
                    <p className="text-center text-sm text-secondary">
                        Choose below or type in your cravings at the bottom for
                        restaurants near you!
                    </p>
                </div>
                <div className="flex w-11/12 flex-wrap justify-center gap-4">
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
            <div className="flex h-full w-10/12 max-w-96 flex-col gap-2 overflow-y-auto">
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
                    className="gap-2 bg-[#A9CBE3] p-3 text-base font-normal leading-5 tracking-tight text-primary-foreground"
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

            <div className="mb-8 w-11/12 max-w-96">
                <Label>Whats your cravings?</Label>
                <Input placeholder="Enter Your Cravings" />
            </div>
        </main>
    )
}
