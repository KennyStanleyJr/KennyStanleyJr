import Image from 'next/image'
import logo from '../../../public/logo.svg'
export const Logo = () => {
  return (
    <>
      <Image src={logo} width={80} height={80} alt="logo image" />
    </>
  )
}

export default Logo
