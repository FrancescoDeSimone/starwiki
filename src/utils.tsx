
const isURL = (uri: string) => {
    let url
    try {
        url = new URL(uri)

    } catch (e) {
        return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'

}

export default isURL
