const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
const body = document.querySelector('body');
const btn = document.createElement('button');

btn.classList.add('button', 'green');
btn.textContent = 'Comments of current post';
btn.style.marginTop = '34px';

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const wrapper = document.createElement('div');
        const postWrap = document.createElement('div');
        const userID = document.createElement('div');
        const id = document.createElement('div');
        const title = document.createElement('div');
        const postBody = document.createElement('div');
        const userWrap = document.createElement('div');
        const commentsWrap = document.createElement('div');

        wrapper.classList.add('wrapper', 'wrapper1');
        postWrap.classList.add('user-wrap', 'user-wrap1');
        userID.innerHTML = `<b>User ID — ${post.userId}</b>`;
        userID.style.fontSize = '24px';
        userID.style.textAlign = 'center';
        id.innerText = `ID — ${post.id}`;
        title.innerText = `Title — ${post.title}`;
        postBody.innerText = `Body — ${post.body}`;
        userWrap.classList.add('user-wrap');
        commentsWrap.classList.add('comments-wrap');
        btn.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                            comments.forEach(comment => {
                                    const commentItem = document.createElement('div');
                                    commentItem.classList.add('comment-item');
                                    commentItem.innerText = `${comment.body}`;
                                    // я не знаю звідки але в мене чого в кожном коменти зявились <br>, я найшов рішення як їх прибрати
                                    commentItem.innerHTML = `${comment.body.replace(/<br>/g, "")}`;
                                    commentsWrap.append(commentItem);
                            });
                    })
        });

        body.append(wrapper);
        wrapper.append(postWrap, commentsWrap);
        postWrap.append(userID, id, title, postBody, btn);
    })
    .catch(error => console.error(error))