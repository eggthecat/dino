import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {createHTML} from "./dino.js"
import {sortArray} from "./dino.js"
// UI LOGIC BEGIN
$(document).ready(function() {
  $('#duel').click(function(event) {
    // event.preventDefault();
    const teamNum = $('#teamIn').val();
    const memberNum = $("#memberIn").val();

    // let teamArr = [];

    $('#location').val("");
    console.log(teamNum + " submit");
    let request = new XMLHttpRequest();
    const url = `http://dinoipsum.herokuapp.com/api?format=json&paragraphs=${teamNum}&words=${memberNum}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response[0]);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {

      console.log(response[0].join("").length);
      console.log(response[1].join("").length);
      console.log(response[2].join("").length);
      console
      createHTML(response);
      sortArray(response);


    }
  });
});
