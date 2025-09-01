import { useEffect, useState } from "react";
import { useThemeStore } from "../store/themeStore";

export function useResolvedTheme() {
  const { theme } = useThemeStore();
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const update = () => setResolvedTheme(mq.matches ? "dark" : "light");
      update();
      mq.addEventListener("change", update);
      setResolved(true);
      return () => mq.removeEventListener("change", update);
    } else {
      setResolvedTheme(theme);
      setResolved(true);
    }
  }, [theme]);

  return { resolved, theme: resolvedTheme };
}