// Returns the commom directory path for specified array of full filenames.

//  @param {array} pathes
//  @return {string}
// Examples:

//   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
//   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
//   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
//   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'

// function getCommonDirectoryPath(pathes) {
//     let output = pathes[0];

//     for(let i=1; i<pathes.length; i++){
//       for(let j=0; j<pathes[i].length; j++){
//         if(output[j] != pathes[i][j]){
//           output = output.substring(0,j);
//         }
//       }
//     }

//     let indexer = output.lastIndexOf("/");
//     if(indexer != -1){
//       output = output.substring(0,indexer+1);
//     }

//     return output;
//   }

// function getCommonDirectoryPath(pathes) {
//   for (let i = 0; i < pathes.length; i++) {
//     pathes[i] = pathes[i].split("/");
//   }
//   for (let i = 0; i < pathes.length; i++) {}
// }
// console.log(
//   getCommonDirectoryPath(["web/images/image1.png", "/web/images/image2.png"])
// );


function getCommonDirectoryPath(pathes) {
  
}
