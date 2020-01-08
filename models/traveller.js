const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (dist, distance) {
  return this.journeys.filter((journey) => {
    return distance[dist] >= distance;
  });
};


Traveller.prototype.calculateTotalDistanceTravelled = function (array, callback) {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function (property, transport) {
    return this.journeys.filter((journey) => {
      return journey[property] === value;
    });
};



module.exports = Traveller;