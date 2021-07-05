import {Helmet} from "react-helmet";
import Header from './header';
import * as home from '../pages/Home';
import * as hooks from '../pages/Hooks';
import Sidebar from './sidebar';
import data from '../data/data.json';

const wrapper = props => {
    let currentPage = false;

    switch (props.id) {
        case 'Hooks':
            currentPage = hooks;
            break;

        default:
            currentPage = home;
            break;
    }

    return (
        <>
            <HeadTags pageName={props.id} />
            <Header jumpLinks={currentPage.jumpLinks} />
            <div className="row">
                <aside className="col-3 d-none d-md-block">
                    <Sidebar jumpLinks={currentPage.jumpLinks} />
                </aside>
                <main className="col-md-9 col-sm-12">
                    <currentPage.content />
                </main>
            </div>
        </>
    );
}

const HeadTags = ({ pageName }) => (
    <Helmet>
        <title>{`${data.pages[pageName].pageTitle} ${data.siteInfo.titleSeparator} ${data.siteInfo.title}`}</title>
        <meta name="description" content={data.pages[pageName].desc} />
        <meta property="og:title" content={`${data.pages[pageName].pageTitle} ${data.siteInfo.titleSeparator} ${data.siteInfo.title}`} />
        <meta property="og:description" content={data.pages[pageName].desc} />
    </Helmet>
)

export default wrapper;