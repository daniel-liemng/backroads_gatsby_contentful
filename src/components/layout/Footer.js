import React from "react"
import { Link } from "gatsby"

import styles from "../../css/footer.module.css"

import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <Link to={item.path} key={index}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => (
          <a
            href={item.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel comapny - {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
