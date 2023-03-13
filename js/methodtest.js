import { runFetch, runFetchWithBody } from "./fetch.js";
import { runXmlHttp, runXmlHttpWithBody } from "./xmlhttp.js";

let requestType = -1; // 0 for HMLHttpRequest, 1 for fetchAPI
let formEl = document.getElementById('form');
let mainUrl = "https://httpbin.org/"

document.getElementById("getBtn").addEventListener('click', () => {
    let query = getQueryFromFrom(formEl);
    let getUrl = mainUrl + "get?" + query;
    // Run XMLHttpRequest or Fetch
    updateReqType();
    if (requestType == 0) {
        runXmlHttp(getUrl, 'GET', displayResponse);
    } else {
        runFetch(getUrl, 'GET', displayResponse);
    }
});

document.getElementById("postBtn").addEventListener('click', () => {
    let query = getQueryFromFrom(formEl);
    let postUrl = mainUrl + "post";
    // Run XMLHttpRequest or Fetch
    updateReqType();
    if (requestType == 0) {
        runXmlHttpWithBody(postUrl, 'POST', query, displayResponse);
    } else {
        runFetchWithBody(postUrl, 'POST', query, displayResponse);
    }    
    
});

document.getElementById("putBtn").addEventListener('click', () => {
    let query = getQueryFromFrom(formEl);
    let postUrl = mainUrl + "put";
    // Run XMLHttpRequest or Fetch
    updateReqType();
    if (requestType == 0) {
        runXmlHttpWithBody(postUrl, 'PUT', query, displayResponse);
    } else {
        runFetchWithBody(postUrl, 'PUT', query, displayResponse);
    }     
});

document.getElementById("deleteBtn").addEventListener('click', () => {
    let query = getQueryFromFrom(formEl);
    let getUrl = mainUrl + "delete?" + query;
    // Run XMLHttpRequest or Fetch
    updateReqType();
    if (requestType == 0) {
        runXmlHttp(getUrl, 'DELETE', displayResponse);
    } else {
        runFetch(getUrl, 'DELETE', displayResponse);
    }    
});

function getQueryFromFrom(formElem) {
    let data = new FormData(formElem);
    data.set('date', new Date());

    // Create template for the request
    let query = `id=${data.get('id')}&article_name=${data.get('article_name')}&article_body=${data.get('article_body')}&date=${data.get('date')}`;

    return query;
}

function displayResponse(dataJson) {
    let output = document.querySelector('#response pre');
    output.style.visibility = 'visible';
    output.innerHTML = JSON.stringify(dataJson, null, 2);
}

function updateReqType() {
    let xmlRadioBtn = document.getElementById('xmlHttp');
    if(xmlRadioBtn.checked) {
        requestType = 0;
    } else {
        requestType = 1;
    }
}



