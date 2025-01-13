 var rect = document.querySelector("#center"); 


 rect.addEventListener("maousemove",function(details){
    var rectanglelocation = rect.getBoundingClient();
    var insiderectval = details.clinetX -rectanglelocation.left;

    if(insiderectval < rectanglelocation / 2){
        var redcolor = gsap.utils.mapRange(
            0,
            rectanglelocation.width /2,
            255,
            0,
            insiderectval
        )
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4
        });

    }else{
        var bluecolor = gsap.utils.mapRange(
            rectanglelocation.width / 2,
            rectanglelocation.width,
            0,
            255,
            insiderectval
        );
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4

        });

   }
 });

 rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"black"
    });
 });

