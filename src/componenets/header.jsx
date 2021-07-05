import JumpList from './jumpList';
import logo from '../assets/wpes-logo.png';
import data from '../data/data.json';
import { NavLink } from "react-router-dom";


const Header = props => {
    const menuItems = Object.entries(data.pages).map(([title, value]) =>
        <li key={value.slug} className="nav-item">
            <NavLink exact={true} className="nav-link" to={value.slug}>{title}</NavLink>
        </li>
    );

    const SubMenu = () => {
        const links = Object.entries(props.jumpLinks);
        if (links.length > 0) {
            return (
                <li className="nav-item dropdown d-md-none">
                    {/* eslint-disable-next-line */}
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Jump to</a>
                    <div className="dropdown-menu">
                        <JumpList links={links} ParentElem={false} cssClass='dropdown-item' />
                    </div>
                </li>
            )
        }
        return '';
    }

    return (
        <header className="wpes-header mb-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mr-1" href="./">
                    <img src={logo} width="50" height="50" className="d-inline-block align-middle" alt="" />&nbsp;
                    {data.siteInfo.title}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#wpes-nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="wpes-nav-toggle">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        {menuItems}
                        <SubMenu />
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;