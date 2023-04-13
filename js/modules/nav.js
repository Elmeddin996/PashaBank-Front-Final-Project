export function navBarEvents() {
    const navMenuBusines = document.querySelector(".busines-services-menu");
    const businesServices = document.querySelector(".busines-services")
    const navMenuCredits = document.querySelector(".credits-menu");
    const credits = document.querySelector(".credits")
    const factoringMenu = document.querySelector(".factoring-menu");
    const factoring = document.querySelector(".factoring")
    const documentary = document.querySelector(".documentary-transactions")
    const documentaryMenu = document.querySelector(".documentary-transactions-menu");
    const additional = document.querySelector(".additional-services")
    const additionalMenu = document.querySelector(".additional-services-menu");
    
    
        businesServices.addEventListener("mouseover", () => {
            navMenuBusines.classList.add("active");
        });
    
        businesServices.addEventListener("mouseout", () => {
            navMenuBusines.classList.remove("active");
        });
    
        credits.addEventListener("mouseover", () => {
            navMenuCredits.classList.add("active");
        });
    
        credits.addEventListener("mouseout", () => {
            navMenuCredits.classList.remove("active");
        });
    
        factoring.addEventListener("mouseover", () => {
            factoringMenu.classList.add("active");
        });
    
        factoring.addEventListener("mouseout", () => {
            factoringMenu.classList.remove("active");
        });
    
        documentary.addEventListener("mouseover", () => {
            documentaryMenu.classList.add("active");
        });
    
        documentary.addEventListener("mouseout", () => {
            documentaryMenu.classList.remove("active");
        });
    
        additional.addEventListener("mouseover", () => {
            additionalMenu.classList.add("active");
        });
    
        additional.addEventListener("mouseout", () => {
            additionalMenu.classList.remove("active");
        });

   
}