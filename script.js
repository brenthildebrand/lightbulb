$(function(){
  var currentColor = "";
  var variableColor = 0;
  var variableColorChoice = 0;
  var running = false;
  var colorOptions = ["blue", "#3333ff", "#3333cc", "#6600ff", "#9933ff", "#cc00ff", "#cc00cc", "#cc0099", "#cc3399", "#ff0066", "#cc0066", "red", "#ff3300", "#cc6600", "#ff9900", "#cc9900", "#cccc00", "#669900", "#009933", "#00cc66", "#00cc99", "#009999", "#006699", "#0099cc", "#0066cc"]
  var coloring = "";

$(".color_picker").click(function(){
  $(".color_picker").removeClass("slided");
  $(".invisible_slider").toggleClass("invisible_slided");
})
$(".color_choice").click(function(){
  //stopVarying();
  running = false;
  $(".color_varying").css("background-color", "transparent");
  currentColor = $(this).css("background-color");
  $(".color").css("background-color", currentColor);
})
$(".invisible_slider").click(function(){
  $(".invisible_slider").toggleClass("invisible_slided");
  $(".color_picker").addClass("slided");
})
function colorChangingChoice(){
  if(variableColorChoice < colorOptions.length){
    $(".color_changing_choice").css("background-color", colorOptions[variableColorChoice])
    //$(".color_varying").css("background-color", colorOptions[variableColorChoice])
    variableColorChoice += 1;
  } else {
    $(".color_changing_choice").css("background-color", colorOptions[variableColorChoice])
    //$(".color_varying").css("background-color", colorOptions[variableColorChoice])
    variableColorChoice = 0;
    //varying();
  }
  if(running == true){
    $(".color_varying").css("background-color", colorOptions[variableColorChoice])

  }
}
function varyingChoice(){
  setInterval(colorChangingChoice, 100);

}
$(".color_changing_choice").click(function(){
  if(running !== true){
  running = true;
  }
})
varyingChoice();

});
