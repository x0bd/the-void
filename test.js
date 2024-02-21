var client_id = "19052841c02f4b2a990ee3d6636cd922";
var client_secret = "708f60d487ac4b5295b68f4849ad1e5d";

var authOptions = {
	url: "https://accounts.spotify.com/api/token",
	headers: {
		Authorization:
			"Basic " +
			new Buffer.from(client_id + ":" + client_secret).toString("base64"),
	},
	form: {
		grant_type: "client_credentials",
	},
	json: true,
};

request.post(authOptions, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		var token = body.access_token;
	}
});
