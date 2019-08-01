// loads without any skills
// input a skill
// click add a skill
// skill adds to list 

$(document).ready(function() {
    // Function to get input value.
    $('#text_value').click(function() {
    var text_value = $("#text").val();
    if(text_value=='') {
    alert("Enter Some Text In Input Field");
    }else{
    alert(text_value);
    }
    });
    $('#text_reset').click(function() {
    $("#text").val('');
    });
    
    