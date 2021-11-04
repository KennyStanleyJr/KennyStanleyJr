import Image from 'next/image'

export const AboutContent = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <h3 className="text-5xl font-bold text-center mb-12">About</h3>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="text-xl font-light">
          <p>Hello, my name is Kenny Stanley.</p>
          <p>I am passionate about solving problems with technology.</p>
          <p>
            Graduated from Tennessee Technological University with a Bachelors
            in Electrical Engineering.
          </p>
        </div>

        <div className="w-52 h-52 md:w-72 md:h-72 relative mx-auto">
          <Image
            src="/d1.jpg"
            alt="Picture of me, Kenny Stanley"
            layout="fill"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
export default AboutContent
