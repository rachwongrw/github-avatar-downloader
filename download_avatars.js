var request = require('request');
var token = require('./secrets').GITHUB_TOKEN;

console.log('---------------------------------------');
console.log('Welcome to the Github Avatar Downloader');
console.log('---------------------------------------');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + token
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}

function callback(err, result){
  if (err) {
    console.log("Errors:", err);
  }
  var obj = JSON.parse(result);
    obj.forEach(function (i) {
    console.log(i.avatar_url);
  });
}

getRepoContributors("jquery", "jquery", callback);