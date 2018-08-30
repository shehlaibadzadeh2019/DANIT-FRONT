$(document).ready(function () {
    alert($("#city option:selected").html());
   // $("#city option:selected").html("melbourne"); // innerHTML
    $("#city [value='melbourne']").attr("selected", "selected");
});
