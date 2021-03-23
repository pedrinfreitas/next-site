import Head from 'next/head'
import Navigation from "@components/navigation";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <main>
        <Navigation />
        <header>
          <h2> Hello from about page!</h2>
        </header>
      </main>
    </>
  )
}