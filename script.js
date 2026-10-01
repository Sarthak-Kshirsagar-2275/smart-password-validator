let notebook = []

let password = true
while (password) {
    var a = prompt("Enter your password");
    let count = 0;
    if (notebook.includes(a)) {
        alert("You used this password before")
    }
    else {
        if (a.length >= 8) count++;
        if (/[A-Z]/.test(a)) count++;
        if (/[a-z]/.test(a)) count++;
        if (/[0-9]/.test(a)) count++;
        if (/[!@#$%&*]/.test(a)) count++;

        if (a.length < 8) {
            alert("Your password must be at least 8 characters long")
        }
        else if (count == 5) {
            alert("Your password is very strong")
        }
        else if (count == 4) {
            alert("Your Password is strong")
        }
        else if (count == 3) {
            alert("Your password is mediocre")
        }
        else if (count == 2) {
            alert("Your password is weak")
        }
        else if (count == 1) {
            alert("Your password is very weak")
        }
        else if (count == 0) {
            alert("Your password is invalid")
        }

        notebook.push(a)
        if (notebook.length > 3) {
            notebook.shift()
        }
    }

    password = confirm("Do you want to try another password?")
}