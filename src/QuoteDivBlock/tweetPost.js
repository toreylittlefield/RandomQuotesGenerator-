
import { useEffect, useState } from "react";

async function tweetPost(a) {



    var raw = JSON.stringify({
        "text": `${a}`
    });
    var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: "OAuth oauth_consumer_key=\"vU0tafpUeRqPZVWfpg0ej9cJv\",oauth_token=\"3026985545-4Em2ZH5C8bv2sTSy7yw1b2aO9X3FznwbHleqeKr\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1640290557\",oauth_nonce=\"Sx4UUEnk0go\",oauth_version=\"1.0\",oauth_signature=\"05fGfQyqriS%2FjvSE7Uf4cwcdKls%3D\""
        },
        body: raw,
        redirect: 'follow'
    };


    try {
        const response = await fetch("https://api.twitter.com/2/tweets", requestOptions)
        if (response.ok) {
            const json = await response.text()
            console.log(json)
        } else {
            throw new Error('Hi Mate')
        }


    } catch (e) {
        console.log(e)
    }
    // // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}


const TrialButton = () => {
    const [display, setDisplay] = useState()

    useEffect(() => {
        async function tweetPost() {

            const a = 'Hi 1'

            var raw = JSON.stringify({
                "text": `${a}`
            });
            var requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "OAuth oauth_consumer_key=\"vU0tafpUeRqPZVWfpg0ej9cJv\",oauth_token=\"3026985545-4Em2ZH5C8bv2sTSy7yw1b2aO9X3FznwbHleqeKr\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1640290557\",oauth_nonce=\"Sx4UUEnk0go\",oauth_version=\"1.0\",oauth_signature=\"05fGfQyqriS%2FjvSE7Uf4cwcdKls%3D\""
                },
                body: raw,
                redirect: 'follow',
                mode: 'no-cors'
            };


            try {
                const response = await fetch("https://api.twitter.com/2/tweets", requestOptions)
                if (response.ok) {
                    const json = await response.text()
                    setDisplay(json)
                    console.log(json)
                } else {
                    throw new Error('Hi This is an Error')
                }


            } catch (e) {
                console.log(e)
            }
            // // .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));
        }


    }, [])


    return (
        <button onClick={tweetPost}>MyButton</button>
    )
}

export default TrialButton
// export default tweetPost;


