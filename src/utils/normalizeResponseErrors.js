const normalizeResponseErrors = (response) => {
    console.log(response);
    if (!response.ok) {
        throw { status: response.status, message: response.statuse };
    }
    return response.json();
};

export default normalizeResponseErrors;
