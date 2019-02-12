import request from 'superagent'

export function getUsers () {
    return request.get('/api/users')
    .then(res => {
        const posts =res.body
        return posts

    })
}