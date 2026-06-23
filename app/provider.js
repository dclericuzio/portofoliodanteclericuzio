"use client"
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
    return (
        <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
        >
            {children}
        </ThemeProvider>
    )
}
