var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(700);
        player_object.scaleToHeight(510);
        player_object.set({
            top:player__y,
            left:player__x
        });
        canvas.add(player_object);

    });
	
}

function playSound(){
    x.play();
	
}
