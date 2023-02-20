import '@/styles/globals.css'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"]
})


// export default function App({ Component, pageProps }) {
//   return (
//   <main className={`${roboto.variable} font-sans`}>
//      <Component {...pageProps} />
//   </main>
//   )
// }

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <main className={`${roboto.variable} font-sans`}>
     <Component {...pageProps} />
    </main>
  )
}