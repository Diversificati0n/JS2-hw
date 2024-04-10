


function getUserData(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        });
}

function saveUserData(userData) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save user data');
        }
    });
}

function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.backgroundColor = 'red';
            element.style.color = 'white';
        }
    }, delay);
}

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

getUserData(1)
    .then(userData => {
        console.log(userData);
    })
    .catch(error => {
        console.error(error.message);
    });

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.error(error.message);
    });

changeStyleDelayed('myElement', 2000);
