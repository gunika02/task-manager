/* // JavaScript to handle modal, task addition, and navigation..

const modal = document.getElementById("task-modal");
const openModalBtn = document.getElementById("open-modal");
const cancelTaskBtn = document.getElementById("cancel-task");
const addTaskBtn = document.getElementById("add-task");

const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");

let currentSection = "inbox";

// Modal control
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

cancelTaskBtn.onclick = function() {
    modal.style.display = "none";
}

addTaskBtn.onclick = function() {
    const taskName = document.getElementById("task-name").value;
    const taskDesc = document.getElementById("task-desc").value;
    const taskDuedate = document.getElementById("task-duedate").value;
    
    if (taskName) {
        addTask(taskName, taskDesc, currentSection , taskDuedate);
        document.getElementById("task-name").value = '';
        document.getElementById("task-desc").value = '';
        modal.style.display = "none";
    } else {
        alert("Task name is required!");
    }
}

function addTask(name, desc, section , duedate) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    const taskTitle = document.createElement("h4");
    taskTitle.textContent = name;
    
    const taskDescription = document.createElement("p");
    taskDescription.textContent = desc;

    const taskDuedate = document.createElement("h3");
    taskDuedate.textContent = "hello";
    
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);

    taskItem.appendChild(taskDuedate);
    
    const taskList = document.getElementById(`tasks-list-${section}`);
    taskList.appendChild(taskItem);
    
    const emptyState = document.getElementById(`empty-state-${section}`);
    if (taskList.children.length > 0) {
        emptyState.style.display = "none";
    }

}

// Navigation control
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        // Remove 'active' class from all menu items
        menuItems.forEach(menu => menu.classList.remove("active"));
        // Add 'active' class to the clicked menu item
        item.classList.add("active");

        // Hide all content sections
        contentSections.forEach(section => section.classList.remove("active"));
        
        // Show the selected content section
        currentSection = item.getAttribute("data-section");
        document.getElementById(currentSection).classList.add("active");
    });
});


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// aaryan

// function toggleAddTaskButton() {
//     const addTaskBtn = document.getElementById('open-modal');


//  const taskModal = document.getElementById('task-modal');
    
    
//     if (currentSection === 'inbox') {
        
//         addTaskBtn.style.display = 'block';

//         taskModal.style.display = 'none';  

//     } else {
//         addTaskBtn.style.display = 'none';

//         taskModal.style.display = 'none';  
//     }
// }


// toggleAddTaskButton();


// menuItems.forEach(item => {


//     item.addEventListener("click",   function() {
     
//     menuItems.forEach(menu => menu.classList.remove("active"));
//          item.classList.add("active");

// contentSections.forEach(section => section.classList.remove("active"));
//           currentSection = item.getAttribute("data-section");
//      document.getElementById(currentSection).classList.add("active");
        
     
//         toggleAddTaskButton();
//     });
// });


// openModalBtn.onclick = function() {
//     if       (currentSection === 'inbox') {
//         modal.style.display = "block";
//     }
// }

// cancelTaskBtn.onclick = function() {
//                                             modal.style.display = "none";
// }

// addTaskBtn.onclick = function() {
// const taskName = document.getElementById("task-name").value;
//     const taskDesc = document.getElementById("task-desc").value;
    
//     if (taskName) {
//         addTask(taskName, taskDesc, currentSection);
//  document.getElementById("task-name").value = '';
//         document.getElementById("task-desc").value = '';
//         modal.style.display = "none";
//     } else {
//         alert("Task name is required!");
//     }
// }

// taskItems.forEach((taskItem) => {
//     const deleteBtn = taskItem.querySelector('.task-delete');
//      deleteBtn.addEventListener('click', () => {
//         taskItem.remove();
//         const taskList = taskItem.parentNode;
//     const emptyState = document.getElementById(`empty-state-${taskList.id.split('-')[1]}`);
//         if (taskList.children.length === 0) {
//    emptyState.style.display = 'block';
//         }
//     });
// });

// taskItems.forEach((taskItem) => {
//     const checkbox = taskItem.querySelector('.task-checkbox');
//     checkbox.addEventListener('click', () => {
//         taskItem.classList.toggle('completed');
//     });
// });
// aaryan


function toggleAddTaskButton() {
 const addTaskBtn = document.getElementById('open-modal');
   
 
 const taskModal = document.getElementById('task-modal');
    
    
    if (currentSection === 'inbox') {
        addTaskBtn.style.display = 'block';
        taskModal.style.display = 'none';  
    } else {
        addTaskBtn.style.display = 'none';
        taskModal.style.display = 'none';  


    }
}




toggleAddTaskButton();


menuItems.forEach(item => {
    item.addEventListener("click", function() 
    
    {
        // Existing navigation code
        menuItems.forEach(menu => menu.classList.remove("active"));
        
        
        item.classList.add("active");

        contentSections.forEach(section => section.classList.remove("active"));
   currentSection = item.getAttribute("data-section");
        
   
   document.getElementById(currentSection).classList.add("active");
        
        


        toggleAddTaskButton();
    });
});




openModalBtn.onclick = function() {


    if (currentSection === 'inbox') {
        modal.style.display = "block";
    }
}

cancelTaskBtn.onclick = function() {


modal.style.display = "none";
}

addTaskBtn.onclick = function() {
    const taskName = document.getElementById("task-name").value; 
    const taskDesc = document.getElementById("task-desc").value;
    const taskDueDate = document.getElementById("task-duedate").value;
    if (taskName) {
        addTask(taskName, taskDesc, currentSection, taskDueDate);
        document.getElementById("task-name").value = '';
        document.getElementById("task-desc").value = '';
        document.getElementById("task-duedate").value = '';
        modal.style.display = "none";
        
    

initializeTaskItems();
    } else {
        alert("Task name is required!");
    }
}

function addTask(name, desc, section, dueDate) {


    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");


    
    const taskTitle = document.createElement("h4");
    taskTitle.textContent = name;
    
    const taskDescription = document.createElement("p");
    taskDescription.textContent = desc;


    const taskDueDate = document.createElement("h4");
    taskDueDate.textContent = "Due Date: " + dueDate;
    
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(taskDueDate);

    const taskList = document.getElementById(`tasks-list-${section}`);
    taskList.appendChild(taskItem);
    
    const emptyState = document.getElementById(`empty-state-${section}`);
    if (taskList.children.length > 0) {
        emptyState.style.display = "none";
    }
}


function initializeTaskItems() {
    const taskItems = document.querySelectorAll('.task-item');

    taskItems.forEach((taskItem) => {
        const deleteBtn = taskItem.querySelector('.task-delete');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                taskItem.remove();
                const taskList = taskItem.parentNode;
                const emptyState = document.getElementById(`empty-state-${taskList.id.split('-')[1]}`);
                if (taskList.children.length === 0) {
                    emptyState.style.display = 'block';
                }
            });
        
        
        
}

        const checkbox = taskItem.querySelector('.task-checkbox');
        if (checkbox) {
            checkbox.addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });
        }
    });
}


initializeTaskItems(); */

