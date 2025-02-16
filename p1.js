
var love = setInterval(function(){
    // ... (heart animation code - no changes needed)
},500);

var i = 0;
var txt1 = "happy birthday my love.....! <<Thank you for being such a wonderful part of my life <<<Your kindness,support,friendship means the world to me! > I'm so grateful for all you do for me and for everything you bring into my life<<THANK YOU FOR BEING THERE FOR ME❤️<<I LOVE YOU!❤️";
var speed = 80;
typeWriter();

function typeWriter() {
    if (i < txt1.length) {
        if(txt1.charAt(i)=='<')
            document.getElementById("text1").innerHTML += '</br>';
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML = '';
        else if(txt1.charAt(i)=='|') {
            $(".bg_heart").css("background-image","url('path/to/your/image.jpg')"); // Replace with your image path
        }
        else
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } 
}