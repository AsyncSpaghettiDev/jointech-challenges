const search_list = document.getElementById("search_list")
const search_inpt = document.getElementById("search_inpt")
const search_btn = document.getElementById("search_btn")

const initial_array = [
    1, 3, 5, 6
]

initial_array.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    search_list.appendChild(li)
})

const searchO = (list, item) => {
    let start = 0
    let end = list.length - 1
    let middle = Math.floor((start + end) / 2)

    while (list[middle] !== item && start <= end) {
        if (item < list[middle])
            end = middle - 1
        else
            start = middle + 1

        middle = Math.floor((start + end) / 2)
    }
    const found = list[middle] === item

    return {
        found,
        index: found ? middle : start
    }
}

search_btn.addEventListener("click", function () {
    const search = search_inpt.valueAsNumber

    if (isNaN(search))
        return alert("Please enter a number")

    const found = searchO(initial_array, search)

    if (found.found)
        alert("Found in position " + found.index)
    else
        alert("Not found but must be in position " + found.index)
})