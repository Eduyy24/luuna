import type { NextPage } from 'next'
import { LogoSection } from '../components/Home/LogoSection/LogoSection'
import { NavSection } from '../components/Home/NavSection/NavSection'
import { Layout } from '../components/Layout/Layout'

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
        <NavSection />
      </>
    </Layout>
  )
}

export default Home
