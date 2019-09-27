function getDogImage(link) {
    fetch(link)
        .then(response => response.json)
        .then(responseJson => generateHtml(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'))
}

function createInputLink() {
    $('.dog-box').submit('.submit_button', event => {
        event.preventDefault();
        let inputValue = $('.amount_dogs').val();
        let link = `https://dog.ceo/api/breeds/image/random/${inputValue}`;
        getDogImage(link);
    })
}

function generateHtml(responseJson) {
    
}

$(createInputLink);