import '../assets/styles/LandingPage.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MenuSection from '../components/MenuSection';
import BuildYourPoke from '../components/BuildYourPoke';

function LandingPage() {
  return (
    <div className='bodyLanding'>
        <Header/>
        <Banner/>
        <MenuSection/>
        <BuildYourPoke/>
    </div>
  );
}

export default LandingPage;