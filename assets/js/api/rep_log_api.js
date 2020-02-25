function fetchJson(url, options) {
    //Object.assign is equal to array.merge in javascript
    return fetch(url, Object.assign({
        credentials: 'same-origin',
    }, options))
        .then(response => {
            return response.json();
        });
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

