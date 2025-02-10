document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress bars with segments
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.querySelector('.segments').style.transform = 'scaleX(1)';
        }, index * 200);
    });

    // Update refresh timer
    function updateTimer() {
        const timerElement = document.getElementById('refresh-timer');
        let [minutes, seconds] = timerElement.textContent.split(':').map(Number);
        
        setInterval(() => {
            seconds--;
            if (seconds < 0) {
                minutes--;
                seconds = 59;
            }
            if (minutes < 0) {
                minutes = 3;
                seconds = 55;
            }
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

    updateTimer();

    // Add hover effect for service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
});
