/**
 * Await for the DOM's sub-resources to have been loaded (images, scripts,
 * etc).  This corresponds to the `window`'s "load" event.
 *
 * @example
 * ```js
 * async function main() {
 *     await windowLoaded()
 *     console.log('Window loaded!')
 * }
 * main()
 * ```
 */
export default
async function windowLoaded() {
    if (document.readyState !== 'complete') {
        await new Promise(function(resolve) {
            window.addEventListener('load', resolve)
        })
    }
}
