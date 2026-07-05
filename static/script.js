// ===============================
// Apartment Maintenance AI
// script.js
// ===============================

async function submitComplaint() {

    const complaint = document.getElementById("complaint").value.trim();

    if (complaint === "") {
        alert("Please enter your maintenance complaint.");
        return;
    }

    const button = document.querySelector("button");
    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    button.disabled = true;
    button.innerHTML = "Analyzing...";
    loading.style.display = "block";
    result.style.display = "none";

    try {

        const response = await fetch("/predict", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                complaint: complaint
            })

        });

        const data = await response.json();

        loading.style.display = "none";

        button.disabled = false;
        button.innerHTML = "Generate Maintenance Ticket";

        if (!response.ok || data.error) {

            alert(data.error || "Something went wrong.");
            return;

        }

        document.getElementById("category").textContent = data.category || "-";
        document.getElementById("priority").textContent = data.priority || "-";
        document.getElementById("technician").textContent = data.technician || "-";
        document.getElementById("time").textContent = data.estimated_time || "-";
        document.getElementById("summary").textContent = data.summary || "-";

        result.style.display = "block";

        result.scrollIntoView({
            behavior: "smooth"
        });

    }

    catch (error) {

        loading.style.display = "none";

        button.disabled = false;
        button.innerHTML = "Generate Maintenance Ticket";

        alert("Unable to connect to the server.");

        console.error(error);

    }

}

// Allow Ctrl+Enter to submit

document.addEventListener("DOMContentLoaded", function () {

    const textarea = document.getElementById("complaint");

    textarea.addEventListener("keydown", function (event) {

        if (event.ctrlKey && event.key === "Enter") {

            submitComplaint();

        }

    });

});
