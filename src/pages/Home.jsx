export const content = () => (
    <>
        <h3 id="intro">Introduction:</h3>
        <p><b><a href="https://wordpress.org/plugins/wp-extended-search/" rel="nofollow noreferrer" target="_blank">WP Extended Search</a></b> is lightweight search plugin for WordPress. It has smooth and simple search settings to modify default WordPress search query.<br />< br />
            Key feature of plugin is it gives the ability to select Meta keys, tags, category and custom taxonomies so admin can choose single or multiple Meta keys and taxonomies to include in search query.  For instance if admin wants to include a meta key <b>Location</b> which have terms like <i>loc1</i>, <i>loc2</i>, <i>loc3</i>  then admin can only select this meta  key to include in search results and if user put <i>loc1</i> in search query then the posts related to <i>loc1</i> will comes up.<br />
        </p>

        <h3 id="install">Installation:</h3>
        <p>Install WP Extended Search from the 'Plugins' section in your dashboard (Plugins &gt; Add New &gt; Search for 'WP Extended Search').</p>
        <p>Or</p>
        <p>Download WP Extended Search from <a href="https://wordpress.org/plugins/wp-extended-search/" rel="nofollow">here</a> and upload it to your webserver via your FTP application. The WordPress codex contains <a href="https://wordpress.org/support/article/managing-plugins/#installing-plugins" rel="nofollow">instructions on how to do this here</a>.</p>
        <p>Activate the plugin and navigate to (Settings &gt; Extended Search) to choose your desired search settings.</p>

        <h3 id="notes">Note:</h3>
        <ul>
            <li>By default, plugin have WordPress default settings you need to change the settings according to your requirements. You can also revert the settings to default by clicking "Reset to WP default".</li>
            <li>Settings have OR relation with each other. For instance if user searches for "hello world" then both words or any word (You can customize this relation since version 1.1) should be present in title or content or tag or category etc whatever options are selected.</li>
            <li>Plugin do not affect search results in admin screens.</li>
            <li>Meta keys, which starts with (_) underscore, are not available to select, as these are WordPress default Meta keys which do not have humans readable values.</li>
            <li>Only those post type and taxonomies are available to select which have UI and public visibility.</li>
            <li>Search settings are global and alter every search query.</li>
        </ul>
    </>
);

export const jumpLinks = {
    'intro': 'Introduction',
    'install': 'Installation',
    'notes': 'Note'
};