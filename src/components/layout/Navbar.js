import React, { useState } from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import logo from "../../images/logo.svg"

import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"

const Navbar = () => {
  // state
  const [isOpen, setIsOpen] = useState(false)

  // functions
  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="logo" />
          <button onClick={toggleNav} type="button" className={styles.logoBtn}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <AniLink fade to={item.path} className={styles.navLinks}>
                {item.text}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
