
const myDetails = {
    name: 'BOLAJI',
    age: 12,
    job: 'Frontend web developer',
}
window.localStorage.getItem("name");

window.localStorage.setItem('name', JSON.stringify(myDetails.age));