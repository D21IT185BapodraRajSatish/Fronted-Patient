import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear();
  return (
    <div>
       <Navbar bg="dark" variant="dark" fixed='bottom'>
        <Container>
            <Col>{year}All Rights are Reserved</Col>
        </Container>
      </Navbar>
    </div>
  )
}
