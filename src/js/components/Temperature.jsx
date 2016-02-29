const React = require('react');

const temperatureClassName = temperature => {

  const tens = Math.floor(temperature/10);

  switch (tens) {
    case -4: return 'tc-hypra-cold';
    case -3: return 'tc-extra-cold';
    case -2: return 'tc-very-cold';
    case -1: return 'tc-freezing';
    case  0: return 'tc-cold';
    case  1: return 'tc-quite-cold';
    case  2: return 'tc-temperate';
    case  3: return 'tc-warm';
    case  4: return 'tc-hot';
    case  5: return 'tc-boiling';
  }

  return '';
}

module.exports = ({temperature}) =>
  <span className={`tc ${temperatureClassName(temperature)}`}>{temperature}°C</span>
;
