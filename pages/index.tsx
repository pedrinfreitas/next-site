import { InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/header'
import Navigation from '@components/navigation'
import { getPostList } from '@shared/utils';

type PostList = string[]

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug: any) => (
              <li key={slug}>
              <Link href={`post/${slug}`}>
                <a>
                  {slug.replace(/-/g, ' ')}
                </a>
              </Link>
              </li>
        ))}
          </ul>
        )}
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: PostList = getPostList()

  return {
    props: {
      posts
    }
  }
}

export default Home;
