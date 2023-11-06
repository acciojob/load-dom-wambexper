document.addEventListener("DOMContentLoaded", function() {
    // This function will be executed when the DOM is fully loaded.
    const body = document.body;

    // Create a div element to contain the message and append it to the body.
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "DOM load success";
    body.appendChild(messageDiv);
});
