import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from '@/styles/HomeDSC.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Dotenv from 'dotenv'

// const mongo = require("mongoose");
// Dotenv.config()
// const uri = process.env.mongo_url;
// mongo.connect()



export default function HomeDSC() {
  return (
    <>
    <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Navbar.Brand href="/">ABOUT US</Navbar.Brand>
          <Navbar.Brand href="/">ARTICLES</Navbar.Brand>
          <Navbar.Brand href="/">EVENTS</Navbar.Brand>
          <Navbar.Brand href="/">MERCHANDISE</Navbar.Brand>
          <Navbar.Brand href="/">CONTACT</Navbar.Brand>
        </Container>
      </Navbar>
    <div>
      <div className={styles.homeContainer}>
        <div>
          <h3>UPCOMING EVENTS</h3>
          <div className={styles.events}>
            
          <Card className={styles.card}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          
          <Card className={styles.card}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className={styles.card}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card content.
              </Card.Text>
              <Button variant="danger">Go somewhere</Button>
            </Card.Body>
          </Card>

          </div>
          <h3>OUR ARTICLES</h3>
          <Card className={styles.box}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
          
          <Card className={styles.box}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>

        </div>
        GAMBAR
      </div>
    </div>
    </>
  )
}