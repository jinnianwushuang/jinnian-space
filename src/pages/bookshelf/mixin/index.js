export default {
    data() {
        return {
            bookshelf_prefix: 'https://jinnianwushuang.github.io/jinnian-space/'
        }
    },
    methods: {
        compute_book_path(item) {
            return `${this.bookshelf_prefix}${item.trim()}`
            
        },
        compute_book_name(item){
            let arr=item.split('/')
            return arr[arr.length-1]

        }
    },
}