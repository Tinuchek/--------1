// Синхронные операции
console.log('Привет');
const div = document.querySelector('#posts');

// Асинхронные операции
async function getPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url, {
        headers: {
            'Content-Type':'alication/json',
        },
    });
    const posts = await response.json();
    console.log(posts);
    showPosts(posts)
}

function showPosts(posts){
    const postDiv = document.querySelector('posts')
    for (const post of posts){
        postDiv.innerHTML +=`
        <div style="border:1px solid grey; margin-bottom: 5px">
            <div style="font-weight:bold;">
            Название поста: ${post.title}
        `
    }
}