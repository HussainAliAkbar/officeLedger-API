'use strict';

const messages = require('../messages/index');

// TODO: add regex for alphabets
const name = (isRequired) => {
  return {
    type: 'string',
    required: isRequired,
    // pattern: '/^[A-Za-z]+$/',
    messages: {
      type: messages.validation.name.type,
      required: messages.validation.name.required
    }
  };
};

const generalStringValidation = (variableName, isRequired) => {
  return {
    type: 'string',
    required: isRequired,
    // pattern: '/^[A-Za-z]+$/',
    messages: {
      type: messages.validation.generalStringValidation.type(variableName),
      required: messages.validation.generalStringValidation.required(variableName)
    }
  };
};

const skip = {
  type: 'integer',
  minimum: 0,
  messages: {
    type: messages.validation.skip.type,
    minimum: messages.validation.skip.minimum
  }
};
//
const pageSize = {
  type: 'integer',
  minimum: 0,
  messages: {
    type: messages.validation.pageSize.type,
    minimum: messages.validation.pageSize.minimum
  }
};

const businessId = {
  type: 'number',
  allowEmpty: false,
  required: true,
  messages: {
    type: messages.validation.businessId.type,
    required: messages.validation.businessId.required
  }
};

const clientId = {
  type: 'number',
  allowEmpty: false,
  required: true,
  messages: {
    type: messages.validation.clientId.type,
    required: messages.validation.clientId.required
  }
};

