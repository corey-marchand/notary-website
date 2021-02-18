import NavigationBar from '../../components/NavBar/Navbar';
import PictureBackDrop from '../../components/Jumbotron/jumbotron';
import { Container } from 'react-bootstrap';
import NotaryPicture from '../../assets/notary.jpg';
import MobilePicture from '../../assets/traveling.jpg';

import { Image } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Home() {
  return (
    <>
        <NavigationBar />
        <PictureBackDrop />
      {/* <Container> */}
        <div style={{margin: '0px 90px'}}>
          <Row>
              <Col><img style={{height:'500px', width:'100%'}} src={ NotaryPicture }/></Col>
              <Col><img style={{height:'500px', width:'100%'}} src={ MobilePicture }/></Col>
          </Row>
          <Row>
              <Col><h2>About Puget Sound Notary</h2></Col>
              <Col><h2>A mobile Notary Service</h2></Col>
          </Row>
          <Row>
                <Col>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
          </Row>
        </div>
          {/* <div>
            <img style={{height:'500px', width:'45%', margin: '0px 50px'}} src={ NotaryPicture }/>
            <img style={{height:'500px', width:'45%', margin: '0px 22px 0px'}} src={ NotaryPicture }/>
          </div> */}
        {/* <Image style={{ backgroundImage: `url(${NotaryPicture})`, backgroundPosition: 'center', height: '50vh'}} /> */}
        {/* <Image src={NotaryPicture}  /> */}
      {/* </Container> */}
    </>
  );
}

export default Home;
