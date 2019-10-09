/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
!function(){function e(){var e=this.getDialog(),t=(l=e._.editor).config.linkPhoneRegExp,i=l.config.linkPhoneMsg,l=CKEDITOR.dialog.validate.notEmpty(l.lang.link.noTel).apply(this);return!e.getContentElement("info","linkType")||"tel"!=e.getValueOf("info","linkType")||(!0!==l?l:t?CKEDITOR.dialog.validate.regex(t,i).call(this):void 0)}CKEDITOR.dialog.add("link",function(t){function i(e,t){var i=e.createRange();return i.setStartBefore(t),i.setEndAfter(t),i}var l,n,a=CKEDITOR.plugins.link,o=function(){var e=(i=this.getDialog()).getContentElement("target","popupFeatures"),i=i.getContentElement("target","linkTargetName"),l=this.getValue();if(e&&i)switch(e=e.getElement(),e.hide(),i.setValue(""),l){case"frame":i.setLabel(t.lang.link.targetFrameName),i.getElement().show();break;case"popup":e.show(),i.setLabel(t.lang.link.targetPopupName),i.getElement().show();break;default:i.setValue(l),i.getElement().hide()}},s=function(e){e.target&&this.setValue(e.target[this.id]||"")},d=function(e){e.advanced&&this.setValue(e.advanced[this.id]||"")},r=function(e){e.target||(e.target={}),e.target[this.id]=this.getValue()||""},h=function(e){e.advanced||(e.advanced={}),e.advanced[this.id]=this.getValue()||""},u=t.lang.common,p=t.lang.link;return{title:p.title,minWidth:"moono-lisa"==(CKEDITOR.skinName||t.config.skin)?450:350,minHeight:240,contents:[{id:"info",label:p.info,title:p.info,elements:[{type:"text",id:"linkDisplayText",label:p.displayText,setup:function(){this.enable(),this.setValue(t.getSelection().getSelectedText()),l=this.getValue()},commit:function(e){e.linkText=this.isEnabled()?this.getValue():""}},{id:"linkType",type:"select",label:p.type,"default":"url",items:[[p.toUrl,"url"],[p.toAnchor,"anchor"],[p.toEmail,"email"],[p.toPhone,"tel"]],onChange:function(){var e=this.getDialog(),i=["urlOptions","anchorOptions","emailOptions","telOptions"],l=this.getValue(),n=(n=e.definition.getContents("upload"))&&n.hidden;for("url"==l?(t.config.linkShowTargetTab&&e.showPage("target"),n||e.showPage("upload")):(e.hidePage("target"),n||e.hidePage("upload")),n=0;n<i.length;n++){var a=e.getContentElement("info",i[n]);a&&(a=a.getElement().getParent().getParent(),i[n]==l+"Options"?a.show():a.hide())}e.layout()},setup:function(e){this.setValue(e.type||"url")},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:u.protocol,"default":"http://",items:[["http://\u200e","http://"],["https://\u200e","https://"],["ftp://\u200e","ftp://"],["news://\u200e","news://"],[p.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:u.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var e=this.getDialog().getContentElement("info","protocol"),t=this.getValue(),i=/^((javascript:)|[#\/\.\?])/i,l=/^(http|https|ftp|news):\/\/(?=.)/i.exec(t);l?(this.setValue(t.substr(l[0].length)),e.setValue(l[0].toLowerCase())):i.test(t)&&e.setValue(""),this.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var e=this.getDialog();return!(!e.getContentElement("info","linkType")||"url"==e.getValueOf("info","linkType"))||(!t.config.linkJavaScriptLinksAllowed&&/javascript\:/.test(this.getValue())?(alert(u.invalidValue),!1):!!this.getDialog().fakeObj||CKEDITOR.dialog.validate.notEmpty(p.noUrl).apply(this))},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:u.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:p.selectAnchor,setup:function(){n=a.getEditorAnchors(t),this.getElement()[n&&n.length?"show":"hide"]()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:p.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){if(this.clear(),this.add(""),n)for(var t=0;t<n.length;t++)n[t].name&&this.add(n[t].name);e.anchor&&this.setValue(e.anchor.name),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:p.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){if(this.clear(),this.add(""),n)for(var t=0;t<n.length;t++)n[t].id&&this.add(n[t].id);e.anchor&&this.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(){this.getElement()[n&&n.length?"show":"hide"]()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(p.noAnchors)+"</div>",focus:!0,setup:function(){this.getElement()[n&&n.length?"hide":"show"]()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:p.emailAddress,required:!0,validate:function(){var e=this.getDialog();return!e.getContentElement("info","linkType")||"email"!=e.getValueOf("info","linkType")||CKEDITOR.dialog.validate.notEmpty(p.noEmail).apply(this)},setup:function(e){e.email&&this.setValue(e.email.address),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:p.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:p.emailBody,rows:3,"default":"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"telOptions",padding:1,children:[{type:"tel",id:"telNumber",label:p.phoneNumber,required:!0,validate:e,setup:function(e){e.tel&&this.setValue(e.tel),(e=this.getDialog().getContentElement("info","linkType"))&&"tel"==e.getValue()&&this.select()},commit:function(e){e.tel=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:p.target,title:p.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:u.target,"default":"notSet",style:"width : 100%;",items:[[u.notSet,"notSet"],[p.targetFrame,"frame"],[p.targetPopup,"popup"],[u.targetNew,"_blank"],[u.targetTop,"_top"],[u.targetSelf,"_self"],[u.targetParent,"_parent"]],onChange:o,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),o.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:p.targetFrameName,"default":"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/([^\x00-\x7F]|\s)/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:p.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:p.popupResizable,setup:s,commit:r},{type:"checkbox",id:"status",label:p.popupStatusBar,setup:s,commit:r}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:p.popupLocationBar,setup:s,commit:r},{type:"checkbox",id:"toolbar",label:p.popupToolbar,setup:s,commit:r}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:p.popupMenuBar,setup:s,commit:r},{type:"checkbox",id:"fullscreen",label:p.popupFullScreen,setup:s,commit:r}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:p.popupScrollBars,setup:s,commit:r},{type:"checkbox",id:"dependent",label:p.popupDependent,setup:s,commit:r}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:u.width,id:"width",setup:s,commit:r},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:p.popupLeft,id:"left",setup:s,commit:r}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:u.height,id:"height",setup:s,commit:r},{type:"text",labelLayout:"horizontal",label:p.popupTop,widths:["50%","50%"],id:"top",setup:s,commit:r}]}]}]}]},{id:"upload",label:p.upload,title:p.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:u.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:u.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:p.advanced,title:p.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:p.id,setup:d,commit:h},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:p.langDir,"default":"",style:"width:110px",items:[[u.notSet,""],[p.langDirLTR,"ltr"],[p.langDirRTL,"rtl"]],setup:d,commit:h},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:p.acccessKey,maxLength:1,setup:d,commit:h}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:p.name,id:"advName",requiredContent:"a[name]",setup:d,commit:h},{type:"text",label:p.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:d,commit:h},{type:"text",label:p.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:d,commit:h}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:p.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:d,commit:h},{type:"text",label:p.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:d,commit:h}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:p.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:d,commit:h},{type:"text",label:p.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:d,commit:h}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:p.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:d,commit:h},{type:"text",label:p.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(t.lang.common.invalidInlineStyle),setup:d,commit:h}]},{type:"hbox",widths:["45%","55%"],children:[{type:"checkbox",id:"download",requiredContent:"a[download]",label:p.download,setup:function(e){void 0!==e.download&&this.setValue("checked","checked")},commit:function(e){this.getValue()&&(e.download=this.getValue())}}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),i=this.getContentElement("info","linkDisplayText").getElement().getParent().getParent(),l=a.getSelectedLink(e,!0),n=l[0]||null;n&&n.hasAttribute("href")&&(t.getSelectedElement()||t.isInTable()||t.selectElement(n)),t=a.parseLinkAttributes(e,n),1>=l.length&&a.showDisplayTextForElement(n,e)?i.show():i.hide(),this._.selectedElements=l,this.setupContent(t)},onOk:function(){var e={};if(this.commitContent(e),this._.selectedElements.length){var n,o,s,d,r,h=this._.selectedElements,u=a.getLinkAttributes(t,e),p=[];for(r=0;r<h.length;r++)o=(n=h[r]).data("cke-saved-href"),s=n.getHtml(),n.setAttributes(u.set),n.removeAttributes(u.removed),e.linkText&&l!=e.linkText?d=e.linkText:(o==s||"email"==e.type&&-1!=s.indexOf("@"))&&(d="email"==e.type?e.email.address:u.set["data-cke-saved-href"]),d&&n.setText(d),p.push(i(t,n));t.getSelection().selectRanges(p),delete this._.selectedElements}else{for(h=a.getLinkAttributes(t,e),u=t.getSelection().getRanges(),n=[],(p=new CKEDITOR.style({element:"a",attributes:h.set})).type=CKEDITOR.STYLE_INLINE,s=0;s<u.length;s++){for((o=u[s]).collapsed?(d=new CKEDITOR.dom.text(e.linkText||("email"==e.type?e.email.address:h.set["data-cke-saved-href"]),t.document),o.insertNode(d),o.selectNodeContents(d)):l!==e.linkText&&(d=new CKEDITOR.dom.text(e.linkText,t.document),o.shrink(CKEDITOR.SHRINK_TEXT),t.editable().extractHtmlFromRange(o),o.insertNode(d)),d=o._find("a"),r=0;r<d.length;r++)d[r].remove(!0);p.applyToRange(o,t),n.push(o)}t.getSelection().selectRanges(n)}},onLoad:function(){t.config.linkShowAdvancedTab||this.hidePage("advanced"),t.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType");e&&"url"==e.getValue()&&(e=this.getContentElement("info","url"),e.select())}}})}();