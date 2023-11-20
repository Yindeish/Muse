import SpotifyWebApi from "spotify-web-api-node";
import crypto from 'crypto';
import querystring from "querystring";
import { useRequestHeaders } from "nuxt/app";

const generateRandomString = (length: number) => {
  return crypto
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}

var stateKey = 'spotify_auth_state';

export default defineEventHandler(async (event) => {

    var state = generateRandomString(16);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  const redirectURL = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: scope,
      redirect_uri: process.env.REDIRECT_URI,
      state: state
    })
    try {
        await sendRedirect(event, redirectURL);
      // const headers = useRequestHeaders(['Bearer']);
      console.log('redirectURL', redirectURL);
      // res.setHeader('Authorization', `Bearer AQCRFiLLJTYOrbPPMEXigPrrTvslC3EtyO9SWwN-Lbs9aK6U6h2W_3wQDwmkgBYB1jrysiqjtaLq2mcF10wr2Fc93g1V8xBadjtbU523MsOm0rVp5N2QtoWB8LdATu317V1vwrdyYh5znve5qHmFceblsSG3OwGBaZQC5xWKjNxFHXYcaisI99AijuFlv_3HvWCic4Fpyknsqe8vdI5dsd1bK6tcTQsH6PXxSrg3GSEPsqS8Agt9AJ04wNmNE8_9xH57__BNGpf8mS5VTGjRSM5QC0LLOZTSbw`);
      // event._headers = 'Authorization', `Bearer AQCRFiLLJTYOrbPPMEXigPrrTvslC3EtyO9SWwN-Lbs9aK6U6h2W_3wQDwmkgBYB1jrysiqjtaLq2mcF10wr2Fc93g1V8xBadjtbU523MsOm0rVp5N2QtoWB8LdATu317V1vwrdyYh5znve5qHmFceblsSG3OwGBaZQC5xWKjNxFHXYcaisI99AijuFlv_3HvWCic4Fpyknsqe8vdI5dsd1bK6tcTQsH6PXxSrg3GSEPsqS8Agt9AJ04wNmNE8_9xH57__BNGpf8mS5VTGjRSM5QC0LLOZTSbw`);
      // event._headers = 'Authorization', `Bearer ${token}`;
    return {
        msg: 'redirected'
    }
    } catch (error) {
        return { error }
    }

})