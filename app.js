const keys = ["key0001", "key0002"];

const urlCIK = `https://test-project-d14cc-default-rtdb.firebaseio.com/${keys[1]}.json`;

fetch(urlCIK)
    .then(response => response.json())
    .then(data => console.log(data))