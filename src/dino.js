import $ from 'jquery';
export let createHTML = function(array){
  for (var i = 0; i < array.length; i++) {
    console.log(i);
    $(".teams").append(`<p id="team${i}out"><strong>Team ${i + 1}:<br></strong>${(array[i].join(", "))}</p>`)
  }
}


// export let sortArray = function(array){
  // console.log(array)
  //   let buddy = array.sort();
  //   console.log(buddy);
  //   return buddy;
  //   console.log(array.sort());
  // console.log(buddy);
  export function array(response){
    console.log(response[0])

  let highestLength = response[0].join("").length;
  let winner = "";
  console.log("higest length before loop =", highestLength);

  //var for current highest
  //value of current highest
  for (var i=0; i<response.length; i++){
    //capture current length
    let currentLength = response[i].join("").length;
    //if current length is longer than highest
    if (currentLength >= highestLength) {
      //set new highest
      highestLength = currentLength;
      //record which team has new highest
      winner = `team${i+1}`;
    }
  }
  console.log(winner);

  //   console.log(response[i])
  //
  //   let currentLength = response[i].join("").length;
  //   console.log(currentLength);
  //
  //   if (response.join("").length[0] > response.join("").length[i+1]){
  //     winner.push(response[i].name)
  //   } else {
  //
  //     winner.push(response[i+1])
  //
  //     console.log(winner[0])
  //   }
  //
  // }
  // for (var i = 0; i < array.length; i++) {
  //   for (var j = 0; j < array[i].length; j++) {
  //     if (array[i].join("").length > array[i+1].join("").length) {
  //     console.log(array[i])
  //     console.log(array[i].join("").length);
  //     console.log(array[i+1])
  //
  //         if (array[j].join < array[i].join("").length) {
  //           $(".winner").html(`<h1>TEAM ${i + 1} WINS!`);
  //         }
  //       }
  //     }
  //   }
  }

    // if (array[i].join(" ").length > array[i++].join(" ").length && array[i].join(" ").length > array[i+2].join("").length) {
    //   let newArray = array[i]
    // } else if () {
//
//     }
//   }
// }
//
//
// if (newarray > array[i++].join("").length) {
//
// }
