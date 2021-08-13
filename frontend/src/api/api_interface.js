import axios from 'axios'

export default function api_interface(url, data = {}, type = "GET") {
    const API_HEADERS = {
        'Content-type': 'application/json; charset=UTF-8',
    };
    return new Promise((resolve, reject) => {   // new promise  object
        let promise
        if (type === "GET") {
            promise = axios.get(url, {
                params: data,
                headers: API_HEADERS
            });
            promise.then(response => {
                resolve(response)
            }).catch(error => {
                reject(error);
            });
        } else if (type === "POST") {
            let headers = {headers: API_HEADERS};
            promise = axios.post(url, data, headers);
            promise.then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            });
        } else if (type === "DELETE") {
            let headers = {headers: API_HEADERS};
            promise = axios.delete(url + getUrlParams(data), headers, {params: data});
            promise.then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            });
        } else if (type === "PUT") {
            let headers = {headers: API_HEADERS};
            promise = axios.put(url, data, headers);
            promise.then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            });
        } else if (type === "GET FILE") {
            promise = axios.get(url, {
                responseType: 'arraybuffer',
                params: data,
                headers: API_HEADERS
            });
            promise.then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            });
        } else if (type === 'POST FILE') {
            promise = axios.post(url, data, {
                headers: API_HEADERS
            });
            promise.then((response) => {
                resolve(response)
            }).catch(error => {
                reject()
            });
        }
    });
}


function getUrlParams(params) {
    let paramsInURL = '?';
    for (const param in params) {
        paramsInURL += param + '=' + params[param] + '&';
    }
    return paramsInURL;
}
