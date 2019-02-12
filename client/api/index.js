import request from 'superagent'

export function getUsers () {
    return request.get('/api/users')
    .then(res => {
        const posts =res.body
        return posts

    })
}

export function getMovies () {
    return request.get('/api/movies')
    .then(res => {
        const posts =res.body
        return posts

    })
}