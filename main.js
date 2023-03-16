// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
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


























// Лекція 11
// 1:04:00 - Регулярки(в загальному це важка штука)
// 12:50 - повернемось до fetch()
// 9:10 - search params
// І це все дає дозвіл нам використовувати асинхронний код як синхронний
// async function requestFunction() { // async - каже що функція асинхронна і починати її зможемо тоді коли ми почекаємо(await fetch) поки виконається вся асинхронщина всередині. І таких запитів може бути багато
//     let response1 = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
//     let response2 = await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
//     console.log(response1, response2);
// }
//
// requestFunction();


// let usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json());
// let postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json());
//
// Promise.all([usersPromise, postsPromise])
//     .then(value => {
//         console.log(value);
//     })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Otken'); // це як return
//         reject('Причина помилки') // це як return в поганому варіанти. Прописуємо причину помилки. Помилка политить в catch
//     }, 500);
// })
//     .then(value => {
//
// })
//     .catch(reason => {
//
//     })


// fetch('https://jsonplaceholder.typicode.com/users') // виконається асинхронний запит на певний сайт
//     .then(response => response.json())  // response - назва довільна отримаємо відповідь цього запиту. За допомогою функції json - з так званого тіла відповіді response ми дістаємо інформацію і перетворюємо в звичайний js обєкт
//
//     // Тут питання що робити далі з цією всією штукою. Все що захочемо)
//     // .... dom create - можемо будувати тут свою DOM структуру
//     // .then(postsArray => console.log(postsArray));
//     .then(postsArray => console.log(postsArray));

// promise, resolve - теорія
// let promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('st1');
//         resolve();
//     }, 1000);
// }).then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//             console.log('str2');
//         }, 1000)
//     })
// }).then(value => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//             console.log('str3');
//         }, 1000);
//     })
// })

// fetch() - асинхронна функція. Під капотом лежить проміс, аргументом потрібно передати url. У promise існує 3 стани pending - робить запит і він в процесі очікування. Full filed - коли він отримав відповідь, і Reject - коли в нього станеться помилка
// 
// 1:32:00 - async await
// 1:27:00 - Promise.race() - в загальному такий самий як Promise.all()
// 1:24:30 - Promise.all() - в загальному
// 1:02:00 - що собою являють API
// 1:01:57 - приклад
// 57:16 - Resolve() - це заміна return в асинхронщині
// 44:27 - Promise()
// 8:20 setInterval()
// 4:08 - setTimeout()
// 2:05 - синхронний код

// *****************************************************************************************



// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
//  ********** Стилизація проєкта **********
//  index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//
//  user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//  блоки з короткою іфною про post - в ряд по 5
//  post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//  Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд).