document.addEventListener('keydown', function (event) {
    // Prevent F12 key (123) and Alt key (18)
    if (event.keyCode === 123 || event.keyCode === 18 || 
        // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || 
        (event.ctrlKey && event.keyCode === 85)) {
        event.preventDefault();
        return false;
    }
});

// Prevent right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    return false;
});

// // Disable text selection
// document.onselectstart = function() {
//     return false;
// };

// // Disable copy
// document.oncopy = function() {
//     return false;
// };

// // Disable cut
// document.oncut = function() {
//     return false;
// };
