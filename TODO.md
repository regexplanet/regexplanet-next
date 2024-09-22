# To Do

- [ ] posting
- [ ] [analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [ ] options report (across all backends)
- [ ] Options cleanup + picker widget
- [ ] Support for `?testurl=` query string parameter

## Move to Regex.zone

- [ ] /support/links.html: move to Regex.zone
- [ ] /support/similar.html: have a page on Regex.zone
- [ ] /support/engines.html: skip (or include ones that aren't enabled? or page on Regex.zone?)
- [ ] redirects for bookmarks and rss feed

## Share Codes

- [ ] bounce to regex.zone to save
- [ ] accept handle when returning
- [ ] load from regex.zone if handle is passed in (querystring)
- [ ] load from legacy if handle is old format
- [ ] form on home page to enter it
- [ ] if handle passed: overwrite/append/save new instead of save
- [ ] or somehow tell if handle has update permissions
- [ ] setup redirects for existing share codes

## Engines

- [ ] Rust (started)
- [ ] Bun
- [ ] PostgresQL with golang server instead of Python.  Or [pglite](https://pglite.dev/)
- [ ] Swift
- [ ] [MySQL](https://blogs.oracle.com/mysql/post/regular-expressions-in-mysql)
- [ ] [Free Pascal](https://wiki.freepascal.org/RegEx_packages)
- [ ] Erlang
- [ ] [Elm](https://package.elm-lang.org/packages/elm/regex/latest/)
- [ ] Julia
- [ ] Haskell (done, but hosting isn't working)
- [ ] D
- [ ] GNU grep
- [ ] [Zig](https://github.com/tiehuis/zig-regex)
- [ ] direct to engines: PCRE, RE2, [ICU](https://unicode-org.github.io/icu/userguide/strings/regexp.html), [hyperscan](https://github.com/intel/hyperscan)/[vectorscan](https://github.com/VectorCamp/vectorscan), Yarr...  
- [ ] [Janet](https://janet-lang.org/) ~lisp
- [ ] [marianobarrios/dregex](https://github.com/marianobarrios/dregex) - Java alternative

Patterns that are not regular expressions:
- [ ] [wildcards](https://crates.io/crates/wildcard) - lots of flavors
- [ ] Lua
- [ ] [picomatch](https://github.com/micromatch/picomatch)


Other lists:
- [benchmarked list](https://lh3lh3.users.sourceforge.net/reb.shtml)
- [mariomka/regex-benchmark](https://github.com/mariomka/regex-benchmark)

## Future

- [ ] toggle to multiline inputs
- [ ] /advanced/options.html: probably want to redo how these work (each service has 2-way map of specific:common)
- [ ] [colorizer](https://github.com/slevithan/regex-colorizer)
- [ ] translations
- [ ] Fuzzing
- [ ] Non-regex pattern matching
- [ ] tags for each engine: features supported, calling languages, implementation language
- [ ] get engine release level (and everything else?) from remote instead of hard-coded
