export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full max-w-7xl mx-auto px-4 pt-32 sm:px-6 sm:pt-44 lg:px-8">
            {children}
        </div>
    )
}