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
    interval: 50,
    duration: 1000,
    easing: "in"
});
```

## Functions

<dl>
<dt><a href="#_scaleGen">_scaleGen(range, domain)</a> ⇒ <code>function</code></dt>
<dd><p>Given a range and a domain as input, return a function that performs a linear map
between range and domain values.</p>
</dd>
<dt><a href="#easeInOut">easeInOut(domain, steps)</a> ⇒ <code>object</code></dt>
<dd><p>Perform an ease-in-out curve from min to max evaluated in n steps.</p>
</dd>
<dt><a href="#easeOut">easeOut(domain, steps)</a> ⇒ <code>object</code></dt>
<dd><p>Perform an ease-out curve from min to max evaluated in n steps.</p>
</dd>
<dt><a href="#easeIn">easeIn(domain, steps)</a> ⇒ <code>object</code></dt>
<dd><p>Perform an ease-in curve from min to max evaluated in n steps.</p>
</dd>
<dt><a href="#_easeSwitcher">_easeSwitcher(ease, domain, steps)</a></dt>
<dd><p>Switch between known easings with ease-in-out as fallback</p>
</dd>
<dt><a href="#throttle">throttle(fn, settings)</a> ⇒ <code>function</code></dt>
<dd><p>Perform an easeing based animation throghout a duration time updated in a deterimed interval</p>
</dd>
<dt><a href="#animation">animation(callback, settings)</a> ⇒ <code>function</code></dt>
<dd><p>Perform an easing based animation with N frames</p>
</dd>
</dl>

<a name="_scaleGen"></a>

## \_scaleGen(range, domain) ⇒ <code>function</code>
Given a range and a domain as input, return a function that performs a linear map
between range and domain values.

**Kind**: global function  
**Returns**: <code>function</code> - scale  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>Array</code> | An array with tow values, min and max |
| domain | <code>Array</code> | An array with tow values, min and max |

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

<a name="_easeSwitcher"></a>

## \_easeSwitcher(ease, domain, steps)
Switch between known easings with ease-in-out as fallback

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ease | <code>string</code> | Ease type. It can be {'in', 'out', 'in-out'} |
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
| settings | <code>object</code> | A configuration object with values for 'interval', 'duration' and 'easing'. The 'interval' value is for the time interval in milliseconds and have 10ms as default value, 'duration' defines the animation time duration and has 1000ms as default value, and 'easing' is to choose what type of easing the animations has to follow and has 'in-out' as default value. |

<a name="animation"></a>

## animation(callback, settings) ⇒ <code>function</code>
Perform an easing based animation with N frames

**Kind**: global function  
**Returns**: <code>function</code> - close - A function to stop the animation before it reached the end  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function to be triggered on each frame |
| settings | <code>object</code> | A configuration object with values fro 'frames' and 'easing'. The 'frames' defines how much long will be the animation, the 'easing' is to choose what type of easing the animation has to follow. |

