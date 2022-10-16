
const postsController = new PostsController(0);


function loadCardsListFromPostsController() {
    for (var i = 0, size = postsController.posts.length; i < size; i++) {
        const post = postsController.posts[i];
        addPostCard(post);
    }
}

function addPostCard(post) {
    const postHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="' + post.imageUrl + '" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + post.userName + '</h5>\n' +
        '        <p class="card-text">' + post.country + ', ' + post.city + '</p>\n' +
        '        <p class="card-text">' + post.recommendation + '</p>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const postsContainer = document.getElementById("list-posts");
    postsContainer.innerHTML += postHTML;
}

postsController.loadPostsFromLocalStorage();
loadCardsListFromPostsController();
