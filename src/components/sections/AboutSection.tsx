import Image from "next/image"

export function AboutSection() {
    return (
        <div className="flex flex-col h-full justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
                About
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="text-base md:text-xl font-light">
                    <p>Hello, my name is Kenny Stanley.</p>
                    <p>I am passionate about solving problems with technology.</p>
                    <p>I&apos;m really cool, trust me.</p>
                    <p>No, like really, I promise.</p>
                </div>

                <div className="relative w-52 h-52 md:w-72 md:h-72 mx-auto">
                    <Image
                        src="/kenny.png"
                        alt="Picture of me, Kenny Stanley"
                        fill
                        className="rounded-xl object-cover"
                        priority
                    />
                    <div id="bottomBorder" className="absolute bottom-0 bg-neutral-300 dark:bg-neutral-800 h-0.5 w-full rounded-full" />
                    <div id="bottomBorderShadow" className="absolute -bottom-2 bg-black dark:bg-neutral-500 h-0.5 w-full blur-[10px] rounded-full" />
                </div>
            </div>
        </div>
    )
}