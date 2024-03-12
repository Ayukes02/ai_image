function generateImage() {
    const imageType = document.getElementById('imageType').value;
    const imageContainer = document.getElementById('imageContainer');

    // You can implement the image generation logic here based on the selected image type
    // For demonstration purposes, let's assume we are fetching images from an API

    // Clear previous image
    imageContainer.innerHTML = '';

    // Fetch image from API based on selected type
    fetch(`https://api.example.com/generateImage?type=${imageType}`)
        .then(response => response.json())
        .then(data => {
            // Create image element
            const image = document.createElement('img');
            image.src = data.imageUrl;
            image.alt = 'Generated Image';

            // Append image to container
            imageContainer.appendChild(image);
        })
        .catch(error => console.error('Error fetching image:', error));
}
