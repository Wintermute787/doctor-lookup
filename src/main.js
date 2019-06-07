import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {ProfessionSearch} from "./doctor-lookup";

$(document).ready(function () {
  $("#profession-submit").click(function () {
    let selectedProfession = $('#profession').val();
    $('#profession').val("");
    
    let professionLookup = new ProfessionSearch();
    let professionResults = professionLookup.getDoctorProfession(selectedProfession);
    
    professionResults.then(function (response) {
      let body = JSON.parse(response);
      $(".professions-show").text(`Here are all of the results for ${selectedProfession}: ${body.data.name} -- ${body.data.description}`);
    }, function (error) {
      $(".errors").text(`There was an error proceesing your request ${error.message}`);
    });
  });
});