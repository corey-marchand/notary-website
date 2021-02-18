import NavigationBar from '../../components/NavBar/Navbar';
import PictureBackDrop from '../../components/Jumbotron/jumbotron';
import ContactForm from '../../components/form/form';
import Footer from '../../components/footer/footer';

import NotaryPicture from '../../assets/notary.jpg';
import MobilePicture from '../../assets/traveling.jpg';

import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Home() {
  return (
    <>
        <NavigationBar />
        <PictureBackDrop />
        <div style={{margin: '120px 120px'}}>
          <Row>
              <Col><img style={{height:'500px', width:'100%'}} src={ NotaryPicture }/></Col>
              <Col><img style={{height:'500px', width:'100%'}} src={ MobilePicture }/></Col>
          </Row>
          <br />
          <Row>
              <Col><h2>About Puget Sound Notary</h2></Col>
              <Col><h2>A mobile Notary Service</h2></Col>
          </Row>
          <Row>
              <Col><p style={{ fontSize: '24px'}}>Corey J. Marchand, Notary Signing Agent</p></Col>
          </Row>
          <Row>
                <Col style={{ borderBottom: 'solid #84A9D9'}}>
                    <ul>
                        <li>Certified Notary Signing Agent of he NNA</li>
                        <li>Established in 2020</li>
                        <li>Licensed, bonded, and insured</li>
                        <li>Customer information handled securely and profesionaly</li>
                        <li>Accepts eDocs and documents by mail</li>
                        <li>Complient in all GLBA background check requirements</li>
                    </ul>
                </Col>
                <Col style={{ borderBottom: 'solid #84A9D9'}}>
                    <ul style={{ listStyle: 'none'}}>
                        <li>Puget Sound Notary Service offers convenient mobile notary service that fits your schedule.  Puget Sound Notary Service can meet you anywhere in the following counties: King, Pierce, and Kitsap.  We can also service outside of these counties, depending on the situation and fees.</li>
                    </ul>
                </Col>
          </Row>
        </div>
        <div style={{ height: '600px', color: 'black', margin: '100px 0px 0px 0px', backgroundColor: '#BEBEBE'}}>
            <br />
            <br />
            <br />
            <br />
            <br />
                <Container>
                        <ContactForm style={{ position: 'absolute', top: '0px'}} />
                </Container>
        </div>
        <Footer />
    </>
  );
}

export default Home;
