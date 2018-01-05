/**
 * Await for the DOM's sub-resources to have been loaded (images, scripts,
 * etc).  This corresponds to the `window`'s "load" event.
 */
export default
async function windowLoaded( _passThrough ) {

    if (document.readyState !== 'complete') {
        await new Promise(function(resolve) {
            window.addEventListener('load', resolve)
        })
    }

    return _passThrough
}
