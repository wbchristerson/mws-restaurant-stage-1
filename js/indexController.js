(function() {
  'use strict';
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function() {
      console.log("Registered!!!!!");
    })
    .catch(function(error) {
      console.log("Uh-oh. Registration failed:", error);
    });
  }
})();
