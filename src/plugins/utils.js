/**
Copyright (C) <2020>  <Cellard Fabien>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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