window.onload = function (){
    document.getElementById('button-passive').addEventListener("click", function () {
        const btnActive = document.querySelector('.btn-active');
        const btnPassive = document.querySelector('.btn-passive');
        btnPassive.style.display = "none";
        btnActive.style.display = "grid";
    });
    document.getElementById('button').addEventListener("click", function (){
        const btnActive = document.querySelector('.btn-active');
        const btnPassive = document.querySelector('.btn-passive');
        btnActive.style.display = "none";
        btnPassive.style.display = "grid";
    });
}