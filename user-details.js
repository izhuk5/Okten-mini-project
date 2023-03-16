// let url = new URL(location.href); // отримали поточу URL
// let json = url.searchParams.get('data');
// let post = JSON.parse(json); // тепер ми можемо побудувати якусь DOM структуру і вивести якусь інформацію
// console.log(post);

// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост

// http методи
// get - застосовуемо за замовченням. Наприклад запит на отримання постів
// post - хочемо щось зберегти
// put - replace(update)
// delete - видалити
// path - update

const body = document.querySelector('body');
const btn = document.createElement('button');
const url = new URL(location.href);
const data = url.searchParams.get('data');
const user = JSON.parse(data);

btn.classList.add('button', 'green');
btn.textContent = 'Post of current user';
btn.style.marginTop = '34px';
body.append(btn);

function userCreator() {
    const wrapper = document.createElement('div');
    const userWrap = document.createElement('div');
    const userId = document.createElement('div');
    const name = document.createElement('div');
    const userName = document.createElement('div');
    const email = document.createElement('div');
    const address = document.createElement('div');
    const street = document.createElement('div');
    const suite = document.createElement('div');
    const city = document.createElement('div');
    const zipcode = document.createElement('div');
    const geo = document.createElement('div');
    const lat = document.createElement('div');
    const lng = document.createElement('div');
    const phone = document.createElement('div');
    const website = document.createElement('div');
    const company = document.createElement('div');
    const companyName = document.createElement('div');
    const catchPhrase = document.createElement('div');
    const bs = document.createElement('div');
    const postWrap = document.createElement('div');

    postWrap.classList.add('post-wrap');
    wrapper.classList.add('wrapper', 'wrapper1');
    userWrap.classList.add('user-wrap', 'user-wrap1');
    userId.innerHTML = `<b>User ID — ${user.id}</b>`;
    userId.style.fontSize = '28px';
    userId.style.textAlign = 'center';
    name.innerText = `Name — ${user.name}`;
    name.style.marginTop = '24px';
    userName.innerText = `UserName — ${user.username}`;
    email.innerText = `Email — ${user.email}`;
    address.innerHTML = `<b>Address</b>`
    address.style.fontSize = '20px';
    address.style.marginTop = '24px';
    street.innerText = `Street — ${user.address.street}`;
    suite.innerText = `Suite — ${user.address.suite}`;
    city.innerText = `City — ${user.address.city}`;
    zipcode.innerText = `Zipcode — ${user.address.zipcode}`;
    geo.innerHTML = `<b>Geo</b>`;
    geo.style.fontSize = '20px';
    geo.style.marginTop = '24px';
    lat.innerText = `Lat — ${user.address.geo.lat}`;
    lng.innerText = `Lng — ${user.address.geo.lng}`;
    phone.innerText = `Phone — ${user.phone}`;
    website.innerText = `Website — ${user.website}`;
    company.innerHTML = `<b>Company</b>`;
    company.style.fontSize = '20px'
    company.style.marginTop = '24px';
    companyName.innerText = `Company name — ${user.company.name}`;
    catchPhrase.innerText = `Catch phrase — ${user.company.catchPhrase}`;
    bs.innerText = `Bs — ${user.company.bs}`;

    btn.addEventListener('click', async () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(response => response.json())
            .then(posts => {
                for (const post of posts) {
                    const postItem = document.createElement('div');
                    const postTitle = document.createElement('div');
                    const infoLink = document.createElement('a');

                    postItem.classList.add('post-item');
                    postTitle.classList.add('post-title');
                    postTitle.innerHTML = `<b>Title of current user</b>${post.title}`;
                    infoLink.text = 'See more';
                    infoLink.setAttribute('href', `post-details.html?postId=${post.id}`);
                    infoLink.addEventListener('click', () => {
                        window.location.href = `post-details.html?postId=${post.id}`;
                    });

                    postWrap.append(postItem);
                    postItem.append(postTitle, infoLink);
                }
            })
    });

    body.append(wrapper);
    wrapper.append(userWrap, postWrap);
    userWrap.append(userId, name, userName, email, address, street, suite, city, zipcode, geo, lat, lng, phone, website, company, catchPhrase, bs, btn);
}

userCreator();