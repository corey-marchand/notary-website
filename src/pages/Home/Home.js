import NavigationBar from '../../components/NavBar/Navbar';
import PictureBackDrop from '../../components/Jumbotron/jumbotron';
import { Container } from 'react-bootstrap';
import NotaryPicture from '../../assets/notary.jpg';
import { Image } from 'react-bootstrap';

function Home() {
  return (
    <>
      <NavigationBar />
      <PictureBackDrop />
      <Container>
        <Image style={{ backgroundImage: `url(${NotaryPicture})`, backgroundPosition: 'center', height: '50vh'}} />
        {/* <Image src={NotaryPicture}  /> */}
      </Container>
    </>
  );
}

export default Home;
