if (self.CavalryLogger) { CavalryLogger.start_js(["0VNuv"]); }

__d("WorkContentActivityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WorkContentActivityLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WorkContentActivityLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WorkContentActivityLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAdditionalData=function(a){this.$1.additional_data=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setAppContentID=function(a){this.$1.app_content_id=a;return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setAppVersion=function(a){this.$1.app_version=a;return this};c.setAssociatedPostID=function(a){this.$1.associated_post_id=a;return this};c.setAttachmentFileType=function(a){this.$1.attachment_file_type=a;return this};c.setContentID=function(a){this.$1.content_id=a;return this};c.setContentType=function(a){this.$1.content_type=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setParentContentID=function(a){this.$1.parent_content_id=a;return this};c.setParentContentType=function(a){this.$1.parent_content_type=a;return this};c.setSurfaceType=function(a){this.$1.surface_type=a;return this};c.setTargetID=function(a){this.$1.target_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={additional_data:!0,app_content_id:!0,app_id:!0,app_version:!0,associated_post_id:!0,attachment_file_type:!0,content_id:!0,content_type:!0,event:!0,parent_content_id:!0,parent_content_type:!0,surface_type:!0,target_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FantaTypeFileUploaderFile",["immutable"],(function(a,b,c,d,e,f){"use strict";a={file:{},id:"",startTime:0,type:null,uploadedID:null};c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record(a));e.exports=c}),null);
__d("MessengerDragAndDrop.react",["Bootloader","JSResource","MercuryShareAttachmentRenderLocations","MessengerEnvironment","React","URI","lazyLoadComponent","prop-types","emptyFunction","ifRequired","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=144,i=b("lazyLoadComponent")(b("JSResource")("MercurySharePreview.react").__setRef("MessengerDragAndDrop.react"));a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.$4(function(b){b.removeSharePreview(a)})},c.$2=function(a,b){c.$4(function(c){c.loadedShareData(a,b)})},c.$3=function(a){c.$4(function(b){b.loadingShareData(a)})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){b("MessengerEnvironment").messengerui?b("Bootloader").loadModules(["MessengerActions"],b("emptyFunction"),"MessengerDragAndDrop.react"):b("Bootloader").loadModules(["FantaMessageActions"],b("emptyFunction"),"MessengerDragAndDrop.react")};d.shouldComponentUpdate=function(a){var b=this.props;return b.threadID!==a.threadID||!!(!b.sharePreview&&a.sharePreview)||!!(b.sharePreview&&a.sharePreview&&!b.sharePreview.equals(a.sharePreview))};d.render=function(){var a=this.props,c=a.sharePreview;a=a.threadID;c=c||{};var d=c.share;c=c.uri;return d||c&&(g||(g=b("URI"))).isValidURI(c)?b("React").jsx("div",{className:"fbNubFlyoutAttachments",children:b("React").jsx("div",{className:"chatAttachmentShelf",children:b("React").jsx(b("React").Suspense,{fallback:b("React").jsx("div",{}),children:b("React").jsx(i,{onClose:this.$1,onLoaded:this.$2,onLoading:this.$3,threadID:a,imageSize:{width:h,height:h},location:b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW,share:d,uri:c})})})}):null};d.$4=function(a){__p&&__p();var c=this;b("setImmediate")(function(){typeof c.props.onResize==="function"&&c.props.onResize()});b("MessengerEnvironment").messengerui?b("ifRequired")("MessengerActions",function(b){a(b)},function(){b("Bootloader").loadModules(["MessengerActions"],function(b){a(b)},"MessengerDragAndDrop.react")}):b("ifRequired")("FantaMessageActions",function(b){a(b)},function(){b("Bootloader").loadModules(["FantaMessageActions"],function(b){a(b)},"MessengerDragAndDrop.react")})};return c}(b("React").Component);a.propTypes={threadID:b("prop-types").string.isRequired};e.exports=a}),null);
__d("MessengerRevokeGroupLinkDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","ReasonReact.bs","MercuryThreadActions","MessengerDialogReact.bs","MessengerDialogHeaderReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c){switch(a){case 0:return b("bs_block").__(0,[[!1,c[1]]]);case 1:return b("bs_block").__(0,[[!0,c[1]]]);case 2:return b("bs_block").__(0,[[c[0],!1]])}}var j=b("ReasonReact.bs").reducerComponent("MessengerRevokeGroupLinkDialogReact");function a(a,c,d,e){__p&&__p();return[j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],function(e){__p&&__p();var f,g,i=function(a){b("bs_curry")._1(e[3],2);return b("bs_curry")._1(d,0)};return(f=b("ReasonReact.bs")).element(void 0,void 0,(g=b("MessengerDialogReact.bs")).Dialog.make(void 0,void 0,void 0,void 0,e[1][1],void 0,void 0,448,void 0,void 0,[b("React").createElement(b("MessengerDialogHeaderReact.bs").make,{children:h._("Revoke Group Link?")}),b("React").createElement("div",{className:"_6b7t"},h._("Revoking this link will delete any pending requests to join this group and automatically create a new link.")),f.element(void 0,void 0,g.Footer.make(void 0,void 0,[f.element(void 0,void 0,g.Button.make(void 0,h._("Cancel"),void 0,void 0,function(a){return b("bs_curry")._1(e[3],2)},0,void 0,void 0,void 0,[])),f.element(void 0,void 0,g.Button.make(void 0,h._("Revoke"),!e[1][0],void 0,function(d){__p&&__p();var f=a,g=c;d=d;if(e[1][0]){b("bs_curry")._1(e[3],0);b("MercuryThreadActions").getForFBID(f).revokeAndRegenerateJoinableLink(g,i);return 0}else{d.preventDefault();return 0}},0,"_6b7u",void 0,void 0,[]))]))]))},function(a){return[!0,!0]},j[10],i,j[12]]}f.reducer=i;f.component=j;f.make=a}),null);
__d("MessengerManageGroupLinkDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","ReasonReact.bs","MessengerDialogs.bs","FBClipboardLinkReact.bs","MessengerDialogReact.bs","MessengerDialogTitleReact.bs","MessengerDialogHeaderReact.bs","MessengerRevokeGroupLinkDialogReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").reducerComponent("MessengerManageGroupLinkDialogReact");function j(a,c,d,e){__p&&__p();return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(e){var f,g,i=function(a){return b("bs_curry")._1(e[3],0)},j=(f=b("React")).createElement("div",{className:"_6b88 _6b89"},h._("Copy Group Link"),(g=b("ReasonReact.bs")).element(void 0,void 0,b("FBClipboardLinkReact.bs").make("_6b8a",d.replace("https://",""),d.replace("https://",""),void 0,void 0,void 0,void 0,"below","center",void 0,void 0,[]))),k=f.createElement(f.Fragment,void 0,g.element(void 0,void 0,b("MessengerDialogReact.bs").CancelButton.make(void 0,[])),f.createElement(b("MessengerDialogTitleReact.bs").make,{children:h._("Manage Group Link")}),g.element(void 0,void 0,b("MessengerDialogReact.bs").Button.make(void 0,h._("Done"),void 0,void 0,function(a){return b("bs_curry")._1(e[3],0)},0,void 0,void 0,void 0,[])));return g.element(void 0,void 0,b("MessengerDialogReact.bs").Dialog.make(void 0,void 0,void 0,void 0,e[1][0],void 0,"default",544,void 0,void 0,[f.createElement(b("MessengerDialogHeaderReact.bs").make,{children:k}),j,f.createElement("div",{className:"_6b8b _6b89"},h._("Anyone with this link can join the group, see all previous messages and see your name and the group name. You can revoke it at any time. Only share it with people you trust.")),f.createElement("div",{className:"_6b8c _6b89",onClick:function(d){var e=a,f=c;return b("MessengerDialogs.bs").showDialog(function(a){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerRevokeGroupLinkDialogReact.bs").make(e,f,i,[]))})}},h._("Revoke Group Link")),f.createElement("div",{className:"_6b8b _6b89"},h._("Revoking this link will delete any pending requests to join this group and automatically create a new link."))]))},function(a){return[!0]},i[10],function(a,c){return b("bs_block").__(0,[[!1]])},i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(a.viewer,a.threadID,a.joinableLink,a.children)});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerGroupLinkSectionReact.bs",["cx","fbt","React","Link.react","bs_caml_option","ReasonReact.bs","MessengerDialogs.bs","MessengerMenu.react","FBClipboardLinkReact.bs","FBClipboardLink.react","AbstractPopoverButtonReact.bs","MessengerPopoverMenu.react","MessengerManageGroupLinkDialogReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c,d,e){e.preventDefault();return b("MessengerDialogs.bs").showDialog(function(e){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerManageGroupLinkDialogReact.bs").make(a,c,d,[]))})}function a(a){var c=a.joinableLink,d=a.viewer,e=a.threadID,f=(a=b("React")).jsx(b("MessengerMenu.react"),{children:a.jsx(b("MessengerMenu.react").Item,{label:h._("Manage Group Link"),onclick:function(a){return i(d,e,c,a)}})}),g=h._("More group link options");g={button:a.jsx(b("Link.react"),{"aria-label":g,className:"_30yy _6dlm",role:"button",title:g}),defaultMaxWidth:200};return a.jsxs("div",{children:[a.jsx(b("FBClipboardLink.react"),b("FBClipboardLinkReact.bs").componentProps("_6dlo",c.replace("https://",""),c.replace("https://",""),void 0,void 0,void 0,void 0,"right",void 0,void 0,void 0)(0)),a.jsx(b("MessengerPopoverMenu.react"),{className:"_6dlp",menu:f,children:b("ReasonReact.bs").element(void 0,void 0,b("AbstractPopoverButtonReact.bs").make(b("bs_caml_option").some(g),!1,void 0,void 0,200,[]))})],className:"_6dln"})}c=a;f.handleManageGroupLinkClick=i;f.make=c}),null);
__d("MessengerInfoPanelGroupLinkContainerReact.bs",["fbt","React","bs_caml_option","ReasonReact.bs","MessengerGroupLinkSectionReact.bs","MessengerInfoPanelSectionReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){a.preventDefault();return 0}d=b("ReasonReact.bs").statelessComponent("MessengerInfoPanelGroupLinkContainerReact");function c(a){__p&&__p();var c=a.isCollapsed,d=a.onToggle,e=a.thread;a=a.viewer;var f=e.joinable_link;if(f==null||f==="")return null;else{c={isCollapsible:!0,isCollapsed:c,onToggle:d,title:g._("Group Link"),children:b("React").createElement(b("MessengerGroupLinkSectionReact.bs").make,{joinableLink:f,viewer:a,threadID:e.thread_id})};d=b("bs_caml_option").nullable_to_opt(e.solid_color);d!==void 0&&(c.customColor=b("bs_caml_option").valFromOption(d));return b("React").createElement(b("MessengerInfoPanelSectionReact.bs").make,c)}}e=c;c=c;f.preventDefault=a;f.component=d;f.make=e;f.jsComponent=c}),null);
__d("messengerInfoPanelGroupLinkContainerReactComponent",["MessengerInfoPanelGroupLinkContainerReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("MessengerInfoPanelGroupLinkContainerReact.bs").jsComponent;e.exports=a}),null);
__d("MessengerUserControlsButtonReact.bs",["ix","fbt","React","Link.react","MercuryIDs","Image.react","ReasonReact.bs","MessengerDialogs.bs","MessengerPageUtils.bs","MessengerMenu.react","MercuryThreadActions","MessengerMuteDialogReact.bs","MessengerPopoverMenu.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=h._("Mute Notifications"),j=h._("Unmute Notifications"),k=h._("Turn Off Messages"),l=h._("Turn On Messages"),m=g("464335"),n=g("464334");function a(a){__p&&__p();var c=a.className,d=a.isMuted,e=a.isBlocked,f=a.pageID,g=a.threadID,h=a.viewer;a=function(a){if(e){b("MercuryThreadActions").getForFBID(h).unblockOnMessengerDotCom(g);return b("MessengerPageUtils.bs").changeBlockedStatus(!1,b("MercuryIDs").getParticipantIDFromUserID(f),h)}else{b("MercuryThreadActions").getForFBID(h).blockOnMessengerDotCom(g);return b("MessengerPageUtils.bs").changeBlockedStatus(!0,b("MercuryIDs").getParticipantIDFromUserID(f),h)}};var o=function(a){b("MercuryThreadActions").getForFBID(h).updateMuteSetting(g,a);return 0},p=function(a){if(d){b("MercuryThreadActions").getForFBID(h).unmute(g);return 0}else return b("MessengerDialogs.bs").showDialog(function(a){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerMuteDialogReact.bs").make(o,[]))})},q=d?j:i;q=b("React").jsx(b("MessengerMenu.react").Item,{label:q,onclick:p});p=e?l:k;p=b("React").jsx(b("MessengerMenu.react").Item,{label:p,onclick:a});a=b("React").jsxs(b("MessengerMenu.react"),{children:[q,p]});q=e?n:m;return b("React").jsx(b("MessengerPopoverMenu.react"),{className:c,menu:a,children:b("React").jsx(b("Link.react"),{children:b("React").jsx(b("Image.react"),{src:q,height:32,width:40})})})}c=a;f.mute=i;f.unmute=j;f.block=k;f.unblock=l;f.unblocked_button_image_path=m;f.blocked_button_image_path=n;f.make=c}),null);
__d("BootloadableMessengerUserControlsButtonReact.bs",["MessengerUserControlsButtonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("MessengerUserControlsButtonReact.bs");f.bootloadable=a}),null);
__d("MessengerSharePreviewStore",["FantaTypeSharePreview","MessengerActions","MessengerStore","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;c.$MessengerSharePreviewStore1=b("immutable").Map({});return c}var d=c.prototype;d.getState=function(){return this.$MessengerSharePreviewStore1};d.__onDispatch=function(a){__p&&__p();var c=a.threadID;switch(a.type){case b("MessengerActions").Types.LINK_PREVIEW:var d=a.match;this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){a.get(c)||a.set(c,new(b("FantaTypeSharePreview"))());var e=a.get(c);a.set(c,e.merge({params:null,type:null,uri:d}))});this.emitChange();break;case b("MessengerActions").Types.LOADING_SHARE_DATA:this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){var b=a.get(c);if(!b)return;a.set(c,b.merge({isLoading:!0,params:null,type:null}))});this.emitChange();break;case b("MessengerActions").Types.LOADED_SHARE_DATA:a=a.attachmentData;var e=a.share_data;this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){var d=a.get(c);if(!d)return;a.set(c,d.merge({isLoading:!1,params:b("immutable").Map({data:e.share_params}),type:e.share_type}))});this.emitChange();break;case b("MessengerActions").Types.REMOVE_SHARE_PREVIEW:this.$MessengerSharePreviewStore1=this.$MessengerSharePreviewStore1.withMutations(function(a){a.get(c)&&a.set(c,new(b("FantaTypeSharePreview"))())});this.emitChange();break}};return c}(b("MessengerStore"));e.exports=new a()}),null);
__d("ChatFileUploadLoggingUtils",["CurrentUser","WorkContentActivityTypedLogger"],(function(a,b,c,d,e,f){"use strict";a={log:function(a,c){c===void 0&&(c="CHAT_MAIN"),b("CurrentUser").isWorkUser()&&new(b("WorkContentActivityTypedLogger"))().setSurfaceType(c).setEvent("CHAT_FILE_UPLOAD").setAdditionalData({file_size:a.size.toString(),file_type:a.type}).log()}};e.exports=a}),null);
__d("MercuryExperimentUtils",["fbt","qex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(){__p&&__p();var a=b("qex")._("1269176");a===null&&(a=26214400);var c;switch(a){case 52428800:c=50;break;case 78643200:c=75;break;default:c=25}a=g._("The file you have selected is too large. The maximum size is {=size}MB",[g._param("=size",c)]);return a.toString()}c={getMaxAttachmentSizeExceededDialog:a};e.exports=c}),null);
__d("MessengerUploadFilesStore",["fbt","ChatFileUploadLoggingUtils","Dialog","FantaTypeFileUploader","FantaTypeFileUploaderFile","FBLogger","LogHistory","MercuryConstants","MercuryExperimentUtils","MessengerActions","MessengerStore","PhotosUploadID","gkx","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("LogHistory").getInstance("messenger_share_file_preview");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;c.$MessengerUploadFilesStore1=b("immutable").Map({});return c}var d=c.prototype;d.getState=function(){return this.$MessengerUploadFilesStore1};d.__onDispatch=function(a){__p&&__p();var c,d=a.threadID,e=a.uploadID;switch(a.type){case b("MessengerActions").Types.PREPARE_FILES_FOR_SEND:h.log("Add files "+d,JSON.stringify(a));var f=a.files;this.$MessengerUploadFilesStore1=j(this.$MessengerUploadFilesStore1,d,f);this.emitChange();break;case b("MessengerActions").Types.CANCEL_FILE_UPLOAD:h.debug("Remove file "+d,JSON.stringify(a));f=this.$MessengerUploadFilesStore1.get(d);c=f.get("uploadingFiles").get(e);c?this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([d,"uploadingFiles",e]):(c=f.get("uploadedFiles").get(e),c&&(this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([d,"uploadedFiles",e])));this.emitChange();break;case b("MessengerActions").Types.EMPTY_FILES:h.debug("Empty files "+d,JSON.stringify(a));this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.withMutations(function(a){a.get(d)&&a.set(d,new(b("FantaTypeFileUploader"))())});this.emitChange();break}};return c}(b("MessengerStore"));function i(a,c){new(b("Dialog"))().setTitle(a).setBody(c).setButtons(b("Dialog").OK).setSemiModal(!0).show()}function j(a,c,d){__p&&__p();if(d.length>b("MercuryConstants").attachmentMaxLimit){i(g._("The number of files you have selected is too large.").toString(),g._("You can send maximum {max number of files} files.",[g._param("max number of files",b("MercuryConstants").AttachmentMaxLimit)]).toString());b("FBLogger")("messenger_upload_file").warn("Attachment limit reached");return a}for(var e=0;e<d.length;e++){var f=d[e];b("ChatFileUploadLoggingUtils").log(f);if(f.size>b("MercuryConstants").AttachmentMaxSize){f=b("MercuryExperimentUtils").getMaxAttachmentSizeExceededDialog();i(g._("The file you have selected is too large").toString(),b("gkx")("1147754")?g._("The file you have selected is too large. The maximum size is 100MB").toString():f);b("FBLogger")("messenger_upload_file").warn("Uploading file is too large");return a}}for(var f=0;f<d.length;f++){e=d[f];var h=l();a=k(a,c,h,e)}return a}function k(a,c,d,e){return a.withMutations(function(a){a.get(c)||a.set(c,new(b("FantaTypeFileUploader"))());var f=a.get(c);a.set(c,f.setIn(["uploadedFiles",d],new(b("FantaTypeFileUploaderFile"))({file:e,id:d,startTime:Date.now()})))})}function l(){return"upload_"+b("PhotosUploadID").getNewID()}e.exports=new a()}),null);
__d("MessengerSecondarySearchFunnelLogger",["FunnelLogger","MercuryConfig","MessengerSecondarySearchFunnelConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=(g=b("MessengerSecondarySearchFunnelConstants")).FUNNEL_NAME,i=g.ENTRY_SURFACES,j=g.EVENTS,k=g.SEARCH_SURFACES,l=g.MICRO_SESSION_TYPES,m=g.END_ACTIONS,n=new Map(),o=new Map(),p=new Map(),q=new Map(),r=0;function a(a,c,d,e,f){if(!f)return;b("FunnelLogger").startFunnel(h,f);b("FunnelLogger").setFunnelTimeout(h,86400);p.set(f.toString(),c);b("FunnelLogger").appendActionWithPayloadIfNew(h,f,j.START,{search_surface:c,entry_surface:d,thread_fbid:e,client:a});(b("MercuryConfig").ChatComposer||c!==k.OMNIPICKER)&&w(f)}function c(a,c,d,e,f){if(!d)return;var g=o.get(d.toString()),i=n.get(d.toString());i=i?l.QUERY:l.NO_QUERY;g!==null&&(x(d,i),p["delete"](d.toString()));b("FunnelLogger").appendActionWithPayloadIfNew(h,d,j.END,{end_reason:a,action_name:c,thread_fbid:e,is_new_thread:f});b("FunnelLogger").endFunnel(h,d)}function d(a,c){if(!c)return;var d=c.toString(),e=n.get(d),f=p.get(d);!e&&!!a?((b("MercuryConfig").ChatComposer||f===k.BROADCAST||f===k.GROUP_CREATION||f===i.COMPOSER)&&x(c,l.NO_QUERY),w(c)):e&&a===""&&e!==""&&(x(c,l.QUERY),(b("MercuryConfig").ChatComposer||f===k.BROADCAST||f===k.GROUP_CREATION||f===i.COMPOSER)&&w(c));n.set(d,a);b("FunnelLogger").appendActionWithPayload(h,c,j.QUERY_CHANGED,{query_string:a})}function f(a,c,d,e,f,g,i,m){if(!i)return;var r=i.toString(),s=p.get(r),t=o.get(r);q.set(t,!0);b("FunnelLogger").appendActionWithPayload(h,i,j.RESULT_SELECTED,{query_string:e,result_fbid:a,result_type:d,result_index:c,data_source:[f],search_surface:g,micro_session_id:t,selection_type:m});s===k.OMNIPICKER?(x(i,l.QUERY),b("MercuryConfig").ChatComposer?(n.set(r,""),w(i)):n["delete"](r)):e&&s===k.GROUP_CREATION&&(n.set(r,""),x(i,l.QUERY),w(i))}function s(a,c,d){if(!d)return;b("FunnelLogger").appendActionWithPayload(h,d,j.SOURCE_STARTED,{query_string:a,data_source:[c]})}function t(a,c,d,e,f,g){if(!g)return;b("FunnelLogger").appendActionWithPayload(h,g,j.SOURCE_ENDED,{query_string:a,results_count:c,data_source:[d],status:e,result_used:f})}function u(a,c,d,e){if(!e)return;if(c.length===0)return;b("FunnelLogger").appendActionWithPayload(h,e,j.IMPRESSIONS,{query_string:a,impression_list:c})}function v(a,c,d){if(!d)return;b("FunnelLogger").appendActionWithPayload(h,d,j.TOKEN_REMOVED,{deleted_result_id:a,cleared_all_tokens:c})}function w(a){b("FunnelLogger").appendActionWithPayload(h,a,j.MICRO_SESSION_STARTED,{micro_session_id:r}),o.set(a.toString(),r),q.set(r,!1),r+=1}function x(a,c){var d=o.get(a.toString());b("FunnelLogger").appendActionWithPayload(h,a,j.MICRO_SESSION_ENDED,{micro_session_id:d,micro_session_end_reason:q.get(d)?m.RESULT_SELECTED:m.ABANDON,micro_session_type:c});q["delete"](d);o["delete"](a.toString())}function y(a){b("FunnelLogger").appendAction(h,a,j.REENTER_OMNIPICKER)}function z(a){b("FunnelLogger").appendAction(h,a,j.CLICK_OTHER_THREAD)}e.exports={endFunnel:c,impressions:u,queryChanged:d,reenterSearch:y,resultSelected:f,sourceEnded:t,sourceStarted:s,startFunnel:a,tokenRemoved:v,unfocusSearch:z}}),null);
__d("InstantGamesFunnelEvent",[],(function(a,b,c,d,e,f){"use strict";a={FUNNEL_END:"funnel_end",FUNNEL_START:"funnel_start",GAME_ACTIVE:"game_active",GAME_BACKGROUNDED:"game_backgrounded",GAME_CHALLENGE_LIST_SHOWN:"game_challenge_list_shown",GAME_CHAT_SEND_MESSEAGE:"game_chat_send_message",GAME_CHAT_SEND_HOT_LIKE:"game_chat_send_hot_like",GAME_CONTAINER_CLOSE:"game_container_close",GAME_CONTAINER_SHOW:"game_container_show",GAME_CONTEXT_UPDATE:"game_context_update",GAME_CONTEXT_UPDATED:"game_context_updated",GAME_INFO_FETCH:"game_info_fetch",GAME_INFO_QUERY_SUCCESS:"game_info_query_success",GAME_LIST_DISMISS:"game_list_dismiss",GAME_LIST_OPEN:"game_list_open",GAME_LIST_SHOW:"game_list_show",GAME_PLAY_ALL_MATCHES:"game_play_all_matches",GAME_PLAY_CURRENT_MATCH:"game_play_current_match",GAME_PLAY_END:"game_play_end",GAME_PLAY_SOLO:"game_play_solo",GAME_PLAY_START:"game_play_start",GAME_PLAY_TOP_SCORES:"game_play_top_scores",GAME_READY:"game_ready",GAME_SELECT:"game_select",GAME_SESSION_BEGIN:"game_session_begin",GAME_SESSION_RESTART:"game_session_restart",GAME_SWITCH:"game_switch",GAME_SWITCH_DIALOG_ACCEPTED:"game_switch_dialog_accepted",GAME_SWITCH_DIALOG_DISMISSED:"game_switch_dialog_dissmissed",GAME_SWITCH_DIALOG_SHOWN:"game_switch_dialog_shown",HEARTBEAT:"heartbeat",LOADING_STARTED:"loading_started",NOT_SUPPORTED:"not_supported",GAMER_PROFILE_SHOW_TOS:"gamer_profile_show_tos",GAMER_PROFILE_SHOW_EXISTING_TOS_DARK:"gamer_profile_show_existing_tos_dark",GAMER_PROFILE_SHOW_EXISTING_TOS_LIGHT:"gamer_profile_show_existing_tos_light",GAMER_PROFILE_GRANT_EXISTING_TOS_DARK:"gamer_profile_grant_existing_tos_dark",GAMER_PROFILE_GRANT_EXISTING_TOS_LIGHT:"gamer_profile_grant_existing_tos_light",GAMER_PROFILE_GRANT_TOS:"gamer_profile_grant_tos",GAMER_PROFILE_SHOW_TOS_WITH_EDIT:"gamer_profile_show_tos_with_edit",GAMER_PROFILE_SHOW_ONE_TOS:"gamer_profile_show_one_tos",GAMER_PROFILE_SHOW_ONE_TOS_DARK:"gamer_profile_show_one_tos_dark",GAMER_PROFILE_GRANT_ONE_TOS:"gamer_profile_grant_one_tos",GAMER_PROFILE_GRANT_ONE_TOS_DARK:"gamer_profile_grant_one_tos_dark",GAMER_PROFILE_PLAYER_NAME_EDIT_START:"gamer_profile_player_name_edit_start",GAMER_PROFILE_PLAYER_NAME_EDIT_END:"gamer_profile_player_name_edit_end",PRIVACY_INFO_GRANT_PERMISSIONS:"privacy_info_grant_permissions",PRIVACY_INFO_SHOW:"privacy_info_show",QUICKSILVER_AVERAGE_FRAME_TIME:"quicksilver_average_frame_time",QUICKSILVER_END:"quicksilver_end",QUICKSILVER_START:"quicksilver_start",TAG_ADDED:"tag_added",YIELDED_CONTROL:"yielded_control"};e.exports=a}),null);
__d("GamesQuicksilverFunnelLogger",["FunnelLogger","InstantGamesFunnelEvent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){return"GAMES_QUICKSILVER_FUNNEL"}function g(a){b("FunnelLogger").startFunnel(a)}function c(a,c){b("FunnelLogger").setFunnelTimeout(a,c)}function d(a,c,d){c=y(c,d);b("FunnelLogger").addFunnelTag(a,c)}function h(a){b("FunnelLogger").getFunnelInstance(a)||g(a)}function i(a){b("FunnelLogger").endFunnel(a)}function f(a){b("FunnelLogger").appendActionIfNew(a,b("InstantGamesFunnelEvent").QUICKSILVER_START)}function j(a){b("FunnelLogger").appendActionIfNew(a,b("InstantGamesFunnelEvent").QUICKSILVER_END)}function k(a){h(a),b("FunnelLogger").appendAction(a,b("InstantGamesFunnelEvent").GAME_LIST_OPEN)}function l(a){b("FunnelLogger").appendAction(a,b("InstantGamesFunnelEvent").GAME_LIST_SHOW)}function m(a){b("FunnelLogger").appendAction(a,b("InstantGamesFunnelEvent").GAME_LIST_DISMISS),i(a)}function n(a,c,d){b("FunnelLogger").appendActionWithTagAndPayloadIfNew(a,b("InstantGamesFunnelEvent").NOT_SUPPORTED,c,{reason:d})}function o(a){b("FunnelLogger").appendAction(a,b("InstantGamesFunnelEvent").GAME_SELECT)}function p(a,c,d,e,f){b("FunnelLogger").appendActionWithTagAndPayload(a,b("InstantGamesFunnelEvent").GAME_PLAY_START,d,{source:c,thread_id:e==="THREAD"?f:null,group_id:e==="GROUP"?f:null,story_token:e==="STORY"?f:null})}function q(a,c,d,e){b("FunnelLogger").appendActionWithTagAndPayload(a,b("InstantGamesFunnelEvent").GAME_PLAY_END,c,{thread_id:d==="THREAD"?e:null,group_id:d==="GROUP"?e:null,story_token:d==="STORY"?e:null})}function r(a,c){b("FunnelLogger").appendActionWithTagAndPayload(a,b("InstantGamesFunnelEvent").GAME_SWITCH,c,{game_id:c})}function s(a,c){b("FunnelLogger").appendActionWithTagAndPayload(a,b("InstantGamesFunnelEvent").GAME_SWITCH_DIALOG_SHOWN,c,{game_id:c})}function t(a,c,d){d=d?b("InstantGamesFunnelEvent").GAME_SWITCH_DIALOG_ACCEPTED:b("InstantGamesFunnelEvent").GAME_SWITCH_DIALOG_DISMISSED;b("FunnelLogger").appendActionWithTagAndPayload(a,d,c,{game_id:c})}function u(a,c,d,e,f){b("FunnelLogger").appendActionWithTagAndPayload(a,b("InstantGamesFunnelEvent").GAME_CONTEXT_UPDATE,d,{source:c,thread_id:e==="THREAD"?f:null,group_id:e==="GROUP"?f:null,story_token:e==="STORY"?f:null})}function v(a,c,d){b("FunnelLogger").appendActionWithTagAndPayload(a,b("InstantGamesFunnelEvent").HEARTBEAT,c,{heartbeat_interval:d})}function w(a){b("FunnelLogger").appendAction(a,b("InstantGamesFunnelEvent").GAME_CHAT_SEND_MESSEAGE)}function x(a){b("FunnelLogger").appendAction(a,b("InstantGamesFunnelEvent").GAME_CHAT_SEND_HOT_LIKE)}function y(a,b){return b==null||b===""?a:a+": "+b}e.exports={getDefaultFunnelName:a,startFunnel:g,startFunnelIfNotStarted:h,setFunnelTimeout:c,endFunnel:i,addTag:d,logGameChatSendMessage:w,logGameChatSendHotLike:x,logGameEnd:j,logGameListOpen:k,logGameListShow:l,logGameListDismiss:m,logGameNotSupported:n,logGamePlayStart:p,logGamePlayEnd:q,logGameSelect:o,logGameStart:f,logGameSwitch:r,logGameSwitchDialogResult:t,logGameSwitchDialogShown:s,logGameContextUpdate:u,logHeartbeat:v}}),null);