import Link from "next/link";
import Image from "next/image";

export function Logo() {
    return (
        <Link href="/" passHref>
            <Image
                src="/logo.svg"
                width={80}
                height={80}
                alt="logo image"
                className="cursor-pointer"
            />
        </Link>
    )
}