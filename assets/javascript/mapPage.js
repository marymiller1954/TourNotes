  $(document).ready(function(){

// var $input = $('.datepicker').pickadate()

// // Use the picker object directly.
// window.picker = $input.pickadate('picker')


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dd-mm-yyyy' });
});