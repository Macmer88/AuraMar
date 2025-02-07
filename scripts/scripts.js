//Animacion del video
        document.addEventListener('DOMContentLoaded', function() {
            var video = document.getElementById('Logo_animado');
            var options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            var observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        video.currentTime = 0;
                        video.play();
                    }
                });
            }, options);

            observer.observe(video);
        });