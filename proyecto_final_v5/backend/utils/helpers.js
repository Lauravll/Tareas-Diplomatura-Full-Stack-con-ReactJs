function format_date(date) {
  return "formatting date!" + date;
}

function ifCond(v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
}

module.exports = { format_date, ifCond };
