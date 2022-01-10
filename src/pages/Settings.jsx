import disableWPESImg from '../assets/disable-wpes-global-settings.jpg';
import settingEditImg from '../assets/setting-edit-screen.jpg';
import configureSearchImg from '../assets/configure-search-setting.jpg';
import searchformImg from '../assets/wpes-searchform-php.jpg';
import { GoogleAd } from "../componenets/utils";

export const content = () => (
    <>
        <h3 id="global-setting">Global Setting</h3>
        <p>Once you activate the plugin, there will be no effect on your site search results because the initial setting is the same as the WordPress default setting.
            <br />To customize the setting, go to <em>Extended Search &gt; Search Settings.</em>
            <br />There are many options to tweak the search results. All of these options will affect the search result globally. It means you don't need to add a new search form or widget, and no further steps are needed from you.</p>
        <p>The global setting also affects front-end search queries from other plugins/themes. So the global setting is a complete plug and play. But for any reason, if you want to disable WPES for others search queries you can do this via WordPress actions/filters, see <a href="./hooks">Hooks</a>.</p>
        <p>In case you just want to configure WPES for specific site searches without impacting your existing WordPress search then you can disable the global search. Scroll to the bottom and click "Disable WPES for global search".
            <img width="600" height="174" className="img-fluid border my-2" alt="disable WPES global setting" src={disableWPESImg} />
            <br />To create a custom search form with specific search criteria, read the next section.</p>

        <GoogleAd slot='8314673012' />
        <h3 id="custom-setting">Custom Setting</h3>
        <p>WPES version 2.0 allows you to save more than one configuration setting. To distinguish them you need to name each one except the global setting.</p>
        <p>To create a new setting go to <em>Extended Search &gt; Setting Names</em> and click <em>Add new setting name</em> then name it and Publish.<br />
            Once you publish a setting, you will see detailed instructions to use this setting in multiple ways.<br />
            <img width="800" height="511" className="img-fluid border my-2" alt="setting edit screen" src={settingEditImg} /><br />
            Please note that, for custom settings, you have to use a separate search form, or you can modify the search form template and just add the HTML code as per the instructions provided on the edit setting page.<br />
            Now click <em>Configure Search Setting</em> and modify different options and save.
            <img width="400" height="257" className="img-fluid border my-2" alt="configure search setting" src={configureSearchImg} /><br />
            That&#8217;s it! The new search form will use search criteria set up in this new setting.</p>

        <h3 id="delete-setting">Delete a setting</h3>
        <p>To delete a setting you need to delete it permanently. Just trashing the setting will remove it from the various lists, but it will continue to work and exist in the database.</p>

        <h3 id="search-form">Adding a search form</h3>
        <p>A separate search form is only needed if your site is using any custom search setting. For the global search setting, your existing search form will continue working.</p>
        <p>To add a search form, you can use a WPES Search Form Widget, shortcode, or PHP function. You can also integrate it into an existing <code>searchfrom.php</code> template.<br />
            <img width="600" height="320" className="img-fluid border my-2" alt="WPES searchform.php integration" src={searchformImg} /><br />
            To get the shortcode and PHP code, go to <em>Extended Search &gt; Setting Names,</em> Edit a setting, and see the section <em>Uses</em>.</p>
    </>
);

export const jumpLinks = {
    'global-setting': 'Global Setting',
    'custom-setting': 'Custom Setting',
    'delete-setting': 'Delete a setting',
    'search-form': 'Adding a search form'
};