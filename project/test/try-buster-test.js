/*jslint evil:false, sloppy:true, undef:true, white:true, plusplus:true */
/*global buster, assert, TryBuster */

buster.testCase("TryBuster", {
    "has a function named 'sayHello'": function () {
        assert( TryBuster.hasOwnProperty('sayHello') && typeof TryBuster.sayHello === 'function' );
    },

    "sayHello returns 'hello world!'": function () {
        assert.equals( TryBuster.sayHello(), 'hello world!' );
    }
});