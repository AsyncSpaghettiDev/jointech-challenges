const length_inpt = document.getElementById("length_inpt")
const length_btn = document.getElementById("length_btn")

length_btn.addEventListener("click", function () {
    const str = length_inpt.value

    if (str.trim() === '')
        return alert("Please enter a string")

    const newStr = str.trimEnd().split(" ")
    const lastIndex = newStr.length - 1
    const lastWord = newStr[lastIndex].length
    alert('The length of the last word is ' + lastWord)
})