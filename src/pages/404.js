import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/error.module.css"

import Layout from "../components/layout/Layout"
import Banner from "../components/utils/Banner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops! it's the dead end.">
          <AniLink fade to="/" className="btn-white">
            back to homepage
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
