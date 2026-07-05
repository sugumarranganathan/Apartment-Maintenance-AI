// =========================================
// Apartment Maintenance AI
// script.js
// =========================================

const complaintInput = document.getElementById("complaint");
const submitBtn = document.getElementById("submitBtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

// -----------------------------------------
// Generate Maintenance Ticket
// -----------------------------------------

async function submitComplaint() {

    const complaint = complaintInput.value.trim();

    if (!complaint) {
        alert("Please enter your maintenance complaint.");
        complaintInput.focus();
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Analyzing...";

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

        submitBtn.disabled = false;
        submitBtn.textContent = "Generate Maintenance Ticket";

        if (!response.ok || data.error) {

            alert(data.error || "Something went wrong.");

            return;

        }

        document.getElementById("category").textContent =
            data.category || "-";

        document.getElementById("priority").textContent =
            data.priority || "-";

        document.getElementById("technician").textContent =
            data.technician || "-";

        document.getElementById("time").textContent =
            data.estimated_time || "-";

        document.getElementById("summary").textContent =
            data.summary || "-";

        result.style.display = "block";

        result.scrollIntoView({
            behavior: "smooth"
        });

    }

    catch (error) {

        loading.style.display = "none";

        submitBtn.disabled = false;
        submitBtn.textContent = "Generate Maintenance Ticket";

        alert("Unable to connect to the server.");

        console.error(error);

    }

}

// -----------------------------------------
// Clear Form
// -----------------------------------------

function clearForm() {

    complaintInput.value = "";

    document.getElementById("category").textContent = "-";
    document.getElementById("priority").textContent = "-";
    document.getElementById("technician").textContent = "-";
    document.getElementById("time").textContent = "-";
    document.getElementById("summary").textContent = "-";

    result.style.display = "none";

    loading.style.display = "none";

    complaintInput.focus();

}

// -----------------------------------------
// Keyboard Shortcut
// Ctrl + Enter
// -----------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    complaintInput.focus();

    complaintInput.addEventListener("keydown", (event) => {

        if (event.ctrlKey && event.key === "Enter") {

            submitComplaint();

        }

    });

});
