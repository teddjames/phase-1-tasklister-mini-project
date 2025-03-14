document.addEventListener("DOMContentLoaded", () => {
  // Select the form element, the input for task description,
  // and the element that will display the list of tasks.
  const form = document.querySelector("form");
  const input = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");

  // Add an event listener for form submission.
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.
    const taskText = input.value; // Get the input value.

    // Create a new list item element.
    const li = document.createElement("li");
    li.textContent = taskText; // Set its text to the input value.

    // Append the new list item to the tasks list.
    tasksList.appendChild(li);

    // Optionally clear the input after submission.
    input.value = "";
  });
});
