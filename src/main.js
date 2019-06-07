import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $("#profession-submit").click(function () {
    let selectedProfession = $('#profession').val();
    $('#profession').val("");
  });
});