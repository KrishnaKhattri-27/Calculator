let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (f) => {

        if (f.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (f.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }

        else if (f.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        
        else if (f.target.innerHTML == 'x') {
            string = string + '*';
            document.querySelector('input').value = string;

        }

        else {
            string = string + f.target.innerHTML;

            document.querySelector('input').value = string;
        }
    })
})
