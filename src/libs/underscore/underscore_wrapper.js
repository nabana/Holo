/**
 * Wrapping underscorejs as a module
 */
define(['_underscore'], function () {
    return _.noConflict(); // extend with extensions, other things
}); 