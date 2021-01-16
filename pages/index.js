import Head from 'next/head'
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div className="relative bg-gray-200 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
    </div>
  )
}
