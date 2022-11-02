const search_list = document.getElementById("search_list")
const search_inpt = document.getElementById("search_inpt")
const search_btn = document.getElementById("search_btn")

const initial_array = [
    1, 3, 5, 6
]

// Display the initial array in the list element
initial_array.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    search_list.appendChild(li)
})

// Quick sort algorithm implementation for searching
const searchO = (list, item) => {
    /**
     * First we define the start and end indexes of the list
     * Then we calculate the middle index, and take the floor of the result
     */
    let start = 0
    let end = list.length - 1
    let middle = Math.floor((start + end) / 2)

    /**
     * We loop through the list until the middle values isn't equal to the searched item 
     * and the start index is less than the end index
     * 
     * If the item is less than the middle index, that means the item is in the left side of the list
     * then, we set the end index to the middle index - 1
     * 
     * Otherwise it means it must be in the right side of the list
     * then, we set the start index to the middle index + 1
     * 
     * If the item is equal to the middle index, we can't be here, because the loop will stop
     * that was one of the conditions
     * 
     * Finally, we calculate the new middle index
     * And get back to the loop
     */
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
    // Get the value of the input as a number
    const search = search_inpt.valueAsNumber

    // Validate if the input is empty or is valid number
    // note: if the input is empty, the value will be NaN
    if (isNaN(search))
        return alert("Please enter a number")

    const found = searchO(initial_array, search)

    if (found.found)
        alert("Found in position " + found.index)
    else
        alert("Not found but must be in position " + found.index)
})