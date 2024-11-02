function loadHeader() {
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
}

document.addEventListener("DOMContentLoaded", loadHeader);

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    console.log('Name:', name);
    console.log('Review:', review);

    
    document.getElementById('review-form').reset();
});
