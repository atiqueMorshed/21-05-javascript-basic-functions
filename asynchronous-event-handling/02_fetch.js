// Fetch returns us a promise value while making api request to url that we passed
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({myStateUsers: users}))
  .catch((error) => console.log("Error found!"));

// 

fetch(url)
    .then((response) => {
        if (response.ok) return response.json();
        else throw new Error('Something went wrong');
    })
    .then((users) => this.setState({myStateUsers: users}))
    .catch((error) => console.log(error));

// 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => {
      const firstUser = user[0];
      return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id)
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    