import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import SimpleHero from "../components/utils/SimpleHero"
import Banner from "../components/utils/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

const index = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}

export default index
