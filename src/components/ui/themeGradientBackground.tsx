
export default function ThemeGradientBackground() {

  return (
    <div className="fixed top-0 z-[-2] h-screen w-screen overflow-hidden">
      {/* Contenedor para los gradientes animados */}
      <div className="bg-background-light dark:bg-background-dark absolute inset-0 z-0">
        {/* <div className="size-[600px] opacity-50 blur-3xl rounded-full bg-radial from-[#491363] from-0% to-[#14001e] to-70%"></div> */}
      </div>

    </div>
  )
}
