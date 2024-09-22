# Contributing

Contributions are welcome.  Please follow the [standard Github pull request flow](https://docs.github.com/en/get-started/using-github/github-flow).


## Adding a new backend

If you want to add support for a new regex engine, you need to do this is a separate repo.

The [existing regex backends](https://github.com/regexplanet) are on Github and a good place to start.  Note: I am not an expert at all of the languages, so the code can definitely be sub-optimal.

Once you have a working backend, you need to host it somewhere.  If you have it Docker-ized, I take it from there and host it with the other backends.

You can try your engine by adding a `testurl` parameter to the query string of the test page. I.e. something like:
https://www.regexplanet.com/advanced/perl/index.html?testurl=http://localhost:8080/test.pl


## Backend API

These are the API endpoints RegexPlanet uses to communicate with each backend regex engines.
Note: the endpoints must support both JSON and [JSONP](https://en.wikipedia.org/wiki/JSONP).  The JSONP version takes a `callback` parameter in the query string.


### `test` endpoint

Input:
* `callback` - the name of the JSONP callback function. This is the only parameter not visible in the page source. This will not be present for browsers (*cough* MSIE *cough*) that do not support CORS. They get get proxied instead.
* `regex` - the regular expression
* `option` - options that are set (can be multiple, see the current list)
* `replacement` - replacement string.
* `input` - text to test against (can be multiple)

Note that multiple parameters do not have any special suffixes (i.e. [0] or whatever). Web frameworks will just have to deal.

Output:
* `success` - boolean, true only if no errors
* `html` - html to display on the page

### `status` endpoint

This will be displayed on the [status page](https://www.regexplanet.com/status.html).

Input:
* (none)

Output:
JSON map of any items of interest. Mandatory items:
* `success` - boolean, true only if no errors
* `version` - String, human-readable version information.  Do not include `short_name`.

### Other Standard Pages

* `/` - should redirect to the testing page
* `/favicon.ico`
* `/favicon.svg`
* `/robots.txt`
* `/humans.txt` - optional, if you want to take some credit

## Add a RegexEngine

Add a new [RegexEngine](https://github.com/regexplanet/regexplanet-next/tree/main/src/engines/RegexEngine.ts) in [`src/engines`](https://github.com/regexplanet/regexplanet-next/tree/main/src/engines).  You can use [`empty.ts`](https://github.com/regexplanet/regexplanet-next/blob/main/src/engines/empty.ts) as a starter.
