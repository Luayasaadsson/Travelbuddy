import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

export default function ChatHeading() {
    const heading = useSelector((state: RootState) => state.chat.heading)
    const subHeading = useSelector((state: RootState) => state.chat.subHeading)
    return (
        <div className="flex w-11/12 max-w-96 flex-col items-center justify-center gap-2 p-2">
            <h1 className="w-45 text-center text-3xl text-secondary">
                {heading}
            </h1>
            <p className="text-center text-sm text-secondary">{subHeading}</p>
        </div>
    )
}
