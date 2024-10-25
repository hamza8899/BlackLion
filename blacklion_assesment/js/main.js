 document.addEventListener("DOMContentLoaded", function() {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // FageIn Animation 
    gsap.utils.toArray('.fade-in').forEach((element) => {
    gsap.fromTo(element, 
        {
            opacity: 0,       
            y: 20             
        },
        {
        opacity: 1,          
        y: 0,                 
        duration: 2,         
        ease: "power2.out",   
        scrollTrigger: {
                trigger: element,   
                start: "top 80%",  
                end: "top 50%",     
                toggleActions: "play none none reverse" 
            }
        }
    );
    });
    // FageIn Animation 


    // Globe rotate 
    gsap.to(".globe-rotate", { 
        rotation: 360, 
        duration: 25,
        repeat: -1,
        ease: "linear", 
        transformOrigin: "center center", // Ensure rotation happens around the center 
    }); 
    // Globe rotate 


    // colorful music notes  
    gsap.to(".orange-note", {
        y: -10,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true, //play animation in a reverse manner 
        repeat: -1
    });

    gsap.to(".small-orange-note", {
        x: 10,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });

    gsap.to(".pink-note", {
        y: -10,
        rotation: 10,
        duration: 1,
        ease: "sine.inOut",  //curve animation 
        yoyo: true,
        repeat: -1
    });

    gsap.to(".small-green-note", {
        y: -15,
        duration: 2,
        ease: "bounce.out",
        yoyo: true,
        repeat: -1
    });

    gsap.to(".green-note", {
        y: -10,         
        duration: 1,   
        ease: "power1.inOut",  
        yoyo: true,      
        repeat: -1       
    });
    // colorful music notes 

    // mobile vibration animation     
    gsap.fromTo(
        ".mobile-player", 
        { rotationZ: -1 }, 
        { 
            rotationZ: 1,
            duration: 0.2, 
            repeat: -1,
            yoyo: true, 
            // clearProps: "x" 
        }
    ); 
    // mobile vibration animation     


    // Laptop shrink and Grow 
    gsap.fromTo(".laptop-images svg", {scale: 0.9 }, { 
        scale: 1.05, 
        yoyo: true, 
        repeat: -1, 
        duration: 2, 
        ease: "easeInOut" 
    });
    // Laptop shrink and Grow 

    // Animate rotation  
    const rotateContents = document.querySelectorAll('.rotate-me');

    rotateContents.forEach(rotateContent => {
        gsap.fromTo( rotateContent, 
            { rotationY: 0 },      
            { 
                rotationY: 360,      
                duration: 4, 
                repeat: -1,         
                ease: "none"    // Continuous, smooth easing
            }
        )
    });
    // Animate rotation  

    // Marquee  
    const marqueeContents = document.querySelectorAll('.marquee-content');

    marqueeContents.forEach(marqueeContent => {
        const totalWidth = marqueeContent.scrollWidth; // Total width of all phrases 
        gsap.to(marqueeContent, {
            x: -totalWidth / 2, // Move left half the total width
            duration: 25,  
            ease: "none",  
            repeat: -1, 
        });
    });
    // Marquee 
}); 