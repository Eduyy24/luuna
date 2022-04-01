import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout/Layaut'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hola</h1>
      </div>
    </Layout>
  )
}

export default Home
