class Camera {
    constructor(videoElement) {
        this.videoElement = videoElement;
        this.stream = null;
    }

    async start() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
            this.videoElement.srcObject = this.stream;
        } catch (error) {
            console.error('카메라 접근 실패:', error);
        }
    }
}

const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const manualCaptureButton = document.createElement('button');
manualCaptureButton.textContent = '📸 즉시 촬영';
document.body.appendChild(manualCaptureButton);
const previewContainer = document.getElementById('previewContainer');
const selectedContainer = document.getElementById('selectedContainer');
const finalizeButton = document.getElementById('finalize');
const timerDisplay = document.getElementById('timer');
const finalCanvas = document.getElementById('finalResult');
const finalCtx = finalCanvas.getContext('2d');
const camera = new Camera(video);

camera.start();

// 🎥 미리보기(비디오)도 좌우 반전
video.style.transform = "scaleX(-1)";

let capturedImages = [];

captureButton.addEventListener('click', async () => {
    capturedImages = [];
    previewContainer.innerHTML = '';
    selectedContainer.innerHTML = '';

    for (let i = 8; i > 0; i--) {
        timerDisplay.textContent = `촬영 시작: ${i}초 후`;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    timerDisplay.textContent = '';
    captureImage();
    
    for (let i = 1; i < 8; i++) {
        for (let j = 10; j > 0; j--) {
            timerDisplay.textContent = `${j}초 후 촬영`;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        timerDisplay.textContent = `촬영 중...`;
        await new Promise(resolve => setTimeout(resolve, 500));
        captureImage();
    }

    timerDisplay.textContent = '촬영 완료! 사진을 선택하세요';
    finalizeButton.style.display = 'block';
});

manualCaptureButton.addEventListener('click', () => {
    if (capturedImages.length < 8) {
        captureImage();
    } else {
        alert('최대 8장까지만 촬영 가능합니다!');
    }
});

function captureImage() {
    if (capturedImages.length >= 8) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    // 🎨 캔버스에서 좌우 반전(촬영된 이미지도 반전)
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    img.addEventListener('click', () => toggleSelection(img));
    previewContainer.appendChild(img);
    capturedImages.push(img);
}

function toggleSelection(img) {
    img.classList.toggle('selected');
    if (img.classList.contains('selected')) {
        const selectedImg = img.cloneNode();
        selectedImg.addEventListener('click', () => removeSelection(selectedImg, img));
        selectedContainer.appendChild(selectedImg);
    } else {
        removeSelection(null, img);
    }
    updateFinalPreview();
}

function removeSelection(selectedImg, img) {
    img.classList.remove('selected');
    if (selectedImg) selectedContainer.removeChild(selectedImg);
    updateFinalPreview();
}

function updateFinalPreview() {
    const selectedImages = document.querySelectorAll('.selected-container img');
    finalizeButton.style.display = selectedImages.length === 4 ? 'block' : 'none';
    if (selectedImages.length === 4) {
        finalCanvas.width = video.videoWidth * 2;
        finalCanvas.height = video.videoHeight * 2;
        finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
        selectedImages.forEach((img, index) => {
            const x = (index % 2) * video.videoWidth;
            const y = Math.floor(index / 2) * video.videoHeight;
            const image = new Image();
            image.src = img.src;
            image.onload = () => finalCtx.drawImage(image, x, y, video.videoWidth, video.videoHeight);
        });
        finalCanvas.style.display = 'block';
    }
}

finalizeButton.addEventListener('click', () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = finalCanvas.toDataURL('image/png');
    downloadLink.download = 'final_photo.png';
    downloadLink.click();
});