//
// const email = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   maxLength: 250,
//   format: 'email',
//   messages: {
//     type: messages.validation.email.format,
//     required: messages.validation.email.notEmpty,
//     allowEmpty: messages.validation.email.notEmpty,
//     maxLength: messages.validation.email.len,
//     format: messages.validation.email.format
//   }
// };
//
// const password = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.password.notEmpty,
//     required: messages.validation.password.notEmpty,
//     allowEmpty: messages.validation.password.notEmpty
//   }
// };
//
// const userId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.userId.invalid,
//     required: messages.validation.userId.required
//   }
// };
//
// const otherUserId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.otherUserId.invalid,
//     required: messages.validation.otherUserId.required
//   }
// };
//
// const groupId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.groupId.invalid,
//     required: messages.validation.groupId.required
//   }
// };
//
// const passwordSignIn = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.password.notEmpty,
//     required: messages.validation.password.notEmpty,
//     allowEmpty: messages.validation.password.notEmpty
//   }
// };
//
// const deviceType = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   'enum': [
//     constants.user.deviceType.iOS,
//     constants.user.deviceType.Android,
//     constants.user.deviceType.Web
//   ],
//   messages: {
//     type: messages.validation.deviceType.empty,
//     required: messages.validation.deviceType.empty,
//     allowEmpty: messages.validation.deviceType.empty,
//     'enum': messages.validation.deviceType.invalid
//   }
// };
//
// const deviceId = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.deviceId.notEmpty,
//     required: messages.validation.deviceId.notEmpty,
//     allowEmpty: messages.validation.deviceId.notEmpty
//   }
// };
//
// const connectionId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.connectionId.invalid,
//     required: messages.validation.connectionId.required,
//     allowEmpty: messages.validation.connectionId.required
//   }
// };
//
// const query = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   pattern: constants.regex.query,
//   minLength: 3,
//   messages: {
//     type: messages.validation.query.invalid,
//     minLength: messages.validation.query.minLength,
//     pattern: messages.validation.query.invalid
//   }
// };
//
// const action = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: [
//     constants.connection.action.accept,
//     constants.connection.action.reject
//   ],
//   messages: {
//     type: messages.validation.action.invalid,
//     required: messages.validation.action.required,
//     allowEmpty: messages.validation.action.required,
//     enum: messages.validation.invalidAction
//   }
// };
//
// const searchRadius = {
//   type: 'integer',
//   minimum: 0,
//   maximum: 500,
//   messages: {
//     type: messages.validation.searchRadius.invalid,
//     minimum: messages.validation.searchRadius.range,
//     maximum: messages.validation.searchRadius.range
//   }
// };
//
// const requiredSearchRadius = {
//   type: 'integer',
//   minimum: 0,
//   maximum: 500,
//   required: true,
//   messages: {
//     type: messages.validation.searchRadius.invalid,
//     required: messages.validation.searchRadius.required,
//     minimum: messages.validation.searchRadius.range,
//     maximum: messages.validation.searchRadius.range
//   }
// };
//
//
// const pendingRequestType = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: [
//     constants.connection.pendingRequestType.sent,
//     constants.connection.pendingRequestType.received
//   ],
//   messages: {
//     type: messages.validation.pendingRequestType.invalid,
//     required: messages.validation.pendingRequestType.required,
//     allowEmpty: messages.validation.pendingRequestType.required,
//     enum: messages.validation.pendingRequestType.values
//   }
// };
//
// const inviteMessage = {
//   type: 'string',
//   allowEmpty: true,
//   maxLength: 1000,
//   messages: {
//     type: messages.validation.inviteMessage.type,
//     maxLength: messages.validation.inviteMessage.len
//   }
// };
//
// const gender = {
//   type: 'string',
//   allowEmpty: true,
//   enum: [constants.user.gender.male, constants.user.gender.female],
//   messages: {
//     type: messages.validation.gender.type,
//     enum: messages.validation.gender.enum
//   }
// };
//
// const careDurationId = {
//   type: 'integer',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.careDuration.type
//   }
// };
//
// const workHoursId = {
//   type: 'integer',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.workHours.type
//   }
// };
//
// const ageId = {
//   type: 'integer',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.age.type
//   }
// };
//
// const bestTimeToReachId = {
//   type: 'integer',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.bestTimeToReach.type
//   }
// };
//
// const pets = {
//   type: 'array',
//   required: false,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     messages: {
//       type: messages.validation.petsItems.type,
//       allowEmpty: messages.validation.petsItems.type
//     }
//   },
//   maxItems: 3,
//   uniqueItems: true,
//   messages: {
//     type: messages.validation.pets.type,
//     maxItems: messages.validation.pets.maxItems,
//     uniqueItems: messages.validation.pets.uniqueItems
//   }
// };
//
// const languages = {
//   type: 'array',
//   required: false,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     messages: {
//       type: messages.validation.languageItems.type,
//       allowEmpty: messages.validation.languageItems.allowEmpty
//     }
//   },
//   maxItems: 2,
//   uniqueItems: true,
//   messages: {
//     type: messages.validation.languages.type,
//     maxItems: messages.validation.languages.maxItems,
//     uniqueItems: messages.validation.languages.uniqueItems
//   }
// };
//
// const childrenAgeId = {
//   type: 'integer',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.childrenAge.type
//   }
// };
//
// const childrenNumber = {
//   type: 'integer',
//   allowEmpty: true,
//   minimum: 0,
//   maximum: 25,
//   messages: {
//     type: messages.validation.childrenNumber.type,
//     minimum: messages.validation.childrenNumber.minimum,
//     maximum: messages.validation.childrenNumber.maximum
//   }
// };
//
// const childrenRange = {
//   type: 'integer',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.childrenRange.type
//   }
// };
//
// const aboutMe = {
//   type: 'string',
//   allowEmpty: true,
//   minLength: 5,
//   maxLength: 255,
//   messages: {
//     type: messages.validation.aboutMe.type,
//     minLength: messages.validation.aboutMe.minLength,
//     maxLength: messages.validation.aboutMe.maxLength
//   }
// };
//
// const displayName = {
//   type: 'string',
//   allowEmpty: false,
//   required: true,
//   minLength: 5,
//   maxLength: 25,
//   pattern: constants.regex.displayName,
//   messages: {
//     required: messages.validation.displayName.required,
//     allowEmpty: messages.validation.displayName.required,
//     type: messages.validation.displayName.type,
//     minLength: messages.validation.displayName.minLength,
//     maxLength: messages.validation.displayName.maxLength,
//     pattern: messages.validation.displayName.pattern
//   }
// };
//
// const displayNameEdit = {
//   type: 'string',
//   allowEmpty: true,
//   minLength: 3,
//   maxLength: 50,
//   messages: {
//     type: messages.validation.displayName.type,
//     minLength: messages.validation.displayName.minLength,
//     maxLength: messages.validation.displayName.maxLength
//   }
// };
//
// const searchDisplayName = {
//   type: 'string',
//   allowEmpty: false,
//   required: false,
//   maxLength: 25,
//   pattern: constants.regex.query,
//   messages: {
//     allowEmpty: messages.validation.displayName.required,
//     type: messages.validation.displayName.type,
//     maxLength: messages.validation.displayName.maxLength,
//     pattern: messages.validation.displayName.pattern
//   }
// };
//
// const userName = {
//   type: 'string',
//   required: false,
//   pattern: '^[a-zA-Z]{3,35}$',
//   messages: {
//     type: messages.validation.userName.type,
//     pattern: messages.validation.userName.length
//   }
// };
//
// const userNameOnBoarding = {
//   type: 'string',
//   required: true,
//   pattern: '^[a-zA-Z]{3,35}$',
//   messages: {
//     type: messages.validation.userName.type,
//     pattern: messages.validation.userName.length
//   }
// };
//
// const groupKey = {
//   type: 'string',
//   required: false,
//   enum: [
//     constants.listOfValue.interest,
//     constants.listOfValue.medicalCondition,
//     constants.listOfValue.contactBestTime,
//     constants.listOfValue.careDuration,
//     constants.listOfValue.workHours,
//     constants.listOfValue.relationship,
//     constants.listOfValue.livingCondition,
//     constants.listOfValue.radius,
//     constants.listOfValue.pet,
//     constants.listOfValue.age,
//     constants.listOfValue.complainReason,
//     constants.listOfValue.language,
//     constants.listOfValue.assessmentType
//   ],
//   messages: {
//     type: messages.validation.groupKey.type,
//     enum: messages.validation.groupKey.enum
//   }
// };
//
// const settingId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.settingId.type,
//     required: messages.validation.settingId.required,
//     allowEmpty: messages.validation.settingId.allowEmpty
//   }
// };
//
// const zipCodeRequired = {
//   type: 'string',
//   required: true,
//   pattern: /(^\d{5}$)/,
//   messages: {
//     type: messages.validation.zipCode.type,
//     required: messages.validation.zipCode.required,
//     pattern: messages.validation.zipCode.pattern
//   }
// };
//
// const zipCodeStr = {
//   type: 'string',
//   required: true,
//   messages: {
//     type: messages.validation.zipCode.type,
//     required: messages.validation.zipCode.required
//   }
// };
//
// const zipCode = {
//   type: 'string',
//   required: false,
//   pattern: /(^\d{5}$)/,
//   messages: {
//     type: messages.validation.zipCode.type,
//     required: messages.validation.zipCode.required,
//     pattern: messages.validation.zipCode.pattern
//   }
// };
//
// const settingValue = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   enum: constants.setting.notificationFrequency,
//   messages: {
//     type: messages.validation.settingValue.type,
//     required: messages.validation.settingValue.required,
//     allowEmpty: messages.validation.settingValue.allowEmpty,
//     enum: messages.validation.settingValue.enum
//   }
// };
//
// const interests = {
//   type: 'array',
//   required: false,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     messages: {
//       type: messages.validation.interestsItem.type,
//       allowEmpty: messages.validation.interestsItem.allowEmpty
//     }
//   },
//   maxItems: 4,
//   uniqueItems: true,
//   messages: {
//     type: messages.validation.interests.type,
//     maxItems: messages.validation.interests.maxItems,
//     uniqueItems: messages.validation.interests.uniqueItems
//   }
// };
//
// const openTokSessionId = {
//   type: 'string',
//   allowEmpty: false,
//   required: true,
//   messages: {
//     type: messages.validation.openTokenSessionId.type,
//     required: messages.validation.openTokenSessionId.required
//   }
// };
//
// const chatSessionId = {
//   type: 'number',
//   allowEmpty: false,
//   required: true,
//   messages: {
//     type: messages.validation.chatSessionId.type,
//     required: messages.validation.chatSessionId.required
//   }
// };
//
// const optionalChatSessionId = {
//   type: 'number',
//   messages: {
//     type: messages.validation.chatSessionId.type
//   }
// };
//
// const messageTypeId = {
//   type: 'number',
//   allowEmpty: false,
//   required: true,
//   enum: [
//     constants.chatMessage.messageTypeId.normalMessage,
//     constants.chatMessage.messageTypeId.voiceCallStartMessage,
//     constants.chatMessage.messageTypeId.voiceCallEndMessage,
//     constants.chatMessage.messageTypeId.videoCallStartMessage,
//     constants.chatMessage.messageTypeId.videoCallEndMessage,
//     constants.chatMessage.messageTypeId.audioNoteMessage,
//     constants.chatMessage.messageTypeId.videoNoteMessage,
//     constants.chatMessage.messageTypeId.voiceCallingMessage,
//     constants.chatMessage.messageTypeId.videoCallingMessage,
//     constants.chatMessage.messageTypeId.voiceCallRejected,
//     constants.chatMessage.messageTypeId.videoCallRejected,
//     constants.chatMessage.messageTypeId.videoCallMissedBySender,
//     constants.chatMessage.messageTypeId.voiceCallMissedBySender,
//     constants.chatMessage.messageTypeId.videoCallMissedByReceiver,
//     constants.chatMessage.messageTypeId.voiceCallMissedByReceiver,
//     constants.chatMessage.messageTypeId.textNoteMessage
//   ],
//   messages: {
//     type: messages.validation.messageTypeId.type,
//     required: messages.validation.messageTypeId.required,
//     enum: messages.validation.messageTypeId.enum
//   }
// };
//
// const chatSessionFor = {
//   type: 'string',
//   allowEmpty: false,
//   required: true,
//   enum: [
//     constants.chatSession.sessionFor.voice,
//     constants.chatSession.sessionFor.video,
//     constants.chatSession.sessionFor.text
//   ],
//   messages: {
//     type: messages.validation.chatSessionFor.type,
//     required: messages.validation.chatSessionFor.required,
//     enum: messages.validation.chatSessionFor.enum
//   }
// };
//
// const messageId = {
//   type: 'number',
//   allowEmpty: false,
//   required: true,
//   messages: {
//     type: messages.validation.messageId.type,
//     required: messages.validation.messageId.required
//   }
// };
//
// const messageIds = {
//   type: 'array',
//   required: false,
//   minItems: 1,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     messages: {
//       type: messages.validation.messageIdsItems.type,
//       allowEmpty: messages.validation.messageIdsItems.allowEmpty
//     }
//   },
//   uniqueItems: true,
//   messages: {
//     required: messages.validation.messageIds.required,
//     type: messages.validation.messageIds.type,
//     uniqueItems: messages.validation.messageIds.uniqueItems,
//     minItems: messages.validation.messageIds.noEmpty
//   }
// };
//
// const chatMessage = {
//   type: 'string',
//   allowEmpty: false,
//   required: true,
//   maxLength: 2000,
//   messages: {
//     type: messages.validation.chatMessage.type,
//     maxLength: messages.validation.chatMessage.len,
//     required: messages.validation.chatMessage.required
//   }
// };
//
// const chatMessageNote = {
//   type: 'string',
//   allowEmpty: false,
//   required: true,
//   maxLength: 2000,
//   messages: {
//     type: messages.validation.chatMessageNote.type,
//     maxLength: messages.validation.chatMessageNote.len,
//     required: messages.validation.chatMessageNote.required,
//     allowEmpty: messages.validation.chatMessageNote.allowEmpty
//   }
// };
//
// const scheduleNote = {
//   type: 'string',
//   allowEmpty: true,
//   required: false,
//   maxLength: 2000,
//   messages: {
//     type: messages.validation.scheduleNote.type,
//     maxLength: messages.validation.scheduleNote.len
//   }
// };
//
// const duration = {
//   type: 'string',
//   allowEmpty: false,
//   required: true,
//   messages: {
//     type: messages.validation.duration.type,
//     required: messages.validation.duration.required
//   }
// };
//
// const after = {
//   type: 'string',
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.after.type
//   }
// };
//
// const before = {
//   type: 'string',
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.before.type
//   }
// };
//
// const ssoToken = {
//   type: 'string',
//   required: true,
//   messages: {
//     required: messages.validation.ssoToken.type,
//     type: messages.validation.ssoToken.type
//   }
// };
//
// const providerToken = {
//   type: 'string',
//   required: true,
//   messages: {
//     required: messages.validation.providerToken.type,
//     type: messages.validation.providerToken.type
//   }
// };
//
// const caringForStringArray = {
//   type: 'string',
//   required: false,
//   messages: {
//     type: messages.validation.caringForStringArray.type
//   }
// };
//
// const livingConditionsStringArray = {
//   type: 'string',
//   required: false,
//   messages: {
//     type: messages.validation.livingConditionsStringArray.type
//   }
// };
//
// const medicalConditionsStringArray = {
//   type: 'string',
//   required: false,
//   messages: {
//     type: messages.validation.medicalConditionsStringArray.type
//   }
// };
//
// const interestsStringArray = {
//   type: 'string',
//   required: false,
//   messages: {
//     type: messages.validation.interestsStringArray.type
//   }
// };
//
// const petsStringArray = {
//   type: 'string',
//   required: false,
//   messages: {
//     type: messages.validation.interestsStringArray.type
//   }
// };
//
// const languagesStringArray = {
//   type: 'string',
//   required: false,
//   messages: {
//     type: messages.validation.languagesStringArray.type
//   }
// };
//
// const bestTimeToContactStringArray = {
//   type: 'string',
//   required: false,
//   messages: {
//     type: messages.validation.bestTimeToContactStringArray.type
//   }
// };
//
// const medicalConditions = {
//   type: 'array',
//   required: true,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     messages: {
//       type: messages.validation.medicalConditions.items.type,
//       required: messages.validation.medicalConditions.items.required,
//       allowEmpty: messages.validation.medicalConditions.items.allowEmpty
//     }
//   },
//   uniqueItems: true,
//   minItems: 1,
//   messages: {
//     required: messages.validation.medicalConditions.required,
//     type: messages.validation.medicalConditions.type,
//     minItems: messages.validation.medicalConditions.minItems,
//     uniqueItems: messages.validation.medicalConditions.uniqueItems
//   }
// };
//
// const editProfileMedicalConditions = {
//   type: 'array',
//   required: false,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     messages: {
//       type: messages.validation.medicalConditions.items.type,
//       allowEmpty: messages.validation.medicalConditions.items.allowEmpty
//     }
//   },
//   minItems: 1,
//   uniqueItems: true,
//   messages: {
//     type: messages.validation.medicalConditions.type,
//     uniqueItems: messages.validation.medicalConditions.uniqueItems,
//     minItems: messages.validation.medicalConditions.minItems
//   }
// };
//
// // not in use for now
// // keeping it
// // const livingConditionId = {
// //  type: 'integer',
// //  required: true,
// //  allowEmpty: false,
// //  messages: {
// //    type: messages.validation.livingConditionId.type,
// //    required: messages.validation.livingConditionId.required,
// //    allowEmpty: messages.validation.livingConditionId.allowEmpty
// //  }
// // };
//
// const editProfileLivingConditionId = {
//   type: 'integer',
//   required: false,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.livingConditionId.type,
//     allowEmpty: messages.validation.livingConditionId.allowEmpty
//   }
// };
//
// const relationshipId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.relationshipId.type,
//     required: messages.validation.relationshipId.required,
//     allowEmpty: messages.validation.relationshipId.allowEmpty
//   }
// };
//
// const careRecipientId = {
//   type: 'integer',
//   required: false,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.careRecipientId.invalid,
//     required: messages.validation.careRecipientId.required
//   }
// };
//
// const careRecipient = {
//   type: 'object',
//   required: true,
//   allowEmpty: false,
//   properties: {
//     zipCode: zipCodeRequired,
//     medicalConditions: medicalConditions,
//     relationshipId: relationshipId,
//     careRecipientAgeId: ageId,
//     interests: interests
//   },
//   messages: {
//     type: messages.validation.careRecipient.type,
//     required: messages.validation.careRecipient.required,
//     allowEmpty: messages.validation.careRecipient.allowEmpty
//   }
// };
//
// const editCareRecipient = {
//   type: 'object',
//   allowEmpty: false,
//   properties: {
//     medicalConditions: editProfileMedicalConditions,
//     zipCode: zipCode,
//     careRecipientAgeId: ageId,
//     livingConditionId: editProfileLivingConditionId,
//     interests: interests,
//     id: careRecipientId
//   },
//   messages: {
//     type: messages.validation.careRecipient.type,
//     allowEmpty: messages.validation.careRecipient.allowEmpty
//   }
// };
//
// const favoriteType = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: [
//     constants.favorites.type.hack,
//     constants.favorites.type.solution,
//     constants.favorites.type.article,
//     constants.favorites.type.recipe,
//     constants.favorites.type.adHoc
//   ],
//   messages: {
//     type: messages.validation.favoriteType.type,
//     required: messages.validation.favoriteType.required,
//     allowEmpty: messages.validation.favoriteType.allowEmpty,
//     enum: messages.validation.favoriteType.invalid
//   }
// };
//
// const optionalFavoriteType = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   enum: [
//     constants.favorites.type.hack,
//     constants.favorites.type.solution,
//     constants.favorites.type.article,
//     constants.favorites.type.recipe,
//     constants.favorites.type.adHoc
//   ],
//   messages: {
//     type: messages.validation.favoriteType.type,
//     required: messages.validation.favoriteType.required,
//     allowEmpty: messages.validation.favoriteType.allowEmpty,
//     enum: messages.validation.favoriteType.invalid
//   }
// };
//
// const favoriteSource = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: [
//     constants.favorites.source.aem,
//     constants.favorites.source.CINC
//   ],
//   messages: {
//     type: messages.validation.favoriteSource.type,
//     required: messages.validation.favoriteSource.required,
//     allowEmpty: messages.validation.favoriteSource.allowEmpty,
//     enum: messages.validation.favoriteSource.invalid
//   }
// };
//
// const favoriteContentId = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.favouriteContentId.type,
//     required: messages.validation.favouriteContentId.required,
//     allowEmpty: messages.validation.favouriteContentId.empty
//   }
// };
//
// const favoriteContentIds = {
//   type: 'string',
//   required: false,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.favouriteContentIds.type,
//     required: messages.validation.favouriteContentIds.required
//   }
// };
//
// const aggregateType = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: [constants.aggregates.type.contentIdsCount],
//   messages: {
//     type: messages.validation.aggregateType.type,
//     required: messages.validation.aggregateType.required,
//     enum: messages.validation.aggregateType.enum
//   }
// };
//
// const aggregateContentIdsCount = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.aggregateContentIdsCount.type,
//     required: messages.validation.aggregateContentIdsCount.required
//   }
// };
//
// const shareType = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: [
//     constants.share.shareTypes.connection
//   ],
//   messages: {
//     type: messages.validation.shareType.type,
//     required: messages.validation.shareType.required,
//     allowEmpty: messages.validation.shareType.required,
//     enum: messages.validation.shareType.enum
//   }
// };
//
// const shareContent = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.shareContent.type,
//     required: messages.validation.shareContent.required,
//     allowEmpty: messages.validation.shareContent.required
//   }
// };
//
// const status = {
//   type: 'string',
//   allowEmpty: false,
//   enum: [constants.connection.status.accepted, constants.connection.status.pending],
//   messages: {
//     type: messages.validation.status.type,
//     allowEmpty: messages.validation.status.empty,
//     enum: messages.validation.status.enum
//   }
// };
//
// const isSpouse = {
//   type: 'boolean',
//   required: true,
//   messages: {
//     type: messages.validation.isSpouse.type,
//     required: messages.validation.isSpouse.notEmpty
//   }
// };
//
// const answers = {
//   type: 'array',
//   required: true,
//   minItems: 6,
//   maxItems: 6,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     minimum: 1,
//     maximum: 10,
//     messages: {
//       type: messages.validation.answers.type,
//       allowEmpty: messages.validation.answers.notEmpty,
//       minimum: messages.validation.answers.minimum,
//       maximum: messages.validation.answers.maximum
//     }
//   },
//   dependencies: 'isSpouse',
//   messages: {
//     type: messages.validation.answers.type,
//     required: messages.validation.answers.notEmpty,
//     minItems: messages.validation.answers.totalItems,
//     maxItems: messages.validation.answers.totalItems,
//     dependencies: messages.validation.answers.dependency
//   }
// };
//
// const scheduleTypeId = {
//   type: 'number',
//   required: true,
//   enum: [constants.schedule.chatTypeIds.message, constants.schedule.chatTypeIds.video, constants.schedule.chatTypeIds.audio],
//   messages: {
//     type: messages.validation.scheduleTypeId.type,
//     required: messages.validation.scheduleTypeId.required,
//     enum: messages.validation.scheduleTypeId.invalid
//   }
// };
//
// const scheduledTimestamp = {
//   type: 'string',
//   required: true,
//   pattern: constants.regex.date,
//   messages: {
//     type: messages.validation.timestamp.type,
//     required: messages.validation.timestamp.required,
//     pattern: messages.validation.timestamp.invalid
//   }
// };
//
// const scheduleAction = {
//   type: 'string',
//   required: true,
//   enum: [constants.schedule.action.accept, constants.schedule.action.reject],
//   messages: {
//     type: messages.validation.scheduleAction.type,
//     required: messages.validation.scheduleAction.required,
//     enum: messages.validation.scheduleAction.invalid
//   }
// };
//
// const scheduleId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.scheduleId.invalid,
//     required: messages.validation.scheduleId.required
//   }
// };
//
// const scheduleIdOptional = {
//   type: 'integer',
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.scheduleId.invalid,
//     required: messages.validation.scheduleId.required
//   }
// };
//
// const timestamp = {
//   type: 'string',
//   pattern: constants.regex.date,
//   messages: {
//     type: messages.validation.timestamp.type,
//     pattern: messages.validation.timestamp.invalid
//   }
// };
//
// const scheduleSearchDirection = {
//   type: 'string',
//   enum: [constants.schedule.direction.up, constants.schedule.direction.down, constants.schedule.direction.none],
//   messages: {
//     type: messages.validation.scheduleSearchDirection.type,
//     enum: messages.validation.scheduleSearchDirection.invalid
//   }
// };
//
// const picture = {
//   type: 'string',
//   allowEmpty: true,
//   dependencies: 'pictureStatus',
//   messages: {
//     type: messages.validation.picture.type,
//     dependencies: messages.validation.picture.dependency
//   }
// };
//
// const pictureStatus = {
//   type: 'string',
//   enum: constants.user.picture.status,
//   messages: {
//     type: messages.validation.pictureStatus.type,
//     enum: messages.validation.pictureStatus.enum
//   }
// };
//
// const pictureType = {
//   type: 'string',
//   enum: constants.user.picture.type,
//   messages: {
//     type: messages.validation.pictureType.type,
//     enum: messages.validation.pictureType.enum
//   }
// };
//
// const displayNameAvailability = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.displayNameAvailability.type,
//     required: messages.validation.displayNameAvailability.notEmpty,
//     allowEmpty: messages.validation.displayNameAvailability.notEmpty
//   }
// };
//
// const messageIdForDeleteChat = {
//   type: 'string',
//   allowEmpty: true,
//   required: false,
//   pattern: '^([0-9]+)(,[0-9]+)*$',
//   messages: {
//     type: messages.validation.messageId.type,
//     pattern: messages.validation.messageId.type
//   }
// };
//
// const vote = {
//   type: 'integer',
//   required: true,
//   enum: [0, 1],
//   messages: {
//     type: messages.validation.vote.type,
//     required: messages.validation.vote.required,
//     enum: messages.validation.vote.enum
//   }
// };
//
// const userIdForVote = {
//   type: 'integer',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.userId.invalid
//   }
// };
//
// const uuidForVote = {
//   type: 'string',
//   allowEmpty: true,
//   messages: {
//     type: messages.validation.uuid.invalid
//   }
// };
//
// const cancelOrRemoveAction = {
//   type: 'string',
//   required: true,
//   enum: [
//     constants.connection.cancelOrRemoveAction.cancel,
//     constants.connection.cancelOrRemoveAction.remove
//   ],
//   messages: {
//     type: messages.validation.cancelOrRemoveAction.invalid,
//     required: messages.validation.cancelOrRemoveAction.required,
//     enum: messages.validation.cancelOrRemoveAction.enum
//   }
// };
//
// const scheduleStatus = {
//   type: 'string',
//   required: true,
//   enum: ['accepted', 'rejected', 'pending'],
//   messages: {
//     type: messages.validation.scheduleStatus.type,
//     enum: messages.validation.scheduleStatus.enum,
//     required: messages.validation.scheduleStatus.required
//   }
// };
//
// const scheduleType = {
//   type: 'string',
//   required: true,
//   enum: ['sent', 'received'],
//   messages: {
//     type: messages.validation.scheduleType.type,
//     enum: messages.validation.scheduleType.enum,
//     required: messages.validation.scheduleType.required
//   }
// };
//
// const mainUserId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.mainUserId.invalid,
//     required: messages.validation.mainUserId.required
//   }
// };
//
// const invitedUserId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.invitedUserId.invalid,
//     required: messages.validation.invitedUserId.required
//   }
// };
//
// const uuidForVoteReq = {
//   type: 'string',
//   allowEmpty: false,
//   required: true,
//   messages: {
//     type: messages.validation.uuid.invalid,
//     required: messages.validation.uuid.required
//   }
// };
//
// const answer = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   minimum: 1,
//   maximum: 10,
//   messages: {
//     type: messages.validation.answer.type,
//     required: messages.validation.answer.required,
//     allowEmpty: messages.validation.answer.notEmpty,
//     minimum: messages.validation.answer.range,
//     maximum: messages.validation.answer.range
//   }
// };
//
// const questionId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.question.type,
//     required: messages.validation.question.required,
//     allowEmpty: messages.validation.question.notEmpty
//   }
// };
//
// const userQuestionAnswers = {
//   type: 'array',
//   required: true,
//   minItems: 6,
//   maxItems: 6,
//   items: {
//     type: 'object',
//     properties: {
//       answer: answer,
//       questionId: questionId
//     }
//   },
//   messages: {
//     type: messages.validation.userQuestionAnswers.type,
//     required: messages.validation.userQuestionAnswers.required,
//     minItems: messages.validation.userQuestionAnswers.minItems,
//     maxItems: messages.validation.userQuestionAnswers.maxItems
//   }
// };
//
// const categoryId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   enum: [constants.category.SPOUSAL, constants.category.PARENTAL, constants.category.NONPARENTAL],
//   messages: {
//     type: messages.validation.category.type,
//     required: messages.validation.category.required,
//     allowEmpty: messages.validation.category.notEmpty,
//     enum: messages.validation.category.enum
//   }
// };
//
// const previous = {
//   type: 'integer',
//   required: false,
//   allowEmpty: true,
//   enum: [0, 1],
//   messages: {
//     type: messages.validation.previous.type,
//     enum: messages.validation.previous.enum
//   }
// };
//
// const all = {
//   type: 'integer',
//   required: false,
//   allowEmpty: true,
//   enum: [0, 1],
//   messages: {
//     type: messages.validation.all.type,
//     enum: messages.validation.all.enum
//   }
// };
//
// const cronString = {
//   type: 'string',
//   allowEmpty: false,
//   required: false,
//   pattern: /((?:(?:[0-9]{1,})(?:[,]{1}[0-9]{1,}){0,})|(?:(?:[\*]{1})(?:[/]{1}[0-9]{1,}){0,1})){1}( ((?:(?:[0-9]{1,})(?:[,]{1}[0-9]{1,}){0,})|(?:(?:[\*]{1})(?:[/]{1}[0-9]{1,}){0,1})){1}){5}/,
//   messages: {
//     type: messages.validation.settingValue.type + ' (Cron Time)',
//     pattern: messages.validation.settingValue.type + ' (Cron Time)'
//   }
// };
//
// const reportDuration = {
//   type: 'string',
//   allowEmpty: false,
//   required: false,
//   pattern: /^[\d.]+$/,
//   messages: {
//     type: messages.validation.settingValue.type + ' (Report Duration)',
//     pattern: messages.validation.settingValue.type + ' (Report Duration)'
//   }
// };
//
// const trendingTopic = {
//   type: 'string',
//   allowEmpty: false,
//   required: false,
//   enum: _.keys(constants.trending.topics),
//   messages: {
//     type: messages.validation.trendingTopic.value,
//     required: messages.validation.trendingTopic.required,
//     enum: messages.validation.trendingTopic.value
//   }
// };
//
// const userIdArray = {
//   type: 'array',
//   required: true,
//   items: userId,
//   minItems: 1,
//   uniqueItems: true,
//   messages: {
//     type: messages.validation.userIdArray.type,
//     required: messages.validation.userIdArray.required,
//     minItems: messages.validation.userIdArray.minItems,
//     uniqueItems: messages.validation.userIdArray.uniqueItems
//   }
// };
//
// const isActive = {
//   type: 'integer',
//   required: true,
//   minimum: 0,
//   maximum: 1,
//   messages: {
//     type: messages.validation.isActive.type,
//     required: messages.validation.isActive.notEmpty,
//     minimum: messages.validation.isActive.range,
//     maximum: messages.validation.isActive.range
//
//   }
// };
//
// const contentId = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   maxLength: 500,
//   messages: {
//     type: messages.validation.favouriteContentId.type,
//     required: messages.validation.favouriteContentId.required,
//     allowEmpty: messages.validation.favouriteContentId.empty,
//     maxLength: messages.validation.favouriteContentId.maxLength
//   }
// };
//
// const feedType = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   maxLength: 255,
//   messages: {
//     type: messages.validation.feedType.type,
//     required: messages.validation.feedType.required,
//     allowEmpty: messages.validation.feedType.empty,
//     maxLength: messages.validation.feedType.maxLength
//   }
// };
//
// const feedTypeDisplayName = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   maxLength: 255,
//   messages: {
//     type: messages.validation.feedTypeDisplayName.type,
//     maxLength: messages.validation.feedTypeDisplayName.maxLength
//   }
// };
//
// const feedTypeId = {
//   type: 'array',
//   required: false,
//   allowEmpty: false,
//   items: {
//     type: 'integer',
//     messages: {
//       type: messages.validation.feedTypeId.type,
//       required: messages.validation.feedTypeId.required,
//       allowEmpty: messages.validation.feedTypeId.required
//     }
//   },
//   messages: {
//     type: messages.validation.feedTypeId.array,
//     allowEmpty: messages.validation.feedTypeId.allowEmpty
//   }
// };
//
// const feedTitle = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   maxLength: 500,
//   messages: {
//     type: messages.validation.title.type,
//     required: messages.validation.title.required,
//     allowEmpty: messages.validation.title.empty,
//     maxLength: messages.validation.title.maxLength
//   }
// };
//
// const summaryText = {
//   type: 'string',
//   allowEmpty: true,
//   required: false,
//   maxLength: 2000,
//   messages: {
//     type: messages.validation.summaryText.type,
//     maxLength: messages.validation.summaryText.maxLength
//   }
// };
//
// const dataUrl = {
//   type: 'string',
//   allowEmpty: true,
//   required: false,
//   maxLength: 2000,
//   messages: {
//     type: messages.validation.dataUrl.type,
//     maxLength: messages.validation.dataUrl.maxLength
//   }
// };
//
// const feedSubTypeId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   enum: _.values(constants.feeds.feedSubTypeIds),
//   messages: {
//     type: messages.validation.feedSubTypeId.type,
//     required: messages.validation.feedSubTypeId.required,
//     enum: messages.validation.feedSubTypeId.range(_.values(constants.feeds.feedSubTypeIds))
//   }
// };
//
// const feedUrl = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   maxLength: 500,
//   messages: {
//     type: messages.validation.feedUrl.type,
//     required: messages.validation.feedUrl.required,
//     allowEmpty: messages.validation.feedUrl.empty,
//     maxLength: messages.validation.feedUrl.maxLength
//   }
// };
//
// const feedImageUrl = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   maxLength: 500,
//   messages: {
//     type: messages.validation.imageUrl.type,
//     maxLength: messages.validation.imageUrl.maxLength
//   }
// };
//
// const feedVideoUrl = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   maxLength: 500,
//   messages: {
//     type: messages.validation.videoUrl.type,
//     maxLength: messages.validation.videoUrl.maxLength
//   }
// };
//
// const feedVideoImageUrl = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   maxLength: 500,
//   messages: {
//     type: messages.validation.videoImageUrl.type,
//     maxLength: messages.validation.videoImageUrl.maxLength
//   }
// };
//
// const feedSubCategory = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   maxLength: 255,
//   messages: {
//     type: messages.validation.subCategory.type,
//     maxLength: messages.validation.subCategory.maxLength
//   }
// };
//
// const feedTagsArray = {
//   type: 'array',
//   required: false,
//   allowEmpty: true,
//   items: {
//     type: 'string',
//     maxLength: 255,
//     messages: {
//       type: messages.validation.feedTag.type,
//       allowEmpty: messages.validation.feedTag.notEmpty,
//       maxLength: messages.validation.feedTag.maxLength
//     }
//   }
// };
//
// const filterForFeeds = {
//   type: 'array',
//   required: false,
//   items: {
//     type: 'integer',
//     allowEmpty: false,
//     messages: {
//       type: messages.validation.filterForFeeds.type,
//       allowEmpty: messages.validation.filterForFeeds.allowEmpty
//     }
//   },
//   messages: {
//     type: messages.validation.filterForFeeds.array
//   }
// };
//
// const feedNotificationSettingId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.feedNotificationSettingId.invalid,
//     required: messages.validation.feedNotificationSettingId.required,
//     allowEmpty: messages.validation.feedNotificationSettingId.required
//   }
// };
//
// const feedNotificationFrequency = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: ['daily', 'weekly', 'monthly'],
//   messages: {
//     type: messages.validation.feedNotificationFrequency.invalid,
//     required: messages.validation.feedNotificationFrequency.required,
//     allowEmpty: messages.validation.feedNotificationFrequency.required,
//     enum: messages.validation.feedNotificationFrequency.enum
//   }
// };
//
// const feedNotificationIsActive = {
//   type: 'boolean',
//   required: true,
//   messages: {
//     type: messages.validation.feedNotificationIsActive.invalid,
//     required: messages.validation.feedNotificationIsActive.required
//   }
// };
//
// const feedNotificationStartDate = {
//   type: 'string',
//   required: false,
//   format: 'date',
//   messages: {
//     type: messages.validation.feedNotificationStartDate.invalid,
//     format: messages.validation.feedNotificationStartDate.invalid
//   }
// };
//
// const feedNotificationEndDate = {
//   type: 'string',
//   required: false,
//   format: 'date',
//   messages: {
//     type: messages.validation.feedNotificationEndDate.invalid,
//     format: messages.validation.feedNotificationEndDate.invalid
//   }
// };
//
// const feedNotificationDayOfWeek = {
//   type: 'integer',
//   required: false,
//   enum: [0, 1, 2, 3, 4, 5, 6],
//   messages: {
//     type: messages.validation.feedNotificationDayOfWeek.invalid,
//     enum: messages.validation.feedNotificationDayOfWeek.enum
//   }
// };
//
// const feedNotificationTimeOfDay = {
//   type: 'string',
//   required: true,
//   format: 'time',
//   messages: {
//     type: messages.validation.feedNotificationTimeOfDay.invalid,
//     required: messages.validation.feedNotificationTimeOfDay.required,
//     format: messages.validation.feedNotificationTimeOfDay.invalid
//   }
// };
//
// const feedNotificationMatchTags = {
//   type: 'boolean',
//   required: true,
//   messages: {
//     type: messages.validation.feedNotificationMatchTags.invalid,
//     required: messages.validation.feedNotificationMatchTags.required
//   }
// };
//
// const feedNotificationIsArchived = {
//   type: 'integer',
//   required: false,
//   allowEmpty: false,
//   minimum: 0,
//   maximum: 1,
//   messages: {
//     type: messages.validation.feedNotificationIsArchived.type,
//     allowEmpty: messages.validation.feedNotificationIsArchived.notEmpty,
//     minimum: messages.validation.feedNotificationIsArchived.range,
//     maximum: messages.validation.feedNotificationIsArchived.range
//
//   }
// };
//
// const feedNotificationIsArchivedForUpdate = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   minimum: 0,
//   maximum: 1,
//   messages: {
//     type: messages.validation.feedNotificationIsArchived.type,
//     required: messages.validation.feedNotificationIsArchived.required,
//     allowEmpty: messages.validation.feedNotificationIsArchived.allowEmpty,
//     minimum: messages.validation.feedNotificationIsArchived.range,
//     maximum: messages.validation.feedNotificationIsArchived.range
//   }
// };
//
// const privacyOptionItem = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.privacyOptionItem.type,
//     required: messages.validation.privacyOptionItem.required,
//     allowEmpty: messages.validation.privacyOptionItem.notEmpty
//   }
// };
//
// const privacyOptions = {
//   type: 'object',
//   required: true,
//   allowEmpty: false,
//   properties: {
//     livingConditionId: privacyOptionItem,
//     interests: privacyOptionItem,
//     careRecipientInterests: privacyOptionItem,
//     careDurationId: privacyOptionItem,
//     pets: privacyOptionItem,
//     workHoursId: privacyOptionItem,
//     bestTimeToReachId: privacyOptionItem,
//     ageId: privacyOptionItem,
//     careRecipientAgeId: privacyOptionItem,
//     userChildren: privacyOptionItem,
//     languages: privacyOptionItem
//   },
//   messages: {
//     required: messages.validation.privacyOptions.required,
//     type: messages.validation.privacyOptions.type,
//     allowEmpty: messages.validation.privacyOptions.allowEmpty
//   }
// };
//
// const publishedAt = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   pattern: constants.regex.date,
//   messages: {
//     required: messages.validation.publishedAt.required,
//     allowEmpty: messages.validation.publishedAt.required,
//     type: messages.validation.publishedAt.invalid,
//     pattern: messages.validation.publishedAt.pattern
//   }
// };
//
// const appVersion = {
//   type: 'string',
//   required: true,
//   messages: {
//     type: messages.validation.appVersion.type,
//     required: messages.validation.appVersion.required
//   }
// };
//
// const source = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   'enum': [
//     constants.user.source.CINC,
//     constants.user.source.Portal
//   ],
//   messages: {
//     type: messages.validation.source.empty,
//     required: messages.validation.source.required,
//     allowEmpty: messages.validation.source.empty,
//     'enum': messages.validation.source.invalid
//   }
// };
//
// const resetSegment = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   'enum': [1, 0],
//   messages: {
//     type: messages.validation.resetSegment.empty,
//     required: messages.validation.resetSegment.required,
//     allowEmpty: messages.validation.resetSegment.empty,
//     'enum': messages.validation.resetSegment.invalid
//   }
// };
//
// const hasAcceptedSecurityAlert = {
//   type: 'integer',
//   required: false,
//   enum: [1],
//   messages: {
//     type: messages.validation.hasAcceptedSecurityAlert.type,
//     enum: messages.validation.hasAcceptedSecurityAlert.enum
//   }
//
// };
//
// const hasAcceptedDontShowNote = {
//   type: 'integer',
//   required: false,
//   enum: [1],
//   messages: {
//     type: messages.validation.hasAcceptedDontShowNote.type,
//     enum: messages.validation.hasAcceptedDontShowNote.enum
//   }
//
// };
//
// const patchUser = {
//   type: 'object',
//   allowEmpty: false,
//   required: true,
//   properties: {
//     hasAcceptedSecurityAlert: hasAcceptedSecurityAlert
//     // hasAcceptedDontShowNote: hasAcceptedDontShowNote
//   },
//   additionalProperties: false,
//   messages: {
//     required: messages.validation.patchUser.required,
//     type: messages.validation.patchUser.type,
//     allowEmpty: messages.validation.patchUser.allowEmpty,
//     additionalProperties: messages.validation.patchUser.additionalProperties
//   }
// };
//
// const complainReasonId = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.complainReasonId.type,
//     required: messages.validation.complainReasonId.type,
//     allowEmpty: messages.validation.complainReasonId.type
//   }
// };
//
// const comments = {
//   type: 'string',
//   required: false,
//   allowEmpty: true,
//   maxLength: 1000,
//   messages: {
//     type: messages.validation.inviteMessage.type,
//     maxLength: messages.validation.inviteMessage.len
//   }
// };
//
// const reportStatus = {
//   type: 'integer',
//   required: true,
//   allowEmpty: false,
//   enum: [
//     constants.security.reportStatus.ignore,
//     constants.security.reportStatus.block
//   ],
//   messages: {
//     type: messages.validation.reportAction.type,
//     required: messages.validation.reportAction.required,
//     allowEmpty: messages.validation.reportAction.allowEmpty,
//     enum: messages.validation.reportAction.enum
//   }
// };
//
// const statsType = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   enum: [
//     constants.stats.type.unseenConnection
//   ],
//   messages: {
//     required: messages.validation.statsType.required,
//     type: messages.validation.statsType.type,
//     allowEmpty: messages.validation.statsType.allowEmpty,
//     enum: messages.validation.statsType.enum
//   }
// };
//
// const callingMessageTypeId = {
//   type: 'number',
//   allowEmpty: false,
//   required: true,
//   enum: [
//     constants.chatMessage.messageTypeId.voiceCallingMessage,
//     constants.chatMessage.messageTypeId.videoCallingMessage
//   ],
//   messages: {
//     type: messages.validation.messageTypeId.type,
//     required: messages.validation.messageTypeId.required,
//     enum: messages.validation.messageTypeId.enum
//   }
// };
//
// const segmentIndex = {
//   type: 'number',
//   enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
//   messages: {
//     type: messages.validation.segmentIndex.type,
//     enum: messages.validation.segmentIndex.enum
//   }
// };
//
// const assessmentTypeId = {
//   type: 'integer',
//   required: true,
//   maxLength: 255,
//   messages: {
//     type: messages.validation.assessmentTypeId.type,
//     required: messages.validation.assessmentTypeId.required,
//     maxLength: messages.validation.assessmentTypeId.maxLength
//   }
// };
//
// const userIdentifier = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   maxLength: 255,
//   messages: {
//     type: messages.validation.userIdentifier.type,
//     required: messages.validation.userIdentifier.required,
//     allowEmpty: messages.validation.userIdentifier.allowEmpty,
//     maxLength: messages.validation.userIdentifier.maxLength
//   }
// };
//
// const assessmentData = {
//   type: 'object',
//   required: true,
//   messages: {
//     type: messages.validation.assessmentData.type,
//     required: messages.validation.assessmentData.required
//   }
// };
//
// const tokboxSessionId = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   messages: {
//     type: messages.validation.tokboxSessionId.type,
//     required: messages.validation.tokboxSessionId.empty
//   }
// };
//
// const tokboxEvent = {
//   type: 'string',
//   required: true,
//   allowEmpty: false,
//   'enum': [
//     constants.tokbox.event.connectionDestroyed
//   ],
//   messages: {
//     type: messages.validation.tokboxEvent.type,
//     required: messages.validation.tokboxEvent.empty,
//     allowEmpty: messages.validation.tokboxEvent.empty,
//     'enum': messages.validation.tokboxEvent.invalid
//   }
// };
//
// const complainReason = {
//   type: 'string',
//   required: false,
//   allowEmpty: false,
//   maxLength: 100,
//   messages: {
//     type: messages.validation.complainReason.type,
//     allowEmpty: messages.validation.complainReason.allowEmpty,
//     maxLength: messages.validation.complainReason.maxLength
//   }
// };
//
// const reportingUserComments = {
//   type: 'string',
//   required: false,
//   allowEmpty: false,
//   maxLength: 1000,
//   messages: {
//     type: messages.validation.reportingUserComments.type,
//     allowEmpty: messages.validation.reportingUserComments.allowEmpty,
//     maxLength: messages.validation.reportingUserComments.maxLength
//   }
// };
//
// const findFavorites = {
//   type: 'integer',
//   required: false,
//   allowEmpty: true,
//   enum: [0, 1],
//   messages: {
//     enum: messages.validation.findFavorites.enum,
//     type: messages.validation.findFavorites.type
//   }
// };
//
// const isUserNote = {
//   type: 'number',
//   required: false,
//   allowEmpty: false,
//   enum: [1],
//   messages: {
//     type: messages.validation.isUserNote.type,
//     allowEmpty: messages.validation.isUserNote.allowEmpty,
//     enum: messages.validation.isUserNote.enum
//   }
// };
//
// const isBlockedReportedUsers = {
//   type: 'number',
//   required: false,
//   allowEmpty: false,
//   enum: [0, 1],
//   messages: {
//     type: messages.validation.isBlockedReportedUsers.type,
//     allowEmpty: messages.validation.isBlockedReportedUsers.allowEmpty,
//     enum: messages.validation.isBlockedReportedUsers.enum
//   }
// };
//
// const sort = {
//   type: 'string',
//   allowEmpty: false,
//   required: false,
//   enum: [
//     constants.sort.desc,
//     constants.sort.asc
//   ],
//   messages: {
//     type: messages.validation.sort.type,
//     allowEmpty: messages.validation.sort.allowEmpty,
//     enum: messages.validation.sort.enum
//   }
// };
//
// const getReportedSortBy = {
//   type: 'object',
//   allowEmpty: true,
//   required: false,
//   properties: {
//     date: sort
//   },
//   additionalProperties: false,
//   messages: {
//     type: messages.validation.getReportedSortBy.type,
//     additionalProperties: messages.validation.getReportedSortBy.additionalProperties
//   }
// };
//
// const assessmentResourceItems = {
//   type: 'object',
//   properties: {
//     name: {
//       type: 'string',
//       required: true,
//       allowEmpty: false,
//       messages: {
//         type: messages.validation.assessmentResourceItems.name.type,
//         required: messages.validation.assessmentResourceItems.name.required,
//         allowEmpty: messages.validation.assessmentResourceItems.name.allowEmpty
//       }
//     },
//     link: {
//       type: 'string',
//       required: true,
//       allowEmpty: false,
//       format: 'url',
//       messages: {
//         type: messages.validation.assessmentResourceItems.link.type,
//         required: messages.validation.assessmentResourceItems.link.required,
//         allowEmpty: messages.validation.assessmentResourceItems.link.allowEmpty,
//         format: messages.validation.assessmentResourceItems.link.type
//       }
//     }
//   }
// };
//
// const assessmentArticles = {
//   type: 'array',
//   allowEmpty: false,
//   required: true,
//   items: assessmentResourceItems
// };
//
// const assessmentHacks = {
//   type: 'array',
//   allowEmpty: false,
//   required: true,
//   items: assessmentResourceItems
// };
//
// const assessmentServices = {
//   type: 'array',
//   allowEmpty: false,
//   required: true,
//   items: assessmentResourceItems
// };
//
// const assessmentResources = {
//   type: 'object',
//   required: true,
//   allowEmpty: false,
//   properties: {
//     articles: assessmentArticles,
//     services: assessmentServices,
//     hacks: assessmentHacks
//   },
//   messages: {
//     type: messages.validation.assessmentResourceItems.type,
//     required: messages.validation.assessmentResourceItems.required,
//     allowEmpty: messages.validation.assessmentResourceItems.allowEmpty,
//     format: messages.validation.assessmentResourceItems.type
//   }
// };
//
// const assessmentStats = {
//   type: 'array',
//   allowEmpty: false,
//   required: true,
//   items: {
//     type: 'object',
//     properties: {
//       statIconUrl: {
//         type: 'string',
//         required: true,
//         allowEmpty: false,
//         format: 'url',
//         messages: {
//           type: messages.validation.statIconUrl.type,
//           required: messages.validation.statIconUrl.required,
//           allowEmpty: messages.validation.statIconUrl.allowEmpty,
//           format: messages.validation.statIconUrl.type
//         }
//       },
//       statField: {
//         type: 'string',
//         required: true,
//         allowEmpty: false,
//         messages: {
//           type: messages.validation.statField.type,
//           required: messages.validation.statField.required,
//           allowEmpty: messages.validation.statField.allowEmpty
//         }
//       },
//       statPhrase: {
//         type: 'string',
//         required: true,
//         allowEmpty: false,
//         messages: {
//           type: messages.validation.statPhrase.type,
//           required: messages.validation.statField.required,
//           allowEmpty: messages.validation.statField.allowEmpty
//         }
//       }
//     }
//   },
//   messages: {
//     type: messages.validation.assessmentStats.type,
//     required: messages.validation.assessmentStats.required,
//     allowEmpty: messages.validation.assessmentStats.allowEmpty
//   }
// };
//
// const generateAssessmentPDF = {
//   type: 'object',
//   allowEmpty: false,
//   required: true,
//   properties: {
//     name: {
//       type: 'string',
//       required: true,
//       allowEmpty: false,
//       messages: {
//         type: messages.validation.assessmentName.type,
//         required: messages.validation.assessmentName.required,
//         allowEmpty: messages.validation.assessmentName.allowEmpty
//       }
//     },
//     summary: {
//       type: 'string',
//       required: true,
//       allowEmpty: false,
//       messages: {
//         type: messages.validation.summaryText.type,
//         required: messages.validation.summaryText.required,
//         allowEmpty: messages.validation.summaryText.allowEmpty
//       }
//     },
//     stats: assessmentStats,
//     caregiverAttributes: {
//       type: 'array',
//       required: true,
//       allowEmpty: false,
//       items: {
//         type: 'string',
//         allowEmpty: false,
//         messages: {
//           type: messages.validation.careGiverAttributes.items.type,
//           required: messages.validation.careGiverAttributes.items.required,
//           allowEmpty: messages.validation.careGiverAttributes.items.allowEmpty
//         }
//       },
//       messages: {
//         type: messages.validation.careGiverAttributes.type,
//         required: messages.validation.careGiverAttributes.required,
//         allowEmpty: messages.validation.careGiverAttributes.allowEmpty
//       }
//     },
//     resources: assessmentResources
//   },
//   messages: {
//     type: messages.validation.assessmentData.type,
//     required: messages.validation.assessmentData.required,
//     allowEmpty: messages.validation.assessmentData.allowEmpty
//   }
// };

