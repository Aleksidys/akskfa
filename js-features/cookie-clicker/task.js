let counter = 0
document.getElementById("cookie").onclick = function() {
    counter++
    document.getElementById("clicker__counter").innerHTML = counter;
    let image = document.getElementById("cookie");
    if (counter % 2 === 0){
    image.height = image.height / 1.25;
    image.width = image.width / 1.25;
    } else {
    image.height = image.height * 1.25;
    image.width = image.width * 1.25;
    }
}