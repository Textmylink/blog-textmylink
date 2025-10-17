(function () {
  function createPostCard(post) {
    var article = document.createElement('article');
    article.className = 'post-card';

    var linkWrapper = document.createElement('a');
    linkWrapper.href = post.url;

    if (post.image) {
      var media = document.createElement('div');
      media.className = 'post-card__media';

      var image = document.createElement('img');
      image.src = post.image;
      image.alt = post.title + ' teaser image';
      image.loading = 'lazy';

      media.appendChild(image);
      linkWrapper.appendChild(media);
    } else {
      var placeholder = document.createElement('div');
      placeholder.className = 'post-card__media post-card__media--placeholder';
      placeholder.textContent = 'TextMyLink';
      linkWrapper.appendChild(placeholder);
    }

    article.appendChild(linkWrapper);

    var body = document.createElement('div');
    body.className = 'post-card__body';

    var meta = document.createElement('p');
    meta.className = 'post-card__meta';
    meta.textContent = post.readableDate || '';
    body.appendChild(meta);

    var heading = document.createElement('h3');
    var headingLink = document.createElement('a');
    headingLink.href = post.url;
    headingLink.textContent = post.title;
    heading.appendChild(headingLink);
    body.appendChild(heading);

    if (post.excerpt) {
      var excerpt = document.createElement('p');
      excerpt.className = 'post-card__excerpt';
      excerpt.textContent = post.excerpt;
      body.appendChild(excerpt);
    }

    var cta = document.createElement('a');
    cta.className = 'post-card__link';
    cta.href = post.url;
    cta.textContent = 'Read more →';
    body.appendChild(cta);

    article.appendChild(body);

    return article;
  }

  function initInfiniteScroll() {
    var container = document.querySelector('[data-infinite-scroll]');
    if (!container) {
      return;
    }

    var sentinel = container.querySelector('.infinite-scroll-sentinel');
    var nextPageAttr = container.getAttribute('data-next-page');
    var totalPagesAttr = container.getAttribute('data-total-pages');
    var endpointRoot = container.getAttribute('data-endpoint-root') || '';
    var endpointExtension = container.getAttribute('data-endpoint-extension') || '';

    var nextPage = parseInt(nextPageAttr || '0', 10);
    var totalPages = parseInt(totalPagesAttr || '0', 10);

    if (!sentinel || !endpointRoot || !endpointExtension || !nextPage || nextPage > totalPages) {
      return;
    }

    if (!window.fetch || !('IntersectionObserver' in window)) {
      return;
    }

    var isLoading = false;
    var observer;

    function removeSentinel() {
      if (observer) {
        observer.disconnect();
      }
      if (sentinel && sentinel.parentNode) {
        sentinel.parentNode.removeChild(sentinel);
      }
    }

    function appendPosts(posts) {
      if (!Array.isArray(posts) || posts.length === 0) {
        return;
      }

      for (var index = 0; index < posts.length; index += 1) {
        var card = createPostCard(posts[index]);
        container.insertBefore(card, sentinel);
      }
    }

    function showLoadError() {
      if (container.querySelector('.infinite-scroll-error')) {
        return;
      }

      var message = document.createElement('p');
      message.className = 'infinite-scroll-error';
      message.textContent = 'We couldn\'t load more stories right now. ';

      var link = document.createElement('a');
      link.href = '/tags';
      link.textContent = 'Browse the tags page instead.';

      message.appendChild(link);
      container.parentNode.insertBefore(message, container.nextSibling);
    }

    function loadNextPage() {
      if (isLoading || !nextPage || nextPage > totalPages) {
        if (nextPage > totalPages) {
          removeSentinel();
        }
        return;
      }

      isLoading = true;
      container.setAttribute('aria-busy', 'true');

      var endpoint = endpointRoot + nextPage + endpointExtension;

      fetch(endpoint, { headers: { Accept: 'application/json' } })
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Failed to fetch posts.');
          }
          return response.json();
        })
        .then(function (payload) {
          var posts = payload && Array.isArray(payload.posts) ? payload.posts : [];
          appendPosts(posts);

          if (payload && typeof payload.totalPages === 'number') {
            totalPages = payload.totalPages;
          }

          nextPage += 1;

          if (nextPage > totalPages) {
            removeSentinel();
          }
        })
        .catch(function () {
          removeSentinel();
          showLoadError();
        })
        .finally(function () {
          container.removeAttribute('aria-busy');
          isLoading = false;
        });
    }

    observer = new IntersectionObserver(
      function (entries) {
        for (var entryIndex = 0; entryIndex < entries.length; entryIndex += 1) {
          if (entries[entryIndex].isIntersecting) {
            loadNextPage();
            break;
          }
        }
      },
      { rootMargin: '0px 0px 200px 0px' }
    );

    observer.observe(sentinel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInfiniteScroll);
  } else {
    initInfiniteScroll();
  }
})();
