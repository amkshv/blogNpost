
getPostsFromApi = [] => {
    fetch('http//localhost:/3000/posts')
    .then(response => response.json())
    .then(response => {
        sessionStorage.setItem('blogResponse', JSON.stringify(response))
        console.log(response)})
    .catch(error => console.log(error));
    )
}

getPostsFromApi()

renderPosts = () => {
    const posts = JSON.parse(sessionStorage.getItem('blogResponse'));
    let postHTML = '';
    posts.map((post, index) => {
        console.log(post);
        postHTML += `
        <section class="blog">
          <a href="" class="blog__date">20.04.2019</a>
          <img src="../img/item1.jpg" alt="item1" class="blog__image">
          <span class="blog__autor">by <a href="">David Hyman</a> / 340 views</span>
          <p class="blog__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti. Inventore quam non nostrum, facilis deleniti similique repellat, magnam consequuntur delectus aspernatur recusandae. Corporis assumenda, obcaecati ratione asperiores minus quidem.</p>
        </section>
        `
    })
}

renderPosts();