
@awaitbox/window-loaded
=======================

Await for the `window` to be loaded.

The `windowLoaded` async function returns a promise that will resolve when the
`window`'s `load` event fires in the future (i.e. sub-resources like img tags,
scripts, audio tags, etc, have finished loading), or resolves immediately if
`loaded` already happened.

Learn more about the `load` event [on
MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload).

You can use it in async functions:

```js
import windowLoaded from '@awaitbox/window-loaded'

async function main() {
  await windowLoaded()
  console.log( 'Ready to begin awesome!' )
}

main()
```

You can of course use it as a Promise:

```js
import windowLoaded from '@awaitbox/window-loaded'

windowLoaded()
  .then( data => console.log( 'begin awesome!' ) )
```

Chain values will pass through if you use it in a Promise chain:

```js
import windowLoaded from '@awaitbox/window-loaded'

fetch( ... )
  .then( ... )
  .then( windowLoaded ) // passes data through
  .then( data => console.log( 'use data for the awesome!', data ) )
```

Note
----

This is written in ES2016 JavaScript. To use this in pre-ES2016 environments,
you'll need to run this through a transpiler like [Babel](http://babeljs.io)
(and I recommend using the
[fast-async](https://github.com/MatAtBread/fast-async) plugin to get the best
results). See some tips here on wiring it up with
[Webpack](https://webpack.js.org): http://2ality.com/2017/06/pkg-esnext.html.
