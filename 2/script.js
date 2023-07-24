window.onload = function (){
    document.getElementById('myBtn').addEventListener("click", function (){
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        alert("Ширина: " + width + "px\nВысота: " + height + "px");
    })
}