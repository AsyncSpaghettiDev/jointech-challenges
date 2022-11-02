const length_inpt = document.getElementById("length_inpt")
const length_btn = document.getElementById("length_btn")

length_btn.addEventListener("click", function () {
    const str = length_inpt.value

    // Validate if the string is empty
    if (str.trim() === '')
        return alert("Please enter a string")

    // We remove the last space, if there is one
    // Then we split the string into an array of words
    // Then we get the index of the last word of the array
    // With the index we get the last word and its length
    const newStr = str.trimEnd().split(" ")
    const lastIndex = newStr.length - 1
    const lastWord = newStr[lastIndex].length
    alert('The length of the last word is ' + lastWord)
})