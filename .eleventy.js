const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const site = require("./_data/site.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: site.url
    }
  });

  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("./posts/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", (collection) => {
    const tags = new Set();
    collection.getFilteredByGlob("./posts/*.md").forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (!["all", "nav", "post"].includes(tag)) {
          tags.add(tag);
        }
      });
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  });

  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) return "";
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date(value));
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    return new Date(value).toISOString();
  });

  eleventyConfig.addFilter("toAbsoluteUrl", (url) => {
    if (!url) return "";
    const trimmedSiteUrl = (site.url || "").replace(/\/+$/, "");
    if (/^https?:\/\//i.test(url)) {
      return url;
    }
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    const normalizedPath = url.startsWith("/") ? url : `/${url}`;
    return `${trimmedSiteUrl}${normalizedPath}`;
  });

  eleventyConfig.addFilter("excerpt", (content, length = 155) => {
    if (!content) return "";
    const text = String(content)
      .replace(/<[^>]*>?/gm, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) return "";
    if (text.length <= length) return text;
    return `${text.slice(0, length).trim()}...`;
  });

  eleventyConfig.addFilter("filterTags", (tags = []) => {
    const excluded = new Set(["all", "nav", "post", "posts"]);
    return (tags || []).filter((tag) => !excluded.has(tag));
  });

  eleventyConfig.addLayoutAlias("post.njk", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("base.njk", "layouts/base.njk");

  eleventyConfig.addPassthroughCopy({ static: "static" });
  eleventyConfig.addPassthroughCopy({ "static/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });
  eleventyConfig.addWatchTarget("static");

  eleventyConfig.addGlobalData("site", site);
  eleventyConfig.addNunjucksGlobal("currentYear", new Date().getFullYear());

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
