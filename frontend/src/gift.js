//class for gif
// "class(static)" methods and "instance(method on the prototype)" methods for the gift class


class Post {
    static allGifts = []

    constuctor(gift){
        this.id = gift.id
        this.name = gift.name
        this.cost = gift.cost
        Gift.allGifts.push(this)
    }

    static generateGifts() {
        const giftsData = apiService.fetchGifts()

    }
}