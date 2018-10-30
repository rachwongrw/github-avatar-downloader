var request = require('request');
var token = require('./secrets').GITHUB_TOKEN;
var fs = require('fs');

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

  request(options, function(err, response, body) {
    cb(err, body); //this calls the callback function. err = err, body = result
  });
}

function callback(err, result){
  if (err) {
    console.log("Errors:", err);
  }
  var array = JSON.parse(result); //make the string into an array/object
  array.forEach(function (obj) {
    var contributors = obj.avatar_url;
    downloadImageByURL(contributors, 'avatars/' + obj.login + '.jpg'); //contributors is the url now and everything after the ',' is the filePath, concatenated
  });
}

function downloadImageByURL(url, filePath) {
  request.get(url)
  .on('error', function(err) {
    throw err;
  })
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jquery", "jquery", callback);
