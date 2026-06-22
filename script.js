document.addEventListener("DOMContentLoaded", function () {

    console.log("Adongo Peter Oduor Cybersecurity Portfolio Loaded");


    // Section animation on scroll

    const sections = document.querySelectorAll("section");


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                    "translateY(0)";

                }

            });

        },

        {
            threshold:0.2
        }

    );


    sections.forEach(section => {

        section.style.opacity="0";

        section.style.transform=
        "translateY(40px)";

        section.style.transition=
        "0.6s ease";


        observer.observe(section);


    });



    // Hover effect

    sections.forEach(section => {


        section.addEventListener(
        "mouseenter",
        ()=>{

            section.style.transform=
            "scale(1.02)";

        });


        section.addEventListener(
        "mouseleave",
        ()=>{

            section.style.transform=
            "scale(1)";

        });


    });



    // Typing effect for title

    const title =
    document.querySelector(".hero h3");


    if(title){


        const text = title.innerText;


        title.innerText="";


        let index=0;


        function type(){

            if(index < text.length){

                title.innerHTML += text.charAt(index);

                index++;

                setTimeout(type,60);

            }

        }


        type();


    }



    // Update footer year automatically

    const footer =
    document.querySelector("footer p");


    if(footer){

        const year =
        new Date().getFullYear();


        footer.innerHTML =
        `© ${year} Adongo Peter Oduor |
        Cybersecurity & Software Engineering Portfolio`;

    }


});
