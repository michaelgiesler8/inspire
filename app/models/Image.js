export class Image {
    constructor(data) {
        this.url = data.largeImgUrl || data.url;
    }
}