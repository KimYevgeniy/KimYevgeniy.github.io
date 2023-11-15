// //follower script.js
// const follower = document.getElementById("follower");

// // Function to update the follower div position
// function updateFollowerPosition(event) {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;

//   const scrollX = window.scrollX || window.pageXOffset;
//   const scrollY = window.scrollY || window.pageYOffset;

//   const pageWidth = document.documentElement.clientWidth;
//   const pageHeight = document.documentElement.clientHeight;

//   const followerWidth = follower.clientWidth;
//   const followerHeight = follower.clientHeight;

//   // Calculate the maximum allowed position for the follower div
//   const maxX = pageWidth - followerWidth;
//   const maxY = pageHeight - followerHeight + 400;

//   // Calculate the new position while considering scroll and boundaries
//   let newLeft = mouseX + scrollX;
//   let newTop = mouseY + scrollY;

//   // Ensure the follower div stays within the page boundaries
//   newLeft = Math.min(Math.max(newLeft, 0), maxX);
//   newTop = Math.min(Math.max(newTop, 0), maxY);

//   // Update the position of the follower div
//   follower.style.left = newLeft + "px";
//   follower.style.top = newTop + "px";
// }

// document.addEventListener("mousemove", updateFollowerPosition);
// window.addEventListener("scroll", updateFollowerPosition);
// window.addEventListener("resize", updateFollowerPosition);
