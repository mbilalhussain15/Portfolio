import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import MySkills from '../components/HomeComponents/Skills/MySkills';
const Home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MySkills/>
            <MyExpertise />
            <Recommendations />
            <ClientReviews />
            <Footer />

        </div>
    )
}

export default Home