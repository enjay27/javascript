let todos;

const get = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            todos = JSON.parse(xhr.response);
        } 
        console.error(`${xhr.status} ${xhr.statusText}`);
    };
};

get('https://jsonplaceholder.typicode.com/posts/1');
console.log(todos);
