export function Header({ children }: { children: React.ReactNode }) {
    return (
        <header className="fixed w-full flex justify-between items-center pt-4 px-8">
            {children}
        </header>
    )
}