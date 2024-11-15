export class Quote {
    constructor(data) {
        this.content = data.content;
        this.author = data.author;
    }

    get Template() {
        return `
            <blockquote class="blockquote">
                <p class="mb-0">${this.content}</p>
                <footer class="blockquote-footer text-white-50" title="${this.author}">${this.author}</footer>
            </blockquote>
        `;
    }
}