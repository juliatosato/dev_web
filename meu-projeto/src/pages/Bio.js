import BioContent from '../components/BioContent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

function Bio(){
    return(
        <div>
            <Header/>
            <Banner/>
            <BioContent/>
            <Footer/>
        </div>
    )
}

export default Bio