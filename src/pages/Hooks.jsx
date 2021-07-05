import hljs from "highlight.js/lib/common";
import { GoogleAd } from "../componenets/utils";
import 'highlight.js/styles/github-dark.css';

export const content = () => (
    <>
        <p className="font-weight-bold">Use these actions and filters to extend or modify the plugin functionality.</p>
        <SubHeading name="wpes_meta_keys_query" />
        <p>Filter SQL query for listing meta keys in plugin settings.</p>
        <CodeBlock lang='php'>{`
/**
 * Select all meta keys including those start with _(underscore)
 */
function wpes_meta_keys_query($query) {
        global $wpdb;
        $query = "select DISTINCT meta_key from $wpdb->postmeta ORDER BY meta_key ASC";
        return $query;
}
add_filter('wpes_meta_keys_query', 'wpes_meta_keys_query');
    `}</CodeBlock>

        <GoogleAd slot='8314673012' />
        <SubHeading name="wpes_tax_args" />
        <p>Filter arguments array used by <code>get_taxonomies()</code> for listing taxonomies in settings.</p>
        <CodeBlock lang='php'>{`
/**
 * Display only custom taxonomies
 */
function wpes_tax_args($args) {
        $args['_builtin'] = false;
        return $args;
}
add_filter('wpes_tax_args', 'wpes_tax_args');
        `}</CodeBlock>

        <SubHeading name="wpes_post_types_args" />
        <p>Filter <code>get_post_types()</code> argument array used for listing post type in settings.</p>
        <CodeBlock lang='php'>{`
/**
 * List only custom post types
 */
function wpes_post_types_args($args) {
        $args['_builtin'] = false;
        return $args;
}
add_filter('wpes_post_types_args', 'wpes_post_types_args');
        `}</CodeBlock>

        <SubHeading name="wpes_enabled" />
        <p>Filter to enable/disable plugin functions for any specific condition.</p>
        <CodeBlock lang='php'>{`
/**
 * Disable WPES when query string variable disable_wpes is true
 */
function wpes_enabled($enabled) {
        if (!empty($_GET['disable_wpes'])) {
                return FALSE;
        }
        return $enabled;
}
add_filter('wpes_enabled', 'wpes_enabled');`}
        </CodeBlock>

        <SubHeading name="wpes_posts_search" />
        <p>Filter final search SQL where statement return by <code>posts_search</code> filter.</p>
        <CodeBlock lang='php'>{`
/**
 * Filter SQL 'where' clause return by WPES
 * @see https://developer.wordpress.org/reference/hooks/posts_search/
 * @param string $search_where where clause
 * @param object $wp_query global wp_query object
 * @return string where clause
 */
function wpes_posts_search($search_where, $wp_query) {
        $search_where .= " AND your_custom_var = 'your_custom_value'";
        return $search_where;
}
add_filter('wpes_posts_search', 'wpes_posts_search', 10, 2);
        `}</CodeBlock>

        <SubHeading name="wpes_meta_keys" />
        <p>Filter meta keys name.</p>
        <CodeBlock lang='php'>{`
/**
 * Insert only one key that start with underscore
 */
function wpes_meta_keys($meta_keys) {
        $meta_keys[] = '_key_with_underscore';
        return $meta_keys;
}
add_filter('wpes_meta_keys', 'wpes_meta_keys');
        `}</CodeBlock>

        <SubHeading name="wpes_tax" />
        <p>Filter Taxonomies array return by <code>get_taxonomies()</code></p>
        <CodeBlock lang='php'>{`
/**
 * Insert specific taxonomy in the result return by get_taxonomies
 */
function wpes_tax($taxonomies) {
        $my_tax = new stdClass();
        $my_tax->labels->name = 'Custom Tax';
        $taxonomies['custom_tax'] = $my_tax;
        return $taxonomies;
}
add_filter('wpes_tax', 'wpes_tax');
        `}</CodeBlock>

        <SubHeading name="wpes_post_types" />
        <p>Filter post types array return by <code>get_post_types()</code></p>
        <CodeBlock lang='php'>{`
/**
 * Insert specific post type in the result return by get_post_types
 */
function wpes_post_types($post_types) {
        $my_post_type = new stdClass();
        $my_post_type->labels = new stdClass();
        $my_post_type->labels->name = 'Custom Post'; // "Custom Post" is the name of post type.
        $post_types['custom_post'] = $my_post_type; // "custom_post" is the slug of post type.
        return $post_types;
}
add_filter('wpes_post_types', 'wpes_post_types');
        `}</CodeBlock>

        <SubHeading name="wp_es_terms_relation_type" />
        <p>Filter the term relation type OR/AND in search SQL query. This filter will override the WPES setting.
            <br />Possible values are OR and AND only.</p>
        <CodeBlock lang='php'>{`
/**
 * If search term contain the specific string 'hello WP' then return OR else use WPES setting
 * @return string OR or AND relation between terms in SQL query
 */
function wp_es_terms_relation_type() {
        if ($_GET['s'] == 'hello WP') {
                return 'OR';
        }
}
add_filter('wp_es_terms_relation_type', 'wp_es_terms_relation_type');
        `}</CodeBlock>

        <SubHeading name="disable_wpes" />
        <p><code>disable_wpes</code> is a query var. You can pass this query var to your custom queries to disable WPES for specific queries.</p>
        <p>This is useful when you do not want to disable WPES for primary query and want to disable for secondary query only thus you can not use <code>wpes_enabled</code> filter.</p>
        <CodeBlock lang='php'>{`
/**
 * Disable WPES when my_custom_var is set to true.
 */
add_action('parse_query', function ( $q ) {
        if ($q->get('my_custom_var')) {
                $q->set('disable_wpes', true);
        }
});	
        `}</CodeBlock>
    </>
)

const CodeBlock = args => (
    <pre>
        <code className="hljs" dangerouslySetInnerHTML={{ __html: hljs.highlight(args.children, { language: args.lang }).value }}></code>
    </pre>
)

const SubHeading = ({ name }) => (
    <h3 id={name}>{name}</h3>
)

export const jumpLinks = {
    'wpes_meta_keys_query': 'wpes_meta_keys_query',
    'wpes_tax_args': 'wpes_tax_args',
    'wpes_post_types_args': 'wpes_post_types_args',
    'wpes_enabled': 'wpes_enabled',
    'wpes_posts_search': 'wpes_posts_search',
    'wpes_meta_keys': 'wpes_meta_keys',
    'wpes_tax': 'wpes_tax',
    'wpes_post_types': 'wpes_post_types',
    'wp_es_terms_relation_type': 'wp_es_terms_relation_type',
    'disable_wpes': 'disable_wpes',
};
