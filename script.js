let tabs = document.getElementsByClassName("tab");
for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.addEventListener("click",function(e){
        const element = e.target;
        const contentId = element.dataset.content;
        let services = document.getElementsByClassName("service");
        for (let j = 0; j < services.length; j++) {
            services[j].classList.remove("active");
            
        }
        document.getElementById(contentId).classList.add("active");
    })
}