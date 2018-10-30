var request = require('request');
var token = require('./secrets');

console.log('---------------------------------------');
console.log('Welcome to the Github Avatar Downloader');
console.log('---------------------------------------');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    Authorization: 'token',
    headers: {
      'User-Agent': 'request'

    }
  };

  request(url, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});