import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-sm-6">
                    <h5 className="footerName">
                        Acciojob
                    </h5>
                </div>
                
                <div className="col-sm-6">
                    <div className="social-icon-div">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-2">
                    <h6>Company Info</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h6>Legal</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h6>Feature</h6>
                    <ul>
                        <li>Buniness Marketing</li>
                        <li>User Analatics</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>
                <div className="col-sm-2">
                <h6>Resources</h6>
                    <ul>
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <h6>Get In Touch</h6>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" aria-label="Enter the Email" aria-describedby="button-addon2"/>
                        <button style={{backgroundColor: '#23a6f0', color:'#FFF'}} className="btn btn-outline-primary" type="button" id="button-addon2">Subscribe</button>
                    </div>
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer;