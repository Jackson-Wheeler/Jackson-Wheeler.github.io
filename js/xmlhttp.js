export function runXmlHttp(url, type, displayFunc) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const respData = JSON.parse(this.responseText);
                displayFunc(respData);
            } else {
                console.log('Error:', this.statusText);
            }
        }
    };
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
}

export function runXmlHttpWithBody(url, type, bodyString, displayFunc) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const respData = JSON.parse(this.responseText);
                displayFunc(respData);
            } else {
                console.log('Error:', this.statusText);
            }
        }
    };
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(bodyString);
}