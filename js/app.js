
const heading = document.querySelector(".heading");
const discription = document.querySelector(".discription");
const payButton = document.querySelector(".payment-button");
const container = document.querySelector(".abc");
const timeline = new TimelineMax({ delay: 0.5 });

window.onload = () => {
    // if (window.innerWidth < 480) {
    //     timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "80%", opacity: 1 });
    // } else {
    //     timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "50%", opacity: 1 });
    // }
    timeline.fromTo(heading, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
    timeline.fromTo(discription, 0.5, { opacity: 0 }, { opacity: 1 });
    timeline.fromTo(payButton, 0.5, { opacity: 0 }, { opacity: 1 });
}

