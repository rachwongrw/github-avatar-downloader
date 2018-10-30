var request = require('request');

console.log('---------------------------------------');
console.log('Welcome to the Github Avatar Downloader');
console.log('---------------------------------------');

function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});