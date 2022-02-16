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

function getCommonDirectoryPath(pathes) {
  let file1 = pathes[0]
  for (let i = 1; i < pathes.length; i++) {
    let file = pathes[i].split("/");
    for (let j = 0; j < file.length; j++) {
      if (file1[j] === file[j]) {
        file1 = file1.substring(0,j)
      }
    }
  }
console.log(file1)
  let indexer = file1.lastIndexOf("/");
  if(indexer != -1){
    file1 = file1.substring(0,indexer+1);
  }


  return file1
}
console.log(
  getCommonDirectoryPath(["/web/images/image1.png", "/web/images/image2.png"])
);

// add i to store as array of array
function bestPros(pros, k) {
  let distances = [];
  for (let i = 0; i < pros.length; i++) {
    distances.push(pros[i][0]);
  }

  let pmsScores = [];
  let maxDistance = Math.max(...distances);
  for (let i = 0; i < pros.length; i++) {
    pmsScores.push([(maxDistance - pros[i][0]) * pros[i][1], i]);
  }
  pmsScores.sort((a, b) => b[0] - a[0]);

  let bestScores = [];
  for (let i = 0; i < k; i++) {
    bestScores.push(pmsScores[i]);
  }

  let idxs = [];
  for (let i = 0; i < bestScores.length; i++) {
    idxs.push(bestScores[i][1]);
  }
  return idxs;
}

// console.log(
// bestPros(
//   [
//     [2, 5],
//     [5, 6],
//     [8, 10],
//     [3, 4],
//     [5, 10],
//   ],
//   3
// )
// );

// 0, 1, 2, 3, 4

function categorySuggestions(categories, projects, k) {
  let obj = {};

  for (let j = 0; j < projects.length; j++) {
    for (let i = 0; i < categories.length; i++) {
      let arr = categories[i].split(",");
      if (arr.includes(projects[j])) {
        console.log(arr);
      }
    }
  }

  //   for (let i = 0; i < categories.length; i++) {
  //     let arr = categories[i].split(";");
  //     for (let j = 0; j < projects.length; j++) {
  //       if (arr.includes(projects[j])) {
  //         console.log(arr);
  //       }
  //     }
  //   }
}
// console.log(
//   categorySuggestions(
//     [
//       "House Painting,Interior Painting,0.9",
//       "Handyman,Massage Therapy,0.1",
//       "Handyman,House Painting,0.5",
//       "House Painting,House Cleaning,0.6",
//       "Furniture Assembly,Handyman,0.8",
//       "Furniture Assembly,Massage Therapy,0.1",
//       "Plumbing Drain Repair,Junk Removal,0.3",
//     ],
//     ["House Painting", "Handyman"],
//     3
//   )
// );
