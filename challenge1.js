const palindrome_inpt = document.getElementById("palindrome_inpt")
const palindrome_btn = document.getElementById("palindrome_btn")

palindrome_btn.addEventListener("click", function () {
    const str = palindrome_inpt.value

    if (str.trim() === '')
        return alert("Please enter a string")

    const reversed = str.split("").reverse().join("")

    alert(str === reversed ? "It's a palindrome!" : "It's not a palindrome!")

}
)