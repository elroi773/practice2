
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const aspectRatio = 3 / 4;
            let width = img.width;
            let height = img.height;
            
            if (width / height > aspectRatio) {
                width = height * aspectRatio;
            } else {
                height = width / aspectRatio;
            }
            
            const segmentWidth = width / 3;
            const segmentHeight = height / 3;
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = segmentWidth;
            canvas.height = segmentHeight;
            document.getElementById('preview').innerHTML = '';
            const images = [];

            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, col * segmentWidth, row * segmentHeight, segmentWidth, segmentHeight, 0, 0, segmentWidth, segmentHeight);
                    const imgURL = canvas.toDataURL("image/png");
                    const imgElement = document.createElement('img');
                    imgElement.src = imgURL;
                    imgElement.className = 'grid-img';
                    document.getElementById('preview').appendChild(imgElement);
                    images.push(imgURL);
                }
            }
            
            const downloadButton = document.getElementById('downloadAll');
            downloadButton.style.display = 'block';
            downloadButton.onclick = function() {
                images.forEach((url, index) => {
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `grid_part_${index + 1}.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            };
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});