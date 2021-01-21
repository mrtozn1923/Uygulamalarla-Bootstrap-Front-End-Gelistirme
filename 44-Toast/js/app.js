$(function() {
    // $("#btn-toast").click(function(){
    //   $('#toast').toast('show');
    // });
    // $("#btn-toast-delay").click(function(){
    //   $('#toast-delay').toast('show');
    // });
    // $("#btn-toast-delay").click(function() {
    //     $('#toast-delay').toast('show');
    // });

    //animation, delay, autohide
    $("#btn-toast-show").click(function() {
      $('#toast').toast({animation:false,autohide:false}); 
      $('#toast').toast('show');
    });
    $("#btn-toast-hide").click(function() { 
      $('#toast').toast('hide');
    });
    // $('#toast').on('show.bs.toast',function(){
    //   alert("Toast Show");
    // });
    // $('#toast').on('hide.bs.toast',function(){
    //   alert("Toast Hide");
    // });
});