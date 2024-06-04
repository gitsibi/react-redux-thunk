import axios from "axios";
import store from './store';

function retrieveData() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        console.log(response.data);
        let userData = response.data;
        store.dispatch(displayData(userData));
    }).catch((error) => {
        store.dispatch(displayError(error.message));
    });
}

function displayData(userData) {
    return {
        type: "display_data",
        payload: userData
    };
}

function displayError(errorMessage) {
    return {
        type: "display_error",
        payload: errorMessage
    };
}

export { displayData, displayError, retrieveData };
