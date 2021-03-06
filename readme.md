### Pa. Lawmaker Finder
A React JS app to help Pennsylvanians find their state lawmakers. You can see a working example of this app [here](https://lawmaker-finder.herokuapp.com/).

This app was inspired by a tool created by Erin Petenko for finding [New Jersey state lawmakers](https://github.com/epetenko/contact-nj-leg).

This app is designed to be embedded as an iframe. It uses [pym.js](https://github.com/nprapps/pym.js/) to resize the iframe's height as needed. To embed this app and take advantage of pym, your embed code should look something like this:

```
<div id="lawmaker-finder__container"></div>
<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>var pymParent = new pym.Parent('lawmaker-finder__container', 
'https://lawmaker-finder.herokuapp.com/', {});</script>
```

### Set up

This app uses Google's geocoding API for geocoding. To adapt this app, you'll need to get your own google API.

For development, create a new file: .env.development

And add your google API key like so:

```GOOGLE_API_KEY=XXXXXXXXXXXXX```

You can find instructions [here](https://www.npmjs.com/package/@google/maps) about how to acquire a Google API key.

### Install and run

To install this app:

```npm install```

And run:

```npm run dev-server```

### About the data
This app uses four json files:

- TopoJSON 2017 boundaries for Pa. House districts
- TopoJSON 2017 boundaries for Pa. Senate districts
- 2019 Contact info for Pa. House lawmakers
- 2019 Contact info Pa. Senate lawmakers

The GeoJSON files were downloaded from the Pa. Open Data Portal [here](https://data.pa.gov/browse?q=district%20boundaries&sortBy=relevance).

The lawmaker contact information was provided by the Pa. Legislative Research Processing Center.



