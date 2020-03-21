if (self.CavalryLogger) { CavalryLogger.start_js(["i\/HMb"]); }

__d("RTWebCallWindowOpener",["requireCond","cr:1099565"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1099565")}),null);
__d("ZenonCallInviteModel",["BaseEventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b){__p&&__p();var c;c=a.call(this)||this;c.$ZenonCallInviteModel3=function(a){if(c.__currentRequest&&c.__currentRequest.model&&c.__currentRequest.model.ringID===a.ringID)switch(a.reason){case"hangup":c.__currentRequest.model=babelHelpers["extends"]({},c.__currentRequest.model,{type:"missed"});c.emit("callInvite",c.__currentRequest.model);break;default:c.dismiss();break}};c.$ZenonCallInviteModel2=function(a){var b;if(((b=c.__currentRequest)==null?void 0:(b=b.model)==null?void 0:b.type)==="ringing"){((b=c.__currentRequest)==null?void 0:(b=b.model)==null?void 0:b.ringID)!==a.ringID&&a.onDecline("InAnotherCall")}else c.__currentRequest={model:{controllerParams:a.controllerParams,inviterID:a.inviterID,participants:a.otherParticipants,requestingVideo:a.requestingVideo,ringID:a.ringID,thread:a.thread,type:a.isClientPermissableRing?"ringing":"unsupported_browser"},ringPayload:a},c.emit("callInvite",c.__currentRequest.model),a.isClientPermissableRing||a.onDecline("VersionUnsupported")};c.__eventSource=b;c.__currentRequest=null;return c}var c=b.prototype;c.getCurrentInvite=function(){var a;return(a=(a=this.__currentRequest)==null?void 0:a.model)!=null?a:null};c.startListening=function(a){a=a.callsBlocked;this.__currentRequest&&this.dismiss();this.stopListening();a?this.__eventSource.addListener("incomingRing",this.$ZenonCallInviteModel1):(this.__eventSource.addListener("incomingRing",this.$ZenonCallInviteModel2),this.__eventSource.addListener("ringCancel",this.$ZenonCallInviteModel3))};c.stopListening=function(){this.__eventSource.removeAllListeners("incomingRing"),this.__eventSource.removeAllListeners("ringCancel"),this.__currentRequest=null};c.dismiss=function(){this.__currentRequest=null,this.emit("callInvite",Object.freeze(null))};c.accept=function(a,b){if(this.__currentRequest){var c;((c=this.__currentRequest.model)==null?void 0:c.type)==="ringing"&&this.__currentRequest.ringPayload.onAccept(a,b);this.dismiss()}};c.decline=function(a,b){a===void 0&&(a="IgnoreCall");if(this.__currentRequest){this.__currentRequest.ringPayload.onDecline(a,b);this.dismiss();return}};c.$ZenonCallInviteModel1=function(a){a.onDecline("IgnoreCall","CallsBlocked")};return b}(b("BaseEventEmitter"));e.exports=a}),null);
__d("delegateZenonCallInviteModel",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a.getCurrentInvite=b.getCurrentInvite.bind(b),a.startListening=b.startListening.bind(b),a.stopListening=b.stopListening.bind(b),a.dismiss=b.dismiss.bind(b),a.accept=b.accept.bind(b),a.decline=b.decline.bind(b),b.addListener("callInvite",function(b){a.emit("callInvite",b)})}e.exports=a}),null);
__d("ZenonCallWindowController",["Promise","FBLogger","ZenonCallWindowErrors"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonCallWindowErrors").OpeningAnotherCallError;a=function(){__p&&__p();function a(a,b){var c=b.callWindowInitializerResource,d=b.callWindowOpener;b=b.uriBuilderResource;this.$2=null;this.$3=!1;this.$5=null;this.$1=a;this.$7=b;this.$4=c;this.$6=d}var c=a.prototype;c.initCall=function(a){__p&&__p();var c=this;if(this.$3)throw new g();try{if(this.$2&&!this.$2.closed&&a.joinContext.type==="thread"&&this.$2.inCallWith===a.joinContext.thread.id){this.$2.focus();return[this.$2,b("Promise").resolve()]}}catch(a){b("FBLogger")("rtc_www").catching(a).warn("Failed to access inCallWith on call window")}var d=this.$6.openWindow(a);this.$2&&(this.$2.closed||this.$2.close(),this.$2=null);this.$2=d;this.$3=!0;return[d,b("Promise").all([this.$7.load(),this.$4.load()]).then(function(b){var d=b[0];b=b[1];c.$5===null&&(c.$5=new b(c.$1,new d(c.$1)));return c.$5.initCall(c.$2,a)})["finally"](function(){c.$3=!1})]};return a}();e.exports=a}),null);
__d("ZenonParentCallSummaryLogProcessor",["CurrentUser","FBRTCCallSummaryStore","ZenonCallSummary","ZenonDismissReason","gkx","pageID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonDismissReason").ZenonDismissReason;a=function(){__p&&__p();function a(a){this.$2=b("FBRTCCallSummaryStore").getInstance(),this.$3=a.protocol,this.$3==="mw"&&(a.peerID="MW_PEER_ID"),this.$1=new(b("ZenonCallSummary"))(a)}var c=a.prototype;c.$4=function(a){if(a!=null){a=a.deviceID;a=a==="mobile";this.$1.setIsPeerMobile(a)}};c.processEvent=function(a){__p&&__p();switch(a.name){case"inviteResponded":this.$1.onInviteResponded();break;case"inviteReceived":this.$1.onInviteReceived();this.$4(a.remoteDeviceInfo);break;case"callEnded":this.$5(a);break;case"callAccepted":this.$1.onCallAccepted(a.trigger);this.$1.save(this.$2);break;case"popupOpened":this.$6(a);this.$1.save(this.$2);break}};c.$6=function(a){this.$1.setInitByPageID(b("pageID")),this.$1.setInitByAppID(b("CurrentUser").getAppID()),this.$1.onCallEnded(g.CLIENT_ERROR,!1,!0,a.isPopupBlocked?"PopupBlocked":"PopupPending"),this.$1.save(this.$2)};c.$5=function(a){if(this.$3==="mw"&&a.isRemoteEnded)return;var c=a.endCallReason,d=a.isRemoteEnded;a=a.endCallSubreason;var e=b("gkx")("1148995");if(!e&&c===g.OTHER_INSTANCE_HANDLED&&d)return;this.$1.onCallEnded(c,d,!1,a);this.$1.save(this.$2)};return a}();e.exports=a}),null);
__d("ZenonCollisionContext",[],(function(a,b,c,d,e,f){function a(a){var b=null;a.groupThreadID!=null?b={id:a.groupThreadID,type:2}:a.peerID!=null&&(b={id:a.peerID,type:1});return b}e.exports={getThreadIDAndTypeFromCollisionContext:a}}),null);
__d("LazyLoadInstance",["promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={NOT_READY:0,LOADING:1,READY:2};a=function(){__p&&__p();function a(a,b){this.$1={instantiate:b,moduleReference:a,stage:g.NOT_READY}}var c=a.prototype;c.get=function(a){switch(this.$1.stage){case g.NOT_READY:b("promiseDone")(this.$2(this.$1),a);break;case g.LOADING:b("promiseDone")(this.$1.instancePromise,a);break;case g.READY:a(this.$1.instance);break}};c.getNow=function(){return this.$1.stage===g.READY?this.$1.instance:null};c.preload=function(){this.$1.stage===g.NOT_READY&&this.$2(this.$1)};c.$2=function(a){var b=this,c=a.instantiate;a=a.moduleReference;a=a.load().then(function(a){a=c(a);b.$1={instance:a,stage:g.READY};return a});this.$1={instancePromise:a,stage:g.LOADING};return a};return a}();e.exports=a}),null);
__d("ZenonOfferStorage",["CacheStorage"],(function(a,b,c,d,e,f){var g="localstorage",h="RTC_",i="offer",j="offer_msg",k={writePeerOfferToStorage:function(a,b){a=k.getStorage(a,j);k._storeData(a,i,b)},_storeData:function(a,b,c){c={__t:Date.now(),__d:c};a.set(b,c)},getStorage:function(a,c){return new(b("CacheStorage"))(g,""+h+a+"_"+c+"_")}};e.exports=k}),null);
__d("ZenonParentSignalingClient",["ZenonDebugLogger","ZenonSignalingTypes","recoverableViolation","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonSignalingTypes").ZenonRemoteSdpResponseStatus;a=function(){__p&&__p();function a(a,c,d,e){__p&&__p();var f=this;this.remoteSignalingID=null;this.$4="init";this.$6=null;this.$7=null;this.$8=function(){};this.$9=function(a,c,d){b("ZenonDebugLogger").getInstance().logStateMachine("ParentSignalingClient",f.$4,"received "+a.eventName,f.$1);switch(a.eventName){case"inviteRequest":f.$11(a,c,d);break;case"remoteSdpRequest":f.$12(a,c);break;case"terminateRequest":f.$13(a,c,d);break}};this.$1=a;this.$3=d;this.$5=e;this.$2=c;c.setReceiver(this.$9)}var c=a.prototype;c.setSignalingEventHandlers=function(a){if(this.$6!=null){b("recoverableViolation")("setSignalingEventHandlers should only be called once, to avoid accidentally losing handlers.","rtc_www");return}this.$6=a};c.setLoggingEventHandler=function(a){this.$8=a};c.getSignalingId=function(){return this.$1};c.sendDismiss=function(a){this.$4="terminated";a={eventName:"terminateRequest",reason:a,shouldInformPeer:!0,fromJoinResponse:!1};this.$10(a)};c.receiveMessage=function(a){this.$2.receiveMessage(a)};c.isTerminated=function(){return this.$4=="terminated"};c.sendAnswerIntent=function(){if(this.$4=="inviteAcknowledged"){this.$4="answered";var a={eventName:"answerIntentRequest"};this.$10(a)}else throw b("unrecoverableViolation")("sendAnswerIntent called in unexpected state "+this.$4,"rtc_www")};c.respondToInvite=function(a){if(this.$4=="inviteReceived"){if(this.$7==null)throw b("unrecoverableViolation")("respondToInvite called without inviteMessageId being populated first","rtc_www");this.$4="inviteAcknowledged";a={eventName:"inviteResponse",ackMessageId:this.$7,status:a};this.$10(a)}else throw b("unrecoverableViolation")("respondToInvite called in unexpected state "+this.$4,"rtc_www")};c.sendInvite=function(a,c){throw b("unrecoverableViolation")("sendInvite called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?","rtc_www")};c.sendSdp=function(a,c){throw b("unrecoverableViolation")("sendSdp called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?","rtc_www")};c.sendIceCandidate=function(a){throw b("unrecoverableViolation")("sendIceCandidate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?","rtc_www")};c.sendMediaUpdate=function(a){throw b("unrecoverableViolation")("sendMediaUpdate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?","rtc_www")};c.sendAddParticipantsMessage=function(a){throw b("unrecoverableViolation")("sendAddParticipantsMessage called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?","rtc_www")};c.sendClientInfo=function(a){throw b("unrecoverableViolation")("sendClientInfo called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?","rtc_www")};c.$10=function(a){b("ZenonDebugLogger").getInstance().logStateMachine("ParentSignalingClient",this.$4,"sending "+a.eventName,this.$1),this.$3.sendEvent(a)};c.$11=function(a,c,d){if(this.$4=="init")this.$4="inviteReceived",this.$7=c,this.$5(a,d,this);else throw b("unrecoverableViolation")("_handleReceivedInviteRequest called in unexpected state "+this.$4,"rtc_www")};c.$13=function(a,b,c){if(this.$4!="terminated"){this.$4="terminated";c={eventName:"dismissResponse",ackMessageId:b};this.$3.sendEvent(c);this.$6&&this.$6.onDismissReceived&&this.$6.onDismissReceived(this.$1,a.reason)}};c.$12=function(a,b){b={eventName:"remoteSdpResponse",ackMessageId:b,type:a.sdp.type,acknowledgedVersion:a.sdp.version,negotiateType:a.negotiateType,status:g.OK};this.$3.sendEvent(b)};return a}();e.exports=a}),null);
__d("ZenonParentCallsManager",["BaseEventEmitter","JSResource","LazyLoadInstance","ZenonCallLogger","ZenonCollisionContext","ZenonDismissReason","ZenonOfferStorage","ZenonP2PMessageTypes","ZenonParentCallSummaryLogProcessor","ZenonParentSignalingClient","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonCollisionContext").getThreadIDAndTypeFromCollisionContext,h=b("ZenonDismissReason").ZenonDismissReason,i=b("ZenonDismissReason").endCallToDismissReason,j=b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this)||this;d.$ZenonParentCallsManager4=new Map();d.$ZenonParentCallsManager5=new Set();d.$ZenonParentCallsManager6=new Map();d.$ZenonParentCallsManager7=new Map();d.$ZenonParentCallsManager8=new Map();d.getRawP2PMessages=function(a){return(a=d.$ZenonParentCallsManager7.get(a))!=null?a:null};d.getMWRingRequest=function(a){return(a=d.$ZenonParentCallsManager6.get(a))!=null?a:null};d.onInviteReceived=function(a,b,c){__p&&__p();var e=c.getSignalingId();c.setSignalingEventHandlers({onDismissReceived:d.onDismissReceived});var f=a.inviterID,h=a.otherParticipants,i=a.requestingVideo;a=a.roomInfo;var j="zenon_incoming_call_dialog",k=d.$ZenonParentCallsManager9({protocol:b,peerID:f,isCaller:!1,callTrigger:j,callID:e,isVideo:i});k.log({name:"inviteReceived"});j=d.$ZenonParentCallsManager3.isSupportedClientForProtocol(b);var l=j?"OK":"NOT_SUPPORTED";c.respondToInvite(l);k.log({name:"inviteResponded"});l={id:"0",type:2};if(a.context){var m;l=(m=g(a.context))!=null?m:l}l={ringID:e,inviterID:f,otherParticipants:h,requestingVideo:i,thread:l,isClientPermissableRing:j,onAccept:function(a,g){var h=g.isPopupBlocked;g=g.trigger;k.log({name:"callAccepted",trigger:g});d.$ZenonParentCallsManager11(f);c.sendAnswerIntent();d.$ZenonParentCallsManager10(a,{isVideo:i,protocol:b,isPopupBlocked:h,callTrigger:g,callID:e,peerID:f})},onDecline:function(a,b){b===void 0&&(b=null),d.onDecline(e,k,a,b)},controllerParams:{callContext:a.name,callID:e,serverInfoData:(h=(m=a.context)==null?void 0:m.serverInfoData)!=null?h:null,configuration:b}};d.emit("incomingRing",l)};d.onDismissReceived=function(a,b){var c=d.$ZenonParentCallsManager12(b);c={ringID:a,reason:c};d.emit("ringCancel",c);c=d.$ZenonParentCallsManager4.get(a);c!=null&&c.log({name:"callEnded",endCallReason:b,isRemoteEnded:!0})};d.$ZenonParentCallsManager3=c;d.$ZenonParentCallsManager2=new(b("LazyLoadInstance"))(b("JSResource")("ZenonSignalingParentTransport").__setRef("ZenonParentCallsManager"),function(a){a=new a();a.init(d.getRawP2PMessages,d.getMWRingRequest);return a});d.$ZenonParentCallsManager1=new(b("LazyLoadInstance"))(b("JSResource")("ZenonSignalingClientManager").__setRef("ZenonParentCallsManager"),function(a){return new a(b("ZenonParentSignalingClient"),d.onInviteReceived)});return d}var d=c.prototype;d.startOutgoingCallIntent=function(a,b){var c=b.peerID,d=b.callID,e=b.callTrigger,f=b.protocol,g=b.isVideo;this.$ZenonParentCallsManager9({peerID:c,callID:d,callTrigger:e,protocol:f,isCaller:!0,isVideo:g});this.$ZenonParentCallsManager10(a,b)};d.$ZenonParentCallsManager9=function(a){var c=a.callID,d=a.callTrigger,e=a.isCaller,f=a.peerID,g=a.protocol;a=a.isVideo;var h=this.$ZenonParentCallsManager4.get(c);!h?(h=new(b("ZenonCallLogger"))({callID:c,peerID:f,callTrigger:d,isCaller:e,protocol:g,isVideo:a},[b("ZenonParentCallSummaryLogProcessor")]),this.$ZenonParentCallsManager4.set(c,h)):b("recoverableViolation")("Call logger key collision in parentCallsManager for callID: "+c,"rtc_www");return h};d.$ZenonParentCallsManager10=function(a,b){var c=b.callID;b.isVideo;b=b.isPopupBlocked;this.$ZenonParentCallsManager2.get(function(b){b.verificationNonce=a});this.$ZenonParentCallsManager5.add(c);c=this.$ZenonParentCallsManager4.get(c);c!=null&&c.log({name:"popupOpened",isPopupBlocked:b})};d.initListeners=function(a){__p&&__p();var b=this;for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e.subscribe(function(a){return b.onMessageReceived(a)},function(a){return b.onRawP2PMessageReceived(a)},function(a){return b.onRawMWMessageReceived(a)})}};d.onMessageReceived=function(a){var b=a.getHeader().signalingID;if(b!=null&&this.$ZenonParentCallsManager5.has(b))return;this.$ZenonParentCallsManager1.get(function(b){b.receiveMessage(a)})};d.onRawP2PMessageReceived=function(a){var b=String(a.from);if(a.msg_type!==j.OFFER){var c=this.$ZenonParentCallsManager7.get(b);c||(c=[],this.$ZenonParentCallsManager7.set(b,c));c.push(a)}else this.$ZenonParentCallsManager8.set(b,a)};d.onRawMWMessageReceived=function(a){var b=a.jsonPayload,c=b.header;b=b.body;b=b.ringRequest;if(b){b=c.conferenceName;this.$ZenonParentCallsManager6.set(b,a)}};d.onDecline=function(a,c,d,e){e===void 0&&(e=null),this.$ZenonParentCallsManager1.get(function(f){f=f.getSignalingClient(a);if(f){var g=i(d);d!=="NoAnswerTimeout"&&d!=="VersionUnsupported"&&e!=="CallsBlocked"&&f.sendDismiss(g);c.log({name:"callEnded",endCallReason:g,isRemoteEnded:!1,endCallSubreason:e})}else b("recoverableViolation")("signaling client should be defined","rtc_www")})};d.removeListeners=function(a){__p&&__p();for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;d.unsubscribe()}};d.$ZenonParentCallsManager12=function(a){switch(a){case h.OTHER_INSTANCE_HANDLED:case h.ANSWERED_ON_ANOTHER_DEVICE:case h.REJECTED_ON_ANOTHER_DEVICE:return"other_dismiss";default:return"hangup"}};d.$ZenonParentCallsManager11=function(a){var c=this.$ZenonParentCallsManager8.get(a);c&&b("ZenonOfferStorage").writePeerOfferToStorage(a,c)};return c}(b("BaseEventEmitter"));e.exports=a}),null);