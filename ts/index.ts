const root = document.getElementById('root') as HTMLDivElement;

const firstInput = document.getElementById('vol') as HTMLInputElement;
firstInput.addEventListener('change', (e: Event): void => {
    changeHTML(e.currentTarget as HTMLInputElement);
})

let p: Element;

if (firstInput.value) {
    p = document.createElement('p');
    p.innerHTML = firstInput.value;
    root.appendChild(p);
}

function changeHTML(el: HTMLInputElement) {
    if(el.value) {
        p.innerHTML = el.value;

    }
}