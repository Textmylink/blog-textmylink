module.exports = {
  eleventyComputed: {
    permalink: (data) => (data.draft ? false : data.permalink),
    eleventyExcludeFromCollections: (data) => data.draft ? true : data.eleventyExcludeFromCollections
  }
};
