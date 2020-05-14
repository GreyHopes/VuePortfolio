/**
 *
 * Tells us if the url is external or not
 * @param {*} url the url to check
 * @returns boolean 
 */
function isExternalURL(url)
{
    // eslint-disable-next-line no-useless-escape
    var pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    return pattern.test(url);
}

/**
 *
 * Retrieve image URL from given URL
 * @param {*} url to process
 * @returns the unchanged url if it is external or the internal image url
 */
function getImageURL(url)
{
    if(!url)
    {
        return process.env.BASE_URL+"images/background.jpg"
    }

    if(isExternalURL(url))
    {
        return url;
    }
    else
    {
        return process.env.BASE_URL+"images"+url;
    }
}

export {isExternalURL,getImageURL};