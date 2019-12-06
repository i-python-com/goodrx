import React, { Component } from 'react'

class Landing extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let docBody = document.body
    let mainNav = document.querySelector('.main-nav')

    const currentScrollPos = window.pageYOffset
    if (currentScrollPos > 60) {
      docBody.style.setProperty('padding-top', '60px')
      mainNav.setAttribute('style', 'position:fixed;top:0')
    } else {
      docBody.style.removeProperty('padding-top', '60px')
      mainNav.removeAttribute('style')
    }
  }
  render() {
    return (
      <section className="hero">
        <div className="container">
          <h1>hero section</h1>
          <h2>hero section content</h2>
          <h2>hero section content</h2>
          <h2>hero section content</h2>
          <h2>hero section content</h2>
          <h2>hero section content</h2>
        </div>
      </section>
    )
  }
}

export default Landing
