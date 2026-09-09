// Public measurement ID only; reports require the owner's Google Analytics login.
(() => {
  // Keep local builds and file previews out of the website's traffic reports.
  if (window.location.hostname !== 'chilab-rise.github.io') return;

  const measurementId = 'G-JSC59PFSD8';
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);
})();