module.exports = {
  name,
  pageSize,
  skip,
  businessId,
  clientId,
  generalStringValidation
  // isActive,
  // patchUser
  // email,
  // password,
  // passwordSignIn,
  // deviceType,
  // deviceId,
  // userId,
  // connectionId,
  // query,
  // action,
  // searchRadius,
  // skip,
  // pageSize,
  // pendingRequestType,
  // inviteMessage,
  // gender,
  // careDurationId,
  // workHoursId,
  // ageId,
  // childrenNumber,
  // childrenRange,
  // childrenAgeId,
  // pets,
  // languages,
  // aboutMe,
  // userName,
  // groupKey,
  // settingId,
  // settingValue,
  // interests,
  // zipCode,
  // displayName,
  // displayNameEdit,
  // searchDisplayName,
  // userNameOnBoarding,
  // openTokSessionId,
  // chatMessage,
  // chatSessionId,
  // groupId,
  // messageTypeId,
  // messageId,
  // messageIds,
  // after,
  // before,
  // otherUserId,
  // ssoToken,
  // providerToken,
  // careRecipient,
  // userQuestionAnswers,
  // editCareRecipient,
  // editProfileMedicalConditions,
  // editProfileLivingConditionId,
  // bestTimeToReachId,
  // chatSessionFor,
  // caringForStringArray,
  // livingConditionsStringArray,
  // medicalConditionsStringArray,
  // interestsStringArray,
  // bestTimeToContactStringArray,
  // favoriteType,
  // favoriteContentId,
  // favoriteSource,
  // shareType,
  // shareContent,
  // status,
  // requiredSearchRadius,
  // aggregateContentIdsCount,
  // isSpouse,
  // answers,
  // aggregateType,
  // zipCodeRequired,
  // scheduleTypeId,
  // scheduleAction,
  // scheduleId,
  // scheduleIdOptional,
  // scheduledTimestamp,
  // timestamp,
  // scheduleSearchDirection,
  // favoriteContentIds,
  // chatMessageNote,
  // duration,
  // zipCodeStr,
  // picture,
  // pictureStatus,
  // pictureType,
  // displayNameAvailability,
  // messageIdForDeleteChat,
  // vote,
  // userIdForVote,
  // uuidForVote,
  // uuidForVoteReq,
  // answer,
  // questionId,
  // categoryId,
  // previous,
  // all,
  // cronString,
  // trendingTopic,
  // cancelOrRemoveAction,
  // reportDuration,
  // userIdArray,
  // scheduleStatus,
  // scheduleType,
  // mainUserId,
  // invitedUserId,
  // scheduleNote,
  // contentId,
  // feedType,
  // feedTypeDisplayName,
  // feedTypeId,
  // feedTitle,
  // summaryText,
  // dataUrl,
  // feedSubTypeId,
  // feedUrl,
  // feedImageUrl,
  // feedVideoUrl,
  // feedVideoImageUrl,
  // feedSubCategory,
  // feedTagsArray,
  // filterForFeeds,
  // feedNotificationSettingId,
  // feedNotificationFrequency,
  // feedNotificationIsActive,
  // feedNotificationStartDate,
  // feedNotificationEndDate,
  // feedNotificationDayOfWeek,
  // feedNotificationTimeOfDay,
  // feedNotificationIsArchived,
  // feedNotificationIsArchivedForUpdate,
  // petsStringArray,
  // languagesStringArray,
  // privacyOptionItem,
  // privacyOptions,
  // feedNotificationMatchTags,
  // publishedAt,
  // isActive,
  // appVersion,
  // optionalChatSessionId,
  // source,
  // careRecipientId,
  // relationshipId,
  // resetSegment,
  // hasAcceptedSecurityAlert,
  // patchUser,
  // complainReasonId,
  // comments,
  // statsType,
  // reportStatus,
  // callingMessageTypeId,
  // segmentIndex,
  // assessmentTypeId,
  // userIdentifier,
  // assessmentData,
  // tokboxSessionId,
  // tokboxEvent,
  // complainReason,
  // reportingUserComments,
  // isBlockedReportedUsers,
  // optionalFavoriteType,
  // findFavorites,
  // isUserNote,
  // getReportedSortBy,
  // generateAssessmentPDF
};
