const start = performance.now();
Promise.all([
  new Promise(resolve => {
    window.HEADER_DONE = resolve;
  }),
  new Promise(resolve => {
    window.APP_DONE = resolve;
  })
]).then(() => {
  const done = document.createElement('h1');
  done.innerHTML = `Done in ${ (performance.now() - start).toFixed(0) }ms`;
  document.body.appendChild(done)
});
