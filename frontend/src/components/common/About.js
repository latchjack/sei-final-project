import React from 'react'
import Collapsible from 'react-collapsible'


class About extends React.Component {

  render() {
    return (
      <>
      <div className="section">
        <div className='container has-text-centered title is-1'><h1>Pensive</h1>
      </div>
        <div className="box" id="aboutBox">
          <h1 className=" title is-3">ABOUT US</h1>
          <hr/>
          <div className='content'>
            <Collapsible trigger = 'Our Mission  +' className="dropDown">
              <p className="FAQtxt">Our mission is to create a space where developers are able to <span className="emph">freely spread knowledge and concepts</span> with anyone interested in all fields of web and software development. </p>
            </Collapsible>
            <hr/>
            <Collapsible trigger = 'Our Story  +' className="dropDown">
              <p className="FAQtxt">Latch and Rory met whilst studying at General Assembly. They both shared a passion for development and would often share great online sources for tutorials, lectures and articles with each other. After some time they realised there was a lack of places where developers could connect and collectively share knowledge. It was at that point that Pensive was born.</p>
            </Collapsible>
            <hr/>
            <Collapsible trigger = 'Time to Grow  +'className="dropDown">
              <p>Pensive slowly started to gain the attention of developers all around the world for its great content. The site is now one of the most popular sites for developers to publish articles and share their opinions on the latest technologies.</p>
            </Collapsible>
            <hr/>
            <Collapsible trigger = 'What We&apos;re About +'className="dropDown">
              <p className="FAQtxt">Pensive is available to anyone who wants to learn web/software development. Welcome!</p>
            </Collapsible>
          </div>
        </div>
      </div>
      </>
    )
  }

}

export default About