$(function(){
   // $('[data-toggle="tooltip"]').tooltip();
   // $('#css').tooltip();
   // $('button').tooltip();
   //----------------------
   // $('button').tooltip({title:"Javascript"});
   // $('button').tooltip({title:"Javascript",animation:false});
   // $('button').tooltip({title:"Javascript",animation:false,delay:2000});
   // $('button').tooltip({title:"Javascript",delay:{show:400, hide:100}});
   // $('.col').tooltip({title:"Javascript",placement:"bottom",selector:"button"});
   // $('.btn-primary').tooltip({title:"Click me",placement:"bottom",trigger:"click"});
   // $('.btn-warning').tooltip({title:"Hover over me",placement:"bottom",trigger:"hover"});
   // $('.btn-danger').tooltip({title:"Focus",placement:"bottom",trigger:"focus"}); 
   // $('.btn-success').tooltip({title:"Focus and Hover",placement:"bottom",trigger:"focus hover"}); 
   
   //---------------------
   $('.btn-primary').click(function(){
      $('[data-toggle="tooltip"]').tooltip('show');
   });
   $('.btn-warning').click(function(){
      $('[data-toggle="tooltip"]').tooltip('hide');
   });
   $('.btn-success').click(function(){
      $('[data-toggle="tooltip"]').tooltip('toggle');
   });
   
   $('[data-toggle="tooltip"]').on('shown.bs.tooltip',function(){
      alert("Tooltip aktif");
   });
   $('[data-toggle="tooltip"]').on('hidden.bs.tooltip',function(){
      alert("Tooltip pasif");
   });


});