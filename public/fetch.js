console.log("in fetch.js");
setTimeout(() => {
  console.log("FETCHING");
  fetch("/api/dogs/charlie/tricks");
  fetch("/api/dogs/maisey/tricks");
  fetch("/api/dogs/cory/tricks");
  fetch("/api/dogs/bodhi/tricks");
}, 300);
