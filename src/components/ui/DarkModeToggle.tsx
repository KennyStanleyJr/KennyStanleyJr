import { useDarkMode } from 'next-dark-mode'

export const DarkModeToggle = () => {
  const {
    autoModeActive, // boolean - whether the auto mode is active or not
    autoModeSupported, // boolean - whether the auto mode is supported on this browser
    darkModeActive, // boolean - whether the dark mode is active or not
    switchToAutoMode, // function - toggles the auto mode on
    switchToDarkMode, // function - toggles the dark mode on
    switchToLightMode, // function - toggles the light mode on
  } = useDarkMode()

  return (
    <>
      <button
        onClick={() => {
          darkModeActive ? switchToLightMode() : switchToDarkMode()
        }}
      >
        <div className="bg-white border-black border-2 rounded-2xl w-10 h-10"></div>
      </button>
    </>
  )
}
export default DarkModeToggle
