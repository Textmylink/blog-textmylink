(function () {
  function initInfiniteScroll() {
    var container = document.querySelector('[data-infinite-scroll]');
    if (!container) {
      return;
    }

    var sentinel = container.querySelector('.infinite-scroll-sentinel');
    var cards = Array.prototype.slice.call(container.querySelectorAll('.post-card'));
    var parsedBatchSize = parseInt(container.getAttribute('data-batch-size'), 10);
    var batchSize = !isNaN(parsedBatchSize) && parsedBatchSize > 0 ? parsedBatchSize : 6;

    var firstHiddenIndex = cards.length;
    for (var i = 0; i < cards.length; i += 1) {
      if (cards[i].classList.contains('post-card--hidden')) {
        firstHiddenIndex = i;
        break;
      }
    }

    if (firstHiddenIndex === cards.length) {
      return;
    }

    var observer;

    function revealNextBatch() {
      var end = Math.min(firstHiddenIndex + batchSize, cards.length);

      for (var index = firstHiddenIndex; index < end; index += 1) {
        cards[index].classList.remove('post-card--hidden');
      }

      firstHiddenIndex = end;

      if (firstHiddenIndex >= cards.length && observer) {
        observer.disconnect();
      }
    }

    if (!('IntersectionObserver' in window) || !sentinel) {
      for (var j = 0; j < cards.length; j += 1) {
        cards[j].classList.remove('post-card--hidden');
      }
      return;
    }

    observer = new IntersectionObserver(
      function (entries) {
        var isIntersecting = false;
        for (var entryIndex = 0; entryIndex < entries.length; entryIndex += 1) {
          if (entries[entryIndex].isIntersecting) {
            isIntersecting = true;
            break;
          }
        }

        if (isIntersecting) {
          revealNextBatch();
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
