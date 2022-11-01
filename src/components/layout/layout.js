import "./layout.css";
import React from "react";
import Banner from '../banner/banner';
import Product from '../products/product';
import Footer from '../footer/footer';

function Layout(){
    const [count, setCount] = React.useState(0);

    let handleCallback = (number) => {
        setCount(count+number);
    }

    return (
        <div>
            <nav className="main-nav">
                <div className="logo">
                    <h1>Acciojob</h1>
                </div>
                <div className="website-nav">
                    <ul>
                        <li>Home</li>
                        <li>Shope</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Pages</li>
                    </ul>
                </div>

                <div className="functional-nav">
                <ul>
                        <li>Login/Register</li>
                        <li><i class="fa fa-search" aria-hidden="true"></i></li>
                        <li><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;{count}</li>
                        <li><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;0</li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <Banner/>
                <Product parentCallback = {handleCallback}/>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;