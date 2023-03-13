import '@/styles/globals.css'
import roboto from '@/font/Roboto'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <main className={`${roboto.variable} font-sans`}>
     <Component {...pageProps} />
    </main>
  )
}