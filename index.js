/**
 * Given a range and a domain as input, return a function that performs a linear map
 * between range and domain values.
 * @param {Array} range - An array with tow values, min and max
 * @param {Array} domain - An array with tow values, min and max
 * @returns {function} scale 
 */
function _scaleGen(range, domain) {
    if (!Array.isArray(range)) {
        range = [0, range];
    }
    if (!Array.isArray(domain)) {
        domain = [0, domain];
    }
    var rangeAmplitude =
        Math.max.apply(null, range) - Math.min.apply(null, range);
    var domainAmplitude =
        Math.max.apply(null, domain) - Math.min.apply(null, domain);

    return function(value) {
        return (
            ((value - Math.min.apply(null, range)) / rangeAmplitude) *
            domainAmplitude +
            Math.min.apply(null, domain)
        );
    };
}

function _ease(i) {
    return 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3);
}

/**
 * Perform an ease-in-out curve from min to max evaluated in n steps.
 * @param {Array} domain - An array with tow values, min and max of the easing domain
 * @param {number} steps - How many steps has to return the easing between min and max
 * @returns {object} easing 
 */
function* easeInOut(domain, steps) {
    steps = Math.round(steps || 100);
    var i = 0;
    var scale = _scaleGen([0, 1], domain);

    while (i <= 1) {
        yield _ease(i) * scale(i);
        i += 1 / steps;
    }
}

/**
 * Perform an ease-out curve from min to max evaluated in n steps.
 * @param {Array} domain - An array with tow values, min and max of the easing domain
 * @param {number} steps - How many steps has to return the easing between min and max
 * @returns {object} easing 
 */
function* easeOut(domain, steps) {
    steps = Math.round(steps || 100);
    var i = 0;
    var scale = _scaleGen([0, 1], domain);

    while (i <= 1) {
        yield(2 * _ease((i + 1) / 2) - 1) * scale(i);
        i += 1 / steps;
    }
}

/**
 * Perform an ease-in curve from min to max evaluated in n steps.
 * @param {Array} domain - An array with tow values, min and max of the easing domain
 * @param {number} steps - How many steps has to return the easing between min and max
 * @returns {object} easing 
 */
function* easeIn(domain, steps) {
    steps = Math.round(steps || 100);
    var i = 0;
    var scale = _scaleGen([0, 1], domain);

    while (i <= 1) {
        yield _ease(i / 2) * 2 * scale(i);
        i += 1 / steps;
    }
}

/**
 * Switch between known easings with ease-in-out as fallback
 * @param {string} ease - Ease type. It can be {'in', 'out', 'in-out'}
 * @param {Array} domain - An array with tow values, min and max of the easing domain
 * @param {number} steps - How many steps has to return the easing between min and max
 */
function _easeSwitcher(ease, domain, steps) {
    switch (ease) {
        case "in":
            return easeIn(domain, steps);
            break;
        case "out":
            return easeOut(domain, steps);
            break;
        default:
            return easeInOut(domain, steps);
            break;
    }
}

/**
 * Perform an easeing based animation throghout a duration time updated in a deterimed interval 
 * @param {function} fn - The callback function to be triggered on eacn interval
 * @param {object} settings - A configuration object with values for 'ms', 'duration' and 'easing'. The 'ms' value is for the time interval in milliseconds and have 10 as a fallback value, 'duration' defines the animation time duration, and 'easing' is to choose what type of easing the animations has to follow.
 * @returns {function} close - A function to stop the animation before it reaches the end
 */
function throttle(fn, settings) {
    ms = settings.ms || 10;
    duration = settings.duration || 1000;
    var easing = _easeSwitcher(settings.easing, [0, 1], duration / ms);
    // var next = easing.next();
    var closed = false;

    var _interval = setInterval(function() {
        var next = gen.next();
        fn(next.value, function() {
            closed = true;
        });
        if (next.done || closed) {
            clearInterval(_interval);
        }
    }, ms);

    return function() {
        closed = true;
    }
}

/**
 * Perform an easing based animation with N frames
 * @param {function} callback - The callback function to be triggered on each frame
 * @param {object} settings - A configuration object with values fro 'frames' and 'easing'. The 'frames' defines how much long will be the animation, the 'easing' is to choose what type of easing the animation has to follow.
 * @returns {function} close - A function to stop the animation before it reached the end
 */
function animate(fn, settings) {
    frames = settings.frames || 100;
    var gen = _easeSwitcher(settings.ease, [0, 1], frames);
    var next = gen.next();
    var closed = false;

    function _wrapper() {
        fn(next.value, function() {
            closed = true;
        });
        next = gen.next();
    }

    function _transition() {
        _wrapper();
        if (!(next.done || closed)) {
            requestAnimationFrame(_transition);
        }
    }
    _transition();

    return function() {
        closed = true;
    };
}

module.exports = {
    easeInOut,
    easeIn,
    easeOut,
    debounce,
    animate
}
