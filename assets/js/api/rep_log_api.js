function fetchJson(url, options) {
    //Object.assign is equal to array.merge in javascript
    return fetch(url, Object.assign({
        credentials: 'same-origin',
    }, options))
        .then(checkStatus)

        .then(response => {
            return response.text()
                .then(text=> text? JSON.parse(text): '')
        });
}


function checkStatus(response) {
    if (response.status >= 200 && response.status < 400) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error
}


/**
 * Return Promise object with the rep logs data
 *
 * @returns {Promise<any | never>}
 */
export function getRepLogs() {

    return fetchJson('/reps')
        .then(data => data.items);

}

export function deleteRepLog(id) {

    return fetchJson(`/reps/${id}` , {
        method: 'DELETE'
    })
}

export function createRepLog(repLog) {
    return fetchJson('/reps', {
        method: 'POST',
        body : JSON.stringify(repLog),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

