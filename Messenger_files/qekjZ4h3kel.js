if (self.CavalryLogger) { CavalryLogger.start_js(["TFXIE"]); }

__d("RemovedMessageDialogContent",["fbt"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={getLocalDialogHeader:function(){return g._("Remove For You")},getLocalDialogBody:function(){return this.getLocalOptionSubtitle()},getDialogHeader:function(){return g._("Who do you want to remove this message for?")},getLocalOptionTitle:function(){return g._("Remove for You")},getGlobalOptionTitle:function(){return g._("Remove for Everyone")},getLocalOptionSubtitle:function(){return g._("This message will be removed for you. Other chat members will still be able to see it.")},getGlobalOptionSubtitle:function(){return g._("You'll permanently remove this message for all chat members. They can see you removed a message and still report it.")},getRemoveButtonLabel:function(){return g._("Remove")},getErrorDialogHeader:function(){return g._("Couldn't Remove Message")},getRetryableErrorDialogBody:function(){return g._("This message wasn't removed. Please check your internet connection and try again.")},getUnknownErrorDialogBody:function(){return g._("Your message wasn't removed.")},getErrorDialogButtonLabel:function(){return g._("OK")}};e.exports=a}),null);
__d("MessengerRemoveLocalMessageDialogReact.bs",["bs_block","bs_curry","React","ReasonReact.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs","MessengerDialogHeaderReact.bs","RemovedMessageDialogContent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReasonReact.bs").reducerComponent("MessengerRemoveLocalMessageDialogReact");function a(a){return b("RemovedMessageDialogContent").getLocalDialogHeader()}var h=b("RemovedMessageDialogContent").getLocalDialogBody();function c(a){return b("RemovedMessageDialogContent").getRemoveButtonLabel()}function i(a,c,d){return[g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],function(a){var d,e;return(d=b("ReasonReact.bs")).element(void 0,void 0,(e=b("MessengerDialogReact.bs")).Dialog.make(void 0,void 0,void 0,void 0,a[1][0],void 0,void 0,void 0,void 0,void 0,[b("React").createElement(b("MessengerDialogHeaderReact.bs").make,{children:b("RemovedMessageDialogContent").getLocalDialogHeader()}),b("React").createElement(b("MessengerDialogBodyReact.bs").make,{children:h}),d.element(void 0,void 0,e.Footer.make(void 0,void 0,[d.element(void 0,void 0,e.CancelButton.make(c,[])),d.element(void 0,void 0,e.Button.make(void 0,b("RemovedMessageDialogContent").getRemoveButtonLabel(),void 0,"danger",function(c){return b("bs_curry")._1(a[3],0)},0,void 0,void 0,void 0,[]))]))]))},function(a){return[!0]},g[10],function(c,d){return b("bs_block").__(2,[[!1],function(c){return b("bs_curry")._1(a,0)}])},g[12]]}d=b("ReasonReact.bs").wrapReasonForJs(g,function(a){return i(a.onRemoveLocal,a.onCancel,[])});f.component=g;f.renderDialogHeaderMsg=a;f.dialogBodyMsg=h;f.renderDialogButtonMsg=c;f.make=i;f.jsComponent=d}),null);
__d("MessengerRemoveMessageDialogHeaderReact.bs",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a.children;return b("React").jsx("h2",{children:a,className:b("joinClasses")("_4ebz","_7491")})}c=a;f.make=c}),null);
__d("MessengerRemoveMessageDialogReact.bs",["cx","bs_block","bs_curry","React","ReasonReact.bs","MessengerDialog.react","MessengerRadioList.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogFooter.react","RemovedMessageDialogContent","MessengerDialogCancelButton.react","MessengerRemoveMessageDialogHeaderReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").reducerComponent("MessengerRemoveMessageDialogReact");function a(a){return b("RemovedMessageDialogContent").getDialogHeader()}function c(a){return b("RemovedMessageDialogContent").getRemoveButtonLabel()}function i(a,c,d,e){__p&&__p();return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(a){var c,e;return(c=b("React")).jsxs(b("MessengerDialog.react"),{shown:a[1][0],width:500,removeDialogOnToggle:!1,children:[c.createElement(b("MessengerRemoveMessageDialogHeaderReact.bs").make,{children:(e=b("RemovedMessageDialogContent")).getDialogHeader()}),c.jsx(b("MessengerDialogBody.react"),{className:"_87ef",children:c.jsxs(b("MessengerRadioList.react"),{name:"messengerRemoveOptions",onValueChange:function(c){return b("bs_curry")._1(a[3],[c])},selectedValue:a[1][1],children:[c.jsx(b("MessengerRadioList.react").Item,{value:1,children:e.getGlobalOptionTitle()}),c.jsx("div",{children:e.getGlobalOptionSubtitle(),className:"_7492"}),c.jsx(b("MessengerRadioList.react").Item,{value:0,children:e.getLocalOptionTitle()}),c.jsx("div",{children:e.getLocalOptionSubtitle(),className:"_7492"})]})}),c.jsxs(b("MessengerDialogFooter.react"),{children:[c.jsx(b("MessengerDialogCancelButton.react"),{onClick:d}),c.jsx(b("MessengerDialogButton.react"),{label:e.getRemoveButtonLabel(),onClick:function(c){return b("bs_curry")._1(a[3],0)},type:"primary",use:"danger"})]})]})},function(a){return[!0,1]},h[10],function(d,e){if(d)return b("bs_block").__(0,[[e[0],d[0]]]);else return b("bs_block").__(2,[[!1,e[1]],function(d){d=e[1];if(d)return b("bs_curry")._1(c,0);else return b("bs_curry")._1(a,0)}])},h[12]]}d=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return i(a.onRemoveLocal,a.onRemoveGlobal,a.onCancel,[])});f.component=h;f.renderDialogHeaderMsg=a;f.renderDialogButtonMsg=c;f.make=i;f.jsComponent=d}),null);
__d("MessengerRemoveMessageErrorDialogReact.bs",["React","ReasonReact.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs","MessengerDialogHeaderReact.bs","RemovedMessageDialogContent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e=b("ReasonReact.bs").statelessComponent("MessengerRemoveMessageErrorDialogReact");function a(a){return b("RemovedMessageDialogContent").getErrorDialogHeader()}function g(a){if(a)return b("RemovedMessageDialogContent").getRetryableErrorDialogBody();else return b("RemovedMessageDialogContent").getUnknownErrorDialogBody()}function c(a){return b("RemovedMessageDialogContent").getErrorDialogButtonLabel()}function d(a){a=a.isRetryable;return b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Dialog.make(void 0,void 0,void 0,void 0,!0,void 0,void 0,void 0,void 0,void 0,[b("React").createElement(b("MessengerDialogHeaderReact.bs").make,{children:b("RemovedMessageDialogContent").getErrorDialogHeader()}),b("React").createElement(b("MessengerDialogBodyReact.bs").make,{children:g(a)}),b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Footer.make(void 0,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Button.make(0,b("RemovedMessageDialogContent").getErrorDialogButtonLabel(),void 0,void 0,void 0,0,void 0,void 0,void 0,[]))]))]))}var h=d;d=d;f.component=e;f.renderDialogHeaderMsg=a;f.dialogBodyMsg=g;f.renderDialogButtonMsg=c;f.make=h;f.jsComponent=d}),null);
__d("ChatTabRemoveLocalMessageDialog",["cx","FDSText.react","React","RemovedMessageDialogContent","SimpleXUIDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=400;a={show:function(a,c){var d,e=(d=b("React")).jsx("div",{className:"_748o",children:d.jsx(b("FDSText.react"),{size:"header3",weight:"bold",children:b("RemovedMessageDialogContent").getLocalDialogHeader()})});d=d.jsx("div",{className:"_748_",children:d.jsx(b("FDSText.react"),{size:"body1",children:b("RemovedMessageDialogContent").getLocalDialogBody()})});var f=function(b){b?c():a()};b("SimpleXUIDialog").showConfirm(d,e,f,{REMOVE_DIALOG_WIDTH:h,confirmBtnTxt:b("RemovedMessageDialogContent").getRemoveButtonLabel()})}};e.exports=a}),null);
__d("ChatTabRemoveMessageDialogBody.react",["cx","FDSText.react","React","RemovedMessageDialogContent","XUIRadioList.react","XUIRadioListItem.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.state={option:c.GLOBAL_OPTION},d.$1=function(a){d.setState({option:a}),d.props.onOptionChange(a)},b)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a,d,e;return(a=b("React")).jsx("div",{className:"_748_",children:a.jsxs(b("XUIRadioList.react"),{selectedValue:this.state.option,onValueChange:this.$1,children:[a.jsxs(b("XUIRadioListItem.react"),{value:c.GLOBAL_OPTION,children:[a.jsx(d=b("FDSText.react"),{size:"header4",weight:"bold",children:(e=b("RemovedMessageDialogContent")).getGlobalOptionTitle()}),a.jsx("div",{className:"_7490",children:a.jsx(d,{size:"body2",color:"secondary",children:e.getGlobalOptionSubtitle()})})]}),a.jsxs(b("XUIRadioListItem.react"),{value:c.LOCAL_OPTION,children:[a.jsx(d,{size:"header4",weight:"bold",children:e.getLocalOptionTitle()}),a.jsx("div",{children:a.jsx(d,{size:"body2",color:"secondary",children:e.getLocalOptionSubtitle()})})]})]})})};return c}(b("React").Component);a.LOCAL_OPTION="local";a.GLOBAL_OPTION="global";e.exports=a}),null);
__d("ChatTabRemoveMessageDialog",["cx","ChatTabRemoveMessageDialogBody.react","FDSText.react","React","RemovedMessageDialogContent","SimpleXUIDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=400,i=b("ChatTabRemoveMessageDialogBody.react").GLOBAL_OPTION;a={show:function(a,c,d){i=b("ChatTabRemoveMessageDialogBody.react").GLOBAL_OPTION;var e=b("React").jsx("div",{className:"_748o",children:b("React").jsx(b("FDSText.react"),{size:"header3",weight:"bold",children:b("RemovedMessageDialogContent").getDialogHeader()})}),f=b("React").jsx(b("ChatTabRemoveMessageDialogBody.react"),{onOptionChange:this._onOptionChange}),g=function(e){e?i===b("ChatTabRemoveMessageDialogBody.react").LOCAL_OPTION?c():i===b("ChatTabRemoveMessageDialogBody.react").GLOBAL_OPTION&&d():a()};b("SimpleXUIDialog").showConfirm(f,e,g,{REMOVE_DIALOG_WIDTH:h,confirmBtnTxt:b("RemovedMessageDialogContent").getRemoveButtonLabel()})},_onOptionChange:function(a){i=a}};e.exports=a}),null);
__d("ChatTabRemoveMessageErrorDialog",["cx","FDSText.react","React","RemovedMessageDialogContent","SimpleXUIDialog","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";a={show:function(a){var c,d=(c=b("React")).jsx("div",{className:"_748o",children:c.jsx(b("FDSText.react"),{size:"header3",weight:"bold",children:b("RemovedMessageDialogContent").getErrorDialogHeader()})});c=c.jsx("div",{className:"_748_",children:c.jsx(b("FDSText.react"),{size:"body1",children:a?b("RemovedMessageDialogContent").getRetryableErrorDialogBody():b("RemovedMessageDialogContent").getUnknownErrorDialogBody()})});b("SimpleXUIDialog").show(c,d,b("emptyFunction"))}};e.exports=a}),null);
__d("WorkChatSideColumnEventEmitter",["EventEmitter"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("EventEmitter"))()}),null);
__d("XMessageUnsendController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/unsend_message/",{})}),null);
__d("RemoveMessageDialog",["AsyncRequest","ChatTabRemoveLocalMessageDialog","ChatTabRemoveMessageDialog","ChatTabRemoveMessageErrorDialog","MercuryMessageActions","MercuryMessageIDs.bs","MessengerDialogs.bs","MessengerEnvironment","MessengerRemoveLocalMessageDialogReact.bs","MessengerRemoveMessageDialogReact.bs","MessengerRemoveMessageErrorDialogReact.bs","React","WorkChatSideColumnEventEmitter","XMessageUnsendController","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MessengerRemoveLocalMessageDialogReact.bs").jsComponent,h=b("MessengerRemoveMessageDialogReact.bs").jsComponent,i=b("MessengerRemoveMessageErrorDialogReact.bs").jsComponent,j={showDialog:function(a,c,d,e){var f=b("MessengerEnvironment").messengerui;if(this._canRemoveMessageGlobally(a,c,d)){f?this._showMessengerRemoveDialog(a,e):this._showChatTabRemoveDialog(a,e);return}f?this._showMessengerRemoveLocalDialog(a,e):this._showChatTabRemoveLocalDialog(a,e)},_canRemoveMessageGlobally:function(a,c,d){var e=a.timestamp+6e5;c=c==="can_unsend";a=a.message_unsendability_status==="can_unsend"||a.message_unsendability_status==null;return c&&a&&d&&b("gkx")("932794")&&Date.now()<e},_showMessengerRemoveLocalDialog:function(a,c){var d=this;b("MessengerDialogs.bs").showDialog(function(){return b("React").jsx(g,{onCancel:c,onRemoveLocal:function(){d._onRemoveLocal(a)}})})},_showMessengerRemoveDialog:function(a,c){var d=this,e=function e(){return b("React").jsx(h,{onCancel:function(){b("MessengerDialogs.bs").removeDialog(),c()},onRemoveLocal:function(){d._onRemoveLocal(a)},onRemoveGlobal:function(){d._onRemoveGlobal(a),b("MessengerDialogs.bs").removeDialog(e),c()}})};b("MessengerDialogs.bs").showDialog(e)},_showChatTabRemoveLocalDialog:function(a,c){var d=this;b("ChatTabRemoveLocalMessageDialog").show(c,function(){d._onRemoveLocal(a)})},_showChatTabRemoveDialog:function(a,c){var d=this;b("ChatTabRemoveMessageDialog").show(c,function(){d._onRemoveLocal(a)},function(){d._onRemoveGlobal(a),c()})},_onRemoveLocal:function(a){b("WorkChatSideColumnEventEmitter").emit("message_remove_local",{threadID:a.thread_id,message:a}),b("MercuryMessageActions").get()["delete"](a.thread_id,[a.message_id])},_onRemoveGlobal:function(a){a=[a.message_id];b("MercuryMessageIDs.bs").getServerIDs(a,function(a){if(!a||a.length!==1){j._onError(null);return}var c=b("XMessageUnsendController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setMethod("POST").setData({message_id:a[0]}).setErrorHandler(j._onError).send()})},_onError:function(a){var c=[1004,1005,1006],d=!!a&&(a.isTransient()||c.includes(a.getError()));b("MessengerEnvironment").messengerui?b("MessengerDialogs.bs").showDialog(function(){return b("React").jsx(i,{isRetryable:d})}):b("ChatTabRemoveMessageErrorDialog").show(d)}};e.exports=j}),null);