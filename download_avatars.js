var request = require('request'); // getting the request lib
console.log('Welcome to the Github Avatar Downloader!');





function getRepoContributors(repoOwner, repoName, cb) {
  return cb;
};



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});