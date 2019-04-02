$(function() {
    var canvas = document.createElement("canvas");
    canvas.width = 24;
    canvas.height = 24;
    //document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#e32f30";
    ctx.font = "24px FontAwesome";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("\uf00e", 12, 12);
    var dataURL = canvas.toDataURL('image/png')
    $('img.modallery.img-responsive').css('cursor', 'url('+dataURL+'), auto');
});
