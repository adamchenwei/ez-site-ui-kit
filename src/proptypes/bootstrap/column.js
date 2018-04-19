import PropTypes from 'prop-types';

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
// obtain official from https://reactstrap.github.io/components/layout/
export default PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);
