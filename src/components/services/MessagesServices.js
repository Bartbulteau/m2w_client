import {HTTP} from './HTTP.js'

async function getMessages() {
    var response;
    await HTTP.get('messages')
    .then(res => {
        response = res.data
    })
    .catch(err =>{
        alert(err)
    })

    return response;
}

async function postMessage(message) {
    var response;
    await HTTP.post('message', message)
    .then(res => {
        response = res.data;
    })
    .catch(err => {
        alert(err)
    })

    return response;
}

async function deleteMessage(id) {
    var response;
    await HTTP.delete('message/' + id)
    .then(res => {
        response = res.data;
    })
    .catch(err => {
        alert(err)
    })

    return response;
}

export {getMessages, postMessage, deleteMessage};