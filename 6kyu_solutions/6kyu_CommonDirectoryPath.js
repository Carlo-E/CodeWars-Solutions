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

// function getCommonDirectoryPath(pathes) {
//   // console.log()
//   let arr = []
//   for(let i = 0; i < pathes.length; i++){
//     pathes[i] = pathes[i].split("/")
//     for(let j = 0; j < pathes.length; j++){
//         if(pathes[i][i] === pathes[j][j]){
//             arr.push(pathes[i][i])
//         }
//     }
//   }
//   console.log(arr)

// }
// console.log(
//   getCommonDirectoryPath(["/web/images/image1.png", "/web/images/image2.png"])
// );

// add i to store as array of array 
function bestPros(pros, k) {
  let distances = [];
  for (let i = 0; i < pros.length; i++) {
    distances.push(pros[i][0]);
  }
  let pmsScores = [];
  let maxDistance = Math.max(...distances);
  // console.log(maxDistance)
  for (let i = 0; i < pros.length; i++) {
    pmsScores.push((maxDistance - pros[i][0]) * pros[i][1]);
  }
  console.log(pmsScores, "PMS")
  let pmsSort = [...pmsScores].sort((a, b) => b - a);
  let bestScores = [];
  for (let i = 0; i < k; i++) {
    bestScores.push(pmsSort[i]);
  }
  console.log(bestScores, "BEST SCORES")
  let idxs = [];
  // let bestScores = new Set (bestScores);
  for (let i = 0; i < pmsScores.length; i++) {

      // if(bestScores2.has(bestScores[i])){
      //   idxs.push(i);
      // }
    for (j = 0; j < pmsScores.length; j++) {
      if (bestScores[i] === pmsScores[j]) {
        idxs.push(j);
      }
    }
  }
  return [... new Set(idxs)]
  
}

// console.log(bestPros([[ 2, 5 ], [ 5, 6 ], [ 8, 10 ], [ 3, 4 ], [ 5, 10 ] ], 3) );


// 0, 1, 2, 3, 4


function categorySuggestions(categories, projects, k) {
  // Write your code here
  console.log(categories, "CATS")
  console.log(projects, "PROJECTS")
  console.log(k, "K")

  let state = new Map();

  for(let i = 0; i < categories.length; i++){
     let category = categories[i].split(",")
     let cat = state.set(category[0], new Map())
     state.set(category[1], Number(category[2]))
     state.set(category[0], cat)
  }
console.log(state)

}
console.log(categorySuggestions([
  'House Painting,Interior Painting,0.9',
  'Handyman,Massage Therapy,0.1',
  'Handyman,House Painting,0.5',
  'House Painting,House Cleaning,0.6',
  'Furniture Assembly,Handyman,0.8',
  'Furniture Assembly,Massage Therapy,0.1',
  'Plumbing Drain Repair,Junk Removal,0.3'
], [ 'House Painting', 'Handyman' ] , 3))