const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

yesButton.addEventListener("click", () => {
    window.location.href = "thankyou.html";
});

noButton.addEventListener("mousemove", (event) => {
    const buttonRect = noButton.getBoundingClientRect();
    const mouseX = event.clientX;
    const buttonCenterX = (buttonRect.left + buttonRect.width);

    // Calculate the distance between the mouse and the button
    const distance = mouseX - buttonCenterX;

    // Define a threshold for when the button should start moving
    const threshold = 1000000000000;

    // The mouse is close to the button, move the button away
    const direction = distance > 100 ? 50 : -10;
    const speedFactor = 12;
    noButton.style.transform = `translateX(${direction * speedFactor * threshold}px)`;
});

noButton.addEventListener("mouseout", () => {
    // Reset the transform style when the mouse leaves the button
    noButton.style.transform = "translateX(0)";
});


