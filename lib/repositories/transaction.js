'use strict';

const models = require('../models');
const constants = require('../constants');

module.exports = {
  findByCriteria,
  save,
  deleteByCriteria,
  getTransactionsByBusinessId,
  getTransactionByTransactionId
};

function findByCriteria(criteria) {
  return models.Transaction().find(criteria);
}

function save(payload) {
  return models.Transaction(payload).save();
}

function deleteByCriteria(criteria) {
  return new models.Transaction(criteria).deleteObject();
}

function getTransactionsByBusinessId(payload) {

  let client = new models.Transaction()
    .getClientWithTableReference()
    .innerJoin('businessClients', 'transactions.businessClientId', '=', 'businessClients.id')
    .innerJoin('businesses', 'businessClients.businessId', '=', 'businesses.id')
    .innerJoin('clients', 'businessClients.clientId', '=', 'clients.id')
    .where('businesses.id', '=', payload.businessId);

  client = _appendOptionalParameters(payload, client);

  return client
    .orderBy('transactions.createdAt', 'asc')
    .limit(payload.pageSize)
    .offset(payload.skip)
    .select('transactions.*', 'businesses.name as businessName', 'clients.name as clientName ')
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  function _appendOptionalParameters(payload, client) {
    // Append optional search parameters
    if (payload.clientId) {
      client = client.andwhere('clients.id', '=', payload.clientId);
    }
    if (payload.isPaid && Object.values(constants.transaction.isPaid).includes(payload.isPaid)) {
      client = client.andWhere('transactions.isPaid', '=', payload.isPaid);
    }
    if (payload.dateFrom && payload.dateTo) {
      client = client.whereRaw('date(transactions.createdAt) between ? AND ?', [payload.dateFrom, payload.dateTo]);
    }
    return client;
  }
}

function getTransactionByTransactionId(payload) {
  return new models.Transaction()
    .getClientWithTableReference()
    .innerJoin('businessClients', 'transactions.businessClientId', '=', 'businessClients.id')
    .innerJoin('businesses', 'businessClients.businessId', '=', 'businesses.id')
    .innerJoin('clients', 'businessClients.clientId', '=', 'clients.id')
    .where('transactions.id', '=', payload.transactionId)
    .select('transactions.*', 'businesses.name as businessName', 'clients.name as clientName ')
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

}

// function getLastMessageByGroupAndChatSessionId(payload) {
//   let client = new models.ChatMessage()
//     .getClientWithTableReference()
//     .where('groupId', payload.groupId);
//   if (payload.messageTypeId) {
//     client = client.andWhere('messageTypeId', payload.messageTypeId);
//   }
//   return client.orderBy('id', 'desc')
//     .limit(1).then((data) => data[0]);
// }

// return models.Feeds()
//   .getClientWithTableReference()
//   .innerJoin('feedNotificationSettings', 'feeds.feedTypeId', '=', 'feedNotificationSettings.feedTypeId')
//   .where('feedNotificationSettings.isActive', '=', 1)
//   .andWhere('feeds.createdAt', '>', lastExecutedDate)
//   .andWhere('feeds.feedTypeId', '=', feedTypeId)
//   .limit(1)
//   .orderBy('feeds.createdAt', 'desc')
//   .select('feeds.id', 'feeds.url', 'feeds.title')

// function getAllPushTokenByUserIds(userIds) {
//   return new models.UserSession().getClientWithTableReference()
//     .join('userSettings', 'userSessions.userId', '=', 'userSettings.userId')
//     .join('users', 'userSessions.userId', '=', 'users.id')
//     .whereIn('userSessions.userId', userIds)
//     .andWhere('users.isActive', 1)
//     .select('userSessions.userId', 'userSessions.deviceType', 'userSessions.deviceId', 'userSessions.awsARN', 'userSettings.unconstrainedValue as isPushEnable');
// }
