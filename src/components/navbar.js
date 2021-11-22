import React, { Component } from 'react'
import { Link } from 'gatsby'

import MenuHeader from "../data/menu_header.json"

// import { graphql, StaticQuery } from 'gatsby'

class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  toggleNavState = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    })
  }

  render() {
    return (
      <nav
        className="navbar is-primary main-navigation"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item has-text-weight-semibold"
            to="/"
          >
            {this.props.siteTitle}
          </Link>

          <span
            onClick={this.toggleNavState}
            role="button"
            className={
              this.state.navbarOpen
                ? 'navbar-burger burger is-active'
                : 'navbar-burger burger'
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="mainMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>
        <div
          id="mainMenu"
          className={
            this.state.navbarOpen ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-start">
            {MenuHeader.menu_items.map(data => {
              let submenuItems;

              if (data.submenu.length > 0) {
                submenuItems = data.submenu.map(submenuData => {
                  return <li>{submenuData.submenu_title}</li>
                })

                return <li>{data.menu_title} <ul>{submenuItems}</ul></li>
              }

              return <li>{data.menu_title}</li>
            })}
         
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
