
require('dotenv').config();
var owner = String(process.argv[2]);
var repo = String(process.argv[3]);
var request = require('request'); // getting the request lib
var fs = require('fs');
console.log('Welcome to the Github Avatar Downloader!');

const GITHUB_USER = process.env.GITHUB_USER;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const UserAgent = process.env.UserAgent;


function getRepoContributors(repoOwner, repoName, cb) {// function implementing making a request to the url and invoking the callback function after fetching the data using request(npm API).

  //requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  if(repoOwner == 'undefined' || repoName == 'undefined'){
    throw "Please provide repoOwner and repoName as parameters through console."
    return null;
  }

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


getRepoContributors(owner, repo, function(err, result) {// calling functions getrepcontributors and downloadImage. downloadImage function called after the callback function returns.
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



function downloadImageByURL(url, filePath) {// making request for the url and downloading the images in the provided filepath.
  // ...
  for(var i in url){
    request.get(url[i])
    .on('error',function(err){
      throw err;
    })
    .pipe(fs.createWriteStream('./avatar/'+filePath[i]+'.jpg'))
  }

}