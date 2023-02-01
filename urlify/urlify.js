function urlifyV1(url) {
  return encodeURI(url.trim());
}

function urlifyV2(url) {
  return url
    .trim()
    .split("")
    .reduce((ac, val) => ac + (val === " " ? "%20" : val), "");
}

module.exports = {
  urlifyV1,
  urlifyV2,
};
