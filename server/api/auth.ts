import SpotifyWebApi from "spotify-web-api-node";



export default defineEventHandler(async (event) => {

  const { code } = getQuery(event)
  console.log('code', code);
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  try {
    const data = await spotifyApi
      .authorizationCodeGrant(code as string);
    console.log('data', data)
    // const data = await res.json();
    return {
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      }
  } catch (error) {
    return {
        error,
      body: 'Error during authorization.',
    };
  }

    });
