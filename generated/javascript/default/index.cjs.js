const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'TeaCup_v1.0',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

