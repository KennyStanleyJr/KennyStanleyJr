import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
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

export default Logo
