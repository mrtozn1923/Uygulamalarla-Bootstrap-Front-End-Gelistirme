$(function() {
  // $("#myModal3").modal();
  $("#btn-open-modal3").click(function(){
    // $("#myModal3").modal({backdrop:true});
    // $("#myModal3").modal({backdrop:false});
    $("#myModal3").addClass("fade");
    $("#myModal3").modal({backdrop:"static"});
  });
  // $("#myModal3").on('show.bs.modal',function(){
  //   alert("Modal Shown");
  // });
  // $("#myModal3").on('shown.bs.modal',function(){
  //   alert("Modal Show");
  // });
  // $("#myModal3").on('hide.bs.modal',function(){
  //   alert("Modal Hide");
  // });
  // $("#myModal3").on('hidden.bs.modal',function(){
  //   alert("Modal Hidden");
  // });
  $("#myModal4").modal({backdrop:"static"});
  $("#btn-hide-modal4").click(function(){
    $("#myModal4").modal("hide");
  });
});