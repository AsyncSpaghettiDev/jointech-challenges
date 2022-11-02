const palindrome_inpt = document.getElementById("palindrome_inpt")
const palindrome_btn = document.getElementById("palindrome_btn")

palindrome_btn.addEventListener("click", function () {
    const str = palindrome_inpt.value

    // Validate if the string is empty
    if (str.trim() === '')
        return alert("Please enter a string")

    // Split the string into an array, reverse it and join it again
    const reversed = str.split("").reverse().join("")

    // Compare the original string with the reversed one
    alert(str === reversed ? "It's a palindrome!" : "It's not a palindrome!")
}
)