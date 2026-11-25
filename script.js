function showMessage() {
    alert("Welcome to my website!");
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("result").innerText =
        "Thank you, " + name + "! Your form was submitted.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}