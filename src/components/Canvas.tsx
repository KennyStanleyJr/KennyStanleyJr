import { useTheme } from "next-themes"
import { Canvas as ThreeCanvas } from "@react-three/fiber"
import { Sparkles } from "@react-three/drei"

export function Canvas() {
    const { theme } = useTheme()
    return (
        <div className="h-screen">
            <ThreeCanvas >
                <Sparkles
                    count={1000}
                    speed={0.2}
                    opacity={1}
                    color={theme === 'dark' ? '#fff' : '#000'}
                    size={1}
                    scale={10}
                    noise={0.1}
                />
                <color attach="background" args={theme === 'dark' ? ['#121212'] : ['#fff']} />
            </ThreeCanvas>
        </div>
    )
}