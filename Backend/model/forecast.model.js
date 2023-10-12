const mongoose = require('mongoose');

const ForecastSchema = new mongoose.Schema({
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
  },
  daily: [Object], // This can be an array of objects, one for each day's forecast.
  lastUpdated: Date // To know when this forecast was last updated.
});

const Forecast = mongoose.model('Forecast', ForecastSchema);

module.exports = Forecast;
