class PostsApi {
  data() {
    return {
      pagination: {
        data: 'collections.posts',
        size: 6,
        alias: 'pagePosts',
        addAllPagesToCollections: false,
        before: (posts) => {
          if (!Array.isArray(posts)) {
            return [];
          }
          return posts.slice(1);
        }
      },
      permalink: (data) => {
        var pageNumber = (data.pagination && data.pagination.pageNumber) || 0;
        return `/api/posts/page-${pageNumber + 1}.json`;
      },
      eleventyExcludeFromCollections: true
    };
  }

  formatDate(value) {
    if (!value) {
      return '';
    }
    try {
      return new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(value));
    } catch (error) {
      return '';
    }
  }

  buildExcerpt(content, fallback) {
    var source = fallback || '';
    if (!source && content) {
      source = String(content)
        .replace(/<[^>]*>?/gm, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    if (!source) {
      return '';
    }

    if (source.length <= 150) {
      return source;
    }

    return `${source.slice(0, 150).trim()}...`;
  }

  render(data) {
    var pagination = data.pagination || {};
    var posts = (data.pagePosts || []).map((post) => {
      var image = (post.data && post.data.image) || '';
      var description = (post.data && post.data.description) || '';
      return {
        title: (post.data && post.data.title) || '',
        url: post.url,
        image: image ? String(image).trim() : '',
        readableDate: this.formatDate(post.date),
        excerpt: this.buildExcerpt(post.templateContent, description)
      };
    });

    return JSON.stringify(
      {
        page: (pagination.pageNumber || 0) + 1,
        totalPages: Array.isArray(pagination.pages) ? pagination.pages.length : 0,
        posts
      },
      null,
      2
    );
  }
}

module.exports = PostsApi;
