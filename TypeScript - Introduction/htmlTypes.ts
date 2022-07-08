const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const e = event.target as HTMLInputElement;
    console.log(e.value);
})