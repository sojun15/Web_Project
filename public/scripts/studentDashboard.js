const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("studentName").innerHTML = `Welcome ${user.name}`;

document
  .getElementById("tutorForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = {
      name: document.getElementById("name").value,
      subjects: document.getElementById("subjects").value,
      availability: document.getElementById("availability").value,
      learningGoals: document.getElementById("learningGoals").value,
      budget: document.getElementById("budget").value,
      teachingStyle: document.getElementById("teachingStyle").value,
      notes: document.getElementById("notes").value,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/student/post_request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form");
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  });
const handleResponse = (id) => {
  fetch(`http://localhost:3001/api/teacher/response/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
  });
};
document
  .getElementById("searchBtn")
  .addEventListener("click", async function () {
    const location = document.getElementById("location").value;

    // Clear previous results
    const teacherCards = document.getElementById("teacherCards");
    teacherCards.innerHTML = "";

    if (!location) {
      alert("Please enter a location.");
      return;
    }

    try {
      // Fetch matching teachers from API
      const response = await fetch(
        `http://localhost:3001/api/teacher/location?location=${location}`
      );

      if (response.ok) {
        const teachers = await response.json();

        if (teachers.length > 0) {
          // Display each teacher in a card
          teachers.forEach((teacher) => {
            const teacherCard = `
              <div class="bg-white text-black p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 class="text-lg font-bold text-gray-800">${teacher.name}</h3>
                <p class="text-sm text-gray-600">Subjects: ${
                  teacher.subjectExpertise
                }</p>
                <p class="text-sm text-gray-600">Availability: ${
                  teacher.availabilDays
                }</p>
                <p class="text-sm text-gray-600">Budget: ${
                  teacher.rate || "N/A"
                }</p>
                <p class="text-sm text-gray-600">Teaching Style: ${
                  teacher.teachingStyle
                }</p>
                <p class="text-sm text-gray-600">Notes: ${
                  teacher.notes || "No additional notes"
                }</p>
                <button class="responseTutor bg-blue-500 text-white px-2 py-1 my-1 rounded" data-id="${
                  teacher._id
                }">Response</button>
              </div>
            `;
            teacherCards.insertAdjacentHTML("beforeend", teacherCard);
          });

          // Event delegation: Add a single click event listener to the parent container
          teacherCards.addEventListener("click", function (event) {
            // Check if the clicked element is a "Response" button
            if (event.target.classList.contains("responseTutor")) {
              const teacherId = event.target.getAttribute("data-id");
              handleResponse(teacherId);
            }
          });
        } else {
          // If no teachers found, display a message
          teacherCards.innerHTML = `<p class="text-red-500 text-center">No teachers found for this location.</p>`;
        }
      } else {
        console.error("Error fetching teachers:", response.status);
        alert("Error fetching teachers.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  });

//logout
document.getElementById("logout").addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "index.html";
});
