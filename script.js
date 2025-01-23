document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to progress bars sequentially
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = '100%';
        }, index * 200);
    });
});
