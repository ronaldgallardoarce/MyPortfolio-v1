import { ReactNode, useEffect, useRef, useState } from "react"

export default function ThemeGradientBackground({ children }: { children?: ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    console.log(theme)
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

    // Configurar el color de fondo base según el tema
    container.style.backgroundColor = isDarkTheme ? "rgb(0, 20, 24)" : "rgb(240, 250, 255)"

    // Crear elementos para los gradientes con blur
    const createBlurredGradient = (
      color1: string,
      color2: string,
      posX: number,
      posY: number,
      size: number,
      animationOffset: number,
    ) => {
      const element = document.createElement("div")
      element.style.position = "absolute"
      element.style.width = `${size}px`
      element.style.height = `${size}px`
      element.style.borderRadius = "50%"
      element.style.background = `radial-gradient(circle, ${color1} 0%, ${color2} 70%, transparent 100%)`
      element.style.filter = "blur(70px)"
      element.style.opacity = "0.5"
      element.style.left = `${posX}%`
      element.style.top = `${posY}%`
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

    if (isDarkTheme) {
      // Tema oscuro - gradientes
      gradients = [
        // Gradiente púrpura oscuro (izquierda)
        createBlurredGradient("rgba(73, 19, 99, 1)", "rgba(20, 0, 30, 0)", 20, 50, 600, 0),

        // Gradiente teal/cyan (derecha)
        createBlurredGradient("rgba(0, 100, 120, 1)", "rgba(0, 50, 60, 0)", 80, 50, 700, 2000),

        // Gradiente pequeño adicional (centro-arriba)
        createBlurredGradient("rgba(0, 80, 100, 1)", "rgba(0, 40, 50, 0)", 60, 30, 400, 4000),

        // Gradiente pequeño adicional (centro-abajo)
        createBlurredGradient("rgba(30, 0, 50, 1)", "rgba(15, 0, 25, 0)", 40, 70, 350, 6000),
      ]
    } else {
      // Tema claro - gradientes
      gradients = [
        // Gradiente azul claro (derecha)
        createBlurredGradient("rgba(100, 200, 255, 0.7)", "rgba(150, 220, 255, 0)", 75, 50, 600, 0),

        // Gradiente rosa/púrpura claro (izquierda)
        createBlurredGradient("rgba(220, 180, 255, 0.5)", "rgba(200, 150, 255, 0)", 25, 50, 700, 2000),

        // Gradiente pequeño adicional (centro-arriba)
        createBlurredGradient("rgba(180, 220, 255, 0.4)", "rgba(150, 200, 255, 0)", 60, 30, 400, 4000),

        // Gradiente pequeño adicional (centro-abajo)
        createBlurredGradient("rgba(200, 180, 240, 0.4)", "rgba(180, 150, 220, 0)", 40, 70, 350, 6000),
      ]
    }

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
      <div ref={containerRef} className="absolute inset-0 z-0"></div>

      {/* Capa adicional para mejorar el contraste */}
      <div className={`absolute inset-0 ${isDarkTheme ? "bg-black/10" : "bg-white/10"} z-10`}></div>



      {/* Contenido */}
      {/* <div className={`relative z-20 w-full h-full ${isDarkTheme ? "" : "text-gray-800"}`}>{children}</div> */}
    </div>
  )
}
