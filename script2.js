document.getElementById("tab1").addEventListener("click",function(){

    // document.getElementsByClassName("service").setAttribute("style", "display:none");
    //document.getElementById("service1").setAttribute("style", "display:block");
    let a = document.getElementsByClassName("service");
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("active");
        
    }
    document.getElementById("service1").classList.add("active");

});
document.getElementById("tab2").addEventListener("click",tab2Click);
function tab2Click(){
    let a = document.getElementsByClassName("service");
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("active");
        
    }
    document.getElementById("service2").classList.add("active");
}
document.getElementById("tab3").addEventListener("click",tab3Click);
function tab3Click(){
    let a = document.getElementsByClassName("service");
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("active");
        
    }
    document.getElementById("service3").classList.add("active");
}
document.getElementById("tab4").addEventListener("click",tab4Click);
function tab4Click(){
    let a = document.getElementsByClassName("service");
    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("active");
        
    }
    document.getElementById("service4").classList.add("active");
}