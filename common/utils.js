const utils = {};

utils.flaggedUsers=
[
  1663882102141,
  1663900040545,
  1664485938220,
  1666010556334,
  1666998028989,
  1663859212298,
  1663864583532,
  1674890940118,
  1675612494920,
  1675613158094,
  1676257394767,
  1676348574010,
  1679403934444,
  1681750351703,
  1681837899558,
  1682255271235,
  1682439896876,
  1682805893749
];

utils.styles={
  car: {color:'gray', text:'🚗'},
  fish: {color:'red', text:'🐠'},
  house: {color:'yellow', text:'🏠'},
  tree: {color:'green', text:'🌳'},
  bicycle: {color:'cyan', text:'🚲'},
  guitar: {color:'blue', text:'🎸'},
  pencil: {color:'magenta', text:'✏️'},
  clock: {color:'lightgray', text:'🕒'},
}


utils.formatPercent = (n) => {
  return (n * 100).toFixed(2) + "%";
}

utils.printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = utils.formatPercent(
    count / max
  );
  process.stdout.write(count + "/" + max +
    " (" + percent + ")"
  );
}

utils.groupBy = (objArray, key) => {
  const groups = {};
  for (let obj of objArray) {
    const val = obj[key];
    if (groups[val] == null) {
      groups[val] = [];
    }
    groups[val].push(obj);
  }
  return groups;
}

if (typeof module !== 'undefined') {
  module.exports = utils;
}