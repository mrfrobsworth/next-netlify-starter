import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MrFrobsworth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="MrFrobsworth's Link List" />
        <p className="description">      
          <ul>
            <li><a href="https://www.tiktok.com/@mrfrobsworth">Tiktok</a></li>
            <li>Minecraft Server: 172.241.24.146:11907</li>
            <li><a href="https://www.twitch.tv/xidx">Twitch</a></li>
          </ul>
        </p>
      </main>

      <Footer />
    </div>
  )
}
