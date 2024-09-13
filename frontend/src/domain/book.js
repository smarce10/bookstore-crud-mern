export class Book{
    constructor(){
        this.id = ''
        this.title = ''
        this.author = ''
        this.publishYear = 0
        this.createdAt = ''
        this.updatedAt = ''
    }

    static fromJSON(bookJSON) {
        const result = Object.assign(new Book(), bookJSON)
        return result
    }

    validate() {
        if (!this.title || !this.author) {
            throw new Error('Title and author are required.');
        }
        if (typeof this.publishYear !== 'number' || this.publishYear < 0) {
            throw new Error('Publish year must be a positive number.');
        }
    }

    createdAtFormatted(){
        const formattedDate = new Date(this.createdAt)
        const year = formattedDate.getFullYear()
        const month = formattedDate.getMonth().toString().padStart(2, "0")
        const day = formattedDate.getDay().toString().padStart(2, "0")
        return `${year} - ${month} - ${day}`
    }

    updatedAtFormatted(){
        const formattedDate = new Date(this.updatedAt)
        const year = formattedDate.getFullYear()
        const month = formattedDate.getMonth().toString().padStart(2, "0")
        const day = formattedDate.getDay().toString().padStart(2, "0")
        return `${year} - ${month} - ${day}`
    }

}