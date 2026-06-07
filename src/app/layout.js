import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Medha D — Portfolio',
  description: 'Full Stack Developer & AI Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
      </body>
    </html>
  )
}