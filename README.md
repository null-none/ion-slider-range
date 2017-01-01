# ion-slider-range
Ionic element for slider range

## Install

```bash
bower install ion-slider-range
```

## Example

```html
...
  <script src="lib/ion-slider-range/ioniSliderRange.jss"></script>
  <link href="lib/ion-slider-range/ioniSliderRange.css" media="all" rel="stylesheet" />
...

```


```html
<div class="item range range-calm" ng-init="ageMin = 1; ageMax = 5">
  <div class="range-label">{{range.from}}</div>
  <multi-range ng-step="1" ng-min="ageMin" ng-max="ageMax" ng-model-min="range.from" ng-model-max="range.to"></multi-range>
  <div class="range-label">{{range.to}}</div>
</div>
```

## License
MIT
