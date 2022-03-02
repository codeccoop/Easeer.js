# Easeer.js

JavaScript module with easing generators and basic animate and throttle functions.

## Installation

`npm i easeer-js`

## Usage

Easeer.js offers two different approaches: Work with **javascript generators** to
get easing curves, or work with **javascript functions** to perform animations.

### Easing
```javascript
const { easeInOut, inteval } = require("easeer-js");

const easing = easeInOut([0, 1000], 100);
let next = easing.next();
while (next.done !== true) {
    console.log(next.value);
    next = easing.next();
}
```

### Animation
```javascript
var total = 100;
throttle(function (progress) {
    console.log("Loading: " + progress * total + "%");
}, {
    ms: 50,
    duration: 1000,
    easing: "in"
});
```

## API


## Functions

<dl>
<dt><a href="#easeInOut">easeInOut(domain, steps)</a> ⇒ <code>object</code></dt>
<dd><p>Perform an ease-in-out curve from min to max evaluated in n steps.</p>
</dd>
<dt><a href="#easeOut">easeOut(domain, steps)</a> ⇒ <code>object</code></dt>
<dd><p>Perform an ease-out curve from min to max evaluated in n steps.</p>
</dd>
<dt><a href="#easeIn">easeIn(domain, steps)</a> ⇒ <code>object</code></dt>
<dd><p>Perform an ease-in curve from min to max evaluated in n steps.</p>
</dd>
<dt><a href="#throttle">throttle(fn, settings)</a> ⇒ <code>function</code></dt>
<dd><p>Perform an easeing based animation throghout a duration time updated in a deterimed interval</p>
</dd>
<dt><a href="#animate">animate(callback, settings)</a></dt>
<dd><p>Perform an easing based animation with N frames</p>
</dd>
</dl>

<a name="easeInOut"></a>

## easeInOut(domain, steps) ⇒ <code>object</code>
Perform an ease-in-out curve from min to max evaluated in n steps.

**Kind**: global function  
**Returns**: <code>object</code> - easing  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>Array</code> | An array with tow values, min and max of the easing domain |
| steps | <code>number</code> | How many steps has to return the easing between min and max |

<a name="easeOut"></a>

## easeOut(domain, steps) ⇒ <code>object</code>
Perform an ease-out curve from min to max evaluated in n steps.

**Kind**: global function  
**Returns**: <code>object</code> - easing  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>Array</code> | An array with tow values, min and max of the easing domain |
| steps | <code>number</code> | How many steps has to return the easing between min and max |

<a name="easeIn"></a>

## easeIn(domain, steps) ⇒ <code>object</code>
Perform an ease-in curve from min to max evaluated in n steps.

**Kind**: global function  
**Returns**: <code>object</code> - easing  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>Array</code> | An array with tow values, min and max of the easing domain |
| steps | <code>number</code> | How many steps has to return the easing between min and max |

<a name="throttle"></a>

## throttle(fn, settings) ⇒ <code>function</code>
Perform an easeing based animation throghout a duration time updated in a deterimed interval

**Kind**: global function  
**Returns**: <code>function</code> - close - A function to stop the animation before it reaches the end  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The callback function to be triggered on eacn interval |
| settings | <code>object</code> | A configuration object with values for 'ms', 'duration' and 'easing'. The 'ms' value is for the time interval in milliseconds and have 10 as a fallback value, 'duration' defines the animation time duration, and 'easing' is to choose what type of easing the animations has to follow. |

<a name="animate"></a>

## animate(callback, settings)
Perform an easing based animation with N frames

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function to be triggered on each frame |
| settings | <code>object</code> | A configuration object with values fro 'frames' and 'easing'. The 'frames' defines how much long will be the animation, the 'easing' is to choose what type of easing the animation has to follow. |

