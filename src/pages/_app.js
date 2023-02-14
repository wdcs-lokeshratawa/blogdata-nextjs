import Navbar from 'component/Navbar'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return(
    <>
    <div>
        <Head>
          <title>Hunitng Blog</title>
          <meta
            name="description"
            content="Create Next JS Responsive Menu with Tailwind CSS"
          />
          <link rel="icon" href="/HBlogo.jpg" />
        </Head>
      </div>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}
