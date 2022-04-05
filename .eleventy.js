module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.setTemplateFormats(['njk', 'css']);

  return {
    dir: {
      input: 'src',
    },
  }
};