// palak
const modal = document.getElementById("task-modal");
const openModalBtn = document.getElementById("open-modal");
const cancelTaskBtn = document.getElementById("cancel-task");
const addTaskBtn = document.getElementById("add-task");

const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");

let currentSection = "inbox";

// Modal control
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

cancelTaskBtn.onclick = function() {
    modal.style.display = "none";
}

addTaskBtn.onclick = function() {
    const taskName = document.getElementById("task-name").value;
    const taskDesc = document.getElementById("task-desc").value;
    const taskDuedate = document.getElementById("task-duedate").value;
    const taskPriority = document.getElementById("task-priority").value;

    if (taskName) {
        addTask(taskName, taskDesc, currentSection, taskDuedate, taskPriority);
        document.getElementById("task-name").value = '';
        document.getElementById("task-desc").value = '';
        document.getElementById("task-duedate").value = '';
        document.getElementById("task-priority").value = '3'; // Reset to default priority (Medium)
        modal.style.display = "none";
    } else {
        alert("Task name is required!");
    }
}

function addTask(name, desc, section, dueDate, priority) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    const taskTitle = document.createElement("h4");
    taskTitle.textContent = name;
    
    const taskDescription = document.createElement("p");
    taskDescription.textContent = desc;

    const taskDueDate = document.createElement("p");
    taskDueDate.classList.add("task-due-date");
    taskDueDate.textContent = "Due Date: " + dueDate;

    const dueDateTime = new Date(dueDate + "T23:59:59");
    const currentTime = new Date();
    const timeDifference = dueDateTime - currentTime;

    if (timeDifference > 0) {
        const timer = document.createElement("span");
        timer.classList.add("task-timer");
        timer.textContent = formatTime(timeDifference);
        taskDueDate.appendChild(timer);
        updateTimer(timer, timeDifference);
    } else {
        taskDueDate.textContent = "Due Date: " + dueDate + " (Past Due)";
    }

    const taskPriorityElement = document.createElement("p");
    taskPriorityElement.classList.add("task-priority");
    taskPriorityElement.textContent = "Priority: " + getPriorityText(priority);

    const priorityColor = getPriorityColor(priority);
    taskItem.style.borderLeftColor = priorityColor;
    taskPriorityElement.style.color = priorityColor;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("task-delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        taskItem.remove();
        checkEmptyState(section);
    });

    const editButton = document.createElement("button");
    editButton.classList.add("task-edit");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        editTask(taskItem, name, desc, dueDate, priority);
    });

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(taskDueDate);
    taskItem.appendChild(taskPriorityElement);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);
    
    
    const taskList = document.getElementById(`tasks-list-${section}`);
    taskList.appendChild(taskItem);
    
    const emptyState = document.getElementById(`empty-state-${section}`);
    if (taskList.children.length > 0) {
        emptyState.style.display = "none";
    }

    sortTasksByPriority(taskList);
}

