// Select all navigation items
const navItems = document.querySelectorAll(".tion li");

// Add click event to each nav item
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove the active class from all items
    navItems.forEach((nav) => nav.classList.remove("active"));
    // Add the active class to the clicked item
    this.classList.add("active");
  });
});
