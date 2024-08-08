/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	// default export
	async fetch(request, env, ctx): Promise<Response> {
		// will be called whenever request goes out
		// as we can see the syntax is slightly complicated so we are gonna using the external libaray or framework to make routes :)

		// request.method give you the type of request came to here
		if (request.method == 'POST') {
			if (request.url.includes('/users/signin')) {
				// like this we can make a route in this :) but hard to debug the code as well :)
				return new Response('inside the sigin route ');
			}
			return Response.json({
				success: 'its a post reqeust',
			});
		}
		return Response.json({
			failed: 'not a post request',
		}); // returns the response as Hello World!
	},
} satisfies ExportedHandler<Env>;
