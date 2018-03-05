(function() {
  'use strict';
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function() {
      console.log("Registration succeeded.");
    })
    .catch(function(error) {
      console.log("Registration failed:", error);
    });
  }
})();
