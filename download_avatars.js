var request = require('request'); // getting the request lib
console.log('Welcome to the Github Avatar Downloader!');

const GITHUB_USER = "DP27";
const GITHUB_TOKEN = "f75e68bad236949c50d9a4206ccd02e1f4996d24";



function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);




  return cb;
};



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});