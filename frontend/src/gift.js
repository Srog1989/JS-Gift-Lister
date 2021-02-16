//class for gif
// "class(static)" methods and "instance(method on the prototype)" methods for the gift class


class Gift {
    static allGifts = []

    constructor(gift){
        this.id = gift.id
        this.name = gift.name
        this.cost = gift.cost
        Gift.allGifts.push(this)
    }

    static generateGifts() {
        const giftsData = apiService.fetchGifts()
            .then(data => 
                data.forEach(gift => {
                    const newGift = new Gift(gift)
                })
            )
        // console.log(giftsData)
    }
}