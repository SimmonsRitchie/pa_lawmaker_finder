### PA LAWMAKER FINDER
A React JS app to help Pennsylvanians find their state lawmakers. You can see a working example of this app [here](https://lawmaker-finder.herokuapp.com/)

This app was inspired by a tool created by Erin Petenko for finding [New Jersey state lawmakers](https://github.com/epetenko/contact-nj-leg).

This app is designed to be embedded as an iframe. It uses [pym.js](https://github.com/nprapps/pym.js/) to resize the iframe's height as needed. To embed this app and take advantage of pym, your embed code should look something like this:

```
<div id="310290d7-98f6-45bd-85fa-fbc41c167e3e"></div>
<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>var pymParent = new pym.Parent('310290d7-98f6-45bd-85fa-fbc41c167e3e', 'https://lawmaker-finder.herokuapp.com/', {});</script>
```

### ABOUT THE DATA
This app uses four json files:

- TopoJSON 2017 boundaries for Pa. House districts
- TopoJSON 2017 boundaries for Pa. Senate districts
- 2019 Contact info for Pa. House lawmakers
- 2019 Contact info Pa. Senate lawmakers

The GeoJSON files were downloaded from the Pa. Open Data Portal [here](https://data.pa.gov/browse?q=district%20boundaries&sortBy=relevance)

The lawmaker contact information was provided by the Pa. Legislative Research Processing Center.



