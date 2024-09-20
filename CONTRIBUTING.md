# Contributing

Contributions are welcome.  Please follow the [standard Github pull request flow](https://docs.github.com/en/get-started/using-github/github-flow).


## Adding a new backend

If you want to add support for a new regex engine, you need to do this is a separate repo.

The [existing regex backends](https://github.com/regexplanet) are on Github and a good place to start.  Note: I am not an expert at all of the languages, so the code can definitely be sub-optimal.

Once you have a working backend, you need to host it somewhere.  If you have it Docker-ized, I take it from here.

Once it is running on the internet, you need to add a new [RegexEngine](https://github.com/regexplanet/regexplanet-next/tree/main/src/engines/RegexEngine.ts).  You can use [empty.ts](https://github.com/regexplanet/regexplanet-next/blob/main/src/engines/empty.ts) as a starting point.  See [metadata](#metadata) below for details about each property.

You can try your engine by adding a `testurl` parameter to the query string of the advanced test page. I.e. something like:
https://www.regexplanet.com/advanced/perl/index.html?testurl=http://localhost:8080/test.pl


## Backend API

These are the API endpoints RegexPlanet uses to communicate with each backend regex engines.
Note: the endpoints must support for JSON and [JSONP](https://en.wikipedia.org/wiki/JSONP).  The JSONP version takes a `callback=` in the query string.


## `test` endpoint

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

## `status` endpoint

Input:
* (none)
Output:
JSON map of any items of interest. Mandatory items:
* `success` - boolean, true only if no errors
* `version` - String, human-readable version information.  Do not include `short_name`.

## Other Standard Pages

* `/` - should redirect to the testing page
* `/favicon.ico`
* `/favicon.svg`
* `/robots.txt`
* `/humans.txt` - optional, if you want to take some credit

## Metadata

Details of what you need for the [RegexEngine interface](https://github.com/regexplanet/regexplanet-next/tree/main/src/engines/RegexEngine.ts).

- `short_name` - Name of the language or engine
- `description` - library or module name (do not include `short_name`)
- `help_label` - text for the help button on the testing page
- `help_url` - URL destination for the help button on the testing page
- `logo_ar21` - SVG logo (including language name) in a 2:1 aspect ratio
- `logo_icon` - SVG icon (just the logo, no text) in a square
- `links` - A map of (name: url) for other help links. These will be displayed on the support page under “Official Documentation”
- `options` - A list of which options it supports. Please use the common (long) codes so options can be shared between engines.  These need to be implemented the same way in the endpoint.
- `source_url` - URL of source code
- `status_url` - URL of the status endpoint
- `test_url` - URL of the test endpoint
