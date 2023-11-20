export default defineEventHandler(async (event) => {
    const { client_id, client_secret } = await readBody(event);
    try {
        const res = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify({
                client_id,
                client_secret,
            })
        })
        console.log('res', res);
        return {
            res
        }
    } catch (error) {
        console.log('error', error);
        return {
            error
        }
    }
 })