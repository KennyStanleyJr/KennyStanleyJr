export function Header({ children }: { children: React.ReactNode }) {
    return (
        <header className="fixed w-full flex justify-between items-center py-4 px-8 md:backdrop-blur-md md:border-b border-neutral-200 dark:border-neutral-800">
            {children}
        </header>
    )
}