function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
}

function updateTimer(timerElement, timeDifference) {
    setInterval(() => {
        timeDifference -= 1000;
        if (timeDifference < 0) {
            timerElement.textContent = "Time's up!";
            clearInterval(this);
        } else {
            timerElement.textContent = formatTime(timeDifference);
        }
    }, 1000);
}

function sortTasksByPriority(tasksList) {
    const tasks = Array.from(tasksList.children);
    tasks.sort((a, b) => {
        const priorityOrder = { 
            'Very High': 1, 
            'High': 2, 
            'Medium': 3, 
            'Low': 4, 
            'Very Low': 5 
        };
        const priorityA = priorityOrder[a.querySelector('.task-priority').textContent.split(': ')[1]];
        const priorityB = priorityOrder[b.querySelector('.task-priority').textContent.split(': ')[1]];
        return priorityA - priorityB;
    });

    tasks.forEach(task => tasksList.appendChild(task)); // Re-append sorted tasks
}

function getPriorityText(priority) {
    switch (parseInt(priority, 10)) {
        case 5:
            return 'Very High';
        case 4:
            return 'High';
        case 3:
            return 'Medium';
        case 2:
            return 'Low';
        case 1:
            return 'Very Low';
        default:
            return 'Medium';
    }
}

function getPriorityColor(priority) {
    switch (priority) {
        case "5":
            return "#f33f39"; // Very High
        case "4":
            return "#f58d42"; // High
        case "3":
            return "#fbeb08"; // Medium
        case "2":
            return "#7db77d"; // Low
        case "1":
            return "#86bcec"; // Very Low
        default:
            return "#ccc"; // Default color if priority is not recognized
    }
}


// Search functionality
document.getElementById('searchTask').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let tasks = document.querySelectorAll(`#tasks-list-${currentSection} .task-item`);

    tasks.forEach(function(task) {
        let text = task.textContent.toLowerCase();
        task.style.display = text.includes(filter) ? '' : 'none';
    });

    const visibleTasks = Array.from(tasks).filter(task => task.style.display !== 'none');
    const emptyState = document.getElementById(`empty-state-${currentSection}`);
    emptyState.style.display = visibleTasks.length > 0 ? 'none' : 'block';
});

// Navigation control
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        menuItems.forEach(menu => menu.classList.remove("active"));
        item.classList.add("active");

        contentSections.forEach(section => section.classList.remove("active"));
        
        currentSection = item.getAttribute("data-section");
        document.getElementById(currentSection).classList.add("active");
        toggleAddTaskButton();
    });
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleAddTaskButton() {
    const addTaskBtn = document.getElementById("open-modal");
    if (currentSection === "filters-labels") {
        addTaskBtn.style.display = "none";
    } else {
        addTaskBtn.style.display = "block";
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement; // Get the parent task item
    taskItem.parentNode.removeChild(taskItem); //Remove the task item from its parent list
  }
  
  const deleteButtons = document.querySelectorAll(".task-delete");
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      deleteTask(this);
    });
  });

  function editTask(taskItem, name, desc, dueDate, priority) {
    // Pre-fill the modal with the current task details
    document.getElementById("task-name").value = name;
    document.getElementById("task-desc").value = desc;
    document.getElementById("task-duedate").value = dueDate;
    document.getElementById("task-priority").value = priority;

    // Open the modal
    modal.style.display = "block";

    // Temporarily disable the Add button and change its text to "Save"
    addTaskBtn.textContent = "Save";
    addTaskBtn.onclick = function() {
        const newName = document.getElementById("task-name").value;
        const newDesc = document.getElementById("task-desc").value;
        const newDueDate = document.getElementById("task-duedate").value;
        const newPriority = document.getElementById("task-priority").value;

        if (newName) {
            taskItem.querySelector("h4").textContent = newName;
            taskItem.querySelector("p").textContent = newDesc;
            taskItem.querySelector(".task-due-date").textContent = "Due Date: " + newDueDate;
            taskItem.querySelector(".task-priority").textContent = "Priority: " + getPriorityText(newPriority);

            const priorityColor = getPriorityColor(newPriority);
            taskItem.style.borderLeftColor = priorityColor;

            modal.style.display = "none";
            addTaskBtn.textContent = "Add Task"; // Reset the button text
            addTaskBtn.onclick = originalAddTask; // Reset the original onclick function
        } else {
            alert("Task name is required!");
        }
    };

    // Store the original addTask function for reset
    const originalAddTask = addTaskBtn.onclick;
}