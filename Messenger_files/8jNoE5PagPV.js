if (self.CavalryLogger) { CavalryLogger.start_js(["aP9qj"]); }

__d("ChatSidebarActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({AFTER_DOM_LOAD:null,INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null})}),null);
__d("ChatSidebarPresencePrivacyActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({PRIVACY_CHANGED:null,USER_PRESENCE_CHANGED:null});e.exports=a}),null);
__d("ChatSidebarRecentCallsActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({RECENT_CALLS_UPDATED:null});e.exports=a}),null);
__d("ChatSidebarActions",["ChatDispatcher","ChatSidebarActionTypes","ChatSidebarPresencePrivacyActions","ChatSidebarRecentCallsActions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").INIT})},afterDomLoad:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").AFTER_DOM_LOAD})},loaded:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").LOADED})},disable:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!1,sidebarType:"buddylist"})},enable:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!0,sidebarType:a})},show:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SHOW,sidebarType:a})},userPresenceChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED})},privacyChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED})},recentCallsUpdated:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarRecentCallsActions").RECENT_CALLS_UPDATED,calls:a})}};e.exports=a}),null);
__d("ChatSidebarDropdownConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SOUND:"sound",ADVANCED_SETTINGS:"advanced_settings",BLOCK_SETTINGS:"block_settings",TURN_OFF_DIALOG:"turn_off_dialog",CLOSE_ALL_TABS:"close_all_tabs",LOWER_ALL_TABS:"lower_all_tabs",TOGGLE_DISCOVER_BOTS:"toggle_discover_bots",SIDEBAR:"sidebar",HIDE_GROUPS:"hide_groups",ONLINE:"online",VIDEOCALL_ON:"videoon",VIDEOCALL_OFF:"videooff",PAUSE:"pause",SHOW_APPS:"show_apps",HIDE_APPS:"hide_apps",HIDE_MARKETPLACE:"hide_marketplace",SHOW_TICKER:"show_ticker",HIDE_TICKER:"hide_ticker",HIDE_ADMINED_PAGES:"hide_admined_pages",HIDE_BUSINESSES:"hide_businesses",EMOJI_SETTINGS:"emoji_settings",TURN_OFF_CHAT_TABS:"turn_off_chat_tabs"});e.exports=a}),null);
__d("FBRTCDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("FBRTCStore",["FBRTCDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("FBRTCDispatcher"))||this}var d=c.prototype;d.__emitChange=function(){this.__emitter.emit(this.__changeEvent)};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("FBRTCCallBlockingStore",["Arbiter","AsyncRequest","Bootloader","ChannelConstants","FBRTCDispatcher","FBRTCStore","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=0,i=null,j="call_block_setting_changed";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.init=function(a){this.$FBRTCCallBlockingStore1(a),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("videocall_block_setting"),this.$FBRTCCallBlockingStore2.bind(this))};d.__onDispatch=function(a){if(a.type!==j)return;this.$FBRTCCallBlockingStore1(a.data)};d.$FBRTCCallBlockingStore1=function(a){switch(a){case 0:g=!1;this.$FBRTCCallBlockingStore3();break;case-1:g=!0;this.$FBRTCCallBlockingStore3();break;default:g=!0,this.$FBRTCCallBlockingStore4(a)}this.__emitChange()};d.$FBRTCCallBlockingStore4=function(a){i===null&&(i=b("setTimeoutAcrossTransitions")(this.turnOnVideoCalling.bind(this),a*1e3))};d.getBlockingStatus=function(){return g};d.turnOnVideoCalling=function(){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({call_blocked_until:0}).send()};d.turnOffVideoCalling=function(a){h=a,new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({call_blocked_until:a}).send()};d.$FBRTCCallBlockingStore3=function(){i&&(b("clearTimeout")(i),i=null)};d.$FBRTCCallBlockingStore5=function(){b("FBRTCDispatcher").dispatch({type:j,data:0}),b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logCheckpoint({checkpoint:"rtc_enabled"})},"FBRTCCallBlockingStore")};d.$FBRTCCallBlockingStore6=function(){b("FBRTCDispatcher").dispatch({type:j,data:h}),b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logCheckpoint({checkpoint:h===-1?"rtc_disabled_permanently":"rtc_disabled_temporarily"})},"FBRTCCallBlockingStore")};d.$FBRTCCallBlockingStore2=function(a,c){b("FBRTCDispatcher").dispatch({type:j,data:c.obj.value})};return c}(b("FBRTCStore"));e.exports=new a()}),null);
__d("ChatOptions",["Arbiter","ArbiterMixin","Bootloader","ChannelConstants","ChatSidebarActions","ChatSidebarDropdownConstants","FBRTCCallBlockingStore","JSLogger","PresenceUtil","mixin","ChatOptionsInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g=b("JSLogger").create("chat_options"),h={};(function(){__p&&__p();var a=b("ChatOptionsInitialData");for(var c in a){var d=a[c];switch(c){case"call_blocked_until":b("FBRTCCallBlockingStore").init(d);break;case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:d!==-1&&(h[c]=!!d);break;default:h[c]=!!d}}})();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getSetting=function(a){return h[a]};d.setSetting=function(a,c,d){__p&&__p();if(a==="sidebar_mode"){b("Bootloader").loadModules(["ChatSidebarVisibility"],function(a){return a.shouldShowSidebarIgnoreEnabled(null,function(a,d){c?b("ChatSidebarActions").enable(a?"sidebar":"buddylist"):b("ChatSidebarActions").disable()})},"ChatOptions");return}if(this.getSetting(a)==c)return;d&&(d="from_"+d,g.log(d,{name:a,new_value:c,old_value:this.getSetting(a)}));h[a]=!!c;b("Arbiter").inform("chat/option-changed",{name:a,value:c})};return c}(b("mixin")(b("ArbiterMixin")));b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("setting"),function(a,c){a=c.obj;if(a.window_id===b("PresenceUtil").getSessionID())return;i.setSetting(a.setting,!!a.value,"channel")});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.chat_options=h});var i=new a();e.exports=i}),null);
__d("ChatQuietLinks",["DataStore","DOM","Event","Parent","UserAgent_DEPRECATED","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();var g={};a={silenceLinks:function(a){h(a,this.removeEmptyHrefs.bind(this))},nukeLinks:function(a){h(a,this.removeAllHrefs.bind(this))},removeEmptyHrefs:function(a){i(a,function(a){return!a||a==="#"})},removeAllHrefs:function(a){i(a)}};function h(a,c){__p&&__p();if(!a)return;var d=!!b("UserAgent_DEPRECATED").chrome(),e=!!b("UserAgent_DEPRECATED").chrome()||b("UserAgent_DEPRECATED").ie()>=9||b("UserAgent_DEPRECATED").firefox()>=4;if(g[b("getOrCreateDOMID")(a)])return;g[b("getOrCreateDOMID")(a)]=!0;if(!e)return;if(!d){c&&c(a);return}b("Event").listen(a,"mouseover",function(a){a=b("Parent").byTag(a.getTarget(),"a");if(a){var c=a.getAttribute("href");j(c)&&(b("DataStore").set(a,"stashedHref",a.getAttribute("href")),a.removeAttribute("href"))}});b("Event").listen(a,"mouseout",function(a){a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").remove(a,"stashedHref");j(c)&&a.setAttribute("href",c)});b("Event").listen(a,"mousedown",function(a){if(!a.isDefaultRequested())return!0;a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").get(a,"stashedHref");j(c)&&a.setAttribute("href",c)})}function i(a,c){a=b("DOM").scry(a,"a");c&&(a=a.filter(function(a){return c(a.getAttribute("href"))}));a.forEach(function(a){a.removeAttribute("href"),a.tabIndex||a.setAttribute("tabindex",0)})}function j(a){return a&&a!=="#"}e.exports=a}),null);
__d("ChatUnreadCountActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({COUNT_UPDATED:null})}),null);
__d("ShortProfilesActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({PROFILE_UPDATED:null})}),null);
__d("ShortProfilesStore",["ChatDispatcher","ChatProfileStore","FluxStore","ShortProfiles","ShortProfilesActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("ChatDispatcher"))||this}var d=c.prototype;d.__onDispatch=function(a){a=a.type;switch(a){case b("ShortProfilesActionTypes").PROFILE_UPDATED:this.__emitChange();break;default:break}};d.getNow=function(a){var c=b("ChatProfileStore").get(a);c||(c=b("ShortProfiles").getNow(a));return c};d.getMulti=function(a){b("ShortProfiles").getMulti(a,this.$ShortProfilesStore1)};d.$ShortProfilesStore1=function(a){b("ChatDispatcher").dispatch({type:b("ShortProfilesActionTypes").PROFILE_UPDATED})};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("ChatPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setEndpoint=function(a){this.$1.endpoint=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTabsOpen=function(a){this.$1.tabs_open=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={duration:!0,endpoint:!0,event:!0,tabs_open:!0,time:!0,weight:!0};e.exports=a}),null);
__d("ChatPerfInstrumentation",["Promise","BaseEventEmitter","ChatPerfTypedLogger","CurrentUser","FantaConst","PresenceState","emptyFunction","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("CurrentUser").isWorkUser();c=a?b("FantaConst").cookieIDs.WORK_COOKIE_ID:b("FantaConst").cookieIDs.PERSONAL_COOKIE_ID;d=b("PresenceState").getInitial();var h=d&&d[c]?d[c].length:0,i;f={_startTime:Number,_sidebarStartTime:Number,init:function(){this._startTime=(g||(g=b("performanceAbsoluteNow")))();return new(b("Promise"))(function(a){return a()})},initDivebar:function(){this._sidebarStartTime=(g||(g=b("performanceAbsoluteNow")))()},_log:function(a,c){c=(g||(g=b("performanceAbsoluteNow")))()-(c||this._startTime);i&&i.emit(a,c);var d=new(b("ChatPerfTypedLogger"))();d.setEvent(a).setDuration(c);d.setTabsOpen(h);d.log()},addPerfTimingsListener:function(a,c){i||(i=new(b("BaseEventEmitter"))());return i.once(a,c)},logInitStores:function(){this.logInitStores=b("emptyFunction"),this._log("chat_init_stores")},logInitData:function(){this.logInitData=b("emptyFunction"),this._log("chat_init_data")},logInitUI:function(){this.logInitUI=b("emptyFunction"),this._log("chat_init_ui")},logInitSound:function(){this.logInitSound=b("emptyFunction"),this._log("chat_init_sound")},logDisplayDone:function(){this.logDisplayDone=b("emptyFunction"),this._log("chat_display_done")},logTTI:function(){this.logTTI=b("emptyFunction"),this._log("tti")},logCHAT_CONVERSATION_TTI:function(){this.logCHAT_CONVERSATION_TTI=b("emptyFunction"),this._log("chat_conversation_tti")},logSIDEBAR_FROM_CLIENT_TTI:function(){this.logSIDEBAR_FROM_CLIENT_TTI=b("emptyFunction"),this._log("sidebar_from_client_tti",this._sidebarStartTime)},logSIDEBAR_DISPLAY_DONE:function(){this.logSIDEBAR_DISPLAY_DONE=b("emptyFunction"),this._log("sidebar_display_done",this._sidebarStartTime)}};e.exports=f}),null);
__d("ChatSidebarHideReason",[],(function(a,b,c,d,e,f){a=Object.freeze({VIEWPORT_INCAPABLE:0,LOW_FRIEND_COUNT:1,NOT_ENABLED:2,OFF_HOMEPAGE:3});e.exports=a}),null);
__d("ChatSidebarStore",["AvailableListConstants","ChatConfig","ChatDispatcher","ChatOptions","ChatOptionsInitialData","ChatSidebarActionTypes","ChatUnreadCountActionTypes","CurrentUser","FluxStore","InitialChatFriendsList","PresenceOrderedList","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","PresenceStatusStore","ShortProfiles","ShortProfilesActionTypes","ShortProfilesStore","gkx","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.map(function(a){var b=a.slice(0,-2);a=Number(a.slice(-1));return[b,a]})}function i(a,c,d){d===void 0&&(d=[]);return a.reduce(function(a,e){var f=e[0];e=e[1];a.length<c&&b("PresencePrivacy").getFriendVisibility(f)!==b("PresencePrivacy").BLACKLISTED&&e===b("PresenceStatus").get(f)&&!d.includes(f)&&a.push(f);return a},[])}function j(a){return b("PresencePrivacy").getVisibility()==b("PresencePrivacy").ONLINE?a.filter(function(a){return b("PresencePrivacy").allows(a)}):a}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("ChatDispatcher"))||this;c.$ChatSidebarStore2={enabled:!1,initTime:0,initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null};c.setupShortProfiles();c.$ChatSidebarStore3={enabled:!!b("ChatOptionsInitialData").sidebar_mode,initTime:(g||(g=b("performanceAbsoluteNow")))(),initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null};return c}var d=c.prototype;d.setupShortProfiles=function(){var a=b("InitialChatFriendsList").shortProfiles;a&&b("ShortProfiles").setMulti(a)};d.__onDispatch=function(a){__p&&__p();var c=a.type;this.$ChatSidebarStore2=babelHelpers["extends"]({},this.$ChatSidebarStore3);switch(c){case b("ChatSidebarActionTypes").INIT:this.$ChatSidebarStore2.initialized||(this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initTime:(g||(g=b("performanceAbsoluteNow")))()}));this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initialized:!0});break;case b("ChatSidebarActionTypes").AFTER_DOM_LOAD:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{isAfterDomLoad:!0});break;case b("ChatSidebarActionTypes").LOADED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{loaded:!0});break;case b("ChatSidebarActionTypes").SHOW:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{visible:a.sidebarType});break;case b("ChatSidebarActionTypes").SET_ENABLED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{enabled:a.enabled,visible:a.sidebarType});break}if(b("gkx")("678655")&&(c===b("PresenceStatusActionTypes").AVAILABILITY_CHANGED||c===b("ShortProfilesActionTypes").PROFILE_UPDATED||c===b("ChatUnreadCountActionTypes").COUNT_UPDATED)){this.__emitChange();return}for(var d in this.$ChatSidebarStore3)if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore3,d)&&this.$ChatSidebarStore3[d]!==this.$ChatSidebarStore2[d]){this.__emitChange();break}};d.getPrevState=function(){return this.$ChatSidebarStore2};d.getState=function(){return this.$ChatSidebarStore3};d.isInitialized=function(){return this.$ChatSidebarStore3.initialized};d.isLoaded=function(){return this.$ChatSidebarStore3.loaded};d.isAfterDomLoad=function(){return this.$ChatSidebarStore3.isAfterDomLoad};d.isEnabled=function(){return this.$ChatSidebarStore3.enabled};d.getInitTime=function(){return this.$ChatSidebarStore3.initTime};d.getVisibleType=function(){return this.$ChatSidebarStore3.visible};d.getUsersData=function(a){__p&&__p();a=this.getOrderedPresenceUserList(a);var c=b("InitialChatFriendsList").nearby,d=b("CurrentUser").isWorkUser()?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return!a||a.type==="fb4c"}):b("PresenceOrderedList").getAvailableSorted(a.concat(c)),e=b("CurrentUser").isWorkUser()?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return a&&a.type!=="fb4c"}):[];a=a.filter(function(a){return!c||c.indexOf(a)===-1});var f=j(a);a=b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_WHITELIST&&b("PresencePrivacy").getVisibility()?a.filter(function(a){return!b("PresencePrivacy").allows(a)}):[];return{availableUsers:d,topUsers:f,workOthers:e,offlineUsers:a}};d.getExtraData=function(a){__p&&__p();var c,d=(c=b("InitialChatFriendsList")).groups,e=c.nearby,f=c.adminedPages,g=c.marketplaceThreads,h=c.pageListModule;c=c.pymmList;a--;b("ChatConfig").get("show_header")&&a--;var i=!b("ChatOptions").getSetting("hide_businesses")&&c&&c.pages;i&&(a-=3);f=b("ChatOptions").getSetting("hide_admined_pages")?[]:f;f.length&&(a-=f.length+1);var k=a,l=a;d=this.getGroupsToShow(d);var m=d.length;m===0&&!b("ChatOptions").getSetting("hide_groups")&&m++;m>0&&(l-=m+1);b("ChatConfig").get("nearby_friends_www_chatbar")&&e.length>0&&(l-=e.length+1);b("ChatConfig").get("show_admined_pages")&&f.length>0&&(l-=f.length+1);m=i&&c?c:{pages:[]};b("ChatConfig").get("show_businesses")&&m.pages.length>0&&(l-=2);l=Math.min(a,Math.max(l,b("ChatConfig").get("min_top_friends")||0));i=j(e);return{isUserOffline:b("PresencePrivacy").isUserOffline(),groups:d,numTopFriends:l,nearby:i,marketplaceThreads:g,maxThreadSlots:k,adminedPages:f,pageListModule:h,pymmList:m}};d.getGroupsToShow=function(a){if(b("ChatOptions").getSetting("hide_groups"))return[];return a.length>1?a.sort(function(a,c){return b("PresenceStatus").getGroup(c.mercury_thread.participants)-b("PresenceStatus").getGroup(a.mercury_thread.participants)}).slice(0,b("ChatConfig").getNumber("num_groups_to_show")):a};d.getOrderedPresenceUserList=function(a){if(this.$ChatSidebarStore1&&Array.isArray(this.$ChatSidebarStore1))return i(this.$ChatSidebarStore1,a);this.$ChatSidebarStore1=h(b("InitialChatFriendsList").list)||[];return i(this.$ChatSidebarStore1,a)};d.getStatusMap=function(a,c){var d={},e={};a.forEach(function(a){if(c){var f=b("PresenceStatusStore").getIsPlaying(a);d[a]=f}f=b("PresenceStatusStore").get(a);f===b("AvailableListConstants").ACTIVE&&(e[a]=f)});return{statusMap:e,playingMap:d}};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("ChatSidebarVisibility",["ChatConfig","ChatSidebarHideReason","ChatSidebarStore","OrderedFriendsList","URI","getViewportDimensions","qex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("ChatConfig").get("sidebar.min_friends"),i=b("ChatConfig").get("sidebar.minimum_width"),j=b("ChatConfig").get("sidebar.hide_divebar_off_homepage"),k=b("qex")._("1211266"),l={getViewport:function(){return b("getViewportDimensions")()},shouldShowSidebar:function(a,c,d){l.shouldShowSidebarIgnoreEnabled(a,function(a,d){var e=b("ChatSidebarStore").isEnabled();c(a&&e,e?d:d.concat([b("ChatSidebarHideReason").NOT_ENABLED]))},d)},shouldShowSidebarIgnoreEnabled:function(a,c,d){__p&&__p();var e=this;b("OrderedFriendsList").getActiveList(function(f){var g=a||l.getViewport();g=g.width>i;f=f.length<h;var m=!0,n=[];(j||k)&&!e.isOnHomepage(d)&&(m=!1,n.push(b("ChatSidebarHideReason").OFF_HOMEPAGE));g||(m=!1,n.push(b("ChatSidebarHideReason").VIEWPORT_INCAPABLE));f&&(m=!1,n.push(b("ChatSidebarHideReason").LOW_FRIEND_COUNT));c(m,n)})},isOnHomepage:function(a){a=a?a.getPath():new(g||(g=b("URI")))(window.location.href).getPath();return a==="/"},isSidebarVisible:function(){return b("ChatSidebarStore").getVisibleType()==="sidebar"},isBuddyListVisible:function(){return b("ChatSidebarStore").getVisibleType()==="buddylist"}};e.exports=l}),null);
__d("incognito",["regeneratorRuntime","Promise","UserAgent","WebStorage","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){__p&&__p();while(1)switch(c.prev=c.next){case 0:a=window.RequestFileSystem||window.webkitRequestFileSystem;if(!a){c.next=3;break}return c.abrupt("return",new(b("Promise"))(function(b){return a(window.TEMPORARY,10,function(){return b(!1)},function(){return b(!0)})}));case 3:if(!(b("UserAgent").isBrowser("IE >= 10")||b("UserAgent").isBrowser("Edge"))){c.next=5;break}return c.abrupt("return",!window.indexedDB);case 5:if(!b("UserAgent").isBrowser("Firefox >= 16")){c.next=7;break}return c.abrupt("return",new(b("Promise"))(function(a){var b=window.indexedDB.open("__test__");b.onsuccess=function(){return a(!1)};b.onerror=function(b){b.preventDefault(),a(!0)}}));case 7:if(!(b("gkx")("676917")&&(b("UserAgent").isPlatform("iOS")&&b("UserAgent").isBrowser("Safari >= 10.3")||b("UserAgent").isPlatform("Mac OS X")&&b("UserAgent").isBrowser("Safari >= 11.1")))){c.next=18;break}c.prev=8;window.openDatabase("sid","1.0","",0);c.next=16;break;case 12:c.prev=12;c.t0=c["catch"](8);if(!(c.t0.name==="SecurityError")){c.next=16;break}return c.abrupt("return",!0);case 16:c.next=20;break;case 18:if(!b("UserAgent").isBrowser("Safari")){c.next=20;break}return c.abrupt("return",!(g||(g=b("WebStorage"))).getLocalStorage());case 20:return c.abrupt("return",!1);case 21:case"end":return c.stop()}},null,this,[[8,12]])}e.exports=a}),null);