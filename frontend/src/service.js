//all fetch functions

class ApiService {
    constructor(){
        this.baseUrl = `http://localhost:3000/`
    }

    fetchGifts(){
        return fetch(`${this.baseUrl}/gifts`, {
            headers: {
                'content-type': 'application/json',
            }
        })
        .them(res => res.json())
    }
}