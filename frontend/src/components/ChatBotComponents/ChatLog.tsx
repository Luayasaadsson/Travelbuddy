import { ReactNode } from "react"
export default function ChatLog({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-full w-full  flex-col gap-4 overflow-y-auto">
            {children}
        </div>
    )
}
