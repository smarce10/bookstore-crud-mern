export class Book{
    constructor(){
        this.id = ''
        this.title = ''
        this.author = ''
        this.publisYear = 0
        this.createdAt = ''
        this.updatedAt = ''
    }

    static fromJSON(bookJSON) {
        const result = Object.assign(new Book(), bookJSON)
        return result
    }

}