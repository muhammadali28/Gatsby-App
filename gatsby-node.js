// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
/*exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/product/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/product/*"

    // Update the page.
    createPage(page)
  }
}
*/

/*

Programitically creates pages

exports.createPages = async ({ actions }) => {
   actions.createPage({
    path: "store",
    component: require.resolve(`./src/templates/store.tsx`),
    context: {Heading:"Store",Desc:"It is mys store"},
    defer: true,
  });
}
*/


var path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    const result = await graphql(`
    {
        allContentfulElectronics {
            nodes {
              slug
              title
              desc {
                json
              }
            }
          }
    }
    `)

    console.log(JSON.stringify(result));

    result.data.allContentfulElectronics.nodes.forEach((obj)=>{
        createPage({
            path: `/product/${obj.slug}`,
            component: path.resolve('./src/templates/products.tsx'),
            context: {
                itemDetails: obj
            }
        })
    })
}
