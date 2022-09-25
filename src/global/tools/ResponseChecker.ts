function isResponseValid(response: any) {
    return (response.statusCode == 200)
}

export default isResponseValid;
