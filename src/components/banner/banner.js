import './banner.css';
import Girl from '../../assets/girl.png';

function Banner() {
  return (
    <section>
        <div className="banner-div">
            <div className="row">
                <div className="col-sm-6">
                    <div className="intro-text-div">
                        <div className="intro-content-div">
                            <span className="intro-year">SUMMER 2020</span>
                            <h1 className="intro-heading">NEW COLLECTION</h1>
                            <p className="intro-para">We know how large objects will act, but things on a small scale.</p>
                            <button className="shop-now-btn">SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="banner-girl-sec">
                        <div className="banner-little-circle"></div>
                        <div className="banner-big-circle"></div>
                        <img  className="banner-girl" src={Girl} alt="Banner Girl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Banner;