/*
Copyright (c) MyTeksi GrabTaxi 2013
Author: Fadrizul Hasani <fadrizul@gmail.com>
*/

(function () {
  var redisManager;

  redisManager = require('redis-client-manager');

  exports.push = function (connectionOptions, workerName, workerArguments, retry, callback) {
    var connectionOptions, message;

    connectionOptions = connectionOptions || {};
    message = {
      'class': workerName,
      'args': workerArguments,
      'retry': retry
    };

    redisManager.getClient(connectionOptions).lpush('frontend:queue:default', JSON.stringify(message), callback);
  };
}).call(this)