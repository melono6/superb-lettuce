
let client,
    previewClient;

function init(space, accessToken, previewToken?) {
    client = require('contentful').createClient({
        space: space,
        accessToken: accessToken,
    })

    // previewClient = require('contentful').createClient({
    //     space: space,
    //     accessToken: previewToken,
    //     host: "preview.contentful.com"
    // })
}

async function getStaticProps(id, globals?:string[]) {
    const globalContent = fetchEntries({
        'content_type': 'Global',
    })[0];
    const page = await fetchEntry(id);

    return {
        props: {
            globalContent: globalContent,
            pageContent: page,
            // pageMeta: {
            //   tagList: page.data.story.tag_list,
            // },
        },
    };
}

async function fetchEntries(filter) {
const entries = await client.getEntries(filter)
if (entries.items) return entries.items
console.log(`Error getting Entries for ${filter}.`)
}

async function fetchEntry(id) {
const entry = await client.getEntry(id)
if (entry) return entry
console.log(`Error getting entry for id ${id}.`)
}

async function fetchPreview(id) {
const entry = await previewClient.getEntry(id)
if (entry) return entry
console.log(`Error getting entry for id ${id}.`)
}

export default { init, getStaticProps, fetchEntries, fetchEntry, fetchPreview }
