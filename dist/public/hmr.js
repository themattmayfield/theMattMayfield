(function() {
  if (typeof EventSource !== 'undefined') {
    const eventSource = new EventSource('/hmr');
    
    eventSource.onmessage = function(event) {
      if (event.data === 'reload') {
        console.log('HMR: Reloading page...');
        window.location.reload();
      }
    };
    
    eventSource.onerror = function() {
      console.log('HMR: Connection lost, retrying...');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };
    
    console.log('HMR: Connected');
  }
})();