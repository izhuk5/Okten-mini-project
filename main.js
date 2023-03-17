const body = document.querySelector('body');
const wrapper = document.createElement('div');
body.append(wrapper);
wrapper.classList.add('wrapper');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const userWrapper = document.createElement('div');
            const userImg = document.createElement('img');
            const button = document.createElement('button');
            const div = document.createElement('div');
            userWrapper.classList.add('user-wrap');
            userImg.classList.add('user-img');
            userImg.src = 'img/avatar.png';
            userImg.alt = 'user avatar';
            div.classList.add('user');
            div.innerHTML = `<b>User — ${user.id}</b>${user.name}`;
            button.classList.add('button', 'green');
            button.innerText = 'Click me';
            wrapper.append(userWrapper);
            userWrapper.append(userImg, div, button);
            button.addEventListener('click', function () {
                window.location.href = "user-details.html?data=" + JSON.stringify(user);
            });
        }
    })