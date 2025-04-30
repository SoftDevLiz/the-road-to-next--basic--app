import { ThemeProvider as BaseThemeProvider } from "next-themes";

type ThemeProviderProps = {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
return <BaseThemeProvider>{children}</BaseThemeProvider>
}

export { ThemeProvider };