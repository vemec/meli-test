
// export
export function promiseFetch(url) {

    // return
    return Promise.resolve()
        .then(() => {
            return fetch(url)
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        })
}
