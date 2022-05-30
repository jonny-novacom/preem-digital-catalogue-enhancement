exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            produkt
            id
            slug {
              current
            }
          }
        }
        totalCount
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const products = result.data.allSanityProduct.edges || [];
  products.forEach((edge, id) => {
    const path = `/products/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/Product.js"),
      context: { slug: edge.node.slug.current },
    });
  });

  const categoryResult = await graphql(`
    {
      allSanityProductCategory(
        filter: { slug: { current: { ne: "transmission-oils" } } }
      ) {
        edges {
          node {
            title
            id
            slug {
              current
            }
          }
        }
        totalCount
      }
    }
  `);
  if (categoryResult.errors) {
    throw categoryResult.errors;
  }

  const categories = categoryResult.data.allSanityProductCategory.edges || [];
  categories.forEach((edge, id) => {
    const path = `/category/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/Category.js"),
      context: { slug: edge.node.slug.current },
    });
  });

  const glossaryCatsResult = await graphql(`
    {
      allSanityGlossaryCategory {
        distinct(field: title)
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (glossaryCatsResult.errors) {
    throw glossaryCatsResult.errors;
  }

  const glossCats = glossaryCatsResult.data.allSanityGlossaryCategory.edges;

  glossCats.forEach((glossCat, id) => {
    const path = `/glossary/${glossCat.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/Glossary.js"),
      context: { glossCat: glossCat.node.slug.current },
    });
  });

  const allProductsCatsResult = await graphql(`
    {
      allSanityAllProductsCategory {
        distinct(field: title)
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (allProductsCatsResult.errors) {
    throw allProductsCatsResult.errors;
  }

  const allProductsCats =
    allProductsCatsResult.data.allSanityAllProductsCategory.edges;

  allProductsCats.forEach((allProductsCat, id) => {
    const path = `/all-products/${allProductsCat.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/AllProducts.js"),
      context: { allProductsCat: allProductsCat.node.slug.current },
    });
  });

  const pagination = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            produkt
            id
            slug {
              current
            }
          }
        }
        totalCount
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const pageSize = 32;
  const pageCount = Math.ceil(
    pagination.data.allSanityProduct.totalCount / pageSize
  );
  console.log(
    `There are ${pagination.data.allSanityProduct.totalCount} products and we have ${pageCount} pages with ${pageSize} per page.`
  );

  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`Creating page ${i}`);

    createPage({
      path: `/all-products/${i + 1}`,
      component: require.resolve("./src/pages/all-products.js"),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
};
