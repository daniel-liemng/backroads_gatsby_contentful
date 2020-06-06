import React from "react"
import { Link } from "gatsby"

import styles from "../css/error.module.css"

import Layout from "../components/layout/Layout"
import Banner from "../components/utils/Banner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops! it's the dead end.">
          <Link to="/" className="btn-white">
            back to homepage
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
