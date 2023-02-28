export function Main({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute top-0 left-0 w-full">
            <div className="font-poppins transition-colors">
                <main className="flex flex-col h-screen">{children}</main>
            </div>
        </div>
    )
}