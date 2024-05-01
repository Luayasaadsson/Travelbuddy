import { ReactNode } from "react"
export default function ChatLog({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-full w-10/12 max-w-96 flex-col gap-4 overflow-y-auto">
            {children}
        </div>
    )
}
