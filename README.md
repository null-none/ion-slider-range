# ion-slider-range
Ionic element for slider range

## Install

```bash
bower install ion-slider-range
```

## Example

```html
...
  <script src="lib/ion-slider-range/ionciSliderRange.js"></script>
  <link href="lib/ion-slider-range/ionicSliderRange.css" media="all" rel="stylesheet" />
...

```


```html
<div class="list">
  <div class="item range" ng-init="priceMin=1; priceMax=5; from=1; to=5;">
      <div class="range-label">{{from}}</div>
      <ionic-slider-range ng-step="1" ng-min="priceMin" ng-max="priceMax" ng-model-min="from" ng-model-max="to"></ionic-slider-range>
      <div class="range-label">{{to}}</div>
  </div>
</div>
```

## License
MIT
