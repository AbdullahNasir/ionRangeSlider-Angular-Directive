ionRangeSlider-Angular-Directive
================================

Angular.js directive for popular jquery plugin ionRangeSlider

How To Use
==========

Specify 'ionSlider' as the dependency of your module.

In your html use 
```html
<ionslider></ionslider>
```

Following attributes can be used inside <ionslider></ionslider> tag:

	min, (updatable)
	max, (updatable)
	type,
	prefix,
	max-postfix,
	prettify,
	has-grid,
	grid-margin,
	postfix,
	step,
	disable, (updatable)
	hide-min-max,
	hide-from-to,
	from (updatable)
	
Value Change Events
-------------------

You can also set the change event in the tag
```html
<ionslider on-change='change()'></ionslider>
```
In your controller

$scope.change = function(sliderObj){
	var changedValue = sliderObj.from;
}

Drag Finish Events
------------------

To get notified when the User releases the handle, add a event handler function like this:

```html
<ionslider on-finish='finish()'></ionslider>
```
In your controller

$scope.finish = function(sliderObj){
	var newValue = sliderObj.from;
}

Example HTML
------------

```html
 <ionslider type="single"
        has-grid=true
        min="model.min"
        max="model.max"
        from="model.currentValue"
        disable="model.disabled"
        on-change="rangeChangeCallback"
        on-finish="rangeFinishCallback"></ionslider>
```
