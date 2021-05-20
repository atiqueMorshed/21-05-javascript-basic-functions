const myAsyncAwait = async() => {

    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
        const secondUser = users[1];
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id);
        const posts = await postsResponse.json();
    } catch(err) {
        console.log('Error Found!');
    }

    console.log(posts);
}