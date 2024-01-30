const accessKey = 'b2IhPtQrgf9XbC11IZFbepMZfSM3sy3nu8Hj5nHPyNw';
const apiUrl = 'https://api.unsplash.com/photos/random';

function fetchCarImage() {
    fetch(`${apiUrl}?orientation=landscape&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            updateCarImage(imageUrl);
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}

function updateCarImage(imageUrl) {
    // Update the image on your webpage
    const carImageElement = document.getElementById('carImage');
    carImageElement.src = imageUrl;
}

// Fetch a new car image every 10 seconds (10000 milliseconds)
setInterval(fetchCarImage, 50000);

// Initial fetch on page load
fetchCarImage();



//buy button function
function buyCar(button) {
    // Get the parent container of the clicked button
    const carContainer = button.parentElement;

    // Remove the entire container (including image and button)
    carContainer.remove();
}
