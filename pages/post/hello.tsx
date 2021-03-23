import Head from 'next/head'
import Image from 'next/image'

const Hello = () => (
  <>
    <Head>
      <title>Hello</title>
      <meta property="og:titlle" content="Hello there"></meta>
    </Head>
    <article>
      <h1>Hello ...!!</h1>
      <Image
        src="/post/hello/familia.jpg"
        width={1152}
        height={648}
      />
    </article>
  </>
)

export default Hello