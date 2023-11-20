export default defineEventHandler(async (event) => {
    // const { client_id, client_secret } = await readBody(event);
    try {
        // const res = await fetch('https://accounts.spotify.com/api/token', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body: JSON.stringify({
        //         client_id,
        //         client_secret,
        //         grant_type: 'authorization_code',
        //         redirect_uri: 'http://localhost:3000/callback',
        //         code: 'AQCRFiLLJTYOrbPPMEXigPrrTvslC3EtyO9SWwN-Lbs9aK6U6h2W_3wQDwmkgBYB1jrysiqjtaLq2mcF10wr2Fc93g1V8xBadjtbU523MsOm0rVp5N2QtoWB8LdATu317V1vwrdyYh5znve5qHmFceblsSG3OwGBaZQC5xWKjNxFHXYcaisI99AijuFlv_3HvWCic4Fpyknsqe8vdI5dsd1bK6tcTQsH6PXxSrg3GSEPsqS8Agt9AJ04wNmNE8_9xH57__BNGpf8mS5VTGjRSM5QC0LLOZTSbw'
        //     })
        // })
        const res = await fetch("https://api.spotify.com/v1/me", {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + 'AQCRFiLLJTYOrbPPMEXigPrrTvslC3EtyO9SWwN-Lbs9aK6U6h2W_3wQDwmkgBYB1jrysiqjtaLq2mcF10wr2Fc93g1V8xBadjtbU523MsOm0rVp5N2QtoWB8LdATu317V1vwrdyYh5znve5qHmFceblsSG3OwGBaZQC5xWKjNxFHXYcaisI99AijuFlv_3HvWCic4Fpyknsqe8vdI5dsd1bK6tcTQsH6PXxSrg3GSEPsqS8Agt9AJ04wNmNE8_9xH57__BNGpf8mS5VTGjRSM5QC0LLOZTSbw' },
        });

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