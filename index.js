/*
Copyright (c) MyTeksi GrabTaxi 2013
Author: Fadrizul Hasani <fadrizul@gmail.com>
*/

var redisManager = require('redis-client-manager')

exports.push = function (connectionOptions, workerName, workerArguments, retry, callback) {
  var connectionOptions = connectionOptions || {}
  var message = {
    'class': workerName,
    'args': workerArguments,
    'retry': retry
  }
  redisManager.getClient(connectionOptions).lpush('frontend:queue:default', JSON.stringify(message), callback)
}