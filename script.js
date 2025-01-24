// Scroll-to-Top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Welcome message when the page is loaded
window.onload = function() {
    alert("Welcome to my portfolio!");
  };
  
  // Function to show/hide more information about your projects
  function toggleInfo(projectID) {
    const projectInfo = document.getElementById(projectID);
    
    // Toggle the 'hidden' class to show or hide the project information
    projectInfo.classList.toggle('hidden');
  }
  
  
