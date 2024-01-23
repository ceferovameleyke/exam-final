const id = new URLSearchParams(window.location.search).get("id")
const file = document.querySelector(".file")
const title = document.querySelector(".title")
const name = document.querySelector(".name")
const save = document.querySelector(".save")
const image = document.querySelector(".img")
const img = document.querySelector("img")
if (id) {
    axios.get("http://localhost:3000/main/" + id)
        .then(res => res.data)
        .then(data => {
            img.src = data.image,
                title.value = data.title,
                name.value = data.name
        })
}
file.addEventListener("input", () => {
    const i = file.files[0]
    if (i) {
        const reader = new FileReader
        reader.readAsDataURL(i)
        reader.addEventListener("load", () => {
            img.src = reader.result
        })
    }
})
save.addEventListener("click", () => {
    if (id) {
        axios.put("http://localhost:3000/main/" + id, {
            image: img.src,
            title: title.value,
            name: name.value
        })

    } else {
        axios.post("http://localhost:3000/main/", {
            image: img.src,
            title: title.value,
            name: name.value
        })
    }
    window.location="./index.html"
})