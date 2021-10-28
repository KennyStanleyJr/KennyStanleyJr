import Image from 'next/image'
import logo from '../../../public/logo.svg'
export const Logo = () => {
  return (
    <>
      <Image src={logo} width={69} height={69} alt="logo image" />
    </>
  )
}

export default Logo
