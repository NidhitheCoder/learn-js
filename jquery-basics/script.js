$(document).ready(function () {
  $("#hidden").hover(
    function () {
      $(this).css("color", "black");
    },
    function () {
      $(this).css("color", "green");
    }
  );

  $("button").click(() => {
    alert("I am alerting you..");
  });
});
