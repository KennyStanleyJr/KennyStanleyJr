import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Logo() {
    const { theme } = useTheme()

    const [mounted, setMounted] = useState(false)
    // When mounted on client, now we can show the UI
    // Prevents React Hydration Error
    useEffect(() => setMounted(true), [])

    const imgSrc = useMemo(() => {
        if (!theme) return null
        const src = theme === 'dark' ? "/logo-white.png" : "/logo-black.png"
        console.log('src', src)
        return src
    }, [theme])

    if (!mounted) return <div />

    return (
        <Link href="/" passHref>
            {imgSrc && (
                <Image
                    src={imgSrc}
                    width={80}
                    height={80}
                    alt="logo image"
                    className="cursor-pointer"
                />
            )}
        </Link>
    )
}