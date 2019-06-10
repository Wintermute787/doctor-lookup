import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {NameLookUp} from "./doctor-lookup";

$(document).ready(function () {
  $("#name-submit").click(function (event) {
    event.preventDefault();
    let selectedSymptom = $('#name').val();
    console.log(selectedSymptom);
    $('#name').val("");

    let symptomLookup = new NameLookUp();
    let promise = symptomLookup.getDoctorProfession(selectedSymptom);

    promise.then(function (response) {
      let body = JSON.parse(response);

        body.data.forEach(function(data){
          $('.name-results').append(`Doctor info: ${data.profile.first_name}, ${data.profile.last_name}, ${data.practices[0].visit_address.city}, ${data.practices[0].visit_address.state}, ${data.practices[0].visit_address.street},
            ${data.practices[0].visit_address.zip},
            ${data.practices[0].phones[0].number},
            ${data.practices[0].visit_address.city}`);
        });


    }, function (error) {
      $(".errors").text(`There was an error processing your request ${error.message}`);
    });
  });
});
