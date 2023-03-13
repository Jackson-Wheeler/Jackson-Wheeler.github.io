export function runFetch(url, type, displayFunc) {
    fetch(url, {
        method: type,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(resp => resp.json())
    .then(dataJson => displayFunc(dataJson))
    .catch(error => console.error(error)); 
}

export function runFetchWithBody(url, type, bodyString, displayFunc) {
    fetch(url, { 
        method: type,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: bodyString, 
    })
    .then(resp => resp.json())
    .then(dataJson => displayFunc(dataJson))
    .catch(error => console.error(error)); 
}