import { useEffect, useRef, useState } from "react"

export default function ThemeGradientBackground() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    // if (theme === null) return
    setIsDarkTheme(theme === 'dark')
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Limpiar cualquier gradiente existente
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    // Crear elementos para los gradientes con blur
    const createBlurredGradient = (
      // color1: string,
      // color2: string,
      posX: number,
      posY: number,
      // size: number,
      animationOffset: number,
      className?: string
    ) => {
      const element = document.createElement("div")
      element.className = `absolute opacity-50 blur-[80px] rounded-full bg-radial ${className}`
      // element.style.background = `radial-gradient(circle, ${color1} 0%, ${color2} 70%, transparent 100%)`
      element.style.transform = "translate(-50%, -50%)"
      element.style.transition = "all 0.5s ease"

      // Animación sutil
      const startTime = Date.now() + animationOffset

      const animate = () => {
        const elapsed = Date.now() - startTime
        const cycle = elapsed / 10000 // 10 segundos por ciclo completo

        // Movimiento suave y circular
        const offsetX = Math.sin(cycle * Math.PI * 2) * 5
        const offsetY = Math.cos(cycle * Math.PI * 2) * 5

        element.style.left = `${posX + offsetX}%`
        element.style.top = `${posY + offsetY}%`
        requestAnimationFrame(animate)
      }

      animate()

      return element
    }

    // Definir gradientes según el tema
    let gradients: HTMLDivElement[] = []

    // Tema oscuro - gradientes
    gradients = [
      // Gradiente púrpura oscuro (izquierda)
      // createBlurredGradient("rgba(73, 19, 99, 1)", "rgba(20, 0, 30, 0)", 20, 50, 600, 0)
      createBlurredGradient(20, 50, 0, "size-[600px] from-[#64c8ff]/70 dark:from-[#491363] from-0% to-[#96dcff]/30 dark:to-[#14001e]/10 to-70% left-[20%] top-[50%]"),

      // Gradiente teal/cyan (derecha)
      // createBlurredGradient("rgba(0, 100, 120, 1)", "rgba(0, 50, 60, 0)", 80, 50, 700, 2000),
      createBlurredGradient(80, 50, 2000, "size-[700px] from-[#dcb4ff]/50 dark:from-[#006478] from-0% to-[#c896ff]/20 dark:to-[#00323c]/10 to-70% left-[80%] top-[50%]"),
      // // Gradiente pequeño adicional (centro-arriba)
      // createBlurredGradient("rgba(0, 80, 100, 1)", "rgba(0, 40, 50, 0)", 60, 30, 400, 4000),
      createBlurredGradient(60, 30, 4000, "size-[400px] from-[#b4dcff]/40 dark:from-[#005064] from-0% to-[#96c8ff]/10 dark:to-[#002832]/10 to-70% left-[60%] top-[30%]"),
      // // Gradiente pequeño adicional (centro-abajo)
      // createBlurredGradient("rgba(30, 0, 50, 1)", "rgba(15, 0, 25, 0)", 40, 70, 350, 6000),
      createBlurredGradient(40, 70, 6000, "size-[350px] from-[#c8b4f0]/40 dark:from-[#1e0032] from-0% to-[#b496dc]/10 dark:to-[#0f0019]/10 to-70% left-[40%] top-[70%]")
    ]

    // Añadir los gradientes al contenedor
    gradients.forEach((gradient) => {
      container.appendChild(gradient)
    })

    return () => {
      // Limpiar los gradientes al desmontar
      gradients.forEach((gradient) => {
        gradient.remove()
      })
    }
  }, [isDarkTheme])

  return (
    <div className="fixed top-0 z-[-2] h-screen w-screen overflow-hidden">
      {/* Contenedor para los gradientes animados */}
      <div ref={containerRef} className="bg-background-light dark:bg-background-dark absolute inset-0 z-0">
        {/* <div className="size-[600px] opacity-50 blur-3xl rounded-full bg-radial from-[#491363] from-0% to-[#14001e] to-70%"></div> */}
      </div>

      {/* Capa adicional para mejorar el contraste */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 z-10"></div>



    </div>
  )
}
