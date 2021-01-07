$(document).ready(function(){
    $(".close").click(function(){
        $("#myAlert").alert("close");
    });
    // $("#myAlert").on('close.bs.alert',function(){
    //     alert('Uyarı kapatıldı');
    // });
    $("#myAlert").on('closed.bs.alert',function(){
        alert('Uyarı kapatıldı');
    });
});
//close.bs.alert ve closed.bs.alert