//Funkcija za provjeru unosa
function validation(numbers){
  numbers = myInput.value;

  if(!numbers.match(/^\d[\d\s]+\d$/)){
    alert('Provjerite svoj unos');
  }
}


// Funkcija za pronalazenje indexa
    function findElement(arr) {
    let right_sum = 0, left_sum = 0;
    arr = myInput.value.split(' ').map(Number);

    // desni zbroj
    for (let i = 1; i < arr.length; i++)
        right_sum += arr[i];
        console.log(right_sum);

    // Pronađi poziciju
    for (let i = 0, j = 1; j < arr.length; i++, j++) {
        right_sum -= arr[j];
        left_sum += arr[i];

        if (left_sum === right_sum)
            return document.getElementById('rezultat').innerHTML = 'Index broja je  ' + (i+1);
        
    }

    return document.getElementById('rezultat').innerHTML = 'Nemože se podjeliti';

}


//meni boja
window.onscroll = () => {
  const nav = document.querySelector('#navbar-fixed');
  if(this.scrollY <= 40) nav.className = ''; else nav.className = 'white';
};

