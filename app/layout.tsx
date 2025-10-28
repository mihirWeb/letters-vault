import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Letters Vault',
  description: 'A secure vault for your letters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, height: '100%' }}>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        height: '100%',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        scrollBehavior: 'smooth',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}>
        {children}
      </body>
    </html>
  )
}