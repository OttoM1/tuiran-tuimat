

document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("nun");

    const observerOptions = {
        root: null, 
        threshold: 0.639
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visiblel");
            } else {
                entry.target.classList.remove("visiblel");
            }
        });
    }, observerOptions);

    observer.observe(target);
}); 







document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("nun2");

    const observerOptions = {
        root: null, 
        threshold: 0.639
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains("visiblel")) {
                entry.target.classList.add("visiblel");
            }
            else {
                entry.target.classList.remove("visiblel");
            }
        });
    }, observerOptions);

    observer.observe(target);

  

}); 




document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("nun6");

    const observerOptions = {
        root: null, 
        threshold: 0.639
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains("visiblel")) {
                entry.target.classList.add("visiblel");
            }
            else {
                entry.target.classList.remove("visiblel");
            }
        });
    }, observerOptions);

    observer.observe(target);

  

}); 







document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("nun3");

    const observerOptions = {
        root: null, 
        threshold: 0.639
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visiblel");
            } else {
                entry.target.classList.remove("visiblel");
            }
        });
    }, observerOptions);

    observer.observe(target);
}); 





document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("nun4");

    const observerOptions = {
        root: null, 
        threshold: 0.639
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visiblel");
            } else {
                entry.target.classList.remove("visiblel");
            }
        });
    }, observerOptions);

    observer.observe(target);
}); 






document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("nun5");

    const observerOptions = {
        root: null, 
        threshold: 0.639
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visiblel");
            } else {
                entry.target.classList.remove("visiblel");
            }
        });
    }, observerOptions);

    observer.observe(target);
}); 


