import adImg from '../assets/wp-easy-login.jpg';
import data from '../data/data.json';
import { GoogleAd } from './utils';

const CustomAd = () => (
    <div className="text-center text-md-right wpes-custom-ad">
        <figure className="figure text-center mb-1">
            <a href="https://www.secretsofgeeks.com/2019/10/wordpress-login-remember-recent-usernames.html">
                <img width="260" height="293" className="img-fluid rounded" alt="WP Easy Login" src={adImg} />
            </a>
            <figcaption className="figure-caption pt-1">
                <a className="text-white" href="https://www.secretsofgeeks.com/2019/10/wordpress-login-remember-recent-usernames.html">WordPress Plugin that stores the recent usernames or emails and makes it easy to login by providing an account chooser like Google and Facebook.</a>
            </figcaption>
        </figure>
    </div>
);

const footerLinks = data.footerLinks.map(({ title, href, rel }) =>
    <a key={title} className="nav-link text-white" rel={rel} href={href}>{title}</a>
);

const Footer = () => (
    <footer className="bg-dark text-white mt-4 pt-2 overflow-hidden">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <GoogleAd slot='3305888916' />
                </div>
                <div className="col-12 col-md-6 align-self-end">
                    <CustomAd />
                    <nav className="nav justify-content-md-end justify-content-center">
                        {footerLinks}
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;