exports.handler = async (event, context) => {
    const axios = require('axios');

    let body = JSON.parse(event.body);

    const secret_key = '<--reCAPTCHAv2 secrey key-->';
    const region = '<--region-->';

    const name = body.name;
    const message = body.message;
    const email = body.email;
    const response_key = body["g-recaptcha-response"];

    let url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    let axiosResponse = await axios.get(url);

    return axiosResponse.data;
};
