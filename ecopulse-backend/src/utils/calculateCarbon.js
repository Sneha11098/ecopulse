// Sample emission factors (gCO2eq)
const FACTORS = {
  browsing: 1.8,     // per minute
  streaming: 6.0,    // per minute
  emails: 4.0,       // per email
  storage: 1.5       // per GB
};

module.exports = function ({ browsing=0, streaming=0, emails=0, storage=0 }) {
  return (
    browsing * FACTORS.browsing +
    streaming * FACTORS.streaming +
    emails * FACTORS.emails +
    storage * FACTORS.storage
  );
}
