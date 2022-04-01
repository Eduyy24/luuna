import type { NextPage } from 'next'
import { Layout } from '../components/Layout/Layaut'

/**
 * Home Page
 * root page with principal informatión to render
 * @returns {JSX.Element} Page to render
 */
const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <div>
        <h1>Hola</h1>
      </div>
    </Layout>
  )
}

export default Home
