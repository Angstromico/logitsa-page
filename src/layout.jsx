import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AppRouter from '@/router/Router'
import '@/styles/globals.scss'

export default function RootLayout() {
  return (
    <>
      <Header />

      <AppRouter />

      <Footer />
    </>
  )
}
