document.addEventListener("DOMContentLoaded", function() {
    var p3Element = document.querySelector('.p3');
    var p3OffsetTop = p3Element.offsetTop;

    // Function to scroll to p3 when it's clicked
    p3Element.addEventListener('click', function() {
        window.scrollTo({
            top: p3OffsetTop,
            behavior: 'smooth'
        });
    });
});
