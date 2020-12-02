export class GetPicture {
    constructor() {
        this.APILink = 'https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6';
        this.pictures = [];
    }
    getPicture(searchText) {
        fetch(`${this.APILink}&q=${searchText}&image_type=photo`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }
}
