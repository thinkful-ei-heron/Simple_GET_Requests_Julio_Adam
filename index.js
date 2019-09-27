function getDogImage(link) {
    fetch(link);
    .then(respone => response.json);
    .then
}

function createInputLink() {
    $('.dog-box').submit('.submit_button', event => {
        event.preventDefault();
        let inputValue = $('.amount_dogs').val();
        let link = `https://dog.ceo/api/breeds/image/random/${inputValue}`;
        getDogImage(link);
    })
}

function generateHtml() {

}

$(createInputLink);