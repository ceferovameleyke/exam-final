const link1 = document.querySelector(".link1")
const sort = document.querySelector("#sort")
let info = [];

const Allparam = (arr) => {
    link1.innerHTML = " ",
        arr.forEach(element => {
            link1.innerHTML += `
            <div class="keeps">
            <div class="img">
                <img src="${element.image}" alt="">
            </div>
            <h4>${element.title}</h4>
            <p>${element.name}</p>
            <div class="btn">
                    <div onclick="deletefunc(${element.id})">DELETE</div>
                    <a href="./add.html?id=${element.id}">UPDATE</a>
                </div>
        </div>
        `
        });
}
axios.get("http://localhost:3000/main/")
    .then(res => res.data)
    .then(data => {
        info = data;
        console.log(info);
        Allparam(info)
    })


function deletefunc(id) {
    axios.delete("http://localhost:3000/main/" + id)
    window.location.reload()

}
sort.addEventListener("change", (r) => {
    let infoclone = [...info];
    console.log(infoclone);
    if (r.target.value == "a-z") {
        let sortAz = infoclone.sort((a, b) => a.title.localeCompare(b.title));
        Allparam(sortAz)
    } else if (r.target.value == "a-z") {
        let sortZa = infoclone.sort((a, b) => b.title.localeCompare(a.title));
        Allparam(sortZa)
    } else {
        Allparam(info)
    }
})