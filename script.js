// JavaScript to handle modal, task addition, and navigation

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


initializeTaskItems();
