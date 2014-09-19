ionRangeSlider-Angular-Directive
================================

Angular.js directive for popular jquery plugin ionRangeSlider

How To Use
==========

Specify 'ionSlider' as the dependency of your module.

In your html use <ionslider></ionslider>.

Following attributes can be used inside <ionslider></ionslider> tag:

	min,
	max,
	type,
	prefix,
	max-postfix,
	prettify,
	has-grid,
	grid-margin,
	postfix,
	step,
	hide-min-max,
	hide-from-to
	
Value Change Events
-------------------

You can also set the change event in the tag

<ionslider on-change='change()'></ionslider>

In your controller

$scope.change = function(sliderObj){

}
