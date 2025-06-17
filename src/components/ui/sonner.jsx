import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={{
        // Custom toast theme colors
        "--normal-bg": "#000000", // solid black background
        "--normal-text": "#ffffff", // white text
        "--normal-border": "#333333", // optional: dark border
        backgroundColor: "#000000", // fallback background
        color: "#ffffff", // fallback text color
        opacity: 1 // ensure full opacity
      }}
      {...props}
    />
  );
}

export { Toaster }
