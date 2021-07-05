/**
 * Fix for GitHub Pages.
 */

const fs = require('fs');

fs.readFile('./src/data/data.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log('Parsing data.json');
    data = JSON.parse(data);

    fs.readFile('./build/index.html', 'utf8', (err, fileContent) => {
        if (err) {
            console.error(err)
            return
        }

        Object.entries(data.pages).map(([pageName, pageMeta]) => {
            const mapObj = {
                "__page_title__": `${pageMeta.pageTitle} ${data.siteInfo.titleSeparator} ${data.siteInfo.title}`,
                "__page_desc__": pageMeta.desc
            };
            const fileContentReplaced = fileContent.replace(/\b(?:__page_title__|__page_desc__)\b/gi, matched => mapObj[matched]);
            const fileSlug = pageName.toLowerCase() === 'home' ? 'index' : pageName.toLowerCase();
            console.log(`Writing ${fileSlug}.html`)
            fs.writeFileSync(`./build/${fileSlug}.html`, fileContentReplaced);
        })

        console.log('Done!')
    })
})

