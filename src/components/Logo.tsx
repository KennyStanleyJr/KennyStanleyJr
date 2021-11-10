import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.svg'
export const Logo = () => {
  return (
    <Link href="/" passHref>
      <Image
        src={logo}
        width={80}
        height={80}
        alt="logo image"
        className="cursor-pointer"
      />
    </Link>
  )
}

export default Logo
