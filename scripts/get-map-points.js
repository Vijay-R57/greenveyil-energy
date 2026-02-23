const Map = require('@svg-maps/india').default;
const svgPathBbox = require('svg-path-bounding-box');

const activeStates = [
    "Rajasthan",
    "Gujarat",
    "Maharashtra",
    "Telangana",
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    "Tamil Nadu"
];

const markers = {};

Map.locations.forEach(loc => {
    if (activeStates.includes(loc.name)) {
        const bbox = svgPathBbox(loc.path);
        markers[loc.name] = { cx: Math.round((bbox.minX + bbox.maxX) / 2), cy: Math.round((bbox.minY + bbox.maxY) / 2) };
    }
});

console.log(JSON.stringify(markers, null, 2));
