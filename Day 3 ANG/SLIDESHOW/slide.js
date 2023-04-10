function display()
{
    images = ["moon.jpg", "mooon.jpg", "nature.jpg", "nat2.jpg", "peak.jpg", "sun.jpg", "whity.jpg"];
    let slide = document.getElementById("slide");
    i=0
    setInterval(function()
    {
        slide.src=images[i];
        i++;
        if(i==7)
            i=0;
    },2000)

}


