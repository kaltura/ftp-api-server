// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2016  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================
var util = require('util');
var kaltura = require('./KalturaClientBase');

/**
 *Class definition for the Kaltura service: accessControlProfile.
 * The available service actions:
 * @action add Add new access control profile.
 * @action get Get access control profile by id.
 * @action update Update access control profile by id.
 * @action delete Delete access control profile by id.
 * @action list List access control profiles by filter and pager.
 */
function KalturaAccessControlProfileService(client){
	KalturaAccessControlProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAccessControlProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaAccessControlProfileService = KalturaAccessControlProfileService;

/**
 * Add new access control profile.
 * @param accessControlProfile KalturaAccessControlProfile  (optional).
 * @return KalturaAccessControlProfile.
 */
KalturaAccessControlProfileService.prototype.add = function(callback, accessControlProfile){
	var kparams = {};
	this.client.addParam(kparams, 'accessControlProfile', kaltura.toParams(accessControlProfile));
	this.client.queueServiceActionCall('accesscontrolprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get access control profile by id.
 * @param id int  (optional).
 * @return KalturaAccessControlProfile.
 */
KalturaAccessControlProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrolprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update access control profile by id.
 * @param id int  (optional).
 * @param accessControlProfile KalturaAccessControlProfile  (optional).
 * @return KalturaAccessControlProfile.
 */
KalturaAccessControlProfileService.prototype.update = function(callback, id, accessControlProfile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'accessControlProfile', kaltura.toParams(accessControlProfile));
	this.client.queueServiceActionCall('accesscontrolprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete access control profile by id.
 * @param id int  (optional).
 * @return .
 */
KalturaAccessControlProfileService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrolprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List access control profiles by filter and pager.
 * @param filter KalturaAccessControlProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaAccessControlProfileListResponse.
 */
KalturaAccessControlProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('accesscontrolprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: accessControl.
 * The available service actions:
 * @action add Add new Access Control Profile.
 * @action get Get Access Control Profile by id.
 * @action update Update Access Control Profile by id.
 * @action delete Delete Access Control Profile by id.
 * @action list List Access Control Profiles by filter and pager.
 */
function KalturaAccessControlService(client){
	KalturaAccessControlService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAccessControlService, kaltura.KalturaServiceBase);
module.exports.KalturaAccessControlService = KalturaAccessControlService;

/**
 * Add new Access Control Profile.
 * @param accessControl KalturaAccessControl  (optional).
 * @return KalturaAccessControl.
 */
KalturaAccessControlService.prototype.add = function(callback, accessControl){
	var kparams = {};
	this.client.addParam(kparams, 'accessControl', kaltura.toParams(accessControl));
	this.client.queueServiceActionCall('accesscontrol', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Access Control Profile by id.
 * @param id int  (optional).
 * @return KalturaAccessControl.
 */
KalturaAccessControlService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrol', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Access Control Profile by id.
 * @param id int  (optional).
 * @param accessControl KalturaAccessControl  (optional).
 * @return KalturaAccessControl.
 */
KalturaAccessControlService.prototype.update = function(callback, id, accessControl){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'accessControl', kaltura.toParams(accessControl));
	this.client.queueServiceActionCall('accesscontrol', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Access Control Profile by id.
 * @param id int  (optional).
 * @return .
 */
KalturaAccessControlService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrol', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Access Control Profiles by filter and pager.
 * @param filter KalturaAccessControlFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaAccessControlListResponse.
 */
KalturaAccessControlService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('accesscontrol', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: adminUser.
 * The available service actions:
 * @action updatePassword Update admin user password and email.
 * @action resetPassword Reset admin user password and send it to the users email address.
 * @action login Get an admin session using admin email and password (Used for login to the KMC application).
 * @action setInitialPassword Set initial users password.
 */
function KalturaAdminUserService(client){
	KalturaAdminUserService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAdminUserService, kaltura.KalturaServiceBase);
module.exports.KalturaAdminUserService = KalturaAdminUserService;

/**
 * Update admin user password and email.
 * @param email string  (optional).
 * @param password string  (optional).
 * @param newEmail string Optional, provide only when you want to update the email (optional).
 * @param newPassword string  (optional).
 * @return KalturaAdminUser.
 */
KalturaAdminUserService.prototype.updatePassword = function(callback, email, password, newEmail, newPassword){
	if(!newEmail){
		newEmail = '';
	}
	if(!newPassword){
		newPassword = '';
	}
	var kparams = {};
	this.client.addParam(kparams, 'email', email);
	this.client.addParam(kparams, 'password', password);
	this.client.addParam(kparams, 'newEmail', newEmail);
	this.client.addParam(kparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('adminuser', 'updatePassword', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reset admin user password and send it to the users email address.
 * @param email string  (optional).
 * @return .
 */
KalturaAdminUserService.prototype.resetPassword = function(callback, email){
	var kparams = {};
	this.client.addParam(kparams, 'email', email);
	this.client.queueServiceActionCall('adminuser', 'resetPassword', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get an admin session using admin email and password (Used for login to the KMC application).
 * @param email string  (optional).
 * @param password string  (optional).
 * @param partnerId int  (optional, default: null).
 * @return string.
 */
KalturaAdminUserService.prototype.login = function(callback, email, password, partnerId){
	if(!partnerId){
		partnerId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'email', email);
	this.client.addParam(kparams, 'password', password);
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.queueServiceActionCall('adminuser', 'login', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set initial users password.
 * @param hashKey string  (optional).
 * @param newPassword string new password to set (optional).
 * @return .
 */
KalturaAdminUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var kparams = {};
	this.client.addParam(kparams, 'hashKey', hashKey);
	this.client.addParam(kparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('adminuser', 'setInitialPassword', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: appToken.
 * The available service actions:
 * @action add Add new application authentication token.
 * @action get Get application authentication token by id.
 * @action update Update application authentication token by id.
 * @action delete Delete application authentication token by id.
 * @action list List application authentication tokens by filter and pager.
 * @action startSession Starts a new KS (kaltura Session) based on application authentication token id.
 */
function KalturaAppTokenService(client){
	KalturaAppTokenService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAppTokenService, kaltura.KalturaServiceBase);
module.exports.KalturaAppTokenService = KalturaAppTokenService;

/**
 * Add new application authentication token.
 * @param appToken KalturaAppToken  (optional).
 * @return KalturaAppToken.
 */
KalturaAppTokenService.prototype.add = function(callback, appToken){
	var kparams = {};
	this.client.addParam(kparams, 'appToken', kaltura.toParams(appToken));
	this.client.queueServiceActionCall('apptoken', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get application authentication token by id.
 * @param id string  (optional).
 * @return KalturaAppToken.
 */
KalturaAppTokenService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('apptoken', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update application authentication token by id.
 * @param id string  (optional).
 * @param appToken KalturaAppToken  (optional).
 * @return KalturaAppToken.
 */
KalturaAppTokenService.prototype.update = function(callback, id, appToken){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'appToken', kaltura.toParams(appToken));
	this.client.queueServiceActionCall('apptoken', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete application authentication token by id.
 * @param id string  (optional).
 * @return .
 */
KalturaAppTokenService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('apptoken', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List application authentication tokens by filter and pager.
 * @param filter KalturaAppTokenFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaAppTokenListResponse.
 */
KalturaAppTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('apptoken', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Starts a new KS (kaltura Session) based on application authentication token id.
 * @param id string application token id (optional).
 * @param tokenHash string hashed token, built of sha1 on current KS concatenated with the application token (optional).
 * @param userId string session user id, will be ignored if a different user id already defined on the application token (optional, default: null).
 * @param type int session type, will be ignored if a different session type already defined on the application token (optional, enum: KalturaSessionType, default: null).
 * @param expiry int session expiry (in seconds), could be overwritten by shorter expiry of the application token and the session-expiry that defined on the application token (optional, default: null).
 * @return KalturaSessionInfo.
 */
KalturaAppTokenService.prototype.startSession = function(callback, id, tokenHash, userId, type, expiry){
	if(!userId){
		userId = null;
	}
	if(!type){
		type = null;
	}
	if(!expiry){
		expiry = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'tokenHash', tokenHash);
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'type', type);
	this.client.addParam(kparams, 'expiry', expiry);
	this.client.queueServiceActionCall('apptoken', 'startSession', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: baseEntry.
 * The available service actions:
 * @action add Generic add entry, should be used when the uploaded entry type is not known.
 * @action addContent Attach content resource to entry in status NO_MEDIA.
 * @action addFromUploadedFile Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @action get Get base entry by ID.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action update Update base entry. Only the properties that were set will be updated.
 * @action updateContent Update the content resource associated with the entry.
 * @action getByIds Get an array of KalturaBaseEntry objects by a comma-separated list of ids.
 * @action delete Delete an entry.
 * @action list List base entries by filter with paging support.
 * @action listByReferenceId List base entries by filter according to reference id.
 * @action count Count base entries by filter.
 * @action upload Upload a file to Kaltura, that can be used to create an entry.
 * @action updateThumbnailJpeg Update entry thumbnail using a raw jpeg file.
 * @action updateThumbnailFromUrl Update entry thumbnail using url.
 * @action updateThumbnailFromSourceEntry Update entry thumbnail from a different entry by a specified time offset (in seconds).
 * @action flag Flag inappropriate entry for moderation.
 * @action reject Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable).
 * @action approve Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @action listFlags List all pending flags for the entry.
 * @action anonymousRank Anonymously rank an entry, no validation is done on duplicate rankings.
 * @action getContextData This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information.
 * @action export .
 * @action index Index an entry by id.
 * @action clone Clone an entry with optional attributes to apply to the clone.
 */
function KalturaBaseEntryService(client){
	KalturaBaseEntryService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaBaseEntryService, kaltura.KalturaServiceBase);
module.exports.KalturaBaseEntryService = KalturaBaseEntryService;

/**
 * Generic add entry, should be used when the uploaded entry type is not known.
 * @param entry KalturaBaseEntry  (optional).
 * @param type string  (optional, enum: KalturaEntryType, default: null).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.add = function(callback, entry, type){
	if(!type){
		type = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entry', kaltura.toParams(entry));
	this.client.addParam(kparams, 'type', type);
	this.client.queueServiceActionCall('baseentry', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Attach content resource to entry in status NO_MEDIA.
 * @param entryId string  (optional).
 * @param resource KalturaResource  (optional).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addContent = function(callback, entryId, resource){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	this.client.queueServiceActionCall('baseentry', 'addContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @param entry KalturaBaseEntry  (optional).
 * @param uploadTokenId string  (optional).
 * @param type string  (optional, enum: KalturaEntryType, default: null).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addFromUploadedFile = function(callback, entry, uploadTokenId, type){
	if(!type){
		type = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entry', kaltura.toParams(entry));
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	this.client.addParam(kparams, 'type', type);
	this.client.queueServiceActionCall('baseentry', 'addFromUploadedFile', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get base entry by ID.
 * @param entryId string Entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('baseentry', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param entryId string  (optional).
 * @return KalturaRemotePathListResponse.
 */
KalturaBaseEntryService.prototype.getRemotePaths = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'getRemotePaths', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update base entry. Only the properties that were set will be updated.
 * @param entryId string Entry id to update (optional).
 * @param baseEntry KalturaBaseEntry Base entry metadata to update (optional).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.update = function(callback, entryId, baseEntry){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'baseEntry', kaltura.toParams(baseEntry));
	this.client.queueServiceActionCall('baseentry', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update the content resource associated with the entry.
 * @param entryId string Entry id to update (optional).
 * @param resource KalturaResource Resource to be used to replace entry content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @param advancedOptions KalturaEntryReplacementOptions Additional update content options (optional, default: null).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId, advancedOptions){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!advancedOptions){
		advancedOptions = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	if (advancedOptions !== null){
		this.client.addParam(kparams, 'advancedOptions', kaltura.toParams(advancedOptions));
	}
	this.client.queueServiceActionCall('baseentry', 'updateContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get an array of KalturaBaseEntry objects by a comma-separated list of ids.
 * @param entryIds string Comma separated string of entry ids (optional).
 * @return array.
 */
KalturaBaseEntryService.prototype.getByIds = function(callback, entryIds){
	var kparams = {};
	this.client.addParam(kparams, 'entryIds', entryIds);
	this.client.queueServiceActionCall('baseentry', 'getByIds', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an entry.
 * @param entryId string Entry id to delete (optional).
 * @return .
 */
KalturaBaseEntryService.prototype.deleteAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List base entries by filter with paging support.
 * @param filter KalturaBaseEntryFilter Entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaBaseEntryListResponse.
 */
KalturaBaseEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('baseentry', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List base entries by filter according to reference id.
 * @param refId string Entry Reference ID (optional).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaBaseEntryListResponse.
 */
KalturaBaseEntryService.prototype.listByReferenceId = function(callback, refId, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'refId', refId);
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('baseentry', 'listByReferenceId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count base entries by filter.
 * @param filter KalturaBaseEntryFilter Entry filter (optional, default: null).
 * @return int.
 */
KalturaBaseEntryService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.queueServiceActionCall('baseentry', 'count', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a file to Kaltura, that can be used to create an entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
KalturaBaseEntryService.prototype.upload = function(callback, fileData){
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('baseentry', 'upload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using a raw jpeg file.
 * @param entryId string Media entry id (optional).
 * @param fileData file Jpeg file data (optional).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('baseentry', 'updateThumbnailJpeg', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using url.
 * @param entryId string Media entry id (optional).
 * @param url string file url (optional).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('baseentry', 'updateThumbnailFromUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail from a different entry by a specified time offset (in seconds).
 * @param entryId string Media entry id (optional).
 * @param sourceEntryId string Media entry id (optional).
 * @param timeOffset int Time offset (in seconds) (optional).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'sourceEntryId', sourceEntryId);
	this.client.addParam(kparams, 'timeOffset', timeOffset);
	this.client.queueServiceActionCall('baseentry', 'updateThumbnailFromSourceEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Flag inappropriate entry for moderation.
 * @param moderationFlag KalturaModerationFlag  (optional).
 * @return .
 */
KalturaBaseEntryService.prototype.flag = function(callback, moderationFlag){
	var kparams = {};
	this.client.addParam(kparams, 'moderationFlag', kaltura.toParams(moderationFlag));
	this.client.queueServiceActionCall('baseentry', 'flag', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable).
 * @param entryId string  (optional).
 * @return .
 */
KalturaBaseEntryService.prototype.reject = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'reject', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @param entryId string  (optional).
 * @return .
 */
KalturaBaseEntryService.prototype.approve = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'approve', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all pending flags for the entry.
 * @param entryId string  (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaModerationFlagListResponse.
 */
KalturaBaseEntryService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('baseentry', 'listFlags', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Anonymously rank an entry, no validation is done on duplicate rankings.
 * @param entryId string  (optional).
 * @param rank int  (optional).
 * @return .
 */
KalturaBaseEntryService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'rank', rank);
	this.client.queueServiceActionCall('baseentry', 'anonymousRank', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information.
 * @param entryId string  (optional).
 * @param contextDataParams KalturaEntryContextDataParams  (optional).
 * @return KalturaEntryContextDataResult.
 */
KalturaBaseEntryService.prototype.getContextData = function(callback, entryId, contextDataParams){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'contextDataParams', kaltura.toParams(contextDataParams));
	this.client.queueServiceActionCall('baseentry', 'getContextData', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param storageProfileId int  (optional).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.exportAction = function(callback, entryId, storageProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'storageProfileId', storageProfileId);
	this.client.queueServiceActionCall('baseentry', 'export', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index an entry by id.
 * @param id string  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
KalturaBaseEntryService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('baseentry', 'index', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an entry with optional attributes to apply to the clone.
 * @param entryId string Id of entry to clone (optional).
 * @param cloneOptions array  (optional, default: null).
 * @return KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.cloneAction = function(callback, entryId, cloneOptions){
	if(!cloneOptions){
		cloneOptions = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	if(cloneOptions !== null){
	for(var index in cloneOptions)
	{
		var obj = cloneOptions[index];
		this.client.addParam(kparams, 'cloneOptions:' + index, kaltura.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('baseentry', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action add Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @action get Get bulk upload batch job by id.
 * @action list List bulk upload batch jobs.
 * @action abort Aborts the bulk upload and all its child jobs.
 */
function KalturaBulkUploadService(client){
	KalturaBulkUploadService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaBulkUploadService, kaltura.KalturaServiceBase);
module.exports.KalturaBulkUploadService = KalturaBulkUploadService;

/**
 * Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @param conversionProfileId int Convertion profile id to use for converting the current bulk (-1 to use partner's default) (optional).
 * @param csvFileData file bulk upload file (optional).
 * @param bulkUploadType string  (optional, enum: KalturaBulkUploadType, default: null).
 * @param uploadedBy string  (optional, default: null).
 * @param fileName string Friendly name of the file, used to be recognized later in the logs (optional, default: null).
 * @return KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.add = function(callback, conversionProfileId, csvFileData, bulkUploadType, uploadedBy, fileName){
	if(!bulkUploadType){
		bulkUploadType = null;
	}
	if(!uploadedBy){
		uploadedBy = null;
	}
	if(!fileName){
		fileName = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	var kfiles = {};
	this.client.addParam(kfiles, 'csvFileData', csvFileData);
	this.client.addParam(kparams, 'bulkUploadType', bulkUploadType);
	this.client.addParam(kparams, 'uploadedBy', uploadedBy);
	this.client.addParam(kparams, 'fileName', fileName);
	this.client.queueServiceActionCall('bulkupload', 'add', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get bulk upload batch job by id.
 * @param id int  (optional).
 * @return KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List bulk upload batch jobs.
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaBulkUploadListResponse.
 */
KalturaBulkUploadService.prototype.listAction = function(callback, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('bulkupload', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Aborts the bulk upload and all its child jobs.
 * @param id int job id (optional).
 * @return KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.abort = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload', 'abort', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: categoryEntry.
 * The available service actions:
 * @action add Add new CategoryEntry.
 * @action delete Delete CategoryEntry.
 * @action list List all categoryEntry.
 * @action index Index CategoryEntry by Id.
 * @action activate activate CategoryEntry when it is pending moderation.
 * @action reject activate CategoryEntry when it is pending moderation.
 * @action syncPrivacyContext update privacy context from the category.
 * @action addFromBulkUpload .
 */
function KalturaCategoryEntryService(client){
	KalturaCategoryEntryService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaCategoryEntryService, kaltura.KalturaServiceBase);
module.exports.KalturaCategoryEntryService = KalturaCategoryEntryService;

/**
 * Add new CategoryEntry.
 * @param categoryEntry KalturaCategoryEntry  (optional).
 * @return KalturaCategoryEntry.
 */
KalturaCategoryEntryService.prototype.add = function(callback, categoryEntry){
	var kparams = {};
	this.client.addParam(kparams, 'categoryEntry', kaltura.toParams(categoryEntry));
	this.client.queueServiceActionCall('categoryentry', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete CategoryEntry.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
KalturaCategoryEntryService.prototype.deleteAction = function(callback, entryId, categoryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all categoryEntry.
 * @param filter KalturaCategoryEntryFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaCategoryEntryListResponse.
 */
KalturaCategoryEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('categoryentry', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index CategoryEntry by Id.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
KalturaCategoryEntryService.prototype.index = function(callback, entryId, categoryId, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('categoryentry', 'index', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * activate CategoryEntry when it is pending moderation.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
KalturaCategoryEntryService.prototype.activate = function(callback, entryId, categoryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'activate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * activate CategoryEntry when it is pending moderation.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
KalturaCategoryEntryService.prototype.reject = function(callback, entryId, categoryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'reject', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * update privacy context from the category.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
KalturaCategoryEntryService.prototype.syncPrivacyContext = function(callback, entryId, categoryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'syncPrivacyContext', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param bulkUploadData KalturaBulkServiceData  (optional).
 * @param bulkUploadCategoryEntryData KalturaBulkUploadCategoryEntryData  (optional, default: null).
 * @return KalturaBulkUpload.
 */
KalturaCategoryEntryService.prototype.addFromBulkUpload = function(callback, bulkUploadData, bulkUploadCategoryEntryData){
	if(!bulkUploadCategoryEntryData){
		bulkUploadCategoryEntryData = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'bulkUploadData', kaltura.toParams(bulkUploadData));
	if (bulkUploadCategoryEntryData !== null){
		this.client.addParam(kparams, 'bulkUploadCategoryEntryData', kaltura.toParams(bulkUploadCategoryEntryData));
	}
	this.client.queueServiceActionCall('categoryentry', 'addFromBulkUpload', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: category.
 * The available service actions:
 * @action add Add new Category.
 * @action get Get Category by id.
 * @action update Update Category.
 * @action delete Delete a Category.
 * @action list List all categories.
 * @action index Index Category by id.
 * @action move Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement.
 * @action unlockCategories Unlock categories.
 * @action addFromBulkUpload .
 */
function KalturaCategoryService(client){
	KalturaCategoryService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaCategoryService, kaltura.KalturaServiceBase);
module.exports.KalturaCategoryService = KalturaCategoryService;

/**
 * Add new Category.
 * @param category KalturaCategory  (optional).
 * @return KalturaCategory.
 */
KalturaCategoryService.prototype.add = function(callback, category){
	var kparams = {};
	this.client.addParam(kparams, 'category', kaltura.toParams(category));
	this.client.queueServiceActionCall('category', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Category by id.
 * @param id int  (optional).
 * @return KalturaCategory.
 */
KalturaCategoryService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('category', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Category.
 * @param id int  (optional).
 * @param category KalturaCategory  (optional).
 * @return KalturaCategory.
 */
KalturaCategoryService.prototype.update = function(callback, id, category){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'category', kaltura.toParams(category));
	this.client.queueServiceActionCall('category', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a Category.
 * @param id int  (optional).
 * @param moveEntriesToParentCategory int  (optional, enum: KalturaNullableBoolean, default: 1).
 * @return .
 */
KalturaCategoryService.prototype.deleteAction = function(callback, id, moveEntriesToParentCategory){
	if(!moveEntriesToParentCategory){
		moveEntriesToParentCategory = 1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'moveEntriesToParentCategory', moveEntriesToParentCategory);
	this.client.queueServiceActionCall('category', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all categories.
 * @param filter KalturaCategoryFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaCategoryListResponse.
 */
KalturaCategoryService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('category', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index Category by id.
 * @param id int  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
KalturaCategoryService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('category', 'index', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement.
 * @param categoryIds string  (optional).
 * @param targetCategoryParentId int  (optional).
 * @return KalturaCategoryListResponse.
 */
KalturaCategoryService.prototype.move = function(callback, categoryIds, targetCategoryParentId){
	var kparams = {};
	this.client.addParam(kparams, 'categoryIds', categoryIds);
	this.client.addParam(kparams, 'targetCategoryParentId', targetCategoryParentId);
	this.client.queueServiceActionCall('category', 'move', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Unlock categories.
 * @return .
 */
KalturaCategoryService.prototype.unlockCategories = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('category', 'unlockCategories', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileData file  (optional).
 * @param bulkUploadData KalturaBulkUploadJobData  (optional, default: null).
 * @param bulkUploadCategoryData KalturaBulkUploadCategoryData  (optional, default: null).
 * @return KalturaBulkUpload.
 */
KalturaCategoryService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadCategoryData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadCategoryData){
		bulkUploadCategoryData = null;
	}
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(kparams, 'bulkUploadData', kaltura.toParams(bulkUploadData));
	}
	if (bulkUploadCategoryData !== null){
		this.client.addParam(kparams, 'bulkUploadCategoryData', kaltura.toParams(bulkUploadCategoryData));
	}
	this.client.queueServiceActionCall('category', 'addFromBulkUpload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: categoryUser.
 * The available service actions:
 * @action add Add new CategoryUser.
 * @action get Get CategoryUser by id.
 * @action update Update CategoryUser by id.
 * @action delete Delete a CategoryUser.
 * @action activate activate CategoryUser.
 * @action deactivate reject CategoryUser.
 * @action list List all categories.
 * @action copyFromCategory Copy all memeber from parent category.
 * @action index Index CategoryUser by userid and category id.
 * @action addFromBulkUpload .
 */
function KalturaCategoryUserService(client){
	KalturaCategoryUserService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaCategoryUserService, kaltura.KalturaServiceBase);
module.exports.KalturaCategoryUserService = KalturaCategoryUserService;

/**
 * Add new CategoryUser.
 * @param categoryUser KalturaCategoryUser  (optional).
 * @return KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.add = function(callback, categoryUser){
	var kparams = {};
	this.client.addParam(kparams, 'categoryUser', kaltura.toParams(categoryUser));
	this.client.queueServiceActionCall('categoryuser', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get CategoryUser by id.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.get = function(callback, categoryId, userId){
	var kparams = {};
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update CategoryUser by id.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @param categoryUser KalturaCategoryUser  (optional).
 * @param override bool - to override manual changes (optional, default: false).
 * @return KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.update = function(callback, categoryId, userId, categoryUser, override){
	if(!override){
		override = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'categoryUser', kaltura.toParams(categoryUser));
	this.client.addParam(kparams, 'override', override);
	this.client.queueServiceActionCall('categoryuser', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a CategoryUser.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return .
 */
KalturaCategoryUserService.prototype.deleteAction = function(callback, categoryId, userId){
	var kparams = {};
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * activate CategoryUser.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.activate = function(callback, categoryId, userId){
	var kparams = {};
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'activate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * reject CategoryUser.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.deactivate = function(callback, categoryId, userId){
	var kparams = {};
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'deactivate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all categories.
 * @param filter KalturaCategoryUserFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaCategoryUserListResponse.
 */
KalturaCategoryUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('categoryuser', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy all memeber from parent category.
 * @param categoryId int  (optional).
 * @return .
 */
KalturaCategoryUserService.prototype.copyFromCategory = function(callback, categoryId){
	var kparams = {};
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryuser', 'copyFromCategory', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index CategoryUser by userid and category id.
 * @param userId string  (optional).
 * @param categoryId int  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
KalturaCategoryUserService.prototype.index = function(callback, userId, categoryId, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('categoryuser', 'index', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileData file  (optional).
 * @param bulkUploadData KalturaBulkUploadJobData  (optional, default: null).
 * @param bulkUploadCategoryUserData KalturaBulkUploadCategoryUserData  (optional, default: null).
 * @return KalturaBulkUpload.
 */
KalturaCategoryUserService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadCategoryUserData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadCategoryUserData){
		bulkUploadCategoryUserData = null;
	}
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(kparams, 'bulkUploadData', kaltura.toParams(bulkUploadData));
	}
	if (bulkUploadCategoryUserData !== null){
		this.client.addParam(kparams, 'bulkUploadCategoryUserData', kaltura.toParams(bulkUploadCategoryUserData));
	}
	this.client.queueServiceActionCall('categoryuser', 'addFromBulkUpload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 * The available service actions:
 * @action list Lists asset parmas of conversion profile by ID.
 * @action update Update asset parmas of conversion profile by ID.
 */
function KalturaConversionProfileAssetParamsService(client){
	KalturaConversionProfileAssetParamsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaConversionProfileAssetParamsService, kaltura.KalturaServiceBase);
module.exports.KalturaConversionProfileAssetParamsService = KalturaConversionProfileAssetParamsService;

/**
 * Lists asset parmas of conversion profile by ID.
 * @param filter KalturaConversionProfileAssetParamsFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaConversionProfileAssetParamsListResponse.
 */
KalturaConversionProfileAssetParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('conversionprofileassetparams', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update asset parmas of conversion profile by ID.
 * @param conversionProfileId int  (optional).
 * @param assetParamsId int  (optional).
 * @param conversionProfileAssetParams KalturaConversionProfileAssetParams  (optional).
 * @return KalturaConversionProfileAssetParams.
 */
KalturaConversionProfileAssetParamsService.prototype.update = function(callback, conversionProfileId, assetParamsId, conversionProfileAssetParams){
	var kparams = {};
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	this.client.addParam(kparams, 'assetParamsId', assetParamsId);
	this.client.addParam(kparams, 'conversionProfileAssetParams', kaltura.toParams(conversionProfileAssetParams));
	this.client.queueServiceActionCall('conversionprofileassetparams', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: conversionProfile.
 * The available service actions:
 * @action setAsDefault Set Conversion Profile to be the partner default.
 * @action getDefault Get the partner's default conversion profile.
 * @action add Add new Conversion Profile.
 * @action get Get Conversion Profile by ID.
 * @action update Update Conversion Profile by ID.
 * @action delete Delete Conversion Profile by ID.
 * @action list List Conversion Profiles by filter with paging support.
 */
function KalturaConversionProfileService(client){
	KalturaConversionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaConversionProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaConversionProfileService = KalturaConversionProfileService;

/**
 * Set Conversion Profile to be the partner default.
 * @param id int  (optional).
 * @return KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.setAsDefault = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('conversionprofile', 'setAsDefault', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get the partner's default conversion profile.
 * @param type string  (optional, enum: KalturaConversionProfileType, default: null).
 * @return KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.getDefault = function(callback, type){
	if(!type){
		type = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'type', type);
	this.client.queueServiceActionCall('conversionprofile', 'getDefault', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new Conversion Profile.
 * @param conversionProfile KalturaConversionProfile  (optional).
 * @return KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.add = function(callback, conversionProfile){
	var kparams = {};
	this.client.addParam(kparams, 'conversionProfile', kaltura.toParams(conversionProfile));
	this.client.queueServiceActionCall('conversionprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Conversion Profile by ID.
 * @param id int  (optional).
 * @return KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('conversionprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Conversion Profile by ID.
 * @param id int  (optional).
 * @param conversionProfile KalturaConversionProfile  (optional).
 * @return KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.update = function(callback, id, conversionProfile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'conversionProfile', kaltura.toParams(conversionProfile));
	this.client.queueServiceActionCall('conversionprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Conversion Profile by ID.
 * @param id int  (optional).
 * @return .
 */
KalturaConversionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('conversionprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Conversion Profiles by filter with paging support.
 * @param filter KalturaConversionProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaConversionProfileListResponse.
 */
KalturaConversionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('conversionprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: data.
 * The available service actions:
 * @action add Adds a new data entry.
 * @action get Get data entry by ID.
 * @action update Update data entry. Only the properties that were set will be updated.
 * @action delete Delete a data entry.
 * @action list List data entries by filter with paging support.
 */
function KalturaDataService(client){
	KalturaDataService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDataService, kaltura.KalturaServiceBase);
module.exports.KalturaDataService = KalturaDataService;

/**
 * Adds a new data entry.
 * @param dataEntry KalturaDataEntry Data entry (optional).
 * @return KalturaDataEntry.
 */
KalturaDataService.prototype.add = function(callback, dataEntry){
	var kparams = {};
	this.client.addParam(kparams, 'dataEntry', kaltura.toParams(dataEntry));
	this.client.queueServiceActionCall('data', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get data entry by ID.
 * @param entryId string Data entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaDataEntry.
 */
KalturaDataService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('data', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update data entry. Only the properties that were set will be updated.
 * @param entryId string Data entry id to update (optional).
 * @param documentEntry KalturaDataEntry Data entry metadata to update (optional).
 * @return KalturaDataEntry.
 */
KalturaDataService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	this.client.queueServiceActionCall('data', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a data entry.
 * @param entryId string Data entry id to delete (optional).
 * @return .
 */
KalturaDataService.prototype.deleteAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('data', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List data entries by filter with paging support.
 * @param filter KalturaDataEntryFilter Document entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaDataListResponse.
 */
KalturaDataService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('data', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: deliveryProfile.
 * The available service actions:
 * @action add Add new delivery.
 * @action update Update exisiting delivery.
 * @action get Get delivery by id.
 * @action clone Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId.
 * @action list Retrieve a list of available delivery depends on the filter given.
 */
function KalturaDeliveryProfileService(client){
	KalturaDeliveryProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDeliveryProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaDeliveryProfileService = KalturaDeliveryProfileService;

/**
 * Add new delivery.
 * @param delivery KalturaDeliveryProfile  (optional).
 * @return KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.add = function(callback, delivery){
	var kparams = {};
	this.client.addParam(kparams, 'delivery', kaltura.toParams(delivery));
	this.client.queueServiceActionCall('deliveryprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisiting delivery.
 * @param id string  (optional).
 * @param delivery KalturaDeliveryProfile  (optional).
 * @return KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.update = function(callback, id, delivery){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'delivery', kaltura.toParams(delivery));
	this.client.queueServiceActionCall('deliveryprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get delivery by id.
 * @param id string  (optional).
 * @return KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('deliveryprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId.
 * @param deliveryId int  (optional).
 * @return KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.cloneAction = function(callback, deliveryId){
	var kparams = {};
	this.client.addParam(kparams, 'deliveryId', deliveryId);
	this.client.queueServiceActionCall('deliveryprofile', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available delivery depends on the filter given.
 * @param filter KalturaDeliveryProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDeliveryProfileListResponse.
 */
KalturaDeliveryProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('deliveryprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: document.
 * The available service actions:
 * @action addFromUploadedFile Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action convert Convert entry.
 * @action get Get document entry by ID.
 * @action update Update document entry. Only the properties that were set will be updated.
 * @action delete Delete a document entry.
 * @action list List document entries by filter with paging support.
 * @action upload Upload a document file to Kaltura, then the file can be used to create a document entry.
 * @action convertPptToSwf This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @action updateContent Replace content associated with the given document entry.
 * @action approveReplace Approves document replacement.
 * @action cancelReplace Cancels document replacement.
 */
function KalturaDocumentService(client){
	KalturaDocumentService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDocumentService, kaltura.KalturaServiceBase);
module.exports.KalturaDocumentService = KalturaDocumentService;

/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @param documentEntry KalturaDocumentEntry Document entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var kparams = {};
	this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('document', 'addFromUploadedFile', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy entry into new entry.
 * @param sourceEntryId string Document entry id to copy from (optional).
 * @param documentEntry KalturaDocumentEntry Document entry metadata (optional, default: null).
 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry){
		documentEntry = null;
	}
	if(!sourceFlavorParamsId){
		sourceFlavorParamsId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'sourceEntryId', sourceEntryId);
	if (documentEntry !== null){
		this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	}
	this.client.addParam(kparams, 'sourceFlavorParamsId', sourceFlavorParamsId);
	this.client.queueServiceActionCall('document', 'addFromEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy flavor asset into new entry.
 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source (optional).
 * @param documentEntry KalturaDocumentEntry Document entry metadata (optional, default: null).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry){
		documentEntry = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'sourceFlavorAssetId', sourceFlavorAssetId);
	if (documentEntry !== null){
		this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	}
	this.client.queueServiceActionCall('document', 'addFromFlavorAsset', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Convert entry.
 * @param entryId string Document entry id (optional).
 * @param conversionProfileId int  (optional, default: null).
 * @param dynamicConversionAttributes array  (optional, default: null).
 * @return bigint.
 */
KalturaDocumentService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!dynamicConversionAttributes){
		dynamicConversionAttributes = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	if(dynamicConversionAttributes !== null){
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, 'dynamicConversionAttributes:' + index, kaltura.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('document', 'convert', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get document entry by ID.
 * @param entryId string Document entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('document', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update document entry. Only the properties that were set will be updated.
 * @param entryId string Document entry id to update (optional).
 * @param documentEntry KalturaDocumentEntry Document entry metadata to update (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	this.client.queueServiceActionCall('document', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a document entry.
 * @param entryId string Document entry id to delete (optional).
 * @return .
 */
KalturaDocumentService.prototype.deleteAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List document entries by filter with paging support.
 * @param filter KalturaDocumentEntryFilter Document entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaDocumentListResponse.
 */
KalturaDocumentService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('document', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
KalturaDocumentService.prototype.upload = function(callback, fileData){
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('document', 'upload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @param entryId string  (optional).
 * @return string.
 */
KalturaDocumentService.prototype.convertPptToSwf = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'convertPptToSwf', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Replace content associated with the given document entry.
 * @param entryId string document entry id to update (optional).
 * @param resource KalturaResource Resource to be used to replace entry doc content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('document', 'updateContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approves document replacement.
 * @param entryId string document entry id to replace (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.approveReplace = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'approveReplace', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Cancels document replacement.
 * @param entryId string Document entry id to cancel (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.cancelReplace = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'cancelReplace', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 * The available service actions:
 * @action add EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @action getByEmailAddress Retrieve a EmailIngestionProfile by email address.
 * @action get Retrieve a EmailIngestionProfile by id.
 * @action update Update an existing EmailIngestionProfile.
 * @action delete Delete an existing EmailIngestionProfile.
 * @action addMediaEntry add KalturaMediaEntry from email ingestion.
 */
function KalturaEmailIngestionProfileService(client){
	KalturaEmailIngestionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaEmailIngestionProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaEmailIngestionProfileService = KalturaEmailIngestionProfileService;

/**
 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @param EmailIP KalturaEmailIngestionProfile Mandatory input parameter of type KalturaEmailIngestionProfile (optional).
 * @return KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.add = function(callback, EmailIP){
	var kparams = {};
	this.client.addParam(kparams, 'EmailIP', kaltura.toParams(EmailIP));
	this.client.queueServiceActionCall('emailingestionprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a EmailIngestionProfile by email address.
 * @param emailAddress string  (optional).
 * @return KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.getByEmailAddress = function(callback, emailAddress){
	var kparams = {};
	this.client.addParam(kparams, 'emailAddress', emailAddress);
	this.client.queueServiceActionCall('emailingestionprofile', 'getByEmailAddress', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a EmailIngestionProfile by id.
 * @param id int  (optional).
 * @return KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('emailingestionprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing EmailIngestionProfile.
 * @param id int  (optional).
 * @param EmailIP KalturaEmailIngestionProfile  (optional).
 * @return KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.update = function(callback, id, EmailIP){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'EmailIP', kaltura.toParams(EmailIP));
	this.client.queueServiceActionCall('emailingestionprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing EmailIngestionProfile.
 * @param id int  (optional).
 * @return .
 */
KalturaEmailIngestionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('emailingestionprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * add KalturaMediaEntry from email ingestion.
 * @param mediaEntry KalturaMediaEntry Media entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @param emailProfId int  (optional).
 * @param fromAddress string  (optional).
 * @param emailMsgId string  (optional).
 * @return KalturaMediaEntry.
 */
KalturaEmailIngestionProfileService.prototype.addMediaEntry = function(callback, mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
	var kparams = {};
	this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	this.client.addParam(kparams, 'emailProfId', emailProfId);
	this.client.addParam(kparams, 'fromAddress', fromAddress);
	this.client.addParam(kparams, 'emailMsgId', emailMsgId);
	this.client.queueServiceActionCall('emailingestionprofile', 'addMediaEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: entryServerNode.
 * The available service actions:
 * @action list .
 * @action get .
 */
function KalturaEntryServerNodeService(client){
	KalturaEntryServerNodeService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaEntryServerNodeService, kaltura.KalturaServiceBase);
module.exports.KalturaEntryServerNodeService = KalturaEntryServerNodeService;

/**
 * .
 * @param filter KalturaEntryServerNodeFilter  (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaEntryServerNodeListResponse.
 */
KalturaEntryServerNodeService.prototype.listAction = function(callback, filter, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('entryservernode', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id string  (optional).
 * @return KalturaEntryServerNode.
 */
KalturaEntryServerNodeService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('entryservernode', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: fileAsset.
 * The available service actions:
 * @action add Add new file asset.
 * @action get Get file asset by id.
 * @action update Update file asset by id.
 * @action delete Delete file asset by id.
 * @action setContent Set content of file asset.
 * @action list List file assets by filter and pager.
 */
function KalturaFileAssetService(client){
	KalturaFileAssetService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaFileAssetService, kaltura.KalturaServiceBase);
module.exports.KalturaFileAssetService = KalturaFileAssetService;

/**
 * Add new file asset.
 * @param fileAsset KalturaFileAsset  (optional).
 * @return KalturaFileAsset.
 */
KalturaFileAssetService.prototype.add = function(callback, fileAsset){
	var kparams = {};
	this.client.addParam(kparams, 'fileAsset', kaltura.toParams(fileAsset));
	this.client.queueServiceActionCall('fileasset', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get file asset by id.
 * @param id int  (optional).
 * @return KalturaFileAsset.
 */
KalturaFileAssetService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('fileasset', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update file asset by id.
 * @param id int  (optional).
 * @param fileAsset KalturaFileAsset  (optional).
 * @return KalturaFileAsset.
 */
KalturaFileAssetService.prototype.update = function(callback, id, fileAsset){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'fileAsset', kaltura.toParams(fileAsset));
	this.client.queueServiceActionCall('fileasset', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete file asset by id.
 * @param id int  (optional).
 * @return .
 */
KalturaFileAssetService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('fileasset', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set content of file asset.
 * @param id string  (optional).
 * @param contentResource KalturaContentResource  (optional).
 * @return KalturaFileAsset.
 */
KalturaFileAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'contentResource', kaltura.toParams(contentResource));
	this.client.queueServiceActionCall('fileasset', 'setContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List file assets by filter and pager.
 * @param filter KalturaFileAssetFilter  (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaFileAssetListResponse.
 */
KalturaFileAssetService.prototype.listAction = function(callback, filter, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('fileasset', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: flavorAsset.
 * The available service actions:
 * @action add Add flavor asset.
 * @action update Update flavor asset.
 * @action setContent Update content of flavor asset.
 * @action get Get Flavor Asset by ID.
 * @action getByEntryId Get Flavor Assets for Entry.
 * @action list List Flavor Assets by filter and pager.
 * @action getWebPlayableByEntryId Get web playable Flavor Assets for Entry.
 * @action convert Add and convert new Flavor Asset for Entry with specific Flavor Params.
 * @action reconvert Reconvert Flavor Asset by ID.
 * @action delete Delete Flavor Asset by ID.
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action getDownloadUrl Get download URL for the Flavor Asset.
 * @action getFlavorAssetsWithParams Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
 * @action export manually export an asset.
 * @action setAsSource Set a given flavor as the original flavor.
 * @action deleteLocalContent delete all local file syncs for this asset.
 */
function KalturaFlavorAssetService(client){
	KalturaFlavorAssetService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaFlavorAssetService, kaltura.KalturaServiceBase);
module.exports.KalturaFlavorAssetService = KalturaFlavorAssetService;

/**
 * Add flavor asset.
 * @param entryId string  (optional).
 * @param flavorAsset KalturaFlavorAsset  (optional).
 * @return KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.add = function(callback, entryId, flavorAsset){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'flavorAsset', kaltura.toParams(flavorAsset));
	this.client.queueServiceActionCall('flavorasset', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update flavor asset.
 * @param id string  (optional).
 * @param flavorAsset KalturaFlavorAsset  (optional).
 * @return KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.update = function(callback, id, flavorAsset){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'flavorAsset', kaltura.toParams(flavorAsset));
	this.client.queueServiceActionCall('flavorasset', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of flavor asset.
 * @param id string  (optional).
 * @param contentResource KalturaContentResource  (optional).
 * @return KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'contentResource', kaltura.toParams(contentResource));
	this.client.queueServiceActionCall('flavorasset', 'setContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Asset by ID.
 * @param id string  (optional).
 * @return KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Assets for Entry.
 * @param entryId string  (optional).
 * @return array.
 */
KalturaFlavorAssetService.prototype.getByEntryId = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('flavorasset', 'getByEntryId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Flavor Assets by filter and pager.
 * @param filter KalturaAssetFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaFlavorAssetListResponse.
 */
KalturaFlavorAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('flavorasset', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get web playable Flavor Assets for Entry.
 * @param entryId string  (optional).
 * @return array.
 */
KalturaFlavorAssetService.prototype.getWebPlayableByEntryId = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('flavorasset', 'getWebPlayableByEntryId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add and convert new Flavor Asset for Entry with specific Flavor Params.
 * @param entryId string  (optional).
 * @param flavorParamsId int  (optional).
 * @param priority int  (optional).
 * @return .
 */
KalturaFlavorAssetService.prototype.convert = function(callback, entryId, flavorParamsId, priority){
	if(!priority){
		priority = 0;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'flavorParamsId', flavorParamsId);
	this.client.addParam(kparams, 'priority', priority);
	this.client.queueServiceActionCall('flavorasset', 'convert', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reconvert Flavor Asset by ID.
 * @param id string Flavor Asset ID (optional).
 * @return .
 */
KalturaFlavorAssetService.prototype.reconvert = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'reconvert', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Flavor Asset by ID.
 * @param id string  (optional).
 * @return .
 */
KalturaFlavorAssetService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @param forceProxy bool  (optional, default: false).
 * @param options KalturaFlavorAssetUrlOptions  (optional, default: null).
 * @return string.
 */
KalturaFlavorAssetService.prototype.getUrl = function(callback, id, storageId, forceProxy, options){
	if(!storageId){
		storageId = null;
	}
	if(!forceProxy){
		forceProxy = false;
	}
	if(!options){
		options = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'storageId', storageId);
	this.client.addParam(kparams, 'forceProxy', forceProxy);
	if (options !== null){
		this.client.addParam(kparams, 'options', kaltura.toParams(options));
	}
	this.client.queueServiceActionCall('flavorasset', 'getUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return KalturaRemotePathListResponse.
 */
KalturaFlavorAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'getRemotePaths', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the Flavor Asset.
 * @param id string  (optional).
 * @param useCdn bool  (optional, default: false).
 * @return string.
 */
KalturaFlavorAssetService.prototype.getDownloadUrl = function(callback, id, useCdn){
	if(!useCdn){
		useCdn = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'useCdn', useCdn);
	this.client.queueServiceActionCall('flavorasset', 'getDownloadUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
 * @param entryId string  (optional).
 * @return array.
 */
KalturaFlavorAssetService.prototype.getFlavorAssetsWithParams = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('flavorasset', 'getFlavorAssetsWithParams', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * manually export an asset.
 * @param assetId string  (optional).
 * @param storageProfileId int  (optional).
 * @return KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.exportAction = function(callback, assetId, storageProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'assetId', assetId);
	this.client.addParam(kparams, 'storageProfileId', storageProfileId);
	this.client.queueServiceActionCall('flavorasset', 'export', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set a given flavor as the original flavor.
 * @param assetId string  (optional).
 * @return .
 */
KalturaFlavorAssetService.prototype.setAsSource = function(callback, assetId){
	var kparams = {};
	this.client.addParam(kparams, 'assetId', assetId);
	this.client.queueServiceActionCall('flavorasset', 'setAsSource', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete all local file syncs for this asset.
 * @param assetId string  (optional).
 * @return .
 */
KalturaFlavorAssetService.prototype.deleteLocalContent = function(callback, assetId){
	var kparams = {};
	this.client.addParam(kparams, 'assetId', assetId);
	this.client.queueServiceActionCall('flavorasset', 'deleteLocalContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 * The available service actions:
 * @action get Get flavor params output object by ID.
 * @action list List flavor params output objects by filter and pager.
 */
function KalturaFlavorParamsOutputService(client){
	KalturaFlavorParamsOutputService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaFlavorParamsOutputService, kaltura.KalturaServiceBase);
module.exports.KalturaFlavorParamsOutputService = KalturaFlavorParamsOutputService;

/**
 * Get flavor params output object by ID.
 * @param id int  (optional).
 * @return KalturaFlavorParamsOutput.
 */
KalturaFlavorParamsOutputService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('flavorparamsoutput', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List flavor params output objects by filter and pager.
 * @param filter KalturaFlavorParamsOutputFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaFlavorParamsOutputListResponse.
 */
KalturaFlavorParamsOutputService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('flavorparamsoutput', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: flavorParams.
 * The available service actions:
 * @action add Add new Flavor Params.
 * @action get Get Flavor Params by ID.
 * @action update Update Flavor Params by ID.
 * @action delete Delete Flavor Params by ID.
 * @action list List Flavor Params by filter with paging support (By default - all system default params will be listed too).
 * @action getByConversionProfileId Get Flavor Params by Conversion Profile ID.
 */
function KalturaFlavorParamsService(client){
	KalturaFlavorParamsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaFlavorParamsService, kaltura.KalturaServiceBase);
module.exports.KalturaFlavorParamsService = KalturaFlavorParamsService;

/**
 * Add new Flavor Params.
 * @param flavorParams KalturaFlavorParams  (optional).
 * @return KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.add = function(callback, flavorParams){
	var kparams = {};
	this.client.addParam(kparams, 'flavorParams', kaltura.toParams(flavorParams));
	this.client.queueServiceActionCall('flavorparams', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Params by ID.
 * @param id int  (optional).
 * @return KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('flavorparams', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Flavor Params by ID.
 * @param id int  (optional).
 * @param flavorParams KalturaFlavorParams  (optional).
 * @return KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.update = function(callback, id, flavorParams){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'flavorParams', kaltura.toParams(flavorParams));
	this.client.queueServiceActionCall('flavorparams', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Flavor Params by ID.
 * @param id int  (optional).
 * @return .
 */
KalturaFlavorParamsService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('flavorparams', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Flavor Params by filter with paging support (By default - all system default params will be listed too).
 * @param filter KalturaFlavorParamsFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaFlavorParamsListResponse.
 */
KalturaFlavorParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('flavorparams', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Params by Conversion Profile ID.
 * @param conversionProfileId int  (optional).
 * @return array.
 */
KalturaFlavorParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('flavorparams', 'getByConversionProfileId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: groupUser.
 * The available service actions:
 * @action add Add new GroupUser.
 * @action delete delete by userId and groupId.
 * @action list List all GroupUsers.
 */
function KalturaGroupUserService(client){
	KalturaGroupUserService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaGroupUserService, kaltura.KalturaServiceBase);
module.exports.KalturaGroupUserService = KalturaGroupUserService;

/**
 * Add new GroupUser.
 * @param groupUser KalturaGroupUser  (optional).
 * @return KalturaGroupUser.
 */
KalturaGroupUserService.prototype.add = function(callback, groupUser){
	var kparams = {};
	this.client.addParam(kparams, 'groupUser', kaltura.toParams(groupUser));
	this.client.queueServiceActionCall('groupuser', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete by userId and groupId.
 * @param userId string  (optional).
 * @param groupId string  (optional).
 * @return .
 */
KalturaGroupUserService.prototype.deleteAction = function(callback, userId, groupId){
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'groupId', groupId);
	this.client.queueServiceActionCall('groupuser', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all GroupUsers.
 * @param filter KalturaGroupUserFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaGroupUserListResponse.
 */
KalturaGroupUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('groupuser', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: liveChannelSegment.
 * The available service actions:
 * @action add Add new live channel segment.
 * @action get Get live channel segment by id.
 * @action update Update live channel segment by id.
 * @action delete Delete live channel segment by id.
 * @action list List live channel segments by filter and pager.
 */
function KalturaLiveChannelSegmentService(client){
	KalturaLiveChannelSegmentService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaLiveChannelSegmentService, kaltura.KalturaServiceBase);
module.exports.KalturaLiveChannelSegmentService = KalturaLiveChannelSegmentService;

/**
 * Add new live channel segment.
 * @param liveChannelSegment KalturaLiveChannelSegment  (optional).
 * @return KalturaLiveChannelSegment.
 */
KalturaLiveChannelSegmentService.prototype.add = function(callback, liveChannelSegment){
	var kparams = {};
	this.client.addParam(kparams, 'liveChannelSegment', kaltura.toParams(liveChannelSegment));
	this.client.queueServiceActionCall('livechannelsegment', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get live channel segment by id.
 * @param id int  (optional).
 * @return KalturaLiveChannelSegment.
 */
KalturaLiveChannelSegmentService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('livechannelsegment', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live channel segment by id.
 * @param id int  (optional).
 * @param liveChannelSegment KalturaLiveChannelSegment  (optional).
 * @return KalturaLiveChannelSegment.
 */
KalturaLiveChannelSegmentService.prototype.update = function(callback, id, liveChannelSegment){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'liveChannelSegment', kaltura.toParams(liveChannelSegment));
	this.client.queueServiceActionCall('livechannelsegment', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete live channel segment by id.
 * @param id int  (optional).
 * @return .
 */
KalturaLiveChannelSegmentService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('livechannelsegment', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List live channel segments by filter and pager.
 * @param filter KalturaLiveChannelSegmentFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaLiveChannelSegmentListResponse.
 */
KalturaLiveChannelSegmentService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('livechannelsegment', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: liveChannel.
 * The available service actions:
 * @action add Adds new live channel.
 * @action get Get live channel by ID.
 * @action update Update live channel. Only the properties that were set will be updated.
 * @action delete Delete a live channel.
 * @action list List live channels by filter with paging support.
 * @action isLive Delivering the status of a live channel (on-air/offline).
 * @action appendRecording Append recorded video to live entry.
 * @action registerMediaServer Register media server to live entry.
 * @action unregisterMediaServer Unregister media server from live entry.
 * @action validateRegisteredMediaServers Validates all registered media servers.
 */
function KalturaLiveChannelService(client){
	KalturaLiveChannelService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaLiveChannelService, kaltura.KalturaServiceBase);
module.exports.KalturaLiveChannelService = KalturaLiveChannelService;

/**
 * Adds new live channel.
 * @param liveChannel KalturaLiveChannel Live channel metadata (optional).
 * @return KalturaLiveChannel.
 */
KalturaLiveChannelService.prototype.add = function(callback, liveChannel){
	var kparams = {};
	this.client.addParam(kparams, 'liveChannel', kaltura.toParams(liveChannel));
	this.client.queueServiceActionCall('livechannel', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get live channel by ID.
 * @param id string Live channel id (optional).
 * @return KalturaLiveChannel.
 */
KalturaLiveChannelService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('livechannel', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live channel. Only the properties that were set will be updated.
 * @param id string Live channel id to update (optional).
 * @param liveChannel KalturaLiveChannel Live channel metadata to update (optional).
 * @return KalturaLiveChannel.
 */
KalturaLiveChannelService.prototype.update = function(callback, id, liveChannel){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'liveChannel', kaltura.toParams(liveChannel));
	this.client.queueServiceActionCall('livechannel', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a live channel.
 * @param id string Live channel id to delete (optional).
 * @return .
 */
KalturaLiveChannelService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('livechannel', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List live channels by filter with paging support.
 * @param filter KalturaLiveChannelFilter live channel filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaLiveChannelListResponse.
 */
KalturaLiveChannelService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('livechannel', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delivering the status of a live channel (on-air/offline).
 * @param id string ID of the live channel (optional).
 * @return bool.
 */
KalturaLiveChannelService.prototype.isLive = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('livechannel', 'isLive', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Append recorded video to live entry.
 * @param entryId string Live entry id (optional).
 * @param assetId string Live asset id (optional).
 * @param mediaServerIndex string  (optional, enum: KalturaEntryServerNodeType).
 * @param resource KalturaDataCenterContentResource  (optional).
 * @param duration float in seconds (optional).
 * @param isLastChunk bool Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false).
 * @return KalturaLiveEntry.
 */
KalturaLiveChannelService.prototype.appendRecording = function(callback, entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
	if(!isLastChunk){
		isLastChunk = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'assetId', assetId);
	this.client.addParam(kparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	this.client.addParam(kparams, 'duration', duration);
	this.client.addParam(kparams, 'isLastChunk', isLastChunk);
	this.client.queueServiceActionCall('livechannel', 'appendRecording', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Register media server to live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @param applicationName string the application to which entry is being broadcast (optional, default: null).
 * @param liveEntryStatus int the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1).
 * @return KalturaLiveEntry.
 */
KalturaLiveChannelService.prototype.registerMediaServer = function(callback, entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus){
	if(!applicationName){
		applicationName = null;
	}
	if(!liveEntryStatus){
		liveEntryStatus = 1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'hostname', hostname);
	this.client.addParam(kparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(kparams, 'applicationName', applicationName);
	this.client.addParam(kparams, 'liveEntryStatus', liveEntryStatus);
	this.client.queueServiceActionCall('livechannel', 'registerMediaServer', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Unregister media server from live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @return KalturaLiveEntry.
 */
KalturaLiveChannelService.prototype.unregisterMediaServer = function(callback, entryId, hostname, mediaServerIndex){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'hostname', hostname);
	this.client.addParam(kparams, 'mediaServerIndex', mediaServerIndex);
	this.client.queueServiceActionCall('livechannel', 'unregisterMediaServer', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Validates all registered media servers.
 * @param entryId string Live entry id (optional).
 * @return .
 */
KalturaLiveChannelService.prototype.validateRegisteredMediaServers = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('livechannel', 'validateRegisteredMediaServers', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: liveReports.
 * The available service actions:
 * @action getEvents .
 * @action getReport .
 * @action exportToCsv .
 * @action serveReport Will serve a requested report.
 */
function KalturaLiveReportsService(client){
	KalturaLiveReportsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaLiveReportsService, kaltura.KalturaServiceBase);
module.exports.KalturaLiveReportsService = KalturaLiveReportsService;

/**
 * .
 * @param reportType string  (optional, enum: KalturaLiveReportType).
 * @param filter KalturaLiveReportInputFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return array.
 */
KalturaLiveReportsService.prototype.getEvents = function(callback, reportType, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'reportType', reportType);
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('livereports', 'getEvents', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param reportType string  (optional, enum: KalturaLiveReportType).
 * @param filter KalturaLiveReportInputFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaLiveStatsListResponse.
 */
KalturaLiveReportsService.prototype.getReport = function(callback, reportType, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'reportType', reportType);
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('livereports', 'getReport', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param reportType int  (optional, enum: KalturaLiveReportExportType).
 * @param params KalturaLiveReportExportParams  (optional).
 * @return KalturaLiveReportExportResponse.
 */
KalturaLiveReportsService.prototype.exportToCsv = function(callback, reportType, params){
	var kparams = {};
	this.client.addParam(kparams, 'reportType', reportType);
	this.client.addParam(kparams, 'params', kaltura.toParams(params));
	this.client.queueServiceActionCall('livereports', 'exportToCsv', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Will serve a requested report.
 * @param id string - the requested id (optional).
 * @return string.
 */
KalturaLiveReportsService.prototype.serveReport = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('livereports', 'serveReport', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: liveStats.
 * The available service actions:
 * @action collect Will write to the event log a single line representing the event
 * KalturaStatsEvent $event.
 */
function KalturaLiveStatsService(client){
	KalturaLiveStatsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaLiveStatsService, kaltura.KalturaServiceBase);
module.exports.KalturaLiveStatsService = KalturaLiveStatsService;

/**
 * Will write to the event log a single line representing the event
 * KalturaStatsEvent $event.
 * @param event KalturaLiveStatsEvent  (optional).
 * @return bool.
 */
KalturaLiveStatsService.prototype.collect = function(callback, event){
	var kparams = {};
	this.client.addParam(kparams, 'event', kaltura.toParams(event));
	this.client.queueServiceActionCall('livestats', 'collect', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: liveStream.
 * The available service actions:
 * @action add Adds new live stream entry.
 * The entry will be queued for provision.
 * @action get Get live stream entry by ID.
 * @action authenticate Authenticate live-stream entry against stream token and partner limitations.
 * @action update Update live stream entry. Only the properties that were set will be updated.
 * @action delete Delete a live stream entry.
 * @action list List live stream entries by filter with paging support.
 * @action updateOfflineThumbnailJpeg Update live stream entry thumbnail using a raw jpeg file.
 * @action updateOfflineThumbnailFromUrl Update entry thumbnail using url.
 * @action isLive Delivering the status of a live stream (on-air/offline) if it is possible.
 * @action addLiveStreamPushPublishConfiguration Add new pushPublish configuration to entry.
 * @action removeLiveStreamPushPublishConfiguration Remove push publish configuration from entry.
 * @action appendRecording Append recorded video to live entry.
 * @action registerMediaServer Register media server to live entry.
 * @action unregisterMediaServer Unregister media server from live entry.
 * @action validateRegisteredMediaServers Validates all registered media servers.
 * @action createPeriodicSyncPoints Creates perioding metadata sync-point events on a live stream.
 */
function KalturaLiveStreamService(client){
	KalturaLiveStreamService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaLiveStreamService, kaltura.KalturaServiceBase);
module.exports.KalturaLiveStreamService = KalturaLiveStreamService;

/**
 * Adds new live stream entry.
 * The entry will be queued for provision.
 * @param liveStreamEntry KalturaLiveStreamEntry Live stream entry metadata (optional).
 * @param sourceType string Live stream source type (optional, enum: KalturaSourceType, default: null).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.add = function(callback, liveStreamEntry, sourceType){
	if(!sourceType){
		sourceType = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'liveStreamEntry', kaltura.toParams(liveStreamEntry));
	this.client.addParam(kparams, 'sourceType', sourceType);
	this.client.queueServiceActionCall('livestream', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get live stream entry by ID.
 * @param entryId string Live stream entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('livestream', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Authenticate live-stream entry against stream token and partner limitations.
 * @param entryId string Live stream entry id (optional).
 * @param token string Live stream broadcasting token (optional).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.authenticate = function(callback, entryId, token){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'token', token);
	this.client.queueServiceActionCall('livestream', 'authenticate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live stream entry. Only the properties that were set will be updated.
 * @param entryId string Live stream entry id to update (optional).
 * @param liveStreamEntry KalturaLiveStreamEntry Live stream entry metadata to update (optional).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.update = function(callback, entryId, liveStreamEntry){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'liveStreamEntry', kaltura.toParams(liveStreamEntry));
	this.client.queueServiceActionCall('livestream', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a live stream entry.
 * @param entryId string Live stream entry id to delete (optional).
 * @return .
 */
KalturaLiveStreamService.prototype.deleteAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('livestream', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List live stream entries by filter with paging support.
 * @param filter KalturaLiveStreamEntryFilter live stream entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaLiveStreamListResponse.
 */
KalturaLiveStreamService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('livestream', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live stream entry thumbnail using a raw jpeg file.
 * @param entryId string live stream entry id (optional).
 * @param fileData file Jpeg file data (optional).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('livestream', 'updateOfflineThumbnailJpeg', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using url.
 * @param entryId string live stream entry id (optional).
 * @param url string file url (optional).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailFromUrl = function(callback, entryId, url){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('livestream', 'updateOfflineThumbnailFromUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delivering the status of a live stream (on-air/offline) if it is possible.
 * @param id string ID of the live stream (optional).
 * @param protocol string protocol of the stream to test (optional, enum: KalturaPlaybackProtocol).
 * @return bool.
 */
KalturaLiveStreamService.prototype.isLive = function(callback, id, protocol){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'protocol', protocol);
	this.client.queueServiceActionCall('livestream', 'isLive', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new pushPublish configuration to entry.
 * @param entryId string  (optional).
 * @param protocol string  (optional, enum: KalturaPlaybackProtocol).
 * @param url string  (optional, default: null).
 * @param liveStreamConfiguration KalturaLiveStreamConfiguration  (optional, default: null).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.addLiveStreamPushPublishConfiguration = function(callback, entryId, protocol, url, liveStreamConfiguration){
	if(!url){
		url = null;
	}
	if(!liveStreamConfiguration){
		liveStreamConfiguration = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'protocol', protocol);
	this.client.addParam(kparams, 'url', url);
	if (liveStreamConfiguration !== null){
		this.client.addParam(kparams, 'liveStreamConfiguration', kaltura.toParams(liveStreamConfiguration));
	}
	this.client.queueServiceActionCall('livestream', 'addLiveStreamPushPublishConfiguration', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Remove push publish configuration from entry.
 * @param entryId string  (optional).
 * @param protocol string  (optional, enum: KalturaPlaybackProtocol).
 * @return KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.removeLiveStreamPushPublishConfiguration = function(callback, entryId, protocol){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'protocol', protocol);
	this.client.queueServiceActionCall('livestream', 'removeLiveStreamPushPublishConfiguration', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Append recorded video to live entry.
 * @param entryId string Live entry id (optional).
 * @param assetId string Live asset id (optional).
 * @param mediaServerIndex string  (optional, enum: KalturaEntryServerNodeType).
 * @param resource KalturaDataCenterContentResource  (optional).
 * @param duration float in seconds (optional).
 * @param isLastChunk bool Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false).
 * @return KalturaLiveEntry.
 */
KalturaLiveStreamService.prototype.appendRecording = function(callback, entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
	if(!isLastChunk){
		isLastChunk = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'assetId', assetId);
	this.client.addParam(kparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	this.client.addParam(kparams, 'duration', duration);
	this.client.addParam(kparams, 'isLastChunk', isLastChunk);
	this.client.queueServiceActionCall('livestream', 'appendRecording', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Register media server to live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @param applicationName string the application to which entry is being broadcast (optional, default: null).
 * @param liveEntryStatus int the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1).
 * @return KalturaLiveEntry.
 */
KalturaLiveStreamService.prototype.registerMediaServer = function(callback, entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus){
	if(!applicationName){
		applicationName = null;
	}
	if(!liveEntryStatus){
		liveEntryStatus = 1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'hostname', hostname);
	this.client.addParam(kparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(kparams, 'applicationName', applicationName);
	this.client.addParam(kparams, 'liveEntryStatus', liveEntryStatus);
	this.client.queueServiceActionCall('livestream', 'registerMediaServer', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Unregister media server from live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @return KalturaLiveEntry.
 */
KalturaLiveStreamService.prototype.unregisterMediaServer = function(callback, entryId, hostname, mediaServerIndex){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'hostname', hostname);
	this.client.addParam(kparams, 'mediaServerIndex', mediaServerIndex);
	this.client.queueServiceActionCall('livestream', 'unregisterMediaServer', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Validates all registered media servers.
 * @param entryId string Live entry id (optional).
 * @return .
 */
KalturaLiveStreamService.prototype.validateRegisteredMediaServers = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('livestream', 'validateRegisteredMediaServers', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Creates perioding metadata sync-point events on a live stream.
 * @param entryId string Kaltura live-stream entry id (optional).
 * @param interval int Events interval in seconds (optional).
 * @param duration int Duration in seconds (optional).
 * @return .
 */
KalturaLiveStreamService.prototype.createPeriodicSyncPoints = function(callback, entryId, interval, duration){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'interval', interval);
	this.client.addParam(kparams, 'duration', duration);
	this.client.queueServiceActionCall('livestream', 'createPeriodicSyncPoints', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: mediaInfo.
 * The available service actions:
 * @action list List media info objects by filter and pager.
 */
function KalturaMediaInfoService(client){
	KalturaMediaInfoService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaMediaInfoService, kaltura.KalturaServiceBase);
module.exports.KalturaMediaInfoService = KalturaMediaInfoService;

/**
 * List media info objects by filter and pager.
 * @param filter KalturaMediaInfoFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaMediaInfoListResponse.
 */
KalturaMediaInfoService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('mediainfo', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: media.
 * The available service actions:
 * @action add Add entry.
 * @action addContent Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent.
 * @action addFromUrl Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * @action addFromSearchResult Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result.
 * @action addFromUploadedFile Add new entry after the specific media file was uploaded and the upload token id exists.
 * @action addFromRecordedWebcam Add new entry after the file was recored on the server and the token id exists.
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action convert Convert entry.
 * @action get Get media entry by ID.
 * @action getMrss Get MRSS by entry id
 * XML will return as an escaped string.
 * @action update Update media entry. Only the properties that were set will be updated.
 * @action updateContent Replace content associated with the media entry.
 * @action delete Delete a media entry.
 * @action approveReplace Approves media replacement.
 * @action cancelReplace Cancels media replacement.
 * @action list List media entries by filter with paging support.
 * @action count Count media entries by filter.
 * @action upload Upload a media file to Kaltura, then the file can be used to create a media entry.
 * @action updateThumbnail Update media entry thumbnail by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @action updateThumbnailFromSourceEntry Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @action updateThumbnailJpeg Update media entry thumbnail using a raw jpeg file.
 * @action updateThumbnailFromUrl Update entry thumbnail using url.
 * @action requestConversion Request a new conversion job, this can be used to convert the media entry to a different format.
 * @action flag Flag inappropriate media entry for moderation.
 * @action reject Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @action approve Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @action listFlags List all pending flags for the media entry.
 * @action anonymousRank Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @action bulkUploadAdd Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 */
function KalturaMediaService(client){
	KalturaMediaService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaMediaService, kaltura.KalturaServiceBase);
module.exports.KalturaMediaService = KalturaMediaService;

/**
 * Add entry.
 * @param entry KalturaMediaEntry  (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.add = function(callback, entry){
	var kparams = {};
	this.client.addParam(kparams, 'entry', kaltura.toParams(entry));
	this.client.queueServiceActionCall('media', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent.
 * @param entryId string  (optional).
 * @param resource KalturaResource  (optional, default: null).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.addContent = function(callback, entryId, resource){
	if(!resource){
		resource = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	if (resource !== null){
		this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	}
	this.client.queueServiceActionCall('media', 'addContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * @param mediaEntry KalturaMediaEntry Media entry metadata (optional).
 * @param url string An HTTP or FTP URL (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUrl = function(callback, mediaEntry, url){
	var kparams = {};
	this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('media', 'addFromUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result.
 * @param mediaEntry KalturaMediaEntry Media entry metadata (optional, default: null).
 * @param searchResult KalturaSearchResult Result object from search service (optional, default: null).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromSearchResult = function(callback, mediaEntry, searchResult){
	if(!mediaEntry){
		mediaEntry = null;
	}
	if(!searchResult){
		searchResult = null;
	}
	var kparams = {};
	if (mediaEntry !== null){
		this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	}
	if (searchResult !== null){
		this.client.addParam(kparams, 'searchResult', kaltura.toParams(searchResult));
	}
	this.client.queueServiceActionCall('media', 'addFromSearchResult', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new entry after the specific media file was uploaded and the upload token id exists.
 * @param mediaEntry KalturaMediaEntry Media entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUploadedFile = function(callback, mediaEntry, uploadTokenId){
	var kparams = {};
	this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('media', 'addFromUploadedFile', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new entry after the file was recored on the server and the token id exists.
 * @param mediaEntry KalturaMediaEntry Media entry metadata (optional).
 * @param webcamTokenId string Token id for the recored webcam file (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromRecordedWebcam = function(callback, mediaEntry, webcamTokenId){
	var kparams = {};
	this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	this.client.addParam(kparams, 'webcamTokenId', webcamTokenId);
	this.client.queueServiceActionCall('media', 'addFromRecordedWebcam', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy entry into new entry.
 * @param sourceEntryId string Media entry id to copy from (optional).
 * @param mediaEntry KalturaMediaEntry Media entry metadata (optional, default: null).
 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromEntry = function(callback, sourceEntryId, mediaEntry, sourceFlavorParamsId){
	if(!mediaEntry){
		mediaEntry = null;
	}
	if(!sourceFlavorParamsId){
		sourceFlavorParamsId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'sourceEntryId', sourceEntryId);
	if (mediaEntry !== null){
		this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	}
	this.client.addParam(kparams, 'sourceFlavorParamsId', sourceFlavorParamsId);
	this.client.queueServiceActionCall('media', 'addFromEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy flavor asset into new entry.
 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source (optional).
 * @param mediaEntry KalturaMediaEntry Media entry metadata (optional, default: null).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, mediaEntry){
	if(!mediaEntry){
		mediaEntry = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'sourceFlavorAssetId', sourceFlavorAssetId);
	if (mediaEntry !== null){
		this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	}
	this.client.queueServiceActionCall('media', 'addFromFlavorAsset', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Convert entry.
 * @param entryId string Media entry id (optional).
 * @param conversionProfileId int  (optional, default: null).
 * @param dynamicConversionAttributes array  (optional, default: null).
 * @return bigint.
 */
KalturaMediaService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!dynamicConversionAttributes){
		dynamicConversionAttributes = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	if(dynamicConversionAttributes !== null){
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, 'dynamicConversionAttributes:' + index, kaltura.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('media', 'convert', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get media entry by ID.
 * @param entryId string Media entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('media', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get MRSS by entry id
 * XML will return as an escaped string.
 * @param entryId string Entry id (optional).
 * @param extendingItemsArray array  (optional, default: null).
 * @param features string  (optional, default: null).
 * @return string.
 */
KalturaMediaService.prototype.getMrss = function(callback, entryId, extendingItemsArray, features){
	if(!extendingItemsArray){
		extendingItemsArray = null;
	}
	if(!features){
		features = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	if(extendingItemsArray !== null){
	for(var index in extendingItemsArray)
	{
		var obj = extendingItemsArray[index];
		this.client.addParam(kparams, 'extendingItemsArray:' + index, kaltura.toParams(obj));
	}
	}
	this.client.addParam(kparams, 'features', features);
	this.client.queueServiceActionCall('media', 'getMrss', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry. Only the properties that were set will be updated.
 * @param entryId string Media entry id to update (optional).
 * @param mediaEntry KalturaMediaEntry Media entry metadata to update (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.update = function(callback, entryId, mediaEntry){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'mediaEntry', kaltura.toParams(mediaEntry));
	this.client.queueServiceActionCall('media', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Replace content associated with the media entry.
 * @param entryId string Media entry id to update (optional).
 * @param resource KalturaResource Resource to be used to replace entry media content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @param advancedOptions KalturaEntryReplacementOptions Additional update content options (optional, default: null).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId, advancedOptions){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!advancedOptions){
		advancedOptions = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	if (advancedOptions !== null){
		this.client.addParam(kparams, 'advancedOptions', kaltura.toParams(advancedOptions));
	}
	this.client.queueServiceActionCall('media', 'updateContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a media entry.
 * @param entryId string Media entry id to delete (optional).
 * @return .
 */
KalturaMediaService.prototype.deleteAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approves media replacement.
 * @param entryId string Media entry id to replace (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.approveReplace = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'approveReplace', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Cancels media replacement.
 * @param entryId string Media entry id to cancel (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.cancelReplace = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'cancelReplace', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List media entries by filter with paging support.
 * @param filter KalturaMediaEntryFilter Media entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaMediaListResponse.
 */
KalturaMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('media', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count media entries by filter.
 * @param filter KalturaMediaEntryFilter Media entry filter (optional, default: null).
 * @return int.
 */
KalturaMediaService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.queueServiceActionCall('media', 'count', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a media file to Kaltura, then the file can be used to create a media entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
KalturaMediaService.prototype.upload = function(callback, fileData){
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('media', 'upload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry thumbnail by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @param entryId string Media entry id (optional).
 * @param timeOffset int Time offset (in seconds) (optional).
 * @param flavorParamsId int The flavor params id to be used (optional, default: null).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnail = function(callback, entryId, timeOffset, flavorParamsId){
	if(!flavorParamsId){
		flavorParamsId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'timeOffset', timeOffset);
	this.client.addParam(kparams, 'flavorParamsId', flavorParamsId);
	this.client.queueServiceActionCall('media', 'updateThumbnail', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @param entryId string Media entry id (optional).
 * @param sourceEntryId string Media entry id (optional).
 * @param timeOffset int Time offset (in seconds) (optional).
 * @param flavorParamsId int The flavor params id to be used (optional, default: null).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset, flavorParamsId){
	if(!flavorParamsId){
		flavorParamsId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'sourceEntryId', sourceEntryId);
	this.client.addParam(kparams, 'timeOffset', timeOffset);
	this.client.addParam(kparams, 'flavorParamsId', flavorParamsId);
	this.client.queueServiceActionCall('media', 'updateThumbnailFromSourceEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry thumbnail using a raw jpeg file.
 * @param entryId string Media entry id (optional).
 * @param fileData file Jpeg file data (optional).
 * @return KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('media', 'updateThumbnailJpeg', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using url.
 * @param entryId string Media entry id (optional).
 * @param url string file url (optional).
 * @return KalturaBaseEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('media', 'updateThumbnailFromUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Request a new conversion job, this can be used to convert the media entry to a different format.
 * @param entryId string Media entry id (optional).
 * @param fileFormat string Format to convert (optional).
 * @return int.
 */
KalturaMediaService.prototype.requestConversion = function(callback, entryId, fileFormat){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'fileFormat', fileFormat);
	this.client.queueServiceActionCall('media', 'requestConversion', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Flag inappropriate media entry for moderation.
 * @param moderationFlag KalturaModerationFlag  (optional).
 * @return .
 */
KalturaMediaService.prototype.flag = function(callback, moderationFlag){
	var kparams = {};
	this.client.addParam(kparams, 'moderationFlag', kaltura.toParams(moderationFlag));
	this.client.queueServiceActionCall('media', 'flag', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @param entryId string  (optional).
 * @return .
 */
KalturaMediaService.prototype.reject = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'reject', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @param entryId string  (optional).
 * @return .
 */
KalturaMediaService.prototype.approve = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'approve', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all pending flags for the media entry.
 * @param entryId string  (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaModerationFlagListResponse.
 */
KalturaMediaService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('media', 'listFlags', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @param entryId string  (optional).
 * @param rank int  (optional).
 * @return .
 */
KalturaMediaService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'rank', rank);
	this.client.queueServiceActionCall('media', 'anonymousRank', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @param fileData file  (optional).
 * @param bulkUploadData KalturaBulkUploadJobData  (optional, default: null).
 * @param bulkUploadEntryData KalturaBulkUploadEntryData  (optional, default: null).
 * @return KalturaBulkUpload.
 */
KalturaMediaService.prototype.bulkUploadAdd = function(callback, fileData, bulkUploadData, bulkUploadEntryData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadEntryData){
		bulkUploadEntryData = null;
	}
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(kparams, 'bulkUploadData', kaltura.toParams(bulkUploadData));
	}
	if (bulkUploadEntryData !== null){
		this.client.addParam(kparams, 'bulkUploadEntryData', kaltura.toParams(bulkUploadEntryData));
	}
	this.client.queueServiceActionCall('media', 'bulkUploadAdd', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: mixing.
 * The available service actions:
 * @action add Adds a new mix.
 * If the dataContent is null, a default timeline will be created.
 * @action get Get mix entry by id.
 * @action update Update mix entry. Only the properties that were set will be updated.
 * @action delete Delete a mix entry.
 * @action list List entries by filter with paging support.
 * Return parameter is an array of mix entries.
 * @action count Count mix entries by filter.
 * @action clone Clones an existing mix.
 * @action appendMediaEntry Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 * @action getMixesByMediaId Get the mixes in which the media entry is included.
 * @action getReadyMediaEntries Get all ready media entries that exist in the given mix id.
 * @action anonymousRank Anonymously rank a mix entry, no validation is done on duplicate rankings.
 */
function KalturaMixingService(client){
	KalturaMixingService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaMixingService, kaltura.KalturaServiceBase);
module.exports.KalturaMixingService = KalturaMixingService;

/**
 * Adds a new mix.
 * If the dataContent is null, a default timeline will be created.
 * @param mixEntry KalturaMixEntry Mix entry metadata (optional).
 * @return KalturaMixEntry.
 */
KalturaMixingService.prototype.add = function(callback, mixEntry){
	var kparams = {};
	this.client.addParam(kparams, 'mixEntry', kaltura.toParams(mixEntry));
	this.client.queueServiceActionCall('mixing', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get mix entry by id.
 * @param entryId string Mix entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaMixEntry.
 */
KalturaMixingService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('mixing', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update mix entry. Only the properties that were set will be updated.
 * @param entryId string Mix entry id to update (optional).
 * @param mixEntry KalturaMixEntry Mix entry metadata to update (optional).
 * @return KalturaMixEntry.
 */
KalturaMixingService.prototype.update = function(callback, entryId, mixEntry){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'mixEntry', kaltura.toParams(mixEntry));
	this.client.queueServiceActionCall('mixing', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a mix entry.
 * @param entryId string Mix entry id to delete (optional).
 * @return .
 */
KalturaMixingService.prototype.deleteAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('mixing', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List entries by filter with paging support.
 * Return parameter is an array of mix entries.
 * @param filter KalturaMixEntryFilter Mix entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaMixListResponse.
 */
KalturaMixingService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('mixing', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count mix entries by filter.
 * @param filter KalturaMediaEntryFilter Media entry filter (optional, default: null).
 * @return int.
 */
KalturaMixingService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.queueServiceActionCall('mixing', 'count', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clones an existing mix.
 * @param entryId string Mix entry id to clone (optional).
 * @return KalturaMixEntry.
 */
KalturaMixingService.prototype.cloneAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('mixing', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 * @param mixEntryId string Mix entry to append to its timeline (optional).
 * @param mediaEntryId string Media entry to append to the timeline (optional).
 * @return KalturaMixEntry.
 */
KalturaMixingService.prototype.appendMediaEntry = function(callback, mixEntryId, mediaEntryId){
	var kparams = {};
	this.client.addParam(kparams, 'mixEntryId', mixEntryId);
	this.client.addParam(kparams, 'mediaEntryId', mediaEntryId);
	this.client.queueServiceActionCall('mixing', 'appendMediaEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get the mixes in which the media entry is included.
 * @param mediaEntryId string  (optional).
 * @return array.
 */
KalturaMixingService.prototype.getMixesByMediaId = function(callback, mediaEntryId){
	var kparams = {};
	this.client.addParam(kparams, 'mediaEntryId', mediaEntryId);
	this.client.queueServiceActionCall('mixing', 'getMixesByMediaId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get all ready media entries that exist in the given mix id.
 * @param mixId string  (optional).
 * @param version int Desired version to get the data from (optional, default: -1).
 * @return array.
 */
KalturaMixingService.prototype.getReadyMediaEntries = function(callback, mixId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'mixId', mixId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('mixing', 'getReadyMediaEntries', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
 * @param entryId string  (optional).
 * @param rank int  (optional).
 * @return .
 */
KalturaMixingService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'rank', rank);
	this.client.queueServiceActionCall('mixing', 'anonymousRank', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action getClientNotification Return the notifications for a specific entry id and type.
 */
function KalturaNotificationService(client){
	KalturaNotificationService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaNotificationService, kaltura.KalturaServiceBase);
module.exports.KalturaNotificationService = KalturaNotificationService;

/**
 * Return the notifications for a specific entry id and type.
 * @param entryId string  (optional).
 * @param type int  (optional, enum: KalturaNotificationType).
 * @return KalturaClientNotification.
 */
KalturaNotificationService.prototype.getClientNotification = function(callback, entryId, type){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'type', type);
	this.client.queueServiceActionCall('notification', 'getClientNotification', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action register Create a new Partner object.
 * @action update Update details and settings of an existing partner.
 * @action get Retrieve partner object by Id.
 * @action getSecrets Retrieve partner secret and admin secret.
 * @action getInfo Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId.
 * @action getUsage Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months".
 * @action getStatistics Get usage statistics for a partner
 * Calculation is done according to partner's package.
 * @action listPartnersForUser Retrieve a list of partner objects which the current user is allowed to access.
 * @action list List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the api call (using the current KS).
 * This action is only partially implemented to support listing sub partners of a VAR partner.
 * @action listFeatureStatus List partner's current processes' statuses.
 * @action count Count partner's existing sub-publishers (count includes the partner itself).
 */
function KalturaPartnerService(client){
	KalturaPartnerService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaPartnerService, kaltura.KalturaServiceBase);
module.exports.KalturaPartnerService = KalturaPartnerService;

/**
 * Create a new Partner object.
 * @param partner KalturaPartner  (optional).
 * @param cmsPassword string  (optional).
 * @param templatePartnerId int  (optional, default: null).
 * @param silent bool  (optional, default: false).
 * @return KalturaPartner.
 */
KalturaPartnerService.prototype.register = function(callback, partner, cmsPassword, templatePartnerId, silent){
	if(!cmsPassword){
		cmsPassword = '';
	}
	if(!templatePartnerId){
		templatePartnerId = null;
	}
	if(!silent){
		silent = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'partner', kaltura.toParams(partner));
	this.client.addParam(kparams, 'cmsPassword', cmsPassword);
	this.client.addParam(kparams, 'templatePartnerId', templatePartnerId);
	this.client.addParam(kparams, 'silent', silent);
	this.client.queueServiceActionCall('partner', 'register', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update details and settings of an existing partner.
 * @param partner KalturaPartner  (optional).
 * @param allowEmpty bool  (optional, default: false).
 * @return KalturaPartner.
 */
KalturaPartnerService.prototype.update = function(callback, partner, allowEmpty){
	if(!allowEmpty){
		allowEmpty = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'partner', kaltura.toParams(partner));
	this.client.addParam(kparams, 'allowEmpty', allowEmpty);
	this.client.queueServiceActionCall('partner', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve partner object by Id.
 * @param id int  (optional, default: null).
 * @return KalturaPartner.
 */
KalturaPartnerService.prototype.get = function(callback, id){
	if(!id){
		id = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('partner', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve partner secret and admin secret.
 * @param partnerId int  (optional).
 * @param adminEmail string  (optional).
 * @param cmsPassword string  (optional).
 * @return KalturaPartner.
 */
KalturaPartnerService.prototype.getSecrets = function(callback, partnerId, adminEmail, cmsPassword){
	var kparams = {};
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'adminEmail', adminEmail);
	this.client.addParam(kparams, 'cmsPassword', cmsPassword);
	this.client.queueServiceActionCall('partner', 'getSecrets', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId.
 * @return KalturaPartner.
 */
KalturaPartnerService.prototype.getInfo = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('partner', 'getInfo', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months".
 * @param year int  (optional).
 * @param month int  (optional, default: 1).
 * @param resolution string  (optional, enum: KalturaReportInterval, default: null).
 * @return KalturaPartnerUsage.
 */
KalturaPartnerService.prototype.getUsage = function(callback, year, month, resolution){
	if(!year){
		year = '';
	}
	if(!month){
		month = 1;
	}
	if(!resolution){
		resolution = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'year', year);
	this.client.addParam(kparams, 'month', month);
	this.client.addParam(kparams, 'resolution', resolution);
	this.client.queueServiceActionCall('partner', 'getUsage', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get usage statistics for a partner
 * Calculation is done according to partner's package.
 * @return KalturaPartnerStatistics.
 */
KalturaPartnerService.prototype.getStatistics = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('partner', 'getStatistics', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of partner objects which the current user is allowed to access.
 * @param partnerFilter KalturaPartnerFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaPartnerListResponse.
 */
KalturaPartnerService.prototype.listPartnersForUser = function(callback, partnerFilter, pager){
	if(!partnerFilter){
		partnerFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (partnerFilter !== null){
		this.client.addParam(kparams, 'partnerFilter', kaltura.toParams(partnerFilter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('partner', 'listPartnersForUser', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the api call (using the current KS).
 * This action is only partially implemented to support listing sub partners of a VAR partner.
 * @param filter KalturaPartnerFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaPartnerListResponse.
 */
KalturaPartnerService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('partner', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List partner's current processes' statuses.
 * @return KalturaFeatureStatusListResponse.
 */
KalturaPartnerService.prototype.listFeatureStatus = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('partner', 'listFeatureStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count partner's existing sub-publishers (count includes the partner itself).
 * @param filter KalturaPartnerFilter  (optional, default: null).
 * @return int.
 */
KalturaPartnerService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.queueServiceActionCall('partner', 'count', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: permissionItem.
 * The available service actions:
 * @action add Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators.
 * @action get Retrieves a permission item object using its ID.
 * @action update Updates an existing permission item object.
 * This action is available only to Kaltura system administrators.
 * @action delete Deletes an existing permission item object.
 * This action is available only to Kaltura system administrators.
 * @action list Lists permission item objects that are associated with an account.
 */
function KalturaPermissionItemService(client){
	KalturaPermissionItemService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaPermissionItemService, kaltura.KalturaServiceBase);
module.exports.KalturaPermissionItemService = KalturaPermissionItemService;

/**
 * Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators.
 * @param permissionItem KalturaPermissionItem The new permission item (optional).
 * @return KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.add = function(callback, permissionItem){
	var kparams = {};
	this.client.addParam(kparams, 'permissionItem', kaltura.toParams(permissionItem));
	this.client.queueServiceActionCall('permissionitem', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a permission item object using its ID.
 * @param permissionItemId int The permission item's unique identifier (optional).
 * @return KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.get = function(callback, permissionItemId){
	var kparams = {};
	this.client.addParam(kparams, 'permissionItemId', permissionItemId);
	this.client.queueServiceActionCall('permissionitem', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing permission item object.
 * This action is available only to Kaltura system administrators.
 * @param permissionItemId int The permission item's unique identifier (optional).
 * @param permissionItem KalturaPermissionItem Id The permission item's unique identifier (optional).
 * @return KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.update = function(callback, permissionItemId, permissionItem){
	var kparams = {};
	this.client.addParam(kparams, 'permissionItemId', permissionItemId);
	this.client.addParam(kparams, 'permissionItem', kaltura.toParams(permissionItem));
	this.client.queueServiceActionCall('permissionitem', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes an existing permission item object.
 * This action is available only to Kaltura system administrators.
 * @param permissionItemId int The permission item's unique identifier (optional).
 * @return KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.deleteAction = function(callback, permissionItemId){
	var kparams = {};
	this.client.addParam(kparams, 'permissionItemId', permissionItemId);
	this.client.queueServiceActionCall('permissionitem', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists permission item objects that are associated with an account.
 * @param filter KalturaPermissionItemFilter A filter used to exclude specific types of permission items (optional, default: null).
 * @param pager KalturaFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return KalturaPermissionItemListResponse.
 */
KalturaPermissionItemService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('permissionitem', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: permission.
 * The available service actions:
 * @action add Adds a new permission object to the account.
 * @action get Retrieves a permission object using its ID.
 * @action update Updates an existing permission object.
 * @action delete Deletes an existing permission object.
 * @action list Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * @action getCurrentPermissions Retrieves a list of permissions that apply to the current KS.
 */
function KalturaPermissionService(client){
	KalturaPermissionService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaPermissionService, kaltura.KalturaServiceBase);
module.exports.KalturaPermissionService = KalturaPermissionService;

/**
 * Adds a new permission object to the account.
 * @param permission KalturaPermission The new permission (optional).
 * @return KalturaPermission.
 */
KalturaPermissionService.prototype.add = function(callback, permission){
	var kparams = {};
	this.client.addParam(kparams, 'permission', kaltura.toParams(permission));
	this.client.queueServiceActionCall('permission', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a permission object using its ID.
 * @param permissionName string The name assigned to the permission (optional).
 * @return KalturaPermission.
 */
KalturaPermissionService.prototype.get = function(callback, permissionName){
	var kparams = {};
	this.client.addParam(kparams, 'permissionName', permissionName);
	this.client.queueServiceActionCall('permission', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing permission object.
 * @param permissionName string The name assigned to the permission (optional).
 * @param permission KalturaPermission Name The name assigned to the permission (optional).
 * @return KalturaPermission.
 */
KalturaPermissionService.prototype.update = function(callback, permissionName, permission){
	var kparams = {};
	this.client.addParam(kparams, 'permissionName', permissionName);
	this.client.addParam(kparams, 'permission', kaltura.toParams(permission));
	this.client.queueServiceActionCall('permission', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes an existing permission object.
 * @param permissionName string The name assigned to the permission (optional).
 * @return KalturaPermission.
 */
KalturaPermissionService.prototype.deleteAction = function(callback, permissionName){
	var kparams = {};
	this.client.addParam(kparams, 'permissionName', permissionName);
	this.client.queueServiceActionCall('permission', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * @param filter KalturaPermissionFilter A filter used to exclude specific types of permissions (optional, default: null).
 * @param pager KalturaFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return KalturaPermissionListResponse.
 */
KalturaPermissionService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('permission', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a list of permissions that apply to the current KS.
 * @return string.
 */
KalturaPermissionService.prototype.getCurrentPermissions = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('permission', 'getCurrentPermissions', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: playlist.
 * The available service actions:
 * @action add Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
 * @action get Retrieve a playlist.
 * @action update Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type.
 * @action delete Delete existing playlist.
 * @action clone Clone an existing playlist.
 * @action list List available playlists.
 * @action execute Retrieve playlist for playing purpose.
 * @action executeFromContent Retrieve playlist for playing purpose, based on content.
 * @action executeFromFilters Revrieve playlist for playing purpose, based on media entry filters.
 * @action getStatsFromContent Retrieve playlist statistics.
 */
function KalturaPlaylistService(client){
	KalturaPlaylistService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaPlaylistService, kaltura.KalturaServiceBase);
module.exports.KalturaPlaylistService = KalturaPlaylistService;

/**
 * Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
 * @param playlist KalturaPlaylist  (optional).
 * @param updateStats bool indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false).
 * @return KalturaPlaylist.
 */
KalturaPlaylistService.prototype.add = function(callback, playlist, updateStats){
	if(!updateStats){
		updateStats = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'playlist', kaltura.toParams(playlist));
	this.client.addParam(kparams, 'updateStats', updateStats);
	this.client.queueServiceActionCall('playlist', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a playlist.
 * @param id string  (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaPlaylist.
 */
KalturaPlaylistService.prototype.get = function(callback, id, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('playlist', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type.
 * @param id string  (optional).
 * @param playlist KalturaPlaylist  (optional).
 * @param updateStats bool  (optional, default: false).
 * @return KalturaPlaylist.
 */
KalturaPlaylistService.prototype.update = function(callback, id, playlist, updateStats){
	if(!updateStats){
		updateStats = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'playlist', kaltura.toParams(playlist));
	this.client.addParam(kparams, 'updateStats', updateStats);
	this.client.queueServiceActionCall('playlist', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete existing playlist.
 * @param id string  (optional).
 * @return .
 */
KalturaPlaylistService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('playlist', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an existing playlist.
 * @param id string Id of the playlist to clone (optional).
 * @param newPlaylist KalturaPlaylist Parameters defined here will override the ones in the cloned playlist (optional, default: null).
 * @return KalturaPlaylist.
 */
KalturaPlaylistService.prototype.cloneAction = function(callback, id, newPlaylist){
	if(!newPlaylist){
		newPlaylist = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	if (newPlaylist !== null){
		this.client.addParam(kparams, 'newPlaylist', kaltura.toParams(newPlaylist));
	}
	this.client.queueServiceActionCall('playlist', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List available playlists.
 * @param filter KalturaPlaylistFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaPlaylistListResponse.
 */
KalturaPlaylistService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve playlist for playing purpose.
 * @param id string  (optional).
 * @param detailed string  (optional).
 * @param playlistContext KalturaContext  (optional, default: null).
 * @param filter KalturaMediaEntryFilterForPlaylist  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return array.
 */
KalturaPlaylistService.prototype.execute = function(callback, id, detailed, playlistContext, filter, pager){
	if(!detailed){
		detailed = '';
	}
	if(!playlistContext){
		playlistContext = null;
	}
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'detailed', detailed);
	if (playlistContext !== null){
		this.client.addParam(kparams, 'playlistContext', kaltura.toParams(playlistContext));
	}
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'execute', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve playlist for playing purpose, based on content.
 * @param playlistType int  (optional, enum: KalturaPlaylistType).
 * @param playlistContent string  (optional).
 * @param detailed string  (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return array.
 */
KalturaPlaylistService.prototype.executeFromContent = function(callback, playlistType, playlistContent, detailed, pager){
	if(!detailed){
		detailed = '';
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'playlistType', playlistType);
	this.client.addParam(kparams, 'playlistContent', playlistContent);
	this.client.addParam(kparams, 'detailed', detailed);
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'executeFromContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Revrieve playlist for playing purpose, based on media entry filters.
 * @param filters array  (optional).
 * @param totalResults int  (optional).
 * @param detailed string  (optional, default: 1).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return array.
 */
KalturaPlaylistService.prototype.executeFromFilters = function(callback, filters, totalResults, detailed, pager){
	if(!detailed){
		detailed = 1;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
for(var index in filters)
{
	var obj = filters[index];
	this.client.addParam(kparams, 'filters:' + index, kaltura.toParams(obj));
}
	this.client.addParam(kparams, 'totalResults', totalResults);
	this.client.addParam(kparams, 'detailed', detailed);
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'executeFromFilters', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve playlist statistics.
 * @param playlistType int  (optional, enum: KalturaPlaylistType).
 * @param playlistContent string  (optional).
 * @return KalturaPlaylist.
 */
KalturaPlaylistService.prototype.getStatsFromContent = function(callback, playlistType, playlistContent){
	var kparams = {};
	this.client.addParam(kparams, 'playlistType', playlistType);
	this.client.addParam(kparams, 'playlistContent', playlistContent);
	this.client.queueServiceActionCall('playlist', 'getStatsFromContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action getGraphs report getGraphs action allows to get a graph data for a specific report.
 * @action getTotal report getTotal action allows to get a graph data for a specific report.
 * @action getBaseTotal report getBaseTotal action allows to get a the total base for storage reports.
 * @action getTable report getTable action allows to get a graph data for a specific report.
 * @action getUrlForReportAsCsv will create a Csv file for the given report and return the URL to access it.
 * @action serve Will serve a requested report.
 * @action execute .
 */
function KalturaReportService(client){
	KalturaReportService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaReportService, kaltura.KalturaServiceBase);
module.exports.KalturaReportService = KalturaReportService;

/**
 * report getGraphs action allows to get a graph data for a specific report.
 * @param reportType string  (optional, enum: KalturaReportType).
 * @param reportInputFilter KalturaReportInputFilter  (optional).
 * @param dimension string  (optional, default: null).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return array.
 */
KalturaReportService.prototype.getGraphs = function(callback, reportType, reportInputFilter, dimension, objectIds){
	if(!dimension){
		dimension = null;
	}
	if(!objectIds){
		objectIds = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'reportType', reportType);
	this.client.addParam(kparams, 'reportInputFilter', kaltura.toParams(reportInputFilter));
	this.client.addParam(kparams, 'dimension', dimension);
	this.client.addParam(kparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getGraphs', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * report getTotal action allows to get a graph data for a specific report.
 * @param reportType string  (optional, enum: KalturaReportType).
 * @param reportInputFilter KalturaReportInputFilter  (optional).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return KalturaReportTotal.
 */
KalturaReportService.prototype.getTotal = function(callback, reportType, reportInputFilter, objectIds){
	if(!objectIds){
		objectIds = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'reportType', reportType);
	this.client.addParam(kparams, 'reportInputFilter', kaltura.toParams(reportInputFilter));
	this.client.addParam(kparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getTotal', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * report getBaseTotal action allows to get a the total base for storage reports.
 * @param reportType string  (optional, enum: KalturaReportType).
 * @param reportInputFilter KalturaReportInputFilter  (optional).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return array.
 */
KalturaReportService.prototype.getBaseTotal = function(callback, reportType, reportInputFilter, objectIds){
	if(!objectIds){
		objectIds = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'reportType', reportType);
	this.client.addParam(kparams, 'reportInputFilter', kaltura.toParams(reportInputFilter));
	this.client.addParam(kparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getBaseTotal', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * report getTable action allows to get a graph data for a specific report.
 * @param reportType string  (optional, enum: KalturaReportType).
 * @param reportInputFilter KalturaReportInputFilter  (optional).
 * @param pager KalturaFilterPager  (optional).
 * @param order string  (optional, default: null).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return KalturaReportTable.
 */
KalturaReportService.prototype.getTable = function(callback, reportType, reportInputFilter, pager, order, objectIds){
	if(!order){
		order = null;
	}
	if(!objectIds){
		objectIds = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'reportType', reportType);
	this.client.addParam(kparams, 'reportInputFilter', kaltura.toParams(reportInputFilter));
	this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	this.client.addParam(kparams, 'order', order);
	this.client.addParam(kparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getTable', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * will create a Csv file for the given report and return the URL to access it.
 * @param reportTitle string The title of the report to display at top of CSV (optional).
 * @param reportText string The text of the filter of the report (optional).
 * @param headers string The headers of the columns - a map between the enumerations on the server side and the their display text (optional).
 * @param reportType string  (optional, enum: KalturaReportType).
 * @param reportInputFilter KalturaReportInputFilter  (optional).
 * @param dimension string  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @param order string  (optional, default: null).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return string.
 */
KalturaReportService.prototype.getUrlForReportAsCsv = function(callback, reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds){
	if(!dimension){
		dimension = null;
	}
	if(!pager){
		pager = null;
	}
	if(!order){
		order = null;
	}
	if(!objectIds){
		objectIds = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'reportTitle', reportTitle);
	this.client.addParam(kparams, 'reportText', reportText);
	this.client.addParam(kparams, 'headers', headers);
	this.client.addParam(kparams, 'reportType', reportType);
	this.client.addParam(kparams, 'reportInputFilter', kaltura.toParams(reportInputFilter));
	this.client.addParam(kparams, 'dimension', dimension);
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.addParam(kparams, 'order', order);
	this.client.addParam(kparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getUrlForReportAsCsv', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Will serve a requested report.
 * @param id string - the requested id (optional).
 * @return string.
 */
KalturaReportService.prototype.serve = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('report', 'serve', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param params array  (optional, default: null).
 * @return KalturaReportResponse.
 */
KalturaReportService.prototype.execute = function(callback, id, params){
	if(!params){
		params = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	if(params !== null){
	for(var index in params)
	{
		var obj = params[index];
		this.client.addParam(kparams, 'params:' + index, kaltura.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('report', 'execute', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: responseProfile.
 * The available service actions:
 * @action add Add new response profile.
 * @action get Get response profile by id.
 * @action update Update response profile by id.
 * @action updateStatus Update response profile status by id.
 * @action delete Delete response profile by id.
 * @action list List response profiles by filter and pager.
 * @action recalculate Recalculate response profile cached objects.
 * @action clone Clone an existing response profile.
 */
function KalturaResponseProfileService(client){
	KalturaResponseProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaResponseProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaResponseProfileService = KalturaResponseProfileService;

/**
 * Add new response profile.
 * @param addResponseProfile KalturaResponseProfile  (optional).
 * @return KalturaResponseProfile.
 */
KalturaResponseProfileService.prototype.add = function(callback, addResponseProfile){
	var kparams = {};
	this.client.addParam(kparams, 'addResponseProfile', kaltura.toParams(addResponseProfile));
	this.client.queueServiceActionCall('responseprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get response profile by id.
 * @param id int  (optional).
 * @return KalturaResponseProfile.
 */
KalturaResponseProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('responseprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update response profile by id.
 * @param id int  (optional).
 * @param updateResponseProfile KalturaResponseProfile  (optional).
 * @return KalturaResponseProfile.
 */
KalturaResponseProfileService.prototype.update = function(callback, id, updateResponseProfile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'updateResponseProfile', kaltura.toParams(updateResponseProfile));
	this.client.queueServiceActionCall('responseprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update response profile status by id.
 * @param id int  (optional).
 * @param status int  (optional, enum: KalturaResponseProfileStatus).
 * @return KalturaResponseProfile.
 */
KalturaResponseProfileService.prototype.updateStatus = function(callback, id, status){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('responseprofile', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete response profile by id.
 * @param id int  (optional).
 * @return .
 */
KalturaResponseProfileService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('responseprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List response profiles by filter and pager.
 * @param filter KalturaResponseProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaResponseProfileListResponse.
 */
KalturaResponseProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('responseprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Recalculate response profile cached objects.
 * @param options KalturaResponseProfileCacheRecalculateOptions  (optional).
 * @return KalturaResponseProfileCacheRecalculateResults.
 */
KalturaResponseProfileService.prototype.recalculate = function(callback, options){
	var kparams = {};
	this.client.addParam(kparams, 'options', kaltura.toParams(options));
	this.client.queueServiceActionCall('responseprofile', 'recalculate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an existing response profile.
 * @param id int  (optional).
 * @param profile KalturaResponseProfile  (optional).
 * @return KalturaResponseProfile.
 */
KalturaResponseProfileService.prototype.cloneAction = function(callback, id, profile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'profile', kaltura.toParams(profile));
	this.client.queueServiceActionCall('responseprofile', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: schema.
 * The available service actions:
 */
function KalturaSchemaService(client){
	KalturaSchemaService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaSchemaService, kaltura.KalturaServiceBase);
module.exports.KalturaSchemaService = KalturaSchemaService;


/**
 *Class definition for the Kaltura service: search.
 * The available service actions:
 * @action search Search for media in one of the supported media providers.
 * @action getMediaInfo Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 * @action searchUrl Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
 * @action externalLogin .
 */
function KalturaSearchService(client){
	KalturaSearchService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaSearchService, kaltura.KalturaServiceBase);
module.exports.KalturaSearchService = KalturaSearchService;

/**
 * Search for media in one of the supported media providers.
 * @param search KalturaSearch A KalturaSearch object contains the search keywords, media provider and media type (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaSearchResultResponse.
 */
KalturaSearchService.prototype.search = function(callback, search, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'search', kaltura.toParams(search));
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('search', 'search', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 * @param searchResult KalturaSearchResult KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional).
 * @return KalturaSearchResult.
 */
KalturaSearchService.prototype.getMediaInfo = function(callback, searchResult){
	var kparams = {};
	this.client.addParam(kparams, 'searchResult', kaltura.toParams(searchResult));
	this.client.queueServiceActionCall('search', 'getMediaInfo', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
 * @param mediaType int  (optional, enum: KalturaMediaType).
 * @param url string  (optional).
 * @return KalturaSearchResult.
 */
KalturaSearchService.prototype.searchUrl = function(callback, mediaType, url){
	var kparams = {};
	this.client.addParam(kparams, 'mediaType', mediaType);
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('search', 'searchUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param searchSource int  (optional, enum: KalturaSearchProviderType).
 * @param userName string  (optional).
 * @param password string  (optional).
 * @return KalturaSearchAuthData.
 */
KalturaSearchService.prototype.externalLogin = function(callback, searchSource, userName, password){
	var kparams = {};
	this.client.addParam(kparams, 'searchSource', searchSource);
	this.client.addParam(kparams, 'userName', userName);
	this.client.addParam(kparams, 'password', password);
	this.client.queueServiceActionCall('search', 'externalLogin', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: serverNode.
 * The available service actions:
 * @action add Adds a server node to the Kaltura DB.
 * @action get Get server node by id.
 * @action update Update server node by id.
 * @action delete delete server node by id.
 * @action disable Disable server node by id.
 * @action enable Enable server node by id.
 * @action list .
 * @action reportStatus Update server node status.
 */
function KalturaServerNodeService(client){
	KalturaServerNodeService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaServerNodeService, kaltura.KalturaServiceBase);
module.exports.KalturaServerNodeService = KalturaServerNodeService;

/**
 * Adds a server node to the Kaltura DB.
 * @param serverNode KalturaServerNode  (optional).
 * @return KalturaServerNode.
 */
KalturaServerNodeService.prototype.add = function(callback, serverNode){
	var kparams = {};
	this.client.addParam(kparams, 'serverNode', kaltura.toParams(serverNode));
	this.client.queueServiceActionCall('servernode', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get server node by id.
 * @param serverNodeId int  (optional).
 * @return KalturaServerNode.
 */
KalturaServerNodeService.prototype.get = function(callback, serverNodeId){
	var kparams = {};
	this.client.addParam(kparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update server node by id.
 * @param serverNodeId int  (optional).
 * @param serverNode KalturaServerNode Id (optional).
 * @return KalturaServerNode.
 */
KalturaServerNodeService.prototype.update = function(callback, serverNodeId, serverNode){
	var kparams = {};
	this.client.addParam(kparams, 'serverNodeId', serverNodeId);
	this.client.addParam(kparams, 'serverNode', kaltura.toParams(serverNode));
	this.client.queueServiceActionCall('servernode', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete server node by id.
 * @param serverNodeId string  (optional).
 * @return .
 */
KalturaServerNodeService.prototype.deleteAction = function(callback, serverNodeId){
	var kparams = {};
	this.client.addParam(kparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Disable server node by id.
 * @param serverNodeId string  (optional).
 * @return KalturaServerNode.
 */
KalturaServerNodeService.prototype.disable = function(callback, serverNodeId){
	var kparams = {};
	this.client.addParam(kparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'disable', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Enable server node by id.
 * @param serverNodeId string  (optional).
 * @return KalturaServerNode.
 */
KalturaServerNodeService.prototype.enable = function(callback, serverNodeId){
	var kparams = {};
	this.client.addParam(kparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'enable', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaServerNodeFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaServerNodeListResponse.
 */
KalturaServerNodeService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('servernode', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update server node status.
 * @param hostName string  (optional).
 * @param serverNode KalturaServerNode  (optional, default: null).
 * @return KalturaServerNode.
 */
KalturaServerNodeService.prototype.reportStatus = function(callback, hostName, serverNode){
	if(!serverNode){
		serverNode = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'hostName', hostName);
	if (serverNode !== null){
		this.client.addParam(kparams, 'serverNode', kaltura.toParams(serverNode));
	}
	this.client.queueServiceActionCall('servernode', 'reportStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action start Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
 * @action end End a session with the Kaltura server, making the current KS invalid.
 * @action impersonate Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
 * @action impersonateByKs Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set.
 * @action get Parse session key and return its info.
 * @action startWidgetSession Start a session for Kaltura's flash widgets.
 */
function KalturaSessionService(client){
	KalturaSessionService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaSessionService, kaltura.KalturaServiceBase);
module.exports.KalturaSessionService = KalturaSessionService;

/**
 * Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
 * @param secret string Remember to provide the correct secret according to the sessionType you want (optional).
 * @param userId string  (optional).
 * @param type int Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param partnerId int  (optional, default: null).
 * @param expiry int KS expiry time in seconds (optional, default: 86400).
 * @param privileges string  (optional, default: null).
 * @return string.
 */
KalturaSessionService.prototype.start = function(callback, secret, userId, type, partnerId, expiry, privileges){
	if(!userId){
		userId = '';
	}
	if(!type){
		type = 0;
	}
	if(!partnerId){
		partnerId = null;
	}
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'secret', secret);
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'type', type);
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'expiry', expiry);
	this.client.addParam(kparams, 'privileges', privileges);
	this.client.queueServiceActionCall('session', 'start', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * End a session with the Kaltura server, making the current KS invalid.
 * @return .
 */
KalturaSessionService.prototype.end = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('session', 'end', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket.
 * @param secret string - should be the secret (admin or user) of the original partnerId (not impersonatedPartnerId) (optional).
 * @param impersonatedPartnerId int  (optional).
 * @param userId string - impersonated userId (optional).
 * @param type int  (optional, enum: KalturaSessionType).
 * @param partnerId int  (optional, default: null).
 * @param expiry int KS expiry time in seconds (optional, default: 86400).
 * @param privileges string  (optional, default: null).
 * @return string.
 */
KalturaSessionService.prototype.impersonate = function(callback, secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
	if(!userId){
		userId = '';
	}
	if(!type){
		type = 0;
	}
	if(!partnerId){
		partnerId = null;
	}
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'secret', secret);
	this.client.addParam(kparams, 'impersonatedPartnerId', impersonatedPartnerId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'type', type);
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'expiry', expiry);
	this.client.addParam(kparams, 'privileges', privileges);
	this.client.queueServiceActionCall('session', 'impersonate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set.
 * @param session string The old KS of the impersonated partner (optional).
 * @param type int Type of the new KS (optional, enum: KalturaSessionType, default: null).
 * @param expiry int Expiry time in seconds of the new KS (optional, default: null).
 * @param privileges string Privileges of the new KS (optional, default: null).
 * @return KalturaSessionInfo.
 */
KalturaSessionService.prototype.impersonateByKs = function(callback, session, type, expiry, privileges){
	if(!type){
		type = null;
	}
	if(!expiry){
		expiry = null;
	}
	if(!privileges){
		privileges = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'session', session);
	this.client.addParam(kparams, 'type', type);
	this.client.addParam(kparams, 'expiry', expiry);
	this.client.addParam(kparams, 'privileges', privileges);
	this.client.queueServiceActionCall('session', 'impersonateByKs', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Parse session key and return its info.
 * @param session string The KS to be parsed, keep it empty to use current session (optional, default: null).
 * @return KalturaSessionInfo.
 */
KalturaSessionService.prototype.get = function(callback, session){
	if(!session){
		session = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'session', session);
	this.client.queueServiceActionCall('session', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Start a session for Kaltura's flash widgets.
 * @param widgetId string  (optional).
 * @param expiry int  (optional, default: 86400).
 * @return KalturaStartWidgetSessionResponse.
 */
KalturaSessionService.prototype.startWidgetSession = function(callback, widgetId, expiry){
	if(!expiry){
		expiry = 86400;
	}
	var kparams = {};
	this.client.addParam(kparams, 'widgetId', widgetId);
	this.client.addParam(kparams, 'expiry', expiry);
	this.client.queueServiceActionCall('session', 'startWidgetSession', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: stats.
 * The available service actions:
 * @action collect Will write to the event log a single line representing the event
 * client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 * 
 * 
 * KalturaStatsEvent $event.
 * @action kmcCollect Will collect the kmcEvent sent form the KMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log.
 * @action reportKceError .
 * @action reportError Use this action to report errors to the kaltura server.
 */
function KalturaStatsService(client){
	KalturaStatsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaStatsService, kaltura.KalturaServiceBase);
module.exports.KalturaStatsService = KalturaStatsService;

/**
 * Will write to the event log a single line representing the event
 * client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 * 
 * 
 * KalturaStatsEvent $event.
 * @param event KalturaStatsEvent  (optional).
 * @return bool.
 */
KalturaStatsService.prototype.collect = function(callback, event){
	var kparams = {};
	this.client.addParam(kparams, 'event', kaltura.toParams(event));
	this.client.queueServiceActionCall('stats', 'collect', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Will collect the kmcEvent sent form the KMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log.
 * @param kmcEvent KalturaStatsKmcEvent  (optional).
 * @return .
 */
KalturaStatsService.prototype.kmcCollect = function(callback, kmcEvent){
	var kparams = {};
	this.client.addParam(kparams, 'kmcEvent', kaltura.toParams(kmcEvent));
	this.client.queueServiceActionCall('stats', 'kmcCollect', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param kalturaCEError KalturaCEError  (optional).
 * @return KalturaCEError.
 */
KalturaStatsService.prototype.reportKceError = function(callback, kalturaCEError){
	var kparams = {};
	this.client.addParam(kparams, 'kalturaCEError', kaltura.toParams(kalturaCEError));
	this.client.queueServiceActionCall('stats', 'reportKceError', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Use this action to report errors to the kaltura server.
 * @param errorCode string  (optional).
 * @param errorMessage string  (optional).
 * @return .
 */
KalturaStatsService.prototype.reportError = function(callback, errorCode, errorMessage){
	var kparams = {};
	this.client.addParam(kparams, 'errorCode', errorCode);
	this.client.addParam(kparams, 'errorMessage', errorMessage);
	this.client.queueServiceActionCall('stats', 'reportError', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: storageProfile.
 * The available service actions:
 * @action add Adds a storage profile to the Kaltura DB.
 * @action updateStatus .
 * @action get Get storage profile by id.
 * @action update Update storage profile by id.
 * @action list .
 */
function KalturaStorageProfileService(client){
	KalturaStorageProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaStorageProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaStorageProfileService = KalturaStorageProfileService;

/**
 * Adds a storage profile to the Kaltura DB.
 * @param storageProfile KalturaStorageProfile  (optional).
 * @return KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.add = function(callback, storageProfile){
	var kparams = {};
	this.client.addParam(kparams, 'storageProfile', kaltura.toParams(storageProfile));
	this.client.queueServiceActionCall('storageprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param storageId int  (optional).
 * @param status int  (optional, enum: KalturaStorageProfileStatus).
 * @return .
 */
KalturaStorageProfileService.prototype.updateStatus = function(callback, storageId, status){
	var kparams = {};
	this.client.addParam(kparams, 'storageId', storageId);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('storageprofile', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get storage profile by id.
 * @param storageProfileId int  (optional).
 * @return KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.get = function(callback, storageProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'storageProfileId', storageProfileId);
	this.client.queueServiceActionCall('storageprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update storage profile by id.
 * @param storageProfileId int  (optional).
 * @param storageProfile KalturaStorageProfile Id (optional).
 * @return KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.update = function(callback, storageProfileId, storageProfile){
	var kparams = {};
	this.client.addParam(kparams, 'storageProfileId', storageProfileId);
	this.client.addParam(kparams, 'storageProfile', kaltura.toParams(storageProfile));
	this.client.queueServiceActionCall('storageprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaStorageProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaStorageProfileListResponse.
 */
KalturaStorageProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('storageprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: syndicationFeed.
 * The available service actions:
 * @action add Add new Syndication Feed.
 * @action get Get Syndication Feed by ID.
 * @action update Update Syndication Feed by ID.
 * @action delete Delete Syndication Feed by ID.
 * @action list List Syndication Feeds by filter with paging support.
 * @action getEntryCount get entry count for a syndication feed.
 * @action requestConversion request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs.
 */
function KalturaSyndicationFeedService(client){
	KalturaSyndicationFeedService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaSyndicationFeedService, kaltura.KalturaServiceBase);
module.exports.KalturaSyndicationFeedService = KalturaSyndicationFeedService;

/**
 * Add new Syndication Feed.
 * @param syndicationFeed KalturaBaseSyndicationFeed  (optional).
 * @return KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.add = function(callback, syndicationFeed){
	var kparams = {};
	this.client.addParam(kparams, 'syndicationFeed', kaltura.toParams(syndicationFeed));
	this.client.queueServiceActionCall('syndicationfeed', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Syndication Feed by ID.
 * @param id string  (optional).
 * @return KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('syndicationfeed', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Syndication Feed by ID.
 * @param id string  (optional).
 * @param syndicationFeed KalturaBaseSyndicationFeed  (optional).
 * @return KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.update = function(callback, id, syndicationFeed){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'syndicationFeed', kaltura.toParams(syndicationFeed));
	this.client.queueServiceActionCall('syndicationfeed', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Syndication Feed by ID.
 * @param id string  (optional).
 * @return .
 */
KalturaSyndicationFeedService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('syndicationfeed', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Syndication Feeds by filter with paging support.
 * @param filter KalturaBaseSyndicationFeedFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaBaseSyndicationFeedListResponse.
 */
KalturaSyndicationFeedService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('syndicationfeed', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * get entry count for a syndication feed.
 * @param feedId string  (optional).
 * @return KalturaSyndicationFeedEntryCount.
 */
KalturaSyndicationFeedService.prototype.getEntryCount = function(callback, feedId){
	var kparams = {};
	this.client.addParam(kparams, 'feedId', feedId);
	this.client.queueServiceActionCall('syndicationfeed', 'getEntryCount', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs.
 * @param feedId string  (optional).
 * @return string.
 */
KalturaSyndicationFeedService.prototype.requestConversion = function(callback, feedId){
	var kparams = {};
	this.client.addParam(kparams, 'feedId', feedId);
	this.client.queueServiceActionCall('syndicationfeed', 'requestConversion', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action ping .
 * @action pingDatabase .
 * @action getTime .
 * @action getVersion .
 */
function KalturaSystemService(client){
	KalturaSystemService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaSystemService, kaltura.KalturaServiceBase);
module.exports.KalturaSystemService = KalturaSystemService;

/**
 * .
 * @return bool.
 */
KalturaSystemService.prototype.ping = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('system', 'ping', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return bool.
 */
KalturaSystemService.prototype.pingDatabase = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('system', 'pingDatabase', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return int.
 */
KalturaSystemService.prototype.getTime = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('system', 'getTime', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return string.
 */
KalturaSystemService.prototype.getVersion = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('system', 'getVersion', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: thumbAsset.
 * The available service actions:
 * @action add Add thumbnail asset.
 * @action setContent Update content of thumbnail asset.
 * @action update Update thumbnail asset.
 * @action setAsDefault Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 * @action generateByEntryId .
 * @action generate .
 * @action regenerate .
 * @action get .
 * @action getByEntryId .
 * @action list List Thumbnail Assets by filter and pager.
 * @action addFromUrl .
 * @action addFromImage .
 * @action delete .
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 */
function KalturaThumbAssetService(client){
	KalturaThumbAssetService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaThumbAssetService, kaltura.KalturaServiceBase);
module.exports.KalturaThumbAssetService = KalturaThumbAssetService;

/**
 * Add thumbnail asset.
 * @param entryId string  (optional).
 * @param thumbAsset KalturaThumbAsset  (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.add = function(callback, entryId, thumbAsset){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'thumbAsset', kaltura.toParams(thumbAsset));
	this.client.queueServiceActionCall('thumbasset', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of thumbnail asset.
 * @param id string  (optional).
 * @param contentResource KalturaContentResource  (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'contentResource', kaltura.toParams(contentResource));
	this.client.queueServiceActionCall('thumbasset', 'setContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update thumbnail asset.
 * @param id string  (optional).
 * @param thumbAsset KalturaThumbAsset  (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.update = function(callback, id, thumbAsset){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'thumbAsset', kaltura.toParams(thumbAsset));
	this.client.queueServiceActionCall('thumbasset', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 * @param thumbAssetId string  (optional).
 * @return .
 */
KalturaThumbAssetService.prototype.setAsDefault = function(callback, thumbAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'setAsDefault', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param destThumbParamsId int indicate the id of the ThumbParams to be generate this thumbnail by (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.generateByEntryId = function(callback, entryId, destThumbParamsId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'destThumbParamsId', destThumbParamsId);
	this.client.queueServiceActionCall('thumbasset', 'generateByEntryId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param thumbParams KalturaThumbParams  (optional).
 * @param sourceAssetId string id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.generate = function(callback, entryId, thumbParams, sourceAssetId){
	if(!sourceAssetId){
		sourceAssetId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'thumbParams', kaltura.toParams(thumbParams));
	this.client.addParam(kparams, 'sourceAssetId', sourceAssetId);
	this.client.queueServiceActionCall('thumbasset', 'generate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param thumbAssetId string  (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.regenerate = function(callback, thumbAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'regenerate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param thumbAssetId string  (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.get = function(callback, thumbAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @return array.
 */
KalturaThumbAssetService.prototype.getByEntryId = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('thumbasset', 'getByEntryId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Thumbnail Assets by filter and pager.
 * @param filter KalturaAssetFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaThumbAssetListResponse.
 */
KalturaThumbAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('thumbasset', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param url string  (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.addFromUrl = function(callback, entryId, url){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('thumbasset', 'addFromUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param fileData file  (optional).
 * @return KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.addFromImage = function(callback, entryId, fileData){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('thumbasset', 'addFromImage', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param thumbAssetId string  (optional).
 * @return .
 */
KalturaThumbAssetService.prototype.deleteAction = function(callback, thumbAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @param thumbParams KalturaThumbParams  (optional, default: null).
 * @return string.
 */
KalturaThumbAssetService.prototype.getUrl = function(callback, id, storageId, thumbParams){
	if(!storageId){
		storageId = null;
	}
	if(!thumbParams){
		thumbParams = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'storageId', storageId);
	if (thumbParams !== null){
		this.client.addParam(kparams, 'thumbParams', kaltura.toParams(thumbParams));
	}
	this.client.queueServiceActionCall('thumbasset', 'getUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return KalturaRemotePathListResponse.
 */
KalturaThumbAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('thumbasset', 'getRemotePaths', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: thumbParamsOutput.
 * The available service actions:
 * @action get Get thumb params output object by ID.
 * @action list List thumb params output objects by filter and pager.
 */
function KalturaThumbParamsOutputService(client){
	KalturaThumbParamsOutputService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaThumbParamsOutputService, kaltura.KalturaServiceBase);
module.exports.KalturaThumbParamsOutputService = KalturaThumbParamsOutputService;

/**
 * Get thumb params output object by ID.
 * @param id int  (optional).
 * @return KalturaThumbParamsOutput.
 */
KalturaThumbParamsOutputService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('thumbparamsoutput', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List thumb params output objects by filter and pager.
 * @param filter KalturaThumbParamsOutputFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaThumbParamsOutputListResponse.
 */
KalturaThumbParamsOutputService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('thumbparamsoutput', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: thumbParams.
 * The available service actions:
 * @action add Add new Thumb Params.
 * @action get Get Thumb Params by ID.
 * @action update Update Thumb Params by ID.
 * @action delete Delete Thumb Params by ID.
 * @action list List Thumb Params by filter with paging support (By default - all system default params will be listed too).
 * @action getByConversionProfileId Get Thumb Params by Conversion Profile ID.
 */
function KalturaThumbParamsService(client){
	KalturaThumbParamsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaThumbParamsService, kaltura.KalturaServiceBase);
module.exports.KalturaThumbParamsService = KalturaThumbParamsService;

/**
 * Add new Thumb Params.
 * @param thumbParams KalturaThumbParams  (optional).
 * @return KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.add = function(callback, thumbParams){
	var kparams = {};
	this.client.addParam(kparams, 'thumbParams', kaltura.toParams(thumbParams));
	this.client.queueServiceActionCall('thumbparams', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Thumb Params by ID.
 * @param id int  (optional).
 * @return KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('thumbparams', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Thumb Params by ID.
 * @param id int  (optional).
 * @param thumbParams KalturaThumbParams  (optional).
 * @return KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.update = function(callback, id, thumbParams){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'thumbParams', kaltura.toParams(thumbParams));
	this.client.queueServiceActionCall('thumbparams', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Thumb Params by ID.
 * @param id int  (optional).
 * @return .
 */
KalturaThumbParamsService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('thumbparams', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Thumb Params by filter with paging support (By default - all system default params will be listed too).
 * @param filter KalturaThumbParamsFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaThumbParamsListResponse.
 */
KalturaThumbParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('thumbparams', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Thumb Params by Conversion Profile ID.
 * @param conversionProfileId int  (optional).
 * @return array.
 */
KalturaThumbParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('thumbparams', 'getByConversionProfileId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: uiConf.
 * The available service actions:
 * @action add UIConf Add action allows you to add a UIConf to Kaltura DB.
 * @action update Update an existing UIConf.
 * @action get Retrieve a UIConf by id.
 * @action delete Delete an existing UIConf.
 * @action clone Clone an existing UIConf.
 * @action listTemplates retrieve a list of available template UIConfs.
 * @action list Retrieve a list of available UIConfs.
 * @action getAvailableTypes Retrieve a list of all available versions by object type.
 */
function KalturaUiConfService(client){
	KalturaUiConfService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaUiConfService, kaltura.KalturaServiceBase);
module.exports.KalturaUiConfService = KalturaUiConfService;

/**
 * UIConf Add action allows you to add a UIConf to Kaltura DB.
 * @param uiConf KalturaUiConf Mandatory input parameter of type KalturaUiConf (optional).
 * @return KalturaUiConf.
 */
KalturaUiConfService.prototype.add = function(callback, uiConf){
	var kparams = {};
	this.client.addParam(kparams, 'uiConf', kaltura.toParams(uiConf));
	this.client.queueServiceActionCall('uiconf', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing UIConf.
 * @param id int  (optional).
 * @param uiConf KalturaUiConf  (optional).
 * @return KalturaUiConf.
 */
KalturaUiConfService.prototype.update = function(callback, id, uiConf){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'uiConf', kaltura.toParams(uiConf));
	this.client.queueServiceActionCall('uiconf', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a UIConf by id.
 * @param id int  (optional).
 * @return KalturaUiConf.
 */
KalturaUiConfService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('uiconf', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing UIConf.
 * @param id int  (optional).
 * @return .
 */
KalturaUiConfService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('uiconf', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an existing UIConf.
 * @param id int  (optional).
 * @return KalturaUiConf.
 */
KalturaUiConfService.prototype.cloneAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('uiconf', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * retrieve a list of available template UIConfs.
 * @param filter KalturaUiConfFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('uiconf', 'listTemplates', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available UIConfs.
 * @param filter KalturaUiConfFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('uiconf', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of all available versions by object type.
 * @return array.
 */
KalturaUiConfService.prototype.getAvailableTypes = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('uiconf', 'getAvailableTypes', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: upload.
 * The available service actions:
 * @action upload .
 * @action getUploadedFileTokenByFileName .
 */
function KalturaUploadService(client){
	KalturaUploadService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaUploadService, kaltura.KalturaServiceBase);
module.exports.KalturaUploadService = KalturaUploadService;

/**
 * .
 * @param fileData file The file data (optional).
 * @return string.
 */
KalturaUploadService.prototype.upload = function(callback, fileData){
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('upload', 'upload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileName string  (optional).
 * @return KalturaUploadResponse.
 */
KalturaUploadService.prototype.getUploadedFileTokenByFileName = function(callback, fileName){
	var kparams = {};
	this.client.addParam(kparams, 'fileName', fileName);
	this.client.queueServiceActionCall('upload', 'getUploadedFileTokenByFileName', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: uploadToken.
 * The available service actions:
 * @action add Adds new upload token to upload a file.
 * @action get Get upload token by id.
 * @action upload Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried.
 * @action delete Deletes the upload token by upload token id.
 * @action list List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only.
 */
function KalturaUploadTokenService(client){
	KalturaUploadTokenService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaUploadTokenService, kaltura.KalturaServiceBase);
module.exports.KalturaUploadTokenService = KalturaUploadTokenService;

/**
 * Adds new upload token to upload a file.
 * @param uploadToken KalturaUploadToken  (optional, default: null).
 * @return KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.add = function(callback, uploadToken){
	if(!uploadToken){
		uploadToken = null;
	}
	var kparams = {};
	if (uploadToken !== null){
		this.client.addParam(kparams, 'uploadToken', kaltura.toParams(uploadToken));
	}
	this.client.queueServiceActionCall('uploadtoken', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get upload token by id.
 * @param uploadTokenId string  (optional).
 * @return KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.get = function(callback, uploadTokenId){
	var kparams = {};
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('uploadtoken', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried.
 * @param uploadTokenId string  (optional).
 * @param fileData file  (optional).
 * @param resume bool  (optional, default: false).
 * @param finalChunk bool  (optional, default: true).
 * @param resumeAt float  (optional, default: -1).
 * @return KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.upload = function(callback, uploadTokenId, fileData, resume, finalChunk, resumeAt){
	if(!resume){
		resume = false;
	}
	if(!finalChunk){
		finalChunk = true;
	}
	if(!resumeAt){
		resumeAt = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.addParam(kparams, 'resume', resume);
	this.client.addParam(kparams, 'finalChunk', finalChunk);
	this.client.addParam(kparams, 'resumeAt', resumeAt);
	this.client.queueServiceActionCall('uploadtoken', 'upload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes the upload token by upload token id.
 * @param uploadTokenId string  (optional).
 * @return .
 */
KalturaUploadTokenService.prototype.deleteAction = function(callback, uploadTokenId){
	var kparams = {};
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('uploadtoken', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only.
 * @param filter KalturaUploadTokenFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaUploadTokenListResponse.
 */
KalturaUploadTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('uploadtoken', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: userEntry.
 * The available service actions:
 * @action add Adds a user_entry to the Kaltura DB.
 * @action update .
 * @action delete .
 * @action list .
 * @action get .
 * @action submitQuiz Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
 */
function KalturaUserEntryService(client){
	KalturaUserEntryService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaUserEntryService, kaltura.KalturaServiceBase);
module.exports.KalturaUserEntryService = KalturaUserEntryService;

/**
 * Adds a user_entry to the Kaltura DB.
 * @param userEntry KalturaUserEntry  (optional).
 * @return KalturaUserEntry.
 */
KalturaUserEntryService.prototype.add = function(callback, userEntry){
	var kparams = {};
	this.client.addParam(kparams, 'userEntry', kaltura.toParams(userEntry));
	this.client.queueServiceActionCall('userentry', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param userEntry KalturaUserEntry  (optional).
 * @return .
 */
KalturaUserEntryService.prototype.update = function(callback, id, userEntry){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'userEntry', kaltura.toParams(userEntry));
	this.client.queueServiceActionCall('userentry', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return KalturaUserEntry.
 */
KalturaUserEntryService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('userentry', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaUserEntryFilter  (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaUserEntryListResponse.
 */
KalturaUserEntryService.prototype.listAction = function(callback, filter, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('userentry', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id string  (optional).
 * @return KalturaUserEntry.
 */
KalturaUserEntryService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('userentry', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
 * @param id int  (optional).
 * @return KalturaQuizUserEntry.
 */
KalturaUserEntryService.prototype.submitQuiz = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('userentry', 'submitQuiz', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: userRole.
 * The available service actions:
 * @action add Adds a new user role object to the account.
 * @action get Retrieves a user role object using its ID.
 * @action update Updates an existing user role object.
 * @action delete Deletes an existing user role object.
 * @action list Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them.
 * @action clone Creates a new user role object that is a duplicate of an existing role.
 */
function KalturaUserRoleService(client){
	KalturaUserRoleService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaUserRoleService, kaltura.KalturaServiceBase);
module.exports.KalturaUserRoleService = KalturaUserRoleService;

/**
 * Adds a new user role object to the account.
 * @param userRole KalturaUserRole A new role (optional).
 * @return KalturaUserRole.
 */
KalturaUserRoleService.prototype.add = function(callback, userRole){
	var kparams = {};
	this.client.addParam(kparams, 'userRole', kaltura.toParams(userRole));
	this.client.queueServiceActionCall('userrole', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a user role object using its ID.
 * @param userRoleId int The user role's unique identifier (optional).
 * @return KalturaUserRole.
 */
KalturaUserRoleService.prototype.get = function(callback, userRoleId){
	var kparams = {};
	this.client.addParam(kparams, 'userRoleId', userRoleId);
	this.client.queueServiceActionCall('userrole', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing user role object.
 * @param userRoleId int The user role's unique identifier (optional).
 * @param userRole KalturaUserRole Id The user role's unique identifier (optional).
 * @return KalturaUserRole.
 */
KalturaUserRoleService.prototype.update = function(callback, userRoleId, userRole){
	var kparams = {};
	this.client.addParam(kparams, 'userRoleId', userRoleId);
	this.client.addParam(kparams, 'userRole', kaltura.toParams(userRole));
	this.client.queueServiceActionCall('userrole', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes an existing user role object.
 * @param userRoleId int The user role's unique identifier (optional).
 * @return KalturaUserRole.
 */
KalturaUserRoleService.prototype.deleteAction = function(callback, userRoleId){
	var kparams = {};
	this.client.addParam(kparams, 'userRoleId', userRoleId);
	this.client.queueServiceActionCall('userrole', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them.
 * @param filter KalturaUserRoleFilter A filter used to exclude specific types of user roles (optional, default: null).
 * @param pager KalturaFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return KalturaUserRoleListResponse.
 */
KalturaUserRoleService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('userrole', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Creates a new user role object that is a duplicate of an existing role.
 * @param userRoleId int The user role's unique identifier (optional).
 * @return KalturaUserRole.
 */
KalturaUserRoleService.prototype.cloneAction = function(callback, userRoleId){
	var kparams = {};
	this.client.addParam(kparams, 'userRoleId', userRoleId);
	this.client.queueServiceActionCall('userrole', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: user.
 * The available service actions:
 * @action add Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system.
 * @action update Updates an existing user object.
 * You can also use this action to update the userId.
 * @action get Retrieves a user object for a specified user ID.
 * @action getByLoginId Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system.
 * @action delete Deletes a user from a partner account.
 * @action list Lists user objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
 * @action notifyBan Notifies that a user is banned from an account.
 * @action login Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password.
 * @action loginByLoginId Logs a user into a partner account with a user login ID and a user password.
 * @action updateLoginData Updates a user's login data: email, password, name.
 * @action resetPassword Reset user's password and send the user an email to generate a new one.
 * @action setInitialPassword Set initial users password.
 * @action enableLogin Enables a user to log into a partner account using an email address and a password.
 * @action disableLogin Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action.
 * @action index Index an entry by id.
 * @action addFromBulkUpload .
 * @action checkLoginDataExists Action which checks whther user login.
 */
function KalturaUserService(client){
	KalturaUserService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaUserService, kaltura.KalturaServiceBase);
module.exports.KalturaUserService = KalturaUserService;

/**
 * Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system.
 * @param user KalturaUser The new user (optional).
 * @return KalturaUser.
 */
KalturaUserService.prototype.add = function(callback, user){
	var kparams = {};
	this.client.addParam(kparams, 'user', kaltura.toParams(user));
	this.client.queueServiceActionCall('user', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing user object.
 * You can also use this action to update the userId.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @param user KalturaUser Id The user's unique identifier in the partner's system (optional).
 * @return KalturaUser.
 */
KalturaUserService.prototype.update = function(callback, userId, user){
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'user', kaltura.toParams(user));
	this.client.queueServiceActionCall('user', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a user object for a specified user ID.
 * @param userId string The user's unique identifier in the partner's system (optional, default: null).
 * @return KalturaUser.
 */
KalturaUserService.prototype.get = function(callback, userId){
	if(!userId){
		userId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('user', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system.
 * @param loginId string The user's email address that identifies the user for login (optional).
 * @return KalturaUser.
 */
KalturaUserService.prototype.getByLoginId = function(callback, loginId){
	var kparams = {};
	this.client.addParam(kparams, 'loginId', loginId);
	this.client.queueServiceActionCall('user', 'getByLoginId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes a user from a partner account.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @return KalturaUser.
 */
KalturaUserService.prototype.deleteAction = function(callback, userId){
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('user', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists user objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
 * @param filter KalturaUserFilter A filter used to exclude specific types of users (optional, default: null).
 * @param pager KalturaFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return KalturaUserListResponse.
 */
KalturaUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('user', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Notifies that a user is banned from an account.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @return .
 */
KalturaUserService.prototype.notifyBan = function(callback, userId){
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('user', 'notifyBan', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password.
 * @param partnerId int The identifier of the partner account (optional).
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @param password string The user's password (optional).
 * @param expiry int The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours) (optional, default: 86400).
 * @param privileges string Special privileges (optional, default: *).
 * @return string.
 */
KalturaUserService.prototype.login = function(callback, partnerId, userId, password, expiry, privileges){
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = '*';
	}
	var kparams = {};
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'password', password);
	this.client.addParam(kparams, 'expiry', expiry);
	this.client.addParam(kparams, 'privileges', privileges);
	this.client.queueServiceActionCall('user', 'login', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Logs a user into a partner account with a user login ID and a user password.
 * @param loginId string The user's email address that identifies the user for login (optional).
 * @param password string The user's password (optional).
 * @param partnerId int The identifier of the partner account (optional, default: null).
 * @param expiry int The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours) (optional, default: 86400).
 * @param privileges string Special privileges (optional, default: *).
 * @return string.
 */
KalturaUserService.prototype.loginByLoginId = function(callback, loginId, password, partnerId, expiry, privileges){
	if(!partnerId){
		partnerId = null;
	}
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = '*';
	}
	var kparams = {};
	this.client.addParam(kparams, 'loginId', loginId);
	this.client.addParam(kparams, 'password', password);
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'expiry', expiry);
	this.client.addParam(kparams, 'privileges', privileges);
	this.client.queueServiceActionCall('user', 'loginByLoginId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates a user's login data: email, password, name.
 * @param oldLoginId string The user's current email address that identified the user for login (optional).
 * @param password string The user's current email address that identified the user for login (optional).
 * @param newLoginId string Optional, The user's email address that will identify the user for login (optional).
 * @param newPassword string Optional, The user's new password (optional).
 * @param newFirstName string Optional, The user's new first name (optional, default: null).
 * @param newLastName string Optional, The user's new last name (optional, default: null).
 * @return .
 */
KalturaUserService.prototype.updateLoginData = function(callback, oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName){
	if(!newLoginId){
		newLoginId = '';
	}
	if(!newPassword){
		newPassword = '';
	}
	if(!newFirstName){
		newFirstName = null;
	}
	if(!newLastName){
		newLastName = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'oldLoginId', oldLoginId);
	this.client.addParam(kparams, 'password', password);
	this.client.addParam(kparams, 'newLoginId', newLoginId);
	this.client.addParam(kparams, 'newPassword', newPassword);
	this.client.addParam(kparams, 'newFirstName', newFirstName);
	this.client.addParam(kparams, 'newLastName', newLastName);
	this.client.queueServiceActionCall('user', 'updateLoginData', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reset user's password and send the user an email to generate a new one.
 * @param email string The user's email address (login email) (optional).
 * @return .
 */
KalturaUserService.prototype.resetPassword = function(callback, email){
	var kparams = {};
	this.client.addParam(kparams, 'email', email);
	this.client.queueServiceActionCall('user', 'resetPassword', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set initial users password.
 * @param hashKey string The hash key used to identify the user (retrieved by email) (optional).
 * @param newPassword string The new password to set for the user (optional).
 * @return .
 */
KalturaUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var kparams = {};
	this.client.addParam(kparams, 'hashKey', hashKey);
	this.client.addParam(kparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('user', 'setInitialPassword', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Enables a user to log into a partner account using an email address and a password.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @param loginId string The user's email address that identifies the user for login (optional).
 * @param password string The user's password (optional, default: null).
 * @return KalturaUser.
 */
KalturaUserService.prototype.enableLogin = function(callback, userId, loginId, password){
	if(!password){
		password = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'loginId', loginId);
	this.client.addParam(kparams, 'password', password);
	this.client.queueServiceActionCall('user', 'enableLogin', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action.
 * @param userId string The user's unique identifier in the partner's system (optional, default: null).
 * @param loginId string The user's email address that identifies the user for login (optional, default: null).
 * @return KalturaUser.
 */
KalturaUserService.prototype.disableLogin = function(callback, userId, loginId){
	if(!userId){
		userId = null;
	}
	if(!loginId){
		loginId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'loginId', loginId);
	this.client.queueServiceActionCall('user', 'disableLogin', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index an entry by id.
 * @param id string  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return string.
 */
KalturaUserService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('user', 'index', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileData file  (optional).
 * @param bulkUploadData KalturaBulkUploadJobData  (optional, default: null).
 * @param bulkUploadUserData KalturaBulkUploadUserData  (optional, default: null).
 * @return KalturaBulkUpload.
 */
KalturaUserService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadUserData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadUserData){
		bulkUploadUserData = null;
	}
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(kparams, 'bulkUploadData', kaltura.toParams(bulkUploadData));
	}
	if (bulkUploadUserData !== null){
		this.client.addParam(kparams, 'bulkUploadUserData', kaltura.toParams(bulkUploadUserData));
	}
	this.client.queueServiceActionCall('user', 'addFromBulkUpload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action which checks whther user login.
 * @param filter KalturaUserLoginDataFilter  (optional).
 * @return bool.
 */
KalturaUserService.prototype.checkLoginDataExists = function(callback, filter){
	var kparams = {};
	this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	this.client.queueServiceActionCall('user', 'checkLoginDataExists', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: widget.
 * The available service actions:
 * @action add Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored.
 * @action update Update exisiting widget.
 * @action get Get widget by id.
 * @action clone Add widget based on existing widget.
 * Must provide valid sourceWidgetId.
 * @action list Retrieve a list of available widget depends on the filter given.
 */
function KalturaWidgetService(client){
	KalturaWidgetService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaWidgetService, kaltura.KalturaServiceBase);
module.exports.KalturaWidgetService = KalturaWidgetService;

/**
 * Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored.
 * @param widget KalturaWidget  (optional).
 * @return KalturaWidget.
 */
KalturaWidgetService.prototype.add = function(callback, widget){
	var kparams = {};
	this.client.addParam(kparams, 'widget', kaltura.toParams(widget));
	this.client.queueServiceActionCall('widget', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisiting widget.
 * @param id string  (optional).
 * @param widget KalturaWidget  (optional).
 * @return KalturaWidget.
 */
KalturaWidgetService.prototype.update = function(callback, id, widget){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'widget', kaltura.toParams(widget));
	this.client.queueServiceActionCall('widget', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get widget by id.
 * @param id string  (optional).
 * @return KalturaWidget.
 */
KalturaWidgetService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('widget', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add widget based on existing widget.
 * Must provide valid sourceWidgetId.
 * @param widget KalturaWidget  (optional).
 * @return KalturaWidget.
 */
KalturaWidgetService.prototype.cloneAction = function(callback, widget){
	var kparams = {};
	this.client.addParam(kparams, 'widget', kaltura.toParams(widget));
	this.client.queueServiceActionCall('widget', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available widget depends on the filter given.
 * @param filter KalturaWidgetFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaWidgetListResponse.
 */
KalturaWidgetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('widget', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: xInternal.
 * The available service actions:
 * @action xAddBulkDownload Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to.
 */
function KalturaXInternalService(client){
	KalturaXInternalService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaXInternalService, kaltura.KalturaServiceBase);
module.exports.KalturaXInternalService = KalturaXInternalService;

/**
 * Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to.
 * @param entryIds string Comma separated list of entry ids (optional).
 * @param flavorParamsId string  (optional).
 * @return string.
 */
KalturaXInternalService.prototype.xAddBulkDownload = function(callback, entryIds, flavorParamsId){
	if(!flavorParamsId){
		flavorParamsId = '';
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryIds', entryIds);
	this.client.addParam(kparams, 'flavorParamsId', flavorParamsId);
	this.client.queueServiceActionCall('xinternal', 'xAddBulkDownload', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: metadata.
 * The available service actions:
 * @action add Allows you to add a metadata object and metadata content associated with Kaltura object.
 * @action addFromFile Allows you to add a metadata object and metadata file associated with Kaltura object.
 * @action addFromUrl Allows you to add a metadata xml data from remote URL.
 * @action addFromBulk Allows you to add a metadata xml data from remote URL.
 * Enables different permissions than addFromUrl action.
 * @action get Retrieve a metadata object by id.
 * @action update Update an existing metadata object with new XML content.
 * @action updateFromFile Update an existing metadata object with new XML file.
 * @action list List metadata objects by filter and pager.
 * @action delete Delete an existing metadata.
 * @action invalidate Mark existing metadata as invalid
 * Used by batch metadata transform.
 * @action index Index metadata by id, will also index the related object.
 * @action updateFromXSL Action transforms current metadata object XML using a provided XSL.
 */
function KalturaMetadataService(client){
	KalturaMetadataService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaMetadataService, kaltura.KalturaServiceBase);
module.exports.KalturaMetadataService = KalturaMetadataService;

/**
 * Allows you to add a metadata object and metadata content associated with Kaltura object.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: KalturaMetadataObjectType).
 * @param objectId string  (optional).
 * @param xmlData string XML metadata (optional).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.add = function(callback, metadataProfileId, objectType, objectId, xmlData){
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(kparams, 'objectType', objectType);
	this.client.addParam(kparams, 'objectId', objectId);
	this.client.addParam(kparams, 'xmlData', xmlData);
	this.client.queueServiceActionCall('metadata_metadata', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata object and metadata file associated with Kaltura object.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: KalturaMetadataObjectType).
 * @param objectId string  (optional).
 * @param xmlFile file XML metadata (optional).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromFile = function(callback, metadataProfileId, objectType, objectId, xmlFile){
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(kparams, 'objectType', objectType);
	this.client.addParam(kparams, 'objectId', objectId);
	var kfiles = {};
	this.client.addParam(kfiles, 'xmlFile', xmlFile);
	this.client.queueServiceActionCall('metadata_metadata', 'addFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata xml data from remote URL.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: KalturaMetadataObjectType).
 * @param objectId string  (optional).
 * @param url string XML metadata remote url (optional).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromUrl = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(kparams, 'objectType', objectType);
	this.client.addParam(kparams, 'objectId', objectId);
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('metadata_metadata', 'addFromUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata xml data from remote URL.
 * Enables different permissions than addFromUrl action.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: KalturaMetadataObjectType).
 * @param objectId string  (optional).
 * @param url string XML metadata remote url (optional).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromBulk = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(kparams, 'objectType', objectType);
	this.client.addParam(kparams, 'objectId', objectId);
	this.client.addParam(kparams, 'url', url);
	this.client.queueServiceActionCall('metadata_metadata', 'addFromBulk', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a metadata object by id.
 * @param id int  (optional).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadata', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object with new XML content.
 * @param id int  (optional).
 * @param xmlData string XML metadata (optional, default: null).
 * @param version int Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.update = function(callback, id, xmlData, version){
	if(!xmlData){
		xmlData = null;
	}
	if(!version){
		version = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'xmlData', xmlData);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('metadata_metadata', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object with new XML file.
 * @param id int  (optional).
 * @param xmlFile file XML metadata (optional, default: null).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.updateFromFile = function(callback, id, xmlFile){
	if(!xmlFile){
		xmlFile = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'xmlFile', xmlFile);
	this.client.queueServiceActionCall('metadata_metadata', 'updateFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List metadata objects by filter and pager.
 * @param filter KalturaMetadataFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaMetadataListResponse.
 */
KalturaMetadataService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('metadata_metadata', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing metadata.
 * @param id int  (optional).
 * @return .
 */
KalturaMetadataService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadata', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark existing metadata as invalid
 * Used by batch metadata transform.
 * @param id int  (optional).
 * @param version int Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return .
 */
KalturaMetadataService.prototype.invalidate = function(callback, id, version){
	if(!version){
		version = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('metadata_metadata', 'invalidate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index metadata by id, will also index the related object.
 * @param id string  (optional).
 * @param shouldUpdate bool  (optional).
 * @return int.
 */
KalturaMetadataService.prototype.index = function(callback, id, shouldUpdate){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('metadata_metadata', 'index', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action transforms current metadata object XML using a provided XSL.
 * @param id int  (optional).
 * @param xslFile file  (optional).
 * @return KalturaMetadata.
 */
KalturaMetadataService.prototype.updateFromXSL = function(callback, id, xslFile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'xslFile', xslFile);
	this.client.queueServiceActionCall('metadata_metadata', 'updateFromXSL', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: metadataProfile.
 * The available service actions:
 * @action add Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
 * @action addFromFile Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
 * @action get Retrieve a metadata profile object by id.
 * @action update Update an existing metadata object.
 * @action list List metadata profile objects by filter and pager.
 * @action listFields List metadata profile fields by metadata profile id.
 * @action delete Delete an existing metadata profile.
 * @action revert Update an existing metadata object definition file.
 * @action updateDefinitionFromFile Update an existing metadata object definition file.
 * @action updateViewsFromFile Update an existing metadata object views file.
 * @action updateTransformationFromFile Update an existing metadata object xslt file.
 */
function KalturaMetadataProfileService(client){
	KalturaMetadataProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaMetadataProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaMetadataProfileService = KalturaMetadataProfileService;

/**
 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
 * @param metadataProfile KalturaMetadataProfile  (optional).
 * @param xsdData string XSD metadata definition (optional).
 * @param viewsData string UI views definition (optional, default: null).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.add = function(callback, metadataProfile, xsdData, viewsData){
	if(!viewsData){
		viewsData = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfile', kaltura.toParams(metadataProfile));
	this.client.addParam(kparams, 'xsdData', xsdData);
	this.client.addParam(kparams, 'viewsData', viewsData);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
 * @param metadataProfile KalturaMetadataProfile  (optional).
 * @param xsdFile file XSD metadata definition (optional).
 * @param viewsFile file UI views definition (optional, default: null).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.addFromFile = function(callback, metadataProfile, xsdFile, viewsFile){
	if(!viewsFile){
		viewsFile = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfile', kaltura.toParams(metadataProfile));
	var kfiles = {};
	this.client.addParam(kfiles, 'xsdFile', xsdFile);
	this.client.addParam(kfiles, 'viewsFile', viewsFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'addFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a metadata profile object by id.
 * @param id int  (optional).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object.
 * @param id int  (optional).
 * @param metadataProfile KalturaMetadataProfile  (optional).
 * @param xsdData string XSD metadata definition (optional, default: null).
 * @param viewsData string UI views definition (optional, default: null).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.update = function(callback, id, metadataProfile, xsdData, viewsData){
	if(!xsdData){
		xsdData = null;
	}
	if(!viewsData){
		viewsData = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'metadataProfile', kaltura.toParams(metadataProfile));
	this.client.addParam(kparams, 'xsdData', xsdData);
	this.client.addParam(kparams, 'viewsData', viewsData);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List metadata profile objects by filter and pager.
 * @param filter KalturaMetadataProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaMetadataProfileListResponse.
 */
KalturaMetadataProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('metadata_metadataprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List metadata profile fields by metadata profile id.
 * @param metadataProfileId int  (optional).
 * @return KalturaMetadataProfileFieldListResponse.
 */
KalturaMetadataProfileService.prototype.listFields = function(callback, metadataProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfileId', metadataProfileId);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'listFields', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing metadata profile.
 * @param id int  (optional).
 * @return .
 */
KalturaMetadataProfileService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object definition file.
 * @param id int  (optional).
 * @param toVersion int  (optional).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.revert = function(callback, id, toVersion){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'toVersion', toVersion);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'revert', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object definition file.
 * @param id int  (optional).
 * @param xsdFile file XSD metadata definition (optional).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateDefinitionFromFile = function(callback, id, xsdFile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'xsdFile', xsdFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'updateDefinitionFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object views file.
 * @param id int  (optional).
 * @param viewsFile file UI views file (optional).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateViewsFromFile = function(callback, id, viewsFile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'viewsFile', viewsFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'updateViewsFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object xslt file.
 * @param id int  (optional).
 * @param xsltFile file XSLT file, will be executed on every metadata add/update (optional).
 * @return KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateTransformationFromFile = function(callback, id, xsltFile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'xsltFile', xsltFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'updateTransformationFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: metadataBatch.
 * The available service actions:
 * @action getExclusiveTransformMetadataJobs batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM.
 * @action getTransformMetadataObjects batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count.
 */
function KalturaMetadataBatchService(client){
	KalturaMetadataBatchService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaMetadataBatchService, kaltura.KalturaServiceBase);
module.exports.KalturaMetadataBatchService = KalturaMetadataBatchService;

/**
 * batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM.
 * @param lockKey KalturaExclusiveLockKey The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param maxExecutionTime int The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process (optional).
 * @param numberOfJobs int The maximum number of jobs to return (optional).
 * @param filter KalturaBatchJobFilter Set of rules to fetch only rartial list of jobs (optional, default: null).
 * @param maxOffset int The maximum offset we accept for the distance from the best result (optional, default: null).
 * @return array.
 */
KalturaMetadataBatchService.prototype.getExclusiveTransformMetadataJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, maxOffset){
	if(!filter){
		filter = null;
	}
	if(!maxOffset){
		maxOffset = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'lockKey', kaltura.toParams(lockKey));
	this.client.addParam(kparams, 'maxExecutionTime', maxExecutionTime);
	this.client.addParam(kparams, 'numberOfJobs', numberOfJobs);
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.addParam(kparams, 'maxOffset', maxOffset);
	this.client.queueServiceActionCall('metadata_metadatabatch', 'getExclusiveTransformMetadataJobs', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count.
 * @param metadataProfileId int The id of the metadata profile (optional).
 * @param srcVersion int The old metadata profile version (optional).
 * @param destVersion int The new metadata profile version (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaTransformMetadataResponse.
 */
KalturaMetadataBatchService.prototype.getTransformMetadataObjects = function(callback, metadataProfileId, srcVersion, destVersion, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(kparams, 'srcVersion', srcVersion);
	this.client.addParam(kparams, 'destVersion', destVersion);
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('metadata_metadatabatch', 'getTransformMetadataObjects', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: documents.
 * The available service actions:
 * @action addFromUploadedFile Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action convert Convert entry.
 * @action get Get document entry by ID.
 * @action update Update document entry. Only the properties that were set will be updated.
 * @action delete Delete a document entry.
 * @action list List document entries by filter with paging support.
 * @action upload Upload a document file to Kaltura, then the file can be used to create a document entry.
 * @action convertPptToSwf This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @action updateContent Replace content associated with the given document entry.
 * @action approveReplace Approves document replacement.
 * @action cancelReplace Cancels document replacement.
 */
function KalturaDocumentsService(client){
	KalturaDocumentsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDocumentsService, kaltura.KalturaServiceBase);
module.exports.KalturaDocumentsService = KalturaDocumentsService;

/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @param documentEntry KalturaDocumentEntry Document entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var kparams = {};
	this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	this.client.addParam(kparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('document_documents', 'addFromUploadedFile', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy entry into new entry.
 * @param sourceEntryId string Document entry id to copy from (optional).
 * @param documentEntry KalturaDocumentEntry Document entry metadata (optional, default: null).
 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry){
		documentEntry = null;
	}
	if(!sourceFlavorParamsId){
		sourceFlavorParamsId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'sourceEntryId', sourceEntryId);
	if (documentEntry !== null){
		this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	}
	this.client.addParam(kparams, 'sourceFlavorParamsId', sourceFlavorParamsId);
	this.client.queueServiceActionCall('document_documents', 'addFromEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy flavor asset into new entry.
 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source (optional).
 * @param documentEntry KalturaDocumentEntry Document entry metadata (optional, default: null).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry){
		documentEntry = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'sourceFlavorAssetId', sourceFlavorAssetId);
	if (documentEntry !== null){
		this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	}
	this.client.queueServiceActionCall('document_documents', 'addFromFlavorAsset', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Convert entry.
 * @param entryId string Document entry id (optional).
 * @param conversionProfileId int  (optional, default: null).
 * @param dynamicConversionAttributes array  (optional, default: null).
 * @return bigint.
 */
KalturaDocumentsService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!dynamicConversionAttributes){
		dynamicConversionAttributes = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	if(dynamicConversionAttributes !== null){
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, 'dynamicConversionAttributes:' + index, kaltura.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('document_documents', 'convert', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get document entry by ID.
 * @param entryId string Document entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('document_documents', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update document entry. Only the properties that were set will be updated.
 * @param entryId string Document entry id to update (optional).
 * @param documentEntry KalturaDocumentEntry Document entry metadata to update (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'documentEntry', kaltura.toParams(documentEntry));
	this.client.queueServiceActionCall('document_documents', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a document entry.
 * @param entryId string Document entry id to delete (optional).
 * @return .
 */
KalturaDocumentsService.prototype.deleteAction = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List document entries by filter with paging support.
 * @param filter KalturaDocumentEntryFilter Document entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaDocumentListResponse.
 */
KalturaDocumentsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('document_documents', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
KalturaDocumentsService.prototype.upload = function(callback, fileData){
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('document_documents', 'upload', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @param entryId string  (optional).
 * @return string.
 */
KalturaDocumentsService.prototype.convertPptToSwf = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'convertPptToSwf', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Replace content associated with the given document entry.
 * @param entryId string document entry id to update (optional).
 * @param resource KalturaResource Resource to be used to replace entry doc content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'resource', kaltura.toParams(resource));
	this.client.addParam(kparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('document_documents', 'updateContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approves document replacement.
 * @param entryId string document entry id to replace (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.approveReplace = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'approveReplace', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Cancels document replacement.
 * @param entryId string Document entry id to cancel (optional).
 * @return KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.cancelReplace = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'cancelReplace', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: annotation.
 * The available service actions:
 * @action add Allows you to add an annotation object associated with an entry.
 * @action update Update annotation by id.
 * @action list List annotation objects by filter and pager.
 * @action addFromBulk Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action get Retrieve an CuePoint object by id.
 * @action count count cue point objects by filter.
 * @action delete delete cue point by id, and delete all children cue points.
 * @action updateStatus Update cuePoint status by id.
 */
function KalturaAnnotationService(client){
	KalturaAnnotationService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAnnotationService, kaltura.KalturaServiceBase);
module.exports.KalturaAnnotationService = KalturaAnnotationService;

/**
 * Allows you to add an annotation object associated with an entry.
 * @param annotation KalturaCuePoint  (optional).
 * @return KalturaAnnotation.
 */
KalturaAnnotationService.prototype.add = function(callback, annotation){
	var kparams = {};
	this.client.addParam(kparams, 'annotation', kaltura.toParams(annotation));
	this.client.queueServiceActionCall('annotation_annotation', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update annotation by id.
 * @param id string  (optional).
 * @param annotation KalturaCuePoint  (optional).
 * @return KalturaAnnotation.
 */
KalturaAnnotationService.prototype.update = function(callback, id, annotation){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'annotation', kaltura.toParams(annotation));
	this.client.queueServiceActionCall('annotation_annotation', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List annotation objects by filter and pager.
 * @param filter KalturaCuePointFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaAnnotationListResponse.
 */
KalturaAnnotationService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('annotation_annotation', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @param fileData file  (optional).
 * @return KalturaCuePointListResponse.
 */
KalturaAnnotationService.prototype.addFromBulk = function(callback, fileData){
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('annotation_annotation', 'addFromBulk', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an CuePoint object by id.
 * @param id string  (optional).
 * @return KalturaCuePoint.
 */
KalturaAnnotationService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('annotation_annotation', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * count cue point objects by filter.
 * @param filter KalturaCuePointFilter  (optional, default: null).
 * @return int.
 */
KalturaAnnotationService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.queueServiceActionCall('annotation_annotation', 'count', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete cue point by id, and delete all children cue points.
 * @param id string  (optional).
 * @return .
 */
KalturaAnnotationService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('annotation_annotation', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update cuePoint status by id.
 * @param id string  (optional).
 * @param status int  (optional, enum: KalturaCuePointStatus).
 * @return .
 */
KalturaAnnotationService.prototype.updateStatus = function(callback, id, status){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('annotation_annotation', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: aspera.
 * The available service actions:
 * @action getFaspUrl .
 */
function KalturaAsperaService(client){
	KalturaAsperaService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAsperaService, kaltura.KalturaServiceBase);
module.exports.KalturaAsperaService = KalturaAsperaService;

/**
 * .
 * @param flavorAssetId string  (optional).
 * @return string.
 */
KalturaAsperaService.prototype.getFaspUrl = function(callback, flavorAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'flavorAssetId', flavorAssetId);
	this.client.queueServiceActionCall('aspera_aspera', 'getFaspUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: attachmentAsset.
 * The available service actions:
 * @action add Add attachment asset.
 * @action setContent Update content of attachment asset.
 * @action update Update attachment asset.
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action get .
 * @action list List attachment Assets by filter and pager.
 * @action delete .
 */
function KalturaAttachmentAssetService(client){
	KalturaAttachmentAssetService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAttachmentAssetService, kaltura.KalturaServiceBase);
module.exports.KalturaAttachmentAssetService = KalturaAttachmentAssetService;

/**
 * Add attachment asset.
 * @param entryId string  (optional).
 * @param attachmentAsset KalturaAttachmentAsset  (optional).
 * @return KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.add = function(callback, entryId, attachmentAsset){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'attachmentAsset', kaltura.toParams(attachmentAsset));
	this.client.queueServiceActionCall('attachment_attachmentasset', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of attachment asset.
 * @param id string  (optional).
 * @param contentResource KalturaContentResource  (optional).
 * @return KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'contentResource', kaltura.toParams(contentResource));
	this.client.queueServiceActionCall('attachment_attachmentasset', 'setContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update attachment asset.
 * @param id string  (optional).
 * @param attachmentAsset KalturaAttachmentAsset  (optional).
 * @return KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.update = function(callback, id, attachmentAsset){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'attachmentAsset', kaltura.toParams(attachmentAsset));
	this.client.queueServiceActionCall('attachment_attachmentasset', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @return string.
 */
KalturaAttachmentAssetService.prototype.getUrl = function(callback, id, storageId){
	if(!storageId){
		storageId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'storageId', storageId);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'getUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return KalturaRemotePathListResponse.
 */
KalturaAttachmentAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'getRemotePaths', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param attachmentAssetId string  (optional).
 * @return KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.get = function(callback, attachmentAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'attachmentAssetId', attachmentAssetId);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List attachment Assets by filter and pager.
 * @param filter KalturaAssetFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaAttachmentAssetListResponse.
 */
KalturaAttachmentAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('attachment_attachmentasset', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param attachmentAssetId string  (optional).
 * @return .
 */
KalturaAttachmentAssetService.prototype.deleteAction = function(callback, attachmentAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'attachmentAssetId', attachmentAssetId);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: auditTrail.
 * The available service actions:
 * @action add Allows you to add an audit trail object and audit trail content associated with Kaltura object.
 * @action get Retrieve an audit trail object by id.
 * @action list List audit trail objects by filter and pager.
 */
function KalturaAuditTrailService(client){
	KalturaAuditTrailService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaAuditTrailService, kaltura.KalturaServiceBase);
module.exports.KalturaAuditTrailService = KalturaAuditTrailService;

/**
 * Allows you to add an audit trail object and audit trail content associated with Kaltura object.
 * @param auditTrail KalturaAuditTrail  (optional).
 * @return KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.add = function(callback, auditTrail){
	var kparams = {};
	this.client.addParam(kparams, 'auditTrail', kaltura.toParams(auditTrail));
	this.client.queueServiceActionCall('audit_audittrail', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an audit trail object by id.
 * @param id int  (optional).
 * @return KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('audit_audittrail', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List audit trail objects by filter and pager.
 * @param filter KalturaAuditTrailFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaAuditTrailListResponse.
 */
KalturaAuditTrailService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('audit_audittrail', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: bulk.
 * The available service actions:
 * @action get Get bulk upload batch job by id.
 * @action list List bulk upload batch jobs.
 * @action abort Aborts the bulk upload and all its child jobs.
 */
function KalturaBulkService(client){
	KalturaBulkService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaBulkService, kaltura.KalturaServiceBase);
module.exports.KalturaBulkService = KalturaBulkService;

/**
 * Get bulk upload batch job by id.
 * @param id int  (optional).
 * @return KalturaBulkUpload.
 */
KalturaBulkService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload_bulk', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List bulk upload batch jobs.
 * @param bulkUploadFilter KalturaBulkUploadFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaBulkUploadListResponse.
 */
KalturaBulkService.prototype.listAction = function(callback, bulkUploadFilter, pager){
	if(!bulkUploadFilter){
		bulkUploadFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (bulkUploadFilter !== null){
		this.client.addParam(kparams, 'bulkUploadFilter', kaltura.toParams(bulkUploadFilter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('bulkupload_bulk', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Aborts the bulk upload and all its child jobs.
 * @param id int job id (optional).
 * @return KalturaBulkUpload.
 */
KalturaBulkService.prototype.abort = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload_bulk', 'abort', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: captionAsset.
 * The available service actions:
 * @action add Add caption asset.
 * @action setContent Update content of caption asset.
 * @action update Update caption asset.
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action setAsDefault Markss the caption as default and removes that mark from all other caption assets of the entry.
 * @action get .
 * @action list List caption Assets by filter and pager.
 * @action delete .
 */
function KalturaCaptionAssetService(client){
	KalturaCaptionAssetService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaCaptionAssetService, kaltura.KalturaServiceBase);
module.exports.KalturaCaptionAssetService = KalturaCaptionAssetService;

/**
 * Add caption asset.
 * @param entryId string  (optional).
 * @param captionAsset KalturaCaptionAsset  (optional).
 * @return KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.add = function(callback, entryId, captionAsset){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'captionAsset', kaltura.toParams(captionAsset));
	this.client.queueServiceActionCall('caption_captionasset', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of caption asset.
 * @param id string  (optional).
 * @param contentResource KalturaContentResource  (optional).
 * @return KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'contentResource', kaltura.toParams(contentResource));
	this.client.queueServiceActionCall('caption_captionasset', 'setContent', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update caption asset.
 * @param id string  (optional).
 * @param captionAsset KalturaCaptionAsset  (optional).
 * @return KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.update = function(callback, id, captionAsset){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'captionAsset', kaltura.toParams(captionAsset));
	this.client.queueServiceActionCall('caption_captionasset', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @return string.
 */
KalturaCaptionAssetService.prototype.getUrl = function(callback, id, storageId){
	if(!storageId){
		storageId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'storageId', storageId);
	this.client.queueServiceActionCall('caption_captionasset', 'getUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return KalturaRemotePathListResponse.
 */
KalturaCaptionAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('caption_captionasset', 'getRemotePaths', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Markss the caption as default and removes that mark from all other caption assets of the entry.
 * @param captionAssetId string  (optional).
 * @return .
 */
KalturaCaptionAssetService.prototype.setAsDefault = function(callback, captionAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('caption_captionasset', 'setAsDefault', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param captionAssetId string  (optional).
 * @return KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.get = function(callback, captionAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('caption_captionasset', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List caption Assets by filter and pager.
 * @param filter KalturaAssetFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaCaptionAssetListResponse.
 */
KalturaCaptionAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('caption_captionasset', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param captionAssetId string  (optional).
 * @return .
 */
KalturaCaptionAssetService.prototype.deleteAction = function(callback, captionAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('caption_captionasset', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: captionParams.
 * The available service actions:
 * @action add Add new Caption Params.
 * @action get Get Caption Params by ID.
 * @action update Update Caption Params by ID.
 * @action delete Delete Caption Params by ID.
 * @action list List Caption Params by filter with paging support (By default - all system default params will be listed too).
 */
function KalturaCaptionParamsService(client){
	KalturaCaptionParamsService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaCaptionParamsService, kaltura.KalturaServiceBase);
module.exports.KalturaCaptionParamsService = KalturaCaptionParamsService;

/**
 * Add new Caption Params.
 * @param captionParams KalturaCaptionParams  (optional).
 * @return KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.add = function(callback, captionParams){
	var kparams = {};
	this.client.addParam(kparams, 'captionParams', kaltura.toParams(captionParams));
	this.client.queueServiceActionCall('caption_captionparams', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Caption Params by ID.
 * @param id int  (optional).
 * @return KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('caption_captionparams', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Caption Params by ID.
 * @param id int  (optional).
 * @param captionParams KalturaCaptionParams  (optional).
 * @return KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.update = function(callback, id, captionParams){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'captionParams', kaltura.toParams(captionParams));
	this.client.queueServiceActionCall('caption_captionparams', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Caption Params by ID.
 * @param id int  (optional).
 * @return .
 */
KalturaCaptionParamsService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('caption_captionparams', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Caption Params by filter with paging support (By default - all system default params will be listed too).
 * @param filter KalturaCaptionParamsFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaCaptionParamsListResponse.
 */
KalturaCaptionParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('caption_captionparams', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: captionAssetItem.
 * The available service actions:
 * @action parse Parse content of caption asset and index it.
 * @action search Search caption asset items by filter, pager and free text.
 * @action searchEntries Search caption asset items by filter, pager and free text.
 */
function KalturaCaptionAssetItemService(client){
	KalturaCaptionAssetItemService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaCaptionAssetItemService, kaltura.KalturaServiceBase);
module.exports.KalturaCaptionAssetItemService = KalturaCaptionAssetItemService;

/**
 * Parse content of caption asset and index it.
 * @param captionAssetId string  (optional).
 * @return .
 */
KalturaCaptionAssetItemService.prototype.parse = function(callback, captionAssetId){
	var kparams = {};
	this.client.addParam(kparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('captionsearch_captionassetitem', 'parse', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Search caption asset items by filter, pager and free text.
 * @param entryFilter KalturaBaseEntryFilter  (optional, default: null).
 * @param captionAssetItemFilter KalturaCaptionAssetItemFilter  (optional, default: null).
 * @param captionAssetItemPager KalturaFilterPager  (optional, default: null).
 * @return KalturaCaptionAssetItemListResponse.
 */
KalturaCaptionAssetItemService.prototype.search = function(callback, entryFilter, captionAssetItemFilter, captionAssetItemPager){
	if(!entryFilter){
		entryFilter = null;
	}
	if(!captionAssetItemFilter){
		captionAssetItemFilter = null;
	}
	if(!captionAssetItemPager){
		captionAssetItemPager = null;
	}
	var kparams = {};
	if (entryFilter !== null){
		this.client.addParam(kparams, 'entryFilter', kaltura.toParams(entryFilter));
	}
	if (captionAssetItemFilter !== null){
		this.client.addParam(kparams, 'captionAssetItemFilter', kaltura.toParams(captionAssetItemFilter));
	}
	if (captionAssetItemPager !== null){
		this.client.addParam(kparams, 'captionAssetItemPager', kaltura.toParams(captionAssetItemPager));
	}
	this.client.queueServiceActionCall('captionsearch_captionassetitem', 'search', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Search caption asset items by filter, pager and free text.
 * @param entryFilter KalturaBaseEntryFilter  (optional, default: null).
 * @param captionAssetItemFilter KalturaCaptionAssetItemFilter  (optional, default: null).
 * @param captionAssetItemPager KalturaFilterPager  (optional, default: null).
 * @return KalturaBaseEntryListResponse.
 */
KalturaCaptionAssetItemService.prototype.searchEntries = function(callback, entryFilter, captionAssetItemFilter, captionAssetItemPager){
	if(!entryFilter){
		entryFilter = null;
	}
	if(!captionAssetItemFilter){
		captionAssetItemFilter = null;
	}
	if(!captionAssetItemPager){
		captionAssetItemPager = null;
	}
	var kparams = {};
	if (entryFilter !== null){
		this.client.addParam(kparams, 'entryFilter', kaltura.toParams(entryFilter));
	}
	if (captionAssetItemFilter !== null){
		this.client.addParam(kparams, 'captionAssetItemFilter', kaltura.toParams(captionAssetItemFilter));
	}
	if (captionAssetItemPager !== null){
		this.client.addParam(kparams, 'captionAssetItemPager', kaltura.toParams(captionAssetItemPager));
	}
	this.client.queueServiceActionCall('captionsearch_captionassetitem', 'searchEntries', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: distributionProfile.
 * The available service actions:
 * @action add Add new Distribution Profile.
 * @action get Get Distribution Profile by id.
 * @action update Update Distribution Profile by id.
 * @action updateStatus Update Distribution Profile status by id.
 * @action delete Delete Distribution Profile by id.
 * @action list List all distribution providers.
 * @action listByPartner .
 */
function KalturaDistributionProfileService(client){
	KalturaDistributionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDistributionProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaDistributionProfileService = KalturaDistributionProfileService;

/**
 * Add new Distribution Profile.
 * @param distributionProfile KalturaDistributionProfile  (optional).
 * @return KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.add = function(callback, distributionProfile){
	var kparams = {};
	this.client.addParam(kparams, 'distributionProfile', kaltura.toParams(distributionProfile));
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Distribution Profile by id.
 * @param id int  (optional).
 * @return KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Distribution Profile by id.
 * @param id int  (optional).
 * @param distributionProfile KalturaDistributionProfile  (optional).
 * @return KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.update = function(callback, id, distributionProfile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'distributionProfile', kaltura.toParams(distributionProfile));
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Distribution Profile status by id.
 * @param id int  (optional).
 * @param status int  (optional, enum: KalturaDistributionProfileStatus).
 * @return KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.updateStatus = function(callback, id, status){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Distribution Profile by id.
 * @param id int  (optional).
 * @return .
 */
KalturaDistributionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter KalturaDistributionProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaPartnerFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'listByPartner', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: entryDistribution.
 * The available service actions:
 * @action add Add new Entry Distribution.
 * @action get Get Entry Distribution by id.
 * @action validate Validates Entry Distribution by id for submission.
 * @action update Update Entry Distribution by id.
 * @action delete Delete Entry Distribution by id.
 * @action list List all distribution providers.
 * @action submitAdd Submits Entry Distribution to the remote destination.
 * @action submitUpdate Submits Entry Distribution changes to the remote destination.
 * @action submitFetchReport Submits Entry Distribution report request.
 * @action submitDelete Deletes Entry Distribution from the remote destination.
 * @action retrySubmit Retries last submit action.
 */
function KalturaEntryDistributionService(client){
	KalturaEntryDistributionService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaEntryDistributionService, kaltura.KalturaServiceBase);
module.exports.KalturaEntryDistributionService = KalturaEntryDistributionService;

/**
 * Add new Entry Distribution.
 * @param entryDistribution KalturaEntryDistribution  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.add = function(callback, entryDistribution){
	var kparams = {};
	this.client.addParam(kparams, 'entryDistribution', kaltura.toParams(entryDistribution));
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Entry Distribution by id.
 * @param id int  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Validates Entry Distribution by id for submission.
 * @param id int  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.validate = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'validate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Entry Distribution by id.
 * @param id int  (optional).
 * @param entryDistribution KalturaEntryDistribution  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.update = function(callback, id, entryDistribution){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'entryDistribution', kaltura.toParams(entryDistribution));
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Entry Distribution by id.
 * @param id int  (optional).
 * @return .
 */
KalturaEntryDistributionService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter KalturaEntryDistributionFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaEntryDistributionListResponse.
 */
KalturaEntryDistributionService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits Entry Distribution to the remote destination.
 * @param id int  (optional).
 * @param submitWhenReady bool  (optional, default: false).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitAdd = function(callback, id, submitWhenReady){
	if(!submitWhenReady){
		submitWhenReady = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'submitWhenReady', submitWhenReady);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitAdd', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits Entry Distribution changes to the remote destination.
 * @param id int  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitUpdate = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitUpdate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits Entry Distribution report request.
 * @param id int  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitFetchReport = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitFetchReport', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes Entry Distribution from the remote destination.
 * @param id int  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitDelete = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitDelete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retries last submit action.
 * @param id int  (optional).
 * @return KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.retrySubmit = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'retrySubmit', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: distributionProvider.
 * The available service actions:
 * @action list List all distribution providers.
 */
function KalturaDistributionProviderService(client){
	KalturaDistributionProviderService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDistributionProviderService, kaltura.KalturaServiceBase);
module.exports.KalturaDistributionProviderService = KalturaDistributionProviderService;

/**
 * List all distribution providers.
 * @param filter KalturaDistributionProviderFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDistributionProviderListResponse.
 */
KalturaDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_distributionprovider', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 * The available service actions:
 * @action add Add new Generic Distribution Provider.
 * @action get Get Generic Distribution Provider by id.
 * @action update Update Generic Distribution Provider by id.
 * @action delete Delete Generic Distribution Provider by id.
 * @action list List all distribution providers.
 */
function KalturaGenericDistributionProviderService(client){
	KalturaGenericDistributionProviderService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaGenericDistributionProviderService, kaltura.KalturaServiceBase);
module.exports.KalturaGenericDistributionProviderService = KalturaGenericDistributionProviderService;

/**
 * Add new Generic Distribution Provider.
 * @param genericDistributionProvider KalturaGenericDistributionProvider  (optional).
 * @return KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.add = function(callback, genericDistributionProvider){
	var kparams = {};
	this.client.addParam(kparams, 'genericDistributionProvider', kaltura.toParams(genericDistributionProvider));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Generic Distribution Provider by id.
 * @param id int  (optional).
 * @return KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Generic Distribution Provider by id.
 * @param id int  (optional).
 * @param genericDistributionProvider KalturaGenericDistributionProvider  (optional).
 * @return KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.update = function(callback, id, genericDistributionProvider){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'genericDistributionProvider', kaltura.toParams(genericDistributionProvider));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Generic Distribution Provider by id.
 * @param id int  (optional).
 * @return .
 */
KalturaGenericDistributionProviderService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter KalturaGenericDistributionProviderFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaGenericDistributionProviderListResponse.
 */
KalturaGenericDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 * The available service actions:
 * @action add Add new Generic Distribution Provider Action.
 * @action addMrssTransform Add MRSS transform file to generic distribution provider action.
 * @action addMrssTransformFromFile Add MRSS transform file to generic distribution provider action.
 * @action addMrssValidate Add MRSS validate file to generic distribution provider action.
 * @action addMrssValidateFromFile Add MRSS validate file to generic distribution provider action.
 * @action addResultsTransform Add results transform file to generic distribution provider action.
 * @action addResultsTransformFromFile Add MRSS transform file to generic distribution provider action.
 * @action get Get Generic Distribution Provider Action by id.
 * @action getByProviderId Get Generic Distribution Provider Action by provider id.
 * @action updateByProviderId Update Generic Distribution Provider Action by provider id.
 * @action update Update Generic Distribution Provider Action by id.
 * @action delete Delete Generic Distribution Provider Action by id.
 * @action deleteByProviderId Delete Generic Distribution Provider Action by provider id.
 * @action list List all distribution providers.
 */
function KalturaGenericDistributionProviderActionService(client){
	KalturaGenericDistributionProviderActionService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaGenericDistributionProviderActionService, kaltura.KalturaServiceBase);
module.exports.KalturaGenericDistributionProviderActionService = KalturaGenericDistributionProviderActionService;

/**
 * Add new Generic Distribution Provider Action.
 * @param genericDistributionProviderAction KalturaGenericDistributionProviderAction  (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.add = function(callback, genericDistributionProviderAction){
	var kparams = {};
	this.client.addParam(kparams, 'genericDistributionProviderAction', kaltura.toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xslData string XSL MRSS transformation data (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransform = function(callback, id, xslData){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'xslData', xslData);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssTransform', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xslFile file XSL MRSS transformation file (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransformFromFile = function(callback, id, xslFile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'xslFile', xslFile);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssTransformFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS validate file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xsdData string XSD MRSS validatation data (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidate = function(callback, id, xsdData){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'xsdData', xsdData);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssValidate', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS validate file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xsdFile file XSD MRSS validatation file (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidateFromFile = function(callback, id, xsdFile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'xsdFile', xsdFile);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssValidateFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add results transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param transformData string transformation data xsl, xPath or regex (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransform = function(callback, id, transformData){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'transformData', transformData);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addResultsTransform', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param transformFile file transformation file xsl, xPath or regex (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransformFromFile = function(callback, id, transformFile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	var kfiles = {};
	this.client.addParam(kfiles, 'transformFile', transformFile);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addResultsTransformFromFile', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Generic Distribution Provider Action by id.
 * @param id int  (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Generic Distribution Provider Action by provider id.
 * @param genericDistributionProviderId int  (optional).
 * @param actionType int  (optional, enum: KalturaDistributionAction).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.getByProviderId = function(callback, genericDistributionProviderId, actionType){
	var kparams = {};
	this.client.addParam(kparams, 'genericDistributionProviderId', genericDistributionProviderId);
	this.client.addParam(kparams, 'actionType', actionType);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'getByProviderId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Generic Distribution Provider Action by provider id.
 * @param genericDistributionProviderId int  (optional).
 * @param actionType int  (optional, enum: KalturaDistributionAction).
 * @param genericDistributionProviderAction KalturaGenericDistributionProviderAction  (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.updateByProviderId = function(callback, genericDistributionProviderId, actionType, genericDistributionProviderAction){
	var kparams = {};
	this.client.addParam(kparams, 'genericDistributionProviderId', genericDistributionProviderId);
	this.client.addParam(kparams, 'actionType', actionType);
	this.client.addParam(kparams, 'genericDistributionProviderAction', kaltura.toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'updateByProviderId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Generic Distribution Provider Action by id.
 * @param id int  (optional).
 * @param genericDistributionProviderAction KalturaGenericDistributionProviderAction  (optional).
 * @return KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.update = function(callback, id, genericDistributionProviderAction){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'genericDistributionProviderAction', kaltura.toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Generic Distribution Provider Action by id.
 * @param id int  (optional).
 * @return .
 */
KalturaGenericDistributionProviderActionService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Generic Distribution Provider Action by provider id.
 * @param genericDistributionProviderId int  (optional).
 * @param actionType int  (optional, enum: KalturaDistributionAction).
 * @return .
 */
KalturaGenericDistributionProviderActionService.prototype.deleteByProviderId = function(callback, genericDistributionProviderId, actionType){
	var kparams = {};
	this.client.addParam(kparams, 'genericDistributionProviderId', genericDistributionProviderId);
	this.client.addParam(kparams, 'actionType', actionType);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'deleteByProviderId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter KalturaGenericDistributionProviderActionFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaGenericDistributionProviderActionListResponse.
 */
KalturaGenericDistributionProviderActionService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: contentDistributionBatch.
 * The available service actions:
 * @action updateSunStatus updates entry distribution sun status in the search engine.
 * @action createRequiredJobs creates all required jobs according to entry distribution dirty flags.
 * @action getAssetUrl returns absolute valid url for asset file.
 */
function KalturaContentDistributionBatchService(client){
	KalturaContentDistributionBatchService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaContentDistributionBatchService, kaltura.KalturaServiceBase);
module.exports.KalturaContentDistributionBatchService = KalturaContentDistributionBatchService;

/**
 * updates entry distribution sun status in the search engine.
 * @return .
 */
KalturaContentDistributionBatchService.prototype.updateSunStatus = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('contentdistribution_contentdistributionbatch', 'updateSunStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * creates all required jobs according to entry distribution dirty flags.
 * @return .
 */
KalturaContentDistributionBatchService.prototype.createRequiredJobs = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('contentdistribution_contentdistributionbatch', 'createRequiredJobs', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * returns absolute valid url for asset file.
 * @param assetId string  (optional).
 * @return string.
 */
KalturaContentDistributionBatchService.prototype.getAssetUrl = function(callback, assetId){
	var kparams = {};
	this.client.addParam(kparams, 'assetId', assetId);
	this.client.queueServiceActionCall('contentdistribution_contentdistributionbatch', 'getAssetUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: cuePoint.
 * The available service actions:
 * @action add Allows you to add an cue point object associated with an entry.
 * @action addFromBulk Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action get Retrieve an CuePoint object by id.
 * @action list List cue point objects by filter and pager.
 * @action count count cue point objects by filter.
 * @action update Update cue point by id.
 * @action delete delete cue point by id, and delete all children cue points.
 * @action updateStatus Update cuePoint status by id.
 */
function KalturaCuePointService(client){
	KalturaCuePointService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaCuePointService, kaltura.KalturaServiceBase);
module.exports.KalturaCuePointService = KalturaCuePointService;

/**
 * Allows you to add an cue point object associated with an entry.
 * @param cuePoint KalturaCuePoint  (optional).
 * @return KalturaCuePoint.
 */
KalturaCuePointService.prototype.add = function(callback, cuePoint){
	var kparams = {};
	this.client.addParam(kparams, 'cuePoint', kaltura.toParams(cuePoint));
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @param fileData file  (optional).
 * @return KalturaCuePointListResponse.
 */
KalturaCuePointService.prototype.addFromBulk = function(callback, fileData){
	var kparams = {};
	var kfiles = {};
	this.client.addParam(kfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'addFromBulk', kparams, kfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an CuePoint object by id.
 * @param id string  (optional).
 * @return KalturaCuePoint.
 */
KalturaCuePointService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List cue point objects by filter and pager.
 * @param filter KalturaCuePointFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaCuePointListResponse.
 */
KalturaCuePointService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * count cue point objects by filter.
 * @param filter KalturaCuePointFilter  (optional, default: null).
 * @return int.
 */
KalturaCuePointService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'count', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update cue point by id.
 * @param id string  (optional).
 * @param cuePoint KalturaCuePoint  (optional).
 * @return KalturaCuePoint.
 */
KalturaCuePointService.prototype.update = function(callback, id, cuePoint){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'cuePoint', kaltura.toParams(cuePoint));
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete cue point by id, and delete all children cue points.
 * @param id string  (optional).
 * @return .
 */
KalturaCuePointService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update cuePoint status by id.
 * @param id string  (optional).
 * @param status int  (optional, enum: KalturaCuePointStatus).
 * @return .
 */
KalturaCuePointService.prototype.updateStatus = function(callback, id, status){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: dropFolder.
 * The available service actions:
 * @action add Allows you to add a new KalturaDropFolder object.
 * @action get Retrieve a KalturaDropFolder object by ID.
 * @action update Update an existing KalturaDropFolder object.
 * @action delete Mark the KalturaDropFolder object as deleted.
 * @action list List KalturaDropFolder objects.
 */
function KalturaDropFolderService(client){
	KalturaDropFolderService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDropFolderService, kaltura.KalturaServiceBase);
module.exports.KalturaDropFolderService = KalturaDropFolderService;

/**
 * Allows you to add a new KalturaDropFolder object.
 * @param dropFolder KalturaDropFolder  (optional).
 * @return KalturaDropFolder.
 */
KalturaDropFolderService.prototype.add = function(callback, dropFolder){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolder', kaltura.toParams(dropFolder));
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaDropFolder object by ID.
 * @param dropFolderId int  (optional).
 * @return KalturaDropFolder.
 */
KalturaDropFolderService.prototype.get = function(callback, dropFolderId){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderId', dropFolderId);
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing KalturaDropFolder object.
 * @param dropFolderId int  (optional).
 * @param dropFolder KalturaDropFolder Id (optional).
 * @return KalturaDropFolder.
 */
KalturaDropFolderService.prototype.update = function(callback, dropFolderId, dropFolder){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderId', dropFolderId);
	this.client.addParam(kparams, 'dropFolder', kaltura.toParams(dropFolder));
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaDropFolder object as deleted.
 * @param dropFolderId int  (optional).
 * @return KalturaDropFolder.
 */
KalturaDropFolderService.prototype.deleteAction = function(callback, dropFolderId){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderId', dropFolderId);
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List KalturaDropFolder objects.
 * @param filter KalturaDropFolderFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDropFolderListResponse.
 */
KalturaDropFolderService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: dropFolderFile.
 * The available service actions:
 * @action add Allows you to add a new KalturaDropFolderFile object.
 * @action get Retrieve a KalturaDropFolderFile object by ID.
 * @action update Update an existing KalturaDropFolderFile object.
 * @action updateStatus Update status of KalturaDropFolderFile.
 * @action delete Mark the KalturaDropFolderFile object as deleted.
 * @action list List KalturaDropFolderFile objects.
 * @action ignore Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
 */
function KalturaDropFolderFileService(client){
	KalturaDropFolderFileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDropFolderFileService, kaltura.KalturaServiceBase);
module.exports.KalturaDropFolderFileService = KalturaDropFolderFileService;

/**
 * Allows you to add a new KalturaDropFolderFile object.
 * @param dropFolderFile KalturaDropFolderFile  (optional).
 * @return KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.add = function(callback, dropFolderFile){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderFile', kaltura.toParams(dropFolderFile));
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaDropFolderFile object by ID.
 * @param dropFolderFileId int  (optional).
 * @return KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.get = function(callback, dropFolderFileId){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderFileId', dropFolderFileId);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing KalturaDropFolderFile object.
 * @param dropFolderFileId int  (optional).
 * @param dropFolderFile KalturaDropFolderFile Id (optional).
 * @return KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.update = function(callback, dropFolderFileId, dropFolderFile){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderFileId', dropFolderFileId);
	this.client.addParam(kparams, 'dropFolderFile', kaltura.toParams(dropFolderFile));
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update status of KalturaDropFolderFile.
 * @param dropFolderFileId int  (optional).
 * @param status int  (optional, enum: KalturaDropFolderFileStatus).
 * @return KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.updateStatus = function(callback, dropFolderFileId, status){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderFileId', dropFolderFileId);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaDropFolderFile object as deleted.
 * @param dropFolderFileId int  (optional).
 * @return KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.deleteAction = function(callback, dropFolderFileId){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderFileId', dropFolderFileId);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List KalturaDropFolderFile objects.
 * @param filter KalturaDropFolderFileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDropFolderFileListResponse.
 */
KalturaDropFolderFileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
 * @param dropFolderFileId int  (optional).
 * @return KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.ignore = function(callback, dropFolderFileId){
	var kparams = {};
	this.client.addParam(kparams, 'dropFolderFileId', dropFolderFileId);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'ignore', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: eventNotificationTemplate.
 * The available service actions:
 * @action add This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead.
 * @action clone This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action.
 * @action get Retrieve an event notification template object by id.
 * @action update Update an existing event notification template object.
 * @action updateStatus Update event notification template status by id.
 * @action delete Delete an event notification template object.
 * @action list list event notification template objects.
 * @action listByPartner .
 * @action dispatch Dispatch event notification object by id.
 * @action listTemplates Action lists the template partner event notification templates.
 * @action register Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
 */
function KalturaEventNotificationTemplateService(client){
	KalturaEventNotificationTemplateService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaEventNotificationTemplateService, kaltura.KalturaServiceBase);
module.exports.KalturaEventNotificationTemplateService = KalturaEventNotificationTemplateService;

/**
 * This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead.
 * @param eventNotificationTemplate KalturaEventNotificationTemplate  (optional).
 * @return KalturaEventNotificationTemplate.
 */
KalturaEventNotificationTemplateService.prototype.add = function(callback, eventNotificationTemplate){
	var kparams = {};
	this.client.addParam(kparams, 'eventNotificationTemplate', kaltura.toParams(eventNotificationTemplate));
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action.
 * @param id int source template to clone (optional).
 * @param eventNotificationTemplate KalturaEventNotificationTemplate overwrite configuration object (optional, default: null).
 * @return KalturaEventNotificationTemplate.
 */
KalturaEventNotificationTemplateService.prototype.cloneAction = function(callback, id, eventNotificationTemplate){
	if(!eventNotificationTemplate){
		eventNotificationTemplate = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	if (eventNotificationTemplate !== null){
		this.client.addParam(kparams, 'eventNotificationTemplate', kaltura.toParams(eventNotificationTemplate));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'clone', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an event notification template object by id.
 * @param id int  (optional).
 * @return KalturaEventNotificationTemplate.
 */
KalturaEventNotificationTemplateService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing event notification template object.
 * @param id int  (optional).
 * @param eventNotificationTemplate KalturaEventNotificationTemplate  (optional).
 * @return KalturaEventNotificationTemplate.
 */
KalturaEventNotificationTemplateService.prototype.update = function(callback, id, eventNotificationTemplate){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'eventNotificationTemplate', kaltura.toParams(eventNotificationTemplate));
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update event notification template status by id.
 * @param id int  (optional).
 * @param status int  (optional, enum: KalturaEventNotificationTemplateStatus).
 * @return KalturaEventNotificationTemplate.
 */
KalturaEventNotificationTemplateService.prototype.updateStatus = function(callback, id, status){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an event notification template object.
 * @param id int  (optional).
 * @return .
 */
KalturaEventNotificationTemplateService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * list event notification template objects.
 * @param filter KalturaEventNotificationTemplateFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaEventNotificationTemplateListResponse.
 */
KalturaEventNotificationTemplateService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaPartnerFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaEventNotificationTemplateListResponse.
 */
KalturaEventNotificationTemplateService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'listByPartner', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Dispatch event notification object by id.
 * @param id int  (optional).
 * @param scope KalturaEventNotificationScope  (optional).
 * @return int.
 */
KalturaEventNotificationTemplateService.prototype.dispatch = function(callback, id, scope){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'scope', kaltura.toParams(scope));
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'dispatch', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action lists the template partner event notification templates.
 * @param filter KalturaEventNotificationTemplateFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaEventNotificationTemplateListResponse.
 */
KalturaEventNotificationTemplateService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'listTemplates', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
 * @param notificationTemplateSystemName string Existing push notification template system name (optional).
 * @param userParamsArray array User params (optional).
 * @return KalturaPushNotificationData.
 */
KalturaEventNotificationTemplateService.prototype.register = function(callback, notificationTemplateSystemName, userParamsArray){
	var kparams = {};
	this.client.addParam(kparams, 'notificationTemplateSystemName', notificationTemplateSystemName);
for(var index in userParamsArray)
{
	var obj = userParamsArray[index];
	this.client.addParam(kparams, 'userParamsArray:' + index, kaltura.toParams(obj));
}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'register', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: fileSync.
 * The available service actions:
 * @action list List file syce objects by filter and pager.
 * @action update Update file sync by id.
 */
function KalturaFileSyncService(client){
	KalturaFileSyncService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaFileSyncService, kaltura.KalturaServiceBase);
module.exports.KalturaFileSyncService = KalturaFileSyncService;

/**
 * List file syce objects by filter and pager.
 * @param filter KalturaFileSyncFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaFileSyncListResponse.
 */
KalturaFileSyncService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('filesync_filesync', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update file sync by id.
 * @param id int  (optional).
 * @param fileSync KalturaFileSync  (optional).
 * @return KalturaFileSync.
 */
KalturaFileSyncService.prototype.update = function(callback, id, fileSync){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'fileSync', kaltura.toParams(fileSync));
	this.client.queueServiceActionCall('filesync_filesync', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: sharepointExtension.
 * The available service actions:
 * @action isVersionSupported Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension).
 * @action listUiconfs list uiconfs for sharepoint extension.
 */
function KalturaSharepointExtensionService(client){
	KalturaSharepointExtensionService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaSharepointExtensionService, kaltura.KalturaServiceBase);
module.exports.KalturaSharepointExtensionService = KalturaSharepointExtensionService;

/**
 * Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension).
 * @param serverMajor int  (optional).
 * @param serverMinor int  (optional).
 * @param serverBuild int  (optional).
 * @return bool.
 */
KalturaSharepointExtensionService.prototype.isVersionSupported = function(callback, serverMajor, serverMinor, serverBuild){
	var kparams = {};
	this.client.addParam(kparams, 'serverMajor', serverMajor);
	this.client.addParam(kparams, 'serverMinor', serverMinor);
	this.client.addParam(kparams, 'serverBuild', serverBuild);
	this.client.queueServiceActionCall('kalturasharepointextension_sharepointextension', 'isVersionSupported', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * list uiconfs for sharepoint extension.
 * @return KalturaUiConfListResponse.
 */
KalturaSharepointExtensionService.prototype.listUiconfs = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('kalturasharepointextension_sharepointextension', 'listUiconfs', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: like.
 * The available service actions:
 * @action like .
 * @action unlike .
 * @action checkLikeExists .
 * @action list .
 */
function KalturaLikeService(client){
	KalturaLikeService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaLikeService, kaltura.KalturaServiceBase);
module.exports.KalturaLikeService = KalturaLikeService;

/**
 * .
 * @param entryId string  (optional).
 * @return bool.
 */
KalturaLikeService.prototype.like = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('like_like', 'like', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @return bool.
 */
KalturaLikeService.prototype.unlike = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('like_like', 'unlike', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param userId string  (optional, default: null).
 * @return bool.
 */
KalturaLikeService.prototype.checkLikeExists = function(callback, entryId, userId){
	if(!userId){
		userId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('like_like', 'checkLikeExists', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaLikeFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaLikeListResponse.
 */
KalturaLikeService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('like_like', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: filesyncImportBatch.
 * The available service actions:
 * @action lockPendingFileSyncs batch lockPendingFileSyncs action locks file syncs for import by the file sync periodic worker.
 * @action extendFileSyncLock batch extendFileSyncLock action extends the expiration of a file sync lock.
 */
function KalturaFilesyncImportBatchService(client){
	KalturaFilesyncImportBatchService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaFilesyncImportBatchService, kaltura.KalturaServiceBase);
module.exports.KalturaFilesyncImportBatchService = KalturaFilesyncImportBatchService;

/**
 * batch lockPendingFileSyncs action locks file syncs for import by the file sync periodic worker.
 * @param filter KalturaFileSyncFilter  (optional).
 * @param workerId int The id of the file sync import worker (optional).
 * @param sourceDc int The id of the DC from which the file syncs should be pulled (optional).
 * @param maxCount int The maximum number of file syncs that should be returned (optional).
 * @param maxSize int The maximum total size of file syncs that should be returned, this limit may be exceeded by one file sync (optional, default: null).
 * @return KalturaLockFileSyncsResponse.
 */
KalturaFilesyncImportBatchService.prototype.lockPendingFileSyncs = function(callback, filter, workerId, sourceDc, maxCount, maxSize){
	if(!maxSize){
		maxSize = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	this.client.addParam(kparams, 'workerId', workerId);
	this.client.addParam(kparams, 'sourceDc', sourceDc);
	this.client.addParam(kparams, 'maxCount', maxCount);
	this.client.addParam(kparams, 'maxSize', maxSize);
	this.client.queueServiceActionCall('multicenters_filesyncimportbatch', 'lockPendingFileSyncs', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * batch extendFileSyncLock action extends the expiration of a file sync lock.
 * @param id int The id of the file sync (optional).
 * @return .
 */
KalturaFilesyncImportBatchService.prototype.extendFileSyncLock = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('multicenters_filesyncimportbatch', 'extendFileSyncLock', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: shortLink.
 * The available service actions:
 * @action list List short link objects by filter and pager.
 * @action add Allows you to add a short link object.
 * @action get Retrieve an short link object by id.
 * @action update Update exisitng short link.
 * @action delete Mark the short link as deleted.
 */
function KalturaShortLinkService(client){
	KalturaShortLinkService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaShortLinkService, kaltura.KalturaServiceBase);
module.exports.KalturaShortLinkService = KalturaShortLinkService;

/**
 * List short link objects by filter and pager.
 * @param filter KalturaShortLinkFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaShortLinkListResponse.
 */
KalturaShortLinkService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('shortlink_shortlink', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a short link object.
 * @param shortLink KalturaShortLink  (optional).
 * @return KalturaShortLink.
 */
KalturaShortLinkService.prototype.add = function(callback, shortLink){
	var kparams = {};
	this.client.addParam(kparams, 'shortLink', kaltura.toParams(shortLink));
	this.client.queueServiceActionCall('shortlink_shortlink', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an short link object by id.
 * @param id string  (optional).
 * @return KalturaShortLink.
 */
KalturaShortLinkService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('shortlink_shortlink', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisitng short link.
 * @param id string  (optional).
 * @param shortLink KalturaShortLink  (optional).
 * @return KalturaShortLink.
 */
KalturaShortLinkService.prototype.update = function(callback, id, shortLink){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'shortLink', kaltura.toParams(shortLink));
	this.client.queueServiceActionCall('shortlink_shortlink', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the short link as deleted.
 * @param id string  (optional).
 * @return KalturaShortLink.
 */
KalturaShortLinkService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('shortlink_shortlink', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: tag.
 * The available service actions:
 * @action search .
 * @action deletePending Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags.
 * @action indexCategoryEntryTags .
 */
function KalturaTagService(client){
	KalturaTagService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaTagService, kaltura.KalturaServiceBase);
module.exports.KalturaTagService = KalturaTagService;

/**
 * .
 * @param tagFilter KalturaTagFilter  (optional).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaTagListResponse.
 */
KalturaTagService.prototype.search = function(callback, tagFilter, pager){
	if(!pager){
		pager = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'tagFilter', kaltura.toParams(tagFilter));
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('tagsearch_tag', 'search', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags.
 * @return int.
 */
KalturaTagService.prototype.deletePending = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('tagsearch_tag', 'deletePending', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param categoryId int  (optional).
 * @param pcToDecrement string  (optional).
 * @param pcToIncrement string  (optional).
 * @return .
 */
KalturaTagService.prototype.indexCategoryEntryTags = function(callback, categoryId, pcToDecrement, pcToIncrement){
	var kparams = {};
	this.client.addParam(kparams, 'categoryId', categoryId);
	this.client.addParam(kparams, 'pcToDecrement', pcToDecrement);
	this.client.addParam(kparams, 'pcToIncrement', pcToIncrement);
	this.client.queueServiceActionCall('tagsearch_tag', 'indexCategoryEntryTags', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: varConsole.
 * The available service actions:
 * @action getPartnerUsage Function which calulates partner usage of a group of a VAR's sub-publishers.
 * @action updateStatus Function to change a sub-publisher's status.
 */
function KalturaVarConsoleService(client){
	KalturaVarConsoleService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaVarConsoleService, kaltura.KalturaServiceBase);
module.exports.KalturaVarConsoleService = KalturaVarConsoleService;

/**
 * Function which calulates partner usage of a group of a VAR's sub-publishers.
 * @param partnerFilter KalturaPartnerFilter  (optional, default: null).
 * @param usageFilter KalturaReportInputFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaPartnerUsageListResponse.
 */
KalturaVarConsoleService.prototype.getPartnerUsage = function(callback, partnerFilter, usageFilter, pager){
	if(!partnerFilter){
		partnerFilter = null;
	}
	if(!usageFilter){
		usageFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (partnerFilter !== null){
		this.client.addParam(kparams, 'partnerFilter', kaltura.toParams(partnerFilter));
	}
	if (usageFilter !== null){
		this.client.addParam(kparams, 'usageFilter', kaltura.toParams(usageFilter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('varconsole_varconsole', 'getPartnerUsage', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Function to change a sub-publisher's status.
 * @param id int  (optional).
 * @param status int  (optional, enum: KalturaPartnerStatus).
 * @return .
 */
KalturaVarConsoleService.prototype.updateStatus = function(callback, id, status){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('varconsole_varconsole', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: virusScanProfile.
 * The available service actions:
 * @action list List virus scan profile objects by filter and pager.
 * @action add Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
 * @action get Retrieve an virus scan profile object by id.
 * @action update Update exisitng virus scan profile, it is possible to update the virus scan profile id too.
 * @action delete Mark the virus scan profile as deleted.
 * @action scan Scan flavor asset according to virus scan profile.
 */
function KalturaVirusScanProfileService(client){
	KalturaVirusScanProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaVirusScanProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaVirusScanProfileService = KalturaVirusScanProfileService;

/**
 * List virus scan profile objects by filter and pager.
 * @param filter KalturaVirusScanProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaVirusScanProfileListResponse.
 */
KalturaVirusScanProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
 * @param virusScanProfile KalturaVirusScanProfile  (optional).
 * @return KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.add = function(callback, virusScanProfile){
	var kparams = {};
	this.client.addParam(kparams, 'virusScanProfile', kaltura.toParams(virusScanProfile));
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an virus scan profile object by id.
 * @param virusScanProfileId int  (optional).
 * @return KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.get = function(callback, virusScanProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'virusScanProfileId', virusScanProfileId);
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisitng virus scan profile, it is possible to update the virus scan profile id too.
 * @param virusScanProfileId int  (optional).
 * @param virusScanProfile KalturaVirusScanProfile Id (optional).
 * @return KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.update = function(callback, virusScanProfileId, virusScanProfile){
	var kparams = {};
	this.client.addParam(kparams, 'virusScanProfileId', virusScanProfileId);
	this.client.addParam(kparams, 'virusScanProfile', kaltura.toParams(virusScanProfile));
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the virus scan profile as deleted.
 * @param virusScanProfileId int  (optional).
 * @return KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.deleteAction = function(callback, virusScanProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'virusScanProfileId', virusScanProfileId);
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Scan flavor asset according to virus scan profile.
 * @param flavorAssetId string  (optional).
 * @param virusScanProfileId int  (optional, default: null).
 * @return int.
 */
KalturaVirusScanProfileService.prototype.scan = function(callback, flavorAssetId, virusScanProfileId){
	if(!virusScanProfileId){
		virusScanProfileId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'flavorAssetId', flavorAssetId);
	this.client.addParam(kparams, 'virusScanProfileId', virusScanProfileId);
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'scan', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: externalMedia.
 * The available service actions:
 * @action add Add external media entry.
 * @action get Get external media entry by ID.
 * @action update Update external media entry. Only the properties that were set will be updated.
 * @action delete Delete a external media entry.
 * @action list List media entries by filter with paging support.
 * @action count Count media entries by filter.
 */
function KalturaExternalMediaService(client){
	KalturaExternalMediaService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaExternalMediaService, kaltura.KalturaServiceBase);
module.exports.KalturaExternalMediaService = KalturaExternalMediaService;

/**
 * Add external media entry.
 * @param entry KalturaExternalMediaEntry  (optional).
 * @return KalturaExternalMediaEntry.
 */
KalturaExternalMediaService.prototype.add = function(callback, entry){
	var kparams = {};
	this.client.addParam(kparams, 'entry', kaltura.toParams(entry));
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get external media entry by ID.
 * @param id string External media entry id (optional).
 * @return KalturaExternalMediaEntry.
 */
KalturaExternalMediaService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update external media entry. Only the properties that were set will be updated.
 * @param id string External media entry id to update (optional).
 * @param entry KalturaExternalMediaEntry External media entry object to update (optional).
 * @return KalturaExternalMediaEntry.
 */
KalturaExternalMediaService.prototype.update = function(callback, id, entry){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'entry', kaltura.toParams(entry));
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a external media entry.
 * @param id string External media entry id to delete (optional).
 * @return .
 */
KalturaExternalMediaService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List media entries by filter with paging support.
 * @param filter KalturaExternalMediaEntryFilter External media entry filter (optional, default: null).
 * @param pager KalturaFilterPager Pager (optional, default: null).
 * @return KalturaExternalMediaEntryListResponse.
 */
KalturaExternalMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count media entries by filter.
 * @param filter KalturaExternalMediaEntryFilter External media entry filter (optional, default: null).
 * @return int.
 */
KalturaExternalMediaService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'count', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: drmPolicy.
 * The available service actions:
 * @action add Allows you to add a new DrmPolicy object.
 * @action get Retrieve a KalturaDrmPolicy object by ID.
 * @action update Update an existing KalturaDrmPolicy object.
 * @action delete Mark the KalturaDrmPolicy object as deleted.
 * @action list List KalturaDrmPolicy objects.
 */
function KalturaDrmPolicyService(client){
	KalturaDrmPolicyService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDrmPolicyService, kaltura.KalturaServiceBase);
module.exports.KalturaDrmPolicyService = KalturaDrmPolicyService;

/**
 * Allows you to add a new DrmPolicy object.
 * @param drmPolicy KalturaDrmPolicy  (optional).
 * @return KalturaDrmPolicy.
 */
KalturaDrmPolicyService.prototype.add = function(callback, drmPolicy){
	var kparams = {};
	this.client.addParam(kparams, 'drmPolicy', kaltura.toParams(drmPolicy));
	this.client.queueServiceActionCall('drm_drmpolicy', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaDrmPolicy object by ID.
 * @param drmPolicyId int  (optional).
 * @return KalturaDrmPolicy.
 */
KalturaDrmPolicyService.prototype.get = function(callback, drmPolicyId){
	var kparams = {};
	this.client.addParam(kparams, 'drmPolicyId', drmPolicyId);
	this.client.queueServiceActionCall('drm_drmpolicy', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing KalturaDrmPolicy object.
 * @param drmPolicyId int  (optional).
 * @param drmPolicy KalturaDrmPolicy Id (optional).
 * @return KalturaDrmPolicy.
 */
KalturaDrmPolicyService.prototype.update = function(callback, drmPolicyId, drmPolicy){
	var kparams = {};
	this.client.addParam(kparams, 'drmPolicyId', drmPolicyId);
	this.client.addParam(kparams, 'drmPolicy', kaltura.toParams(drmPolicy));
	this.client.queueServiceActionCall('drm_drmpolicy', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaDrmPolicy object as deleted.
 * @param drmPolicyId int  (optional).
 * @return KalturaDrmPolicy.
 */
KalturaDrmPolicyService.prototype.deleteAction = function(callback, drmPolicyId){
	var kparams = {};
	this.client.addParam(kparams, 'drmPolicyId', drmPolicyId);
	this.client.queueServiceActionCall('drm_drmpolicy', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List KalturaDrmPolicy objects.
 * @param filter KalturaDrmPolicyFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDrmPolicyListResponse.
 */
KalturaDrmPolicyService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('drm_drmpolicy', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: drmProfile.
 * The available service actions:
 * @action add Allows you to add a new DrmProfile object.
 * @action get Retrieve a KalturaDrmProfile object by ID.
 * @action update Update an existing KalturaDrmProfile object.
 * @action delete Mark the KalturaDrmProfile object as deleted.
 * @action list List KalturaDrmProfile objects.
 * @action getByProvider Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
 */
function KalturaDrmProfileService(client){
	KalturaDrmProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDrmProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaDrmProfileService = KalturaDrmProfileService;

/**
 * Allows you to add a new DrmProfile object.
 * @param drmProfile KalturaDrmProfile  (optional).
 * @return KalturaDrmProfile.
 */
KalturaDrmProfileService.prototype.add = function(callback, drmProfile){
	var kparams = {};
	this.client.addParam(kparams, 'drmProfile', kaltura.toParams(drmProfile));
	this.client.queueServiceActionCall('drm_drmprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaDrmProfile object by ID.
 * @param drmProfileId int  (optional).
 * @return KalturaDrmProfile.
 */
KalturaDrmProfileService.prototype.get = function(callback, drmProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'drmProfileId', drmProfileId);
	this.client.queueServiceActionCall('drm_drmprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing KalturaDrmProfile object.
 * @param drmProfileId int  (optional).
 * @param drmProfile KalturaDrmProfile Id (optional).
 * @return KalturaDrmProfile.
 */
KalturaDrmProfileService.prototype.update = function(callback, drmProfileId, drmProfile){
	var kparams = {};
	this.client.addParam(kparams, 'drmProfileId', drmProfileId);
	this.client.addParam(kparams, 'drmProfile', kaltura.toParams(drmProfile));
	this.client.queueServiceActionCall('drm_drmprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaDrmProfile object as deleted.
 * @param drmProfileId int  (optional).
 * @return KalturaDrmProfile.
 */
KalturaDrmProfileService.prototype.deleteAction = function(callback, drmProfileId){
	var kparams = {};
	this.client.addParam(kparams, 'drmProfileId', drmProfileId);
	this.client.queueServiceActionCall('drm_drmprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List KalturaDrmProfile objects.
 * @param filter KalturaDrmProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaDrmProfileListResponse.
 */
KalturaDrmProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('drm_drmprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
 * @param provider string  (optional, enum: KalturaDrmProviderType).
 * @return KalturaDrmProfile.
 */
KalturaDrmProfileService.prototype.getByProvider = function(callback, provider){
	var kparams = {};
	this.client.addParam(kparams, 'provider', provider);
	this.client.queueServiceActionCall('drm_drmprofile', 'getByProvider', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: drmLicenseAccess.
 * The available service actions:
 * @action getAccess getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action.
 */
function KalturaDrmLicenseAccessService(client){
	KalturaDrmLicenseAccessService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaDrmLicenseAccessService, kaltura.KalturaServiceBase);
module.exports.KalturaDrmLicenseAccessService = KalturaDrmLicenseAccessService;

/**
 * getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action.
 * @param entryId string  (optional).
 * @param flavorIds string  (optional).
 * @param referrer string  (optional).
 * @return KalturaDrmLicenseAccessDetails.
 */
KalturaDrmLicenseAccessService.prototype.getAccess = function(callback, entryId, flavorIds, referrer){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'flavorIds', flavorIds);
	this.client.addParam(kparams, 'referrer', referrer);
	this.client.queueServiceActionCall('drm_drmlicenseaccess', 'getAccess', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: widevineDrm.
 * The available service actions:
 * @action getLicense Get license for encrypted content playback.
 */
function KalturaWidevineDrmService(client){
	KalturaWidevineDrmService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaWidevineDrmService, kaltura.KalturaServiceBase);
module.exports.KalturaWidevineDrmService = KalturaWidevineDrmService;

/**
 * Get license for encrypted content playback.
 * @param flavorAssetId string  (optional).
 * @param referrer string 64base encoded (optional, default: null).
 * @return string.
 */
KalturaWidevineDrmService.prototype.getLicense = function(callback, flavorAssetId, referrer){
	if(!referrer){
		referrer = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'flavorAssetId', flavorAssetId);
	this.client.addParam(kparams, 'referrer', referrer);
	this.client.queueServiceActionCall('widevine_widevinedrm', 'getLicense', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: liveConversionProfile.
 * The available service actions:
 */
function KalturaLiveConversionProfileService(client){
	KalturaLiveConversionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaLiveConversionProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaLiveConversionProfileService = KalturaLiveConversionProfileService;


/**
 *Class definition for the Kaltura service: scheduledTaskProfile.
 * The available service actions:
 * @action add Add a new scheduled task profile.
 * @action get Retrieve a scheduled task profile by id.
 * @action update Update an existing scheduled task profile.
 * @action delete Delete a scheduled task profile.
 * @action list List scheduled task profiles.
 * @action requestDryRun .
 * @action getDryRunResults .
 */
function KalturaScheduledTaskProfileService(client){
	KalturaScheduledTaskProfileService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaScheduledTaskProfileService, kaltura.KalturaServiceBase);
module.exports.KalturaScheduledTaskProfileService = KalturaScheduledTaskProfileService;

/**
 * Add a new scheduled task profile.
 * @param scheduledTaskProfile KalturaScheduledTaskProfile  (optional).
 * @return KalturaScheduledTaskProfile.
 */
KalturaScheduledTaskProfileService.prototype.add = function(callback, scheduledTaskProfile){
	var kparams = {};
	this.client.addParam(kparams, 'scheduledTaskProfile', kaltura.toParams(scheduledTaskProfile));
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a scheduled task profile by id.
 * @param id int  (optional).
 * @return KalturaScheduledTaskProfile.
 */
KalturaScheduledTaskProfileService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing scheduled task profile.
 * @param id int  (optional).
 * @param scheduledTaskProfile KalturaScheduledTaskProfile  (optional).
 * @return KalturaScheduledTaskProfile.
 */
KalturaScheduledTaskProfileService.prototype.update = function(callback, id, scheduledTaskProfile){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'scheduledTaskProfile', kaltura.toParams(scheduledTaskProfile));
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a scheduled task profile.
 * @param id int  (optional).
 * @return .
 */
KalturaScheduledTaskProfileService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List scheduled task profiles.
 * @param filter KalturaScheduledTaskProfileFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaScheduledTaskProfileListResponse.
 */
KalturaScheduledTaskProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param scheduledTaskProfileId int  (optional).
 * @param maxResults int  (optional, default: 500).
 * @return int.
 */
KalturaScheduledTaskProfileService.prototype.requestDryRun = function(callback, scheduledTaskProfileId, maxResults){
	if(!maxResults){
		maxResults = 500;
	}
	var kparams = {};
	this.client.addParam(kparams, 'scheduledTaskProfileId', scheduledTaskProfileId);
	this.client.addParam(kparams, 'maxResults', maxResults);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'requestDryRun', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param requestId int  (optional).
 * @return KalturaObjectListResponse.
 */
KalturaScheduledTaskProfileService.prototype.getDryRunResults = function(callback, requestId){
	var kparams = {};
	this.client.addParam(kparams, 'requestId', requestId);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'getDryRunResults', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: playReadyDrm.
 * The available service actions:
 * @action generateKey Generate key id and content key for PlayReady encryption.
 * @action getContentKeys Get content keys for input key ids.
 * @action getEntryContentKey Get content key and key id for the given entry.
 * @action getLicenseDetails Get Play Ready policy and dates for license creation.
 */
function KalturaPlayReadyDrmService(client){
	KalturaPlayReadyDrmService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaPlayReadyDrmService, kaltura.KalturaServiceBase);
module.exports.KalturaPlayReadyDrmService = KalturaPlayReadyDrmService;

/**
 * Generate key id and content key for PlayReady encryption.
 * @return KalturaPlayReadyContentKey.
 */
KalturaPlayReadyDrmService.prototype.generateKey = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('playready_playreadydrm', 'generateKey', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get content keys for input key ids.
 * @param keyIds string - comma separated key id's (optional).
 * @return array.
 */
KalturaPlayReadyDrmService.prototype.getContentKeys = function(callback, keyIds){
	var kparams = {};
	this.client.addParam(kparams, 'keyIds', keyIds);
	this.client.queueServiceActionCall('playready_playreadydrm', 'getContentKeys', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get content key and key id for the given entry.
 * @param entryId string  (optional).
 * @param createIfMissing bool  (optional, default: false).
 * @return KalturaPlayReadyContentKey.
 */
KalturaPlayReadyDrmService.prototype.getEntryContentKey = function(callback, entryId, createIfMissing){
	if(!createIfMissing){
		createIfMissing = false;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'createIfMissing', createIfMissing);
	this.client.queueServiceActionCall('playready_playreadydrm', 'getEntryContentKey', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Play Ready policy and dates for license creation.
 * @param keyId string  (optional).
 * @param deviceId string  (optional).
 * @param deviceType int  (optional).
 * @param entryId string  (optional, default: null).
 * @param referrer string 64base encoded (optional, default: null).
 * @return KalturaPlayReadyLicenseDetails.
 */
KalturaPlayReadyDrmService.prototype.getLicenseDetails = function(callback, keyId, deviceId, deviceType, entryId, referrer){
	if(!entryId){
		entryId = null;
	}
	if(!referrer){
		referrer = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'keyId', keyId);
	this.client.addParam(kparams, 'deviceId', deviceId);
	this.client.addParam(kparams, 'deviceType', deviceType);
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'referrer', referrer);
	this.client.queueServiceActionCall('playready_playreadydrm', 'getLicenseDetails', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: integration.
 * The available service actions:
 * @action dispatch Dispatch integration task.
 * @action notify .
 */
function KalturaIntegrationService(client){
	KalturaIntegrationService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaIntegrationService, kaltura.KalturaServiceBase);
module.exports.KalturaIntegrationService = KalturaIntegrationService;

/**
 * Dispatch integration task.
 * @param data KalturaIntegrationJobData  (optional).
 * @param objectType string  (optional, enum: KalturaBatchJobObjectType).
 * @param objectId string  (optional).
 * @return int.
 */
KalturaIntegrationService.prototype.dispatch = function(callback, data, objectType, objectId){
	var kparams = {};
	this.client.addParam(kparams, 'data', kaltura.toParams(data));
	this.client.addParam(kparams, 'objectType', objectType);
	this.client.addParam(kparams, 'objectId', objectId);
	this.client.queueServiceActionCall('integration_integration', 'dispatch', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int integration job id (optional).
 * @return .
 */
KalturaIntegrationService.prototype.notify = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('integration_integration', 'notify', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: businessProcessServer.
 * The available service actions:
 * @action add Allows you to add a new Business-Process server object.
 * @action get Retrieve an Business-Process server object by id.
 * @action update Update an existing Business-Process server object.
 * @action updateStatus Update Business-Process server status by id.
 * @action delete Delete an Business-Process server object.
 * @action list list Business-Process server objects.
 */
function KalturaBusinessProcessServerService(client){
	KalturaBusinessProcessServerService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaBusinessProcessServerService, kaltura.KalturaServiceBase);
module.exports.KalturaBusinessProcessServerService = KalturaBusinessProcessServerService;

/**
 * Allows you to add a new Business-Process server object.
 * @param businessProcessServer KalturaBusinessProcessServer  (optional).
 * @return KalturaBusinessProcessServer.
 */
KalturaBusinessProcessServerService.prototype.add = function(callback, businessProcessServer){
	var kparams = {};
	this.client.addParam(kparams, 'businessProcessServer', kaltura.toParams(businessProcessServer));
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an Business-Process server object by id.
 * @param id int  (optional).
 * @return KalturaBusinessProcessServer.
 */
KalturaBusinessProcessServerService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing Business-Process server object.
 * @param id int  (optional).
 * @param businessProcessServer KalturaBusinessProcessServer  (optional).
 * @return KalturaBusinessProcessServer.
 */
KalturaBusinessProcessServerService.prototype.update = function(callback, id, businessProcessServer){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'businessProcessServer', kaltura.toParams(businessProcessServer));
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Business-Process server status by id.
 * @param id int  (optional).
 * @param status string  (optional, enum: KalturaBusinessProcessServerStatus).
 * @return KalturaBusinessProcessServer.
 */
KalturaBusinessProcessServerService.prototype.updateStatus = function(callback, id, status){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'status', status);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an Business-Process server object.
 * @param id int  (optional).
 * @return .
 */
KalturaBusinessProcessServerService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * list Business-Process server objects.
 * @param filter KalturaBusinessProcessServerFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaBusinessProcessServerListResponse.
 */
KalturaBusinessProcessServerService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: businessProcessCase.
 * The available service actions:
 * @action abort Abort business-process case.
 * @action list list business-process cases.
 */
function KalturaBusinessProcessCaseService(client){
	KalturaBusinessProcessCaseService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaBusinessProcessCaseService, kaltura.KalturaServiceBase);
module.exports.KalturaBusinessProcessCaseService = KalturaBusinessProcessCaseService;

/**
 * Abort business-process case.
 * @param objectType string  (optional, enum: KalturaEventNotificationEventObjectType).
 * @param objectId string  (optional).
 * @param businessProcessStartNotificationTemplateId int  (optional).
 * @return .
 */
KalturaBusinessProcessCaseService.prototype.abort = function(callback, objectType, objectId, businessProcessStartNotificationTemplateId){
	var kparams = {};
	this.client.addParam(kparams, 'objectType', objectType);
	this.client.addParam(kparams, 'objectId', objectId);
	this.client.addParam(kparams, 'businessProcessStartNotificationTemplateId', businessProcessStartNotificationTemplateId);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocesscase', 'abort', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * list business-process cases.
 * @param objectType string  (optional, enum: KalturaEventNotificationEventObjectType).
 * @param objectId string  (optional).
 * @return array.
 */
KalturaBusinessProcessCaseService.prototype.listAction = function(callback, objectType, objectId){
	var kparams = {};
	this.client.addParam(kparams, 'objectType', objectType);
	this.client.addParam(kparams, 'objectId', objectId);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocesscase', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: quiz.
 * The available service actions:
 * @action add Allows to add a quiz to an entry.
 * @action update Allows to update a quiz.
 * @action get Allows to get a quiz.
 * @action list List quiz objects by filter and pager.
 * @action getUrl sends a with an api request for pdf from quiz object.
 */
function KalturaQuizService(client){
	KalturaQuizService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaQuizService, kaltura.KalturaServiceBase);
module.exports.KalturaQuizService = KalturaQuizService;

/**
 * Allows to add a quiz to an entry.
 * @param entryId string  (optional).
 * @param quiz KalturaQuiz  (optional).
 * @return KalturaQuiz.
 */
KalturaQuizService.prototype.add = function(callback, entryId, quiz){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'quiz', kaltura.toParams(quiz));
	this.client.queueServiceActionCall('quiz_quiz', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows to update a quiz.
 * @param entryId string  (optional).
 * @param quiz KalturaQuiz  (optional).
 * @return KalturaQuiz.
 */
KalturaQuizService.prototype.update = function(callback, entryId, quiz){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'quiz', kaltura.toParams(quiz));
	this.client.queueServiceActionCall('quiz_quiz', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows to get a quiz.
 * @param entryId string  (optional).
 * @return KalturaQuiz.
 */
KalturaQuizService.prototype.get = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('quiz_quiz', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List quiz objects by filter and pager.
 * @param filter KalturaQuizFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaQuizListResponse.
 */
KalturaQuizService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('quiz_quiz', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * sends a with an api request for pdf from quiz object.
 * @param entryId string  (optional).
 * @param quizOutputType int  (optional, enum: KalturaQuizOutputType).
 * @return string.
 */
KalturaQuizService.prototype.getUrl = function(callback, entryId, quizOutputType){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'quizOutputType', quizOutputType);
	this.client.queueServiceActionCall('quiz_quiz', 'getUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: systemPartner.
 * The available service actions:
 * @action get Retrieve all info about partner
 * This service gets partner id as parameter and accessable to the admin console partner only.
 * @action getUsage .
 * @action list .
 * @action updateStatus .
 * @action getAdminSession .
 * @action updateConfiguration .
 * @action getConfiguration .
 * @action getPackages .
 * @action getPackagesClassOfService .
 * @action getPackagesVertical .
 * @action getPlayerEmbedCodeTypes .
 * @action getPlayerDeliveryTypes .
 * @action resetUserPassword .
 * @action listUserLoginData .
 */
function KalturaSystemPartnerService(client){
	KalturaSystemPartnerService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaSystemPartnerService, kaltura.KalturaServiceBase);
module.exports.KalturaSystemPartnerService = KalturaSystemPartnerService;

/**
 * Retrieve all info about partner
 * This service gets partner id as parameter and accessable to the admin console partner only.
 * @param partnerId int X (optional).
 * @return KalturaPartner.
 */
KalturaSystemPartnerService.prototype.get = function(callback, partnerId){
	var kparams = {};
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.queueServiceActionCall('systempartner_systempartner', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerFilter KalturaPartnerFilter  (optional, default: null).
 * @param usageFilter KalturaSystemPartnerUsageFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaSystemPartnerUsageListResponse.
 */
KalturaSystemPartnerService.prototype.getUsage = function(callback, partnerFilter, usageFilter, pager){
	if(!partnerFilter){
		partnerFilter = null;
	}
	if(!usageFilter){
		usageFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (partnerFilter !== null){
		this.client.addParam(kparams, 'partnerFilter', kaltura.toParams(partnerFilter));
	}
	if (usageFilter !== null){
		this.client.addParam(kparams, 'usageFilter', kaltura.toParams(usageFilter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('systempartner_systempartner', 'getUsage', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaPartnerFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaPartnerListResponse.
 */
KalturaSystemPartnerService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('systempartner_systempartner', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerId int  (optional).
 * @param status int  (optional, enum: KalturaPartnerStatus).
 * @param reason string  (optional).
 * @return .
 */
KalturaSystemPartnerService.prototype.updateStatus = function(callback, partnerId, status, reason){
	var kparams = {};
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'status', status);
	this.client.addParam(kparams, 'reason', reason);
	this.client.queueServiceActionCall('systempartner_systempartner', 'updateStatus', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerId int  (optional).
 * @param userId string  (optional, default: null).
 * @return string.
 */
KalturaSystemPartnerService.prototype.getAdminSession = function(callback, partnerId, userId){
	if(!userId){
		userId = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'userId', userId);
	this.client.queueServiceActionCall('systempartner_systempartner', 'getAdminSession', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerId int  (optional).
 * @param configuration KalturaSystemPartnerConfiguration  (optional).
 * @return .
 */
KalturaSystemPartnerService.prototype.updateConfiguration = function(callback, partnerId, configuration){
	var kparams = {};
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'configuration', kaltura.toParams(configuration));
	this.client.queueServiceActionCall('systempartner_systempartner', 'updateConfiguration', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerId int  (optional).
 * @return KalturaSystemPartnerConfiguration.
 */
KalturaSystemPartnerService.prototype.getConfiguration = function(callback, partnerId){
	var kparams = {};
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.queueServiceActionCall('systempartner_systempartner', 'getConfiguration', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
KalturaSystemPartnerService.prototype.getPackages = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPackages', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
KalturaSystemPartnerService.prototype.getPackagesClassOfService = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPackagesClassOfService', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
KalturaSystemPartnerService.prototype.getPackagesVertical = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPackagesVertical', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
KalturaSystemPartnerService.prototype.getPlayerEmbedCodeTypes = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPlayerEmbedCodeTypes', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
KalturaSystemPartnerService.prototype.getPlayerDeliveryTypes = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPlayerDeliveryTypes', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param userId string  (optional).
 * @param partnerId int  (optional).
 * @param newPassword string  (optional).
 * @return .
 */
KalturaSystemPartnerService.prototype.resetUserPassword = function(callback, userId, partnerId, newPassword){
	var kparams = {};
	this.client.addParam(kparams, 'userId', userId);
	this.client.addParam(kparams, 'partnerId', partnerId);
	this.client.addParam(kparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('systempartner_systempartner', 'resetUserPassword', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaUserLoginDataFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaUserLoginDataListResponse.
 */
KalturaSystemPartnerService.prototype.listUserLoginData = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('systempartner_systempartner', 'listUserLoginData', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: entryAdmin.
 * The available service actions:
 * @action get Get base entry by ID with no filters.
 * @action getByFlavorId Get base entry by flavor ID with no filters.
 * @action getTracks Get base entry by ID with no filters.
 * @action restoreDeletedEntry Restore deleted entry.
 */
function KalturaEntryAdminService(client){
	KalturaEntryAdminService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaEntryAdminService, kaltura.KalturaServiceBase);
module.exports.KalturaEntryAdminService = KalturaEntryAdminService;

/**
 * Get base entry by ID with no filters.
 * @param entryId string Entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaBaseEntry.
 */
KalturaEntryAdminService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get base entry by flavor ID with no filters.
 * @param flavorId string  (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return KalturaBaseEntry.
 */
KalturaEntryAdminService.prototype.getByFlavorId = function(callback, flavorId, version){
	if(!version){
		version = -1;
	}
	var kparams = {};
	this.client.addParam(kparams, 'flavorId', flavorId);
	this.client.addParam(kparams, 'version', version);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'getByFlavorId', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get base entry by ID with no filters.
 * @param entryId string Entry id (optional).
 * @return KalturaTrackEntryListResponse.
 */
KalturaEntryAdminService.prototype.getTracks = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'getTracks', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Restore deleted entry.
 * @param entryId string  (optional).
 * @return KalturaBaseEntry.
 */
KalturaEntryAdminService.prototype.restoreDeletedEntry = function(callback, entryId){
	var kparams = {};
	this.client.addParam(kparams, 'entryId', entryId);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'restoreDeletedEntry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: uiConfAdmin.
 * The available service actions:
 * @action add Adds new UIConf with no partner limitation.
 * @action update Update an existing UIConf with no partner limitation.
 * @action get Retrieve a UIConf by id with no partner limitation.
 * @action delete Delete an existing UIConf with no partner limitation.
 * @action list Retrieve a list of available UIConfs  with no partner limitation.
 */
function KalturaUiConfAdminService(client){
	KalturaUiConfAdminService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaUiConfAdminService, kaltura.KalturaServiceBase);
module.exports.KalturaUiConfAdminService = KalturaUiConfAdminService;

/**
 * Adds new UIConf with no partner limitation.
 * @param uiConf KalturaUiConfAdmin  (optional).
 * @return KalturaUiConfAdmin.
 */
KalturaUiConfAdminService.prototype.add = function(callback, uiConf){
	var kparams = {};
	this.client.addParam(kparams, 'uiConf', kaltura.toParams(uiConf));
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing UIConf with no partner limitation.
 * @param id int  (optional).
 * @param uiConf KalturaUiConfAdmin  (optional).
 * @return KalturaUiConfAdmin.
 */
KalturaUiConfAdminService.prototype.update = function(callback, id, uiConf){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'uiConf', kaltura.toParams(uiConf));
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a UIConf by id with no partner limitation.
 * @param id int  (optional).
 * @return KalturaUiConfAdmin.
 */
KalturaUiConfAdminService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing UIConf with no partner limitation.
 * @param id int  (optional).
 * @return .
 */
KalturaUiConfAdminService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available UIConfs  with no partner limitation.
 * @param filter KalturaUiConfFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaUiConfAdminListResponse.
 */
KalturaUiConfAdminService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: reportAdmin.
 * The available service actions:
 * @action add .
 * @action get .
 * @action list .
 * @action update .
 * @action delete .
 * @action executeDebug .
 * @action getParameters .
 * @action getCsvUrl .
 */
function KalturaReportAdminService(client){
	KalturaReportAdminService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaReportAdminService, kaltura.KalturaServiceBase);
module.exports.KalturaReportAdminService = KalturaReportAdminService;

/**
 * .
 * @param report KalturaReport  (optional).
 * @return KalturaReport.
 */
KalturaReportAdminService.prototype.add = function(callback, report){
	var kparams = {};
	this.client.addParam(kparams, 'report', kaltura.toParams(report));
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return KalturaReport.
 */
KalturaReportAdminService.prototype.get = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter KalturaReportFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaReportListResponse.
 */
KalturaReportAdminService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param report KalturaReport  (optional).
 * @return KalturaReport.
 */
KalturaReportAdminService.prototype.update = function(callback, id, report){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'report', kaltura.toParams(report));
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return .
 */
KalturaReportAdminService.prototype.deleteAction = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param params array  (optional, default: null).
 * @return KalturaReportResponse.
 */
KalturaReportAdminService.prototype.executeDebug = function(callback, id, params){
	if(!params){
		params = null;
	}
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	if(params !== null){
	for(var index in params)
	{
		var obj = params[index];
		this.client.addParam(kparams, 'params:' + index, kaltura.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'executeDebug', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return array.
 */
KalturaReportAdminService.prototype.getParameters = function(callback, id){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'getParameters', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param reportPartnerId int  (optional).
 * @return string.
 */
KalturaReportAdminService.prototype.getCsvUrl = function(callback, id, reportPartnerId){
	var kparams = {};
	this.client.addParam(kparams, 'id', id);
	this.client.addParam(kparams, 'reportPartnerId', reportPartnerId);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'getCsvUrl', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: kalturaInternalToolsSystemHelper.
 * The available service actions:
 * @action fromSecureString KS from Secure String.
 * @action iptocountry from ip to country.
 * @action getRemoteAddress .
 */
function KalturaKalturaInternalToolsSystemHelperService(client){
	KalturaKalturaInternalToolsSystemHelperService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaKalturaInternalToolsSystemHelperService, kaltura.KalturaServiceBase);
module.exports.KalturaKalturaInternalToolsSystemHelperService = KalturaKalturaInternalToolsSystemHelperService;

/**
 * KS from Secure String.
 * @param str string  (optional).
 * @return KalturaInternalToolsSession.
 */
KalturaKalturaInternalToolsSystemHelperService.prototype.fromSecureString = function(callback, str){
	var kparams = {};
	this.client.addParam(kparams, 'str', str);
	this.client.queueServiceActionCall('kalturainternaltools_kalturainternaltoolssystemhelper', 'fromSecureString', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * from ip to country.
 * @param remote_addr string  (optional).
 * @return string.
 */
KalturaKalturaInternalToolsSystemHelperService.prototype.iptocountry = function(callback, remote_addr){
	var kparams = {};
	this.client.addParam(kparams, 'remote_addr', remote_addr);
	this.client.queueServiceActionCall('kalturainternaltools_kalturainternaltoolssystemhelper', 'iptocountry', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return string.
 */
KalturaKalturaInternalToolsSystemHelperService.prototype.getRemoteAddress = function(callback){
	var kparams = {};
	this.client.queueServiceActionCall('kalturainternaltools_kalturainternaltoolssystemhelper', 'getRemoteAddress', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: scheduleEvent.
 * The available service actions:
 * @action add Allows you to add a new KalturaScheduleEvent object.
 * @action get Retrieve a KalturaScheduleEvent object by ID.
 * @action update Update an existing KalturaScheduleEvent object.
 * @action delete Mark the KalturaScheduleEvent object as deleted.
 * @action cancel Mark the KalturaScheduleEvent object as cancelled.
 * @action list List KalturaScheduleEvent objects.
 */
function KalturaScheduleEventService(client){
	KalturaScheduleEventService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaScheduleEventService, kaltura.KalturaServiceBase);
module.exports.KalturaScheduleEventService = KalturaScheduleEventService;

/**
 * Allows you to add a new KalturaScheduleEvent object.
 * @param scheduleEvent KalturaScheduleEvent  (optional).
 * @return KalturaScheduleEvent.
 */
KalturaScheduleEventService.prototype.add = function(callback, scheduleEvent){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEvent', kaltura.toParams(scheduleEvent));
	this.client.queueServiceActionCall('schedule_scheduleevent', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaScheduleEvent object by ID.
 * @param scheduleEventId int  (optional).
 * @return KalturaScheduleEvent.
 */
KalturaScheduleEventService.prototype.get = function(callback, scheduleEventId){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventId', scheduleEventId);
	this.client.queueServiceActionCall('schedule_scheduleevent', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing KalturaScheduleEvent object.
 * @param scheduleEventId int  (optional).
 * @param scheduleEvent KalturaScheduleEvent Id (optional).
 * @return KalturaScheduleEvent.
 */
KalturaScheduleEventService.prototype.update = function(callback, scheduleEventId, scheduleEvent){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(kparams, 'scheduleEvent', kaltura.toParams(scheduleEvent));
	this.client.queueServiceActionCall('schedule_scheduleevent', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaScheduleEvent object as deleted.
 * @param scheduleEventId int  (optional).
 * @return KalturaScheduleEvent.
 */
KalturaScheduleEventService.prototype.deleteAction = function(callback, scheduleEventId){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventId', scheduleEventId);
	this.client.queueServiceActionCall('schedule_scheduleevent', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaScheduleEvent object as cancelled.
 * @param scheduleEventId int  (optional).
 * @return KalturaScheduleEvent.
 */
KalturaScheduleEventService.prototype.cancel = function(callback, scheduleEventId){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventId', scheduleEventId);
	this.client.queueServiceActionCall('schedule_scheduleevent', 'cancel', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List KalturaScheduleEvent objects.
 * @param filter KalturaScheduleEventFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaScheduleEventListResponse.
 */
KalturaScheduleEventService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('schedule_scheduleevent', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: scheduleResource.
 * The available service actions:
 * @action add Allows you to add a new KalturaScheduleResource object.
 * @action get Retrieve a KalturaScheduleResource object by ID.
 * @action update Update an existing KalturaScheduleResource object.
 * @action delete Mark the KalturaScheduleResource object as deleted.
 * @action list List KalturaScheduleResource objects.
 */
function KalturaScheduleResourceService(client){
	KalturaScheduleResourceService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaScheduleResourceService, kaltura.KalturaServiceBase);
module.exports.KalturaScheduleResourceService = KalturaScheduleResourceService;

/**
 * Allows you to add a new KalturaScheduleResource object.
 * @param scheduleResource KalturaScheduleResource  (optional).
 * @return KalturaScheduleResource.
 */
KalturaScheduleResourceService.prototype.add = function(callback, scheduleResource){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleResource', kaltura.toParams(scheduleResource));
	this.client.queueServiceActionCall('schedule_scheduleresource', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaScheduleResource object by ID.
 * @param scheduleResourceId int  (optional).
 * @return KalturaScheduleResource.
 */
KalturaScheduleResourceService.prototype.get = function(callback, scheduleResourceId){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleresource', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing KalturaScheduleResource object.
 * @param scheduleResourceId int  (optional).
 * @param scheduleResource KalturaScheduleResource Id (optional).
 * @return KalturaScheduleResource.
 */
KalturaScheduleResourceService.prototype.update = function(callback, scheduleResourceId, scheduleResource){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleResourceId', scheduleResourceId);
	this.client.addParam(kparams, 'scheduleResource', kaltura.toParams(scheduleResource));
	this.client.queueServiceActionCall('schedule_scheduleresource', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaScheduleResource object as deleted.
 * @param scheduleResourceId int  (optional).
 * @return KalturaScheduleResource.
 */
KalturaScheduleResourceService.prototype.deleteAction = function(callback, scheduleResourceId){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleresource', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List KalturaScheduleResource objects.
 * @param filter KalturaScheduleResourceFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaScheduleResourceListResponse.
 */
KalturaScheduleResourceService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('schedule_scheduleresource', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Kaltura service: scheduleEventResource.
 * The available service actions:
 * @action add Allows you to add a new KalturaScheduleEventResource object.
 * @action get Retrieve a KalturaScheduleEventResource object by ID.
 * @action update Update an existing KalturaScheduleEventResource object.
 * @action delete Mark the KalturaScheduleEventResource object as deleted.
 * @action list List KalturaScheduleEventResource objects.
 */
function KalturaScheduleEventResourceService(client){
	KalturaScheduleEventResourceService.super_.call(this);
	this.init(client);
}

util.inherits(KalturaScheduleEventResourceService, kaltura.KalturaServiceBase);
module.exports.KalturaScheduleEventResourceService = KalturaScheduleEventResourceService;

/**
 * Allows you to add a new KalturaScheduleEventResource object.
 * @param scheduleEventResource KalturaScheduleEventResource  (optional).
 * @return KalturaScheduleEventResource.
 */
KalturaScheduleEventResourceService.prototype.add = function(callback, scheduleEventResource){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventResource', kaltura.toParams(scheduleEventResource));
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'add', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a KalturaScheduleEventResource object by ID.
 * @param scheduleEventId int  (optional).
 * @param scheduleResourceId int  (optional).
 * @return KalturaScheduleEventResource.
 */
KalturaScheduleEventResourceService.prototype.get = function(callback, scheduleEventId, scheduleResourceId){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(kparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'get', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing KalturaScheduleEventResource object.
 * @param scheduleEventId int  (optional).
 * @param scheduleResourceId int  (optional).
 * @param scheduleEventResource KalturaScheduleEventResource  (optional).
 * @return KalturaScheduleEventResource.
 */
KalturaScheduleEventResourceService.prototype.update = function(callback, scheduleEventId, scheduleResourceId, scheduleEventResource){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(kparams, 'scheduleResourceId', scheduleResourceId);
	this.client.addParam(kparams, 'scheduleEventResource', kaltura.toParams(scheduleEventResource));
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'update', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the KalturaScheduleEventResource object as deleted.
 * @param scheduleEventId int  (optional).
 * @param scheduleResourceId int  (optional).
 * @return .
 */
KalturaScheduleEventResourceService.prototype.deleteAction = function(callback, scheduleEventId, scheduleResourceId){
	var kparams = {};
	this.client.addParam(kparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(kparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'delete', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List KalturaScheduleEventResource objects.
 * @param filter KalturaScheduleEventResourceFilter  (optional, default: null).
 * @param pager KalturaFilterPager  (optional, default: null).
 * @return KalturaScheduleEventResourceListResponse.
 */
KalturaScheduleEventResourceService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var kparams = {};
	if (filter !== null){
		this.client.addParam(kparams, 'filter', kaltura.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(kparams, 'pager', kaltura.toParams(pager));
	}
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'list', kparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

