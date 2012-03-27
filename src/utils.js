/**
 * A set if Utility functions
 *
 * @author Naba
 */


var utils = {};

(function (global) {
    "use strict";

    var _ = global._,
        console = global.console;


    /**
     *    Traces a msg on the console if available
     */
    utils.trace = function (msg, mode) {

        var today = new Date(),
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds(),
            ms = today.getMilliseconds(),
            messageString = '[' + h + ':' + m + ':' + s + '.' + ms + '] ' + msg;

        if (global.DEBUG === true) {
            if (_.isFunction(console)) {

                if (mode == 'error' && _.isFunction(console.error)) {
                    console.error(messageString);
                } else if (_.isFunction(console.log)) {
                    console.log(messageString);
                }
            }
        }
    };

}( window ));
