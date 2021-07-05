import jQuery from 'jquery';

const JumpList = ({ links, ParentElem, cssClass }) =>
    links.map(([link, title]) => {
        let attrs = {
            href: `#${link}`
        };
        attrs.onClick = scrollToContent;

        if (ParentElem === false) {
            attrs.className = cssClass;
            attrs.key = link;
            return <a {...attrs}>{title}</a>
        } else {
            return <ParentElem key={link} className={cssClass}><a {...attrs}>{title}</a></ParentElem>
        }
    }
    )

const scrollToContent = e => {
    e.preventDefault();

    let hash = e.target.hash;
    jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
}

export default JumpList;