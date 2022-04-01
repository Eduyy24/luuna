import type { NextPage } from 'next'
import { LogoSection } from '../components/Home/LogoSection/LogoSection'
import { Layout } from '../components/Layout/Layaut'

/**
 * Home Page
 * root page with principal informatión to render
 * @returns {JSX.Element} Page to render
 */
const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <>
        <LogoSection />
        <section>
        </section>
      </>
    </Layout>
  )
}

export default Home
