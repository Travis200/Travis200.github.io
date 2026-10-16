if (window.Plyr) {
  document.querySelectorAll('.js-player').forEach((video) => {
    new window.Plyr(video, {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'fullscreen']
    });
  });
}