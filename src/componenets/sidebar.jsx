import JumpList from './jumpList';

const Sidebar = props => {
    const links = Object.entries(props.jumpLinks);

    if (links.length > 0) {
        return (
            <ul id="wpes-sidebar-links" className="list-group sticky-top">
                <JumpList links={links} ParentElem='li' cssClass='list-group-item' />
            </ul>
        )
    }

    return '';
}

export default Sidebar;