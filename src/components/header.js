import PropTypes from 'prop-types'
import React from 'react'

import MenuHeader from './menu-header'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <section className="navigation">
      <MenuHeader siteTitle={siteTitle} />
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
