$(function(){
    //Carousel Aktifleştirme
    $("#myCarousel").carousel({interval:2000});
    $("#myCarousel").carousel("cycle");
    $("#btnCycle").click(function(){
        $("#myCarousel").carousel("cycle");
    });
    $("#btnPause").click(function(){
        $("#myCarousel").carousel("pause");
    });
    $("#btnPrev").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $("#btnNext").click(function(){
        $("#myCarousel").carousel("next");
    });
    //Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item1").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item1").click(function(){
        $("#myCarousel").carousel(2);
    });
    //Carousel Kontrolleri
    $(".carousel-control-prev").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#myCarousel").carousel("next");
    });
    //slide.bs.carousel->Bir ögeden diğerine geçerken oluşur
    // $("#myCarousel").on('slide.bs.carousel',function(){
    //     alert("Diğer resme geçiliyor...");
    // });
    // slid.bs.carousel ->Bir ögeden diğerine geçtiğinde oluşur
    // $("#myCarousel").on('slid.bs.carousel',function(event){
    //     alert("Diğer resme geçildi...");
    //     // console.log(event.direction);
    //     // console.log(event.relatedTarget);
    //     // console.log(event.from);
    //     // console.log(event.to);
    // });
})