import $ from 'jquery';
export let createHTML = function(array){
  for (var i = 0; i < array.length; i++) {
    console.log(i);
    $(".teams").append(`<p id="team${i}out"><strong>Team ${i + 1}:<br></strong>${(array[i].join(", "))}</p>`)
  }
}


export let sortArray = function(array){
  console.log(array)
  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
      console.log(array[i].join("").length);
      console.log(array[i+1])
      if (array[i].join("").length > array[i+1].join("").length) {
        let newArray = array[i]
        $(".winner").html(`<h1>TEAM ${i + 1} WINS!`);
      }
    }
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
