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
        .then(res => res.json())
    }

    // fetchUsers(){
    //     return fetch(`${this.}`)
    // }
}