import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Logo() {
    const { theme } = useTheme()

    return (
        <Link href="/" passHref>
            <Image
                src={theme === 'dark' ? "/logo-white.png" : "/logo-black.png"}
                width={80}
                height={80}
                alt="logo image"
                className="cursor-pointer"
            />
        </Link>
    )
}