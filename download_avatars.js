var request = require('request'); // getting the request lib
var fs = require('fs');
console.log('Welcome to the Github Avatar Downloader!');

const GITHUB_USER = "DP27";
const GITHUB_TOKEN = "f75e68bad236949c50d9a4206ccd02e1f4996d24";
const UserAgent = "DP27";


function getRepoContributors(repoOwner, repoName, cb) {

  //requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var result = {};
  const options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    method: 'GET',
    headers: {
        'User-Agent': 'DP27'
    }
  };

  //console.log(requestURL);
  request(options,function(err,result){
    return cb(err,JSON.parse(result.body));
  })

};






getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  var avatarArray = [];
  var avatarLogin = [];
  for(var i in result){
    avatarArray.push(result[i]['avatar_url']);
    avatarLogin.push(result[i]['login']);
  }
  downloadImageByURL(avatarArray,avatarLogin)
});



function downloadImageByURL(url, filePath) {
  // ...
  for(var i in url){
    request.get(url[i])
    .on('error',function(err){
      throw err;
    })
    .pipe(fs.createWriteStream('./avatar/'+filePath[i]+'.jpg'))
  }

}