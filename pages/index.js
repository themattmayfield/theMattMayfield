import Head from 'next/head'
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div className="relative bg-gray-200 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </Head>
      <Navbar />
      <div className="pt-16">
      <div className="h-64">heahehts</div>
      <div className="h-64">heahehts</div>
      <div className="h-64">heahehts</div>
      <div className="h-64">heahehts</div>
      </div>
      
    </div>
  )
}
