import $ from 'jquery';
export let createHTML = function(array){
  for (var i = 0; i < array.length; i++) {
    console.log(i);
    $(".teams").append(`<p id="team${i}out"><strong>Team ${i + 1}:<br></strong>${(array[i].join(", "))}</p>`)
  }
}


export let sortArray = function(array){
  // console.log(array)
  //   let buddy = array.sort();
  //   console.log(buddy);
  //   return buddy;
  //   console.log(array.sort());
  // console.log(buddy);
  var winner = []
  for (var i=0; i<array.length; i++){
    if (array[i].join("").length > array[i+1].join("").length){
      winner.push(array[i])
    } else {
      winner.push(array[i+1])
      console.log(winner)
    }
    console.log(winner)
  }
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
