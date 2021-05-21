Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("transpnder")

function capture() {
    Webcam.snap(
        function(img) {
         document.getElementById("reading").innerHTML=`<img src=${img} id="capimg">`   
        }
       
    )
    document.getElementById("nice").innerHTML="THIS Image???"
}

