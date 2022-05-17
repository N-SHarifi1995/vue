let required = (typeinput) => {
    return (v) =>
        (v && v.length) || `the value of ${typeinput} is required`;
};
let minlenght = (typeinput, len) => {
    return (v) =>
        (v && v.length >= len) || `minlenght of ${typeinput} is ${len}`;
};
let maxlenght = (typeinput, len) => {
    return (v) =>
        (v && v.length <= len) || `maxlenght of ${typeinput} is ${len}`;
};
let emailevalidate = () => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return (v) => (v && regex.test(v)) || 'enter corct email'


};
export default {
    emailevalidate,
    required,
    minlenght,
    maxlenght
}