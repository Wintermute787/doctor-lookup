import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {SymptomLookUp} from "./doctor-lookup";

$(document).ready(function () {
  $("#symptom-submit").click(function () {
    let selectedSymptom = $('#symptom').val();
    $('#symptom').val("");
    
    let symptomLookup = new SymptomLookUp();
    let symptomResults = symptomLookup.getDoctorProfession(selectedSymptom);
    
    symptomResults.then(function (response) {
      let body = JSON.parse(response);

        $(".symptom-results").text(`Here are all of the results for ${selectedSymptom}: ${body.profile}`);

      
    }, function (error) {
      $(".errors").text(`There was an error processing your request ${error.message}`);
    });
  });
});