// import 'src/Components/main/styles/reset.css';
import '../main/styles/reset.css';
import '../main/styles/mainPage.css';

import logoM from '../main/img/M-logo.png';
import logoU from '../main/img/U-logo.png';
import logoJ from '../main/img/J-logo.png';
import logoO from '../main/img/O-logo.png';
import letterM from '../main/img/M.png';
import letterU from '../main/img/U.png';
import letterJ from '../main/img/J.png';
import letterO from '../main/img/O.png';
import instagramIcon from '../main/img/instagram.png';

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="advertisement">
                <div>
                    <p>Free shipping on orders over 60 $</p>
                    <p>&times;</p>
                </div>
            </div>
            <header>
                <nav>
                    <ul>
                        <li className="nav-item">Why Mujo</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Journal</li>
                    </ul>
                    <div className="logo-nav">
                        <img src={logoM} alt="m-logo"/>
                        <img src={logoU} alt="u-logo"/>
                        <img src={logoJ} alt="j-logo"/>
                        <img src={logoO} alt="o-logo"/>
                    </div>
                    <div>
                        <ul>
                            <li className="nav-item">Log in</li>
                            <li className="nav-item">Cart</li>
                        </ul>
                        <button className="nav-btn">
                            <span>Shop now</span>
                            <span>&rarr;</span>
                        </button>
                    </div>
                </nav>
            </header>
            <main>
                <section className="main-frame">
                    <div className="logo-main">
                        <img src={letterM} alt="letter M logo"/>
                        <img src={letterU} alt="letter U logo"/>
                        <img src={letterJ} alt="letter J logo"/>
                        <img src={letterO} alt="letter O logo"/>
                    </div>
                </section>
            </main>
            <footer>
                <div className="links-footer">
                    <div className="follow">
                        <h2 className="title-links-footer">Follow us</h2>
                        <div>
                            <img src={instagramIcon} alt="instagram icon"/>
                            <p>@MUJO.LIFE</p>
                        </div>
                    </div>
                    <div className="four-block-footer">
                        <div className="products">
                            <h2 className="title-links-footer">Products</h2>
                            <ul>
                                <li>Vital Force</li>
                                <li>Balance</li>
                            </ul>
                        </div>
                        <div className="why-mujo">
                            <h2 className="title-links-footer">Why Mujo</h2>
                            <ul>
                                <li>Ingredients</li>
                                <li>Science</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="company">
                            <h2 className="title-links-footer">Company</h2>
                            <ul>
                                <li>About us</li>
                                <li>Contact</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="stay-in-touch">
                            <h2 className="title-links-footer">Stay in touch</h2>
                            <form action="#">
                                <input className="input-email-footer" type="email" placeholder="Email adress &rarr;"/>
                                <div>
                                    <label>
                                        <input type="checkbox"/>
                                        Subscribe to receive communications from Mujo about our products. By
                                        subscribing,
                                        you confirm you have read and accept our privacy policy
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default MainPage;