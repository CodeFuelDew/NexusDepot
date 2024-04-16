import Header from "./Header"
import Product from "./Product"
import "./Home.css"

const Home = () => {

    return (
        <>
        <Header/>
        <div className="home">
            <div className="home__container">
                <img className="home__image" alt=""
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

                <div className="home__row">
                    <Product id="1" title="Invincible Compendium Volume 1" 
                    price={52.99} rating={5} image={"assets/invincible_book.jpg"} />
                    <Product id="2" title="The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change"
                     price={19.65} rating={4} image={"assets/7habits_book.jpg"}/>
                
                </div>
                <div className="home__row">
                    <Product id="3" title='Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6" Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode' 
                    price={299.99} rating={4} image={"assets/acer_laptop.jpg"}/>
                    <Product id="4" title="Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal" 
                    price={98.99} rating={5} image={"assets/echo_dot.jpg"}/>
                    <Product id="5" title="Ring Video Doorbell – 1080p HD video, improved motion detection, easy installation – Venetian Bronze" 
                    price={598.99} rating={4} image={"assets/ring_doorbell.jpg"}/>
                
                </div>
                <div className="home__row">
                    <Product id="6" title="VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model" 
                    price={148.00} rating={4} image={"assets/viziotv.jpg"}/>

                  </div>
            </div>
        </div>
        </>
    )
}

export default Home;