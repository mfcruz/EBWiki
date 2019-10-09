/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("textfield",function(e){function t(e){e=e.element;var t=this.getValue();t?e.setAttribute(this.id,t):e.removeAttribute(this.id)}function i(e){e=e.hasAttribute(this.id)&&e.getAttribute(this.id),this.setValue(e||"")}var l={email:1,password:1,search:1,tel:1,text:1,url:1};return{title:e.lang.forms.textfield.title,minWidth:350,minHeight:150,onShow:function(){delete this.textField;var e=this.getParentEditor().getSelection().getSelectedElement();!e||"input"!=e.getName()||!l[e.getAttribute("type")]&&e.getAttribute("type")||(this.textField=e,this.setupContent(e))},onOk:function(){var e=this.getParentEditor(),t=this.textField,i=!t;i&&(t=e.document.createElement("input"),t.setAttribute("type","text")),t={element:t},i&&e.insertElement(t.element),this.commitContent(t),i||e.getSelection().selectElement(t.element)},onLoad:function(){this.foreach(function(e){e.getValue&&(e.setup||(e.setup=i),e.commit||(e.commit=t))})},contents:[{id:"info",label:e.lang.forms.textfield.title,title:e.lang.forms.textfield.title,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"_cke_saved_name",type:"text",label:e.lang.forms.textfield.name,"default":"",accessKey:"N",setup:function(e){this.setValue(e.data("cke-saved-name")||e.getAttribute("name")||"")},commit:function(e){e=e.element,this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"value",type:"text",label:e.lang.forms.textfield.value,"default":"",accessKey:"V",commit:function(i){if(CKEDITOR.env.ie&&!this.getValue()){var l=i.element,a=new CKEDITOR.dom.element("input",e.document);l.copyAttributes(a,{value:1}),a.replace(l),i.element=a}else t.call(this,i)}}]},{type:"hbox",widths:["50%","50%"],children:[{id:"size",type:"text",label:e.lang.forms.textfield.charWidth,"default":"",accessKey:"C",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(e.lang.common.validateNumberFailed)},{id:"maxLength",type:"text",label:e.lang.forms.textfield.maxChars,"default":"",accessKey:"M",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(e.lang.common.validateNumberFailed)}],onLoad:function(){CKEDITOR.env.ie7Compat&&this.getElement().setStyle("zoom","100%")}},{id:"type",type:"select",label:e.lang.forms.textfield.type,"default":"text",accessKey:"M",items:[[e.lang.forms.textfield.typeEmail,"email"],[e.lang.forms.textfield.typePass,"password"],[e.lang.forms.textfield.typeSearch,"search"],[e.lang.forms.textfield.typeTel,"tel"],[e.lang.forms.textfield.typeText,"text"],[e.lang.forms.textfield.typeUrl,"url"]],setup:function(e){this.setValue(e.getAttribute("type"))},commit:function(t){var i=t.element;if(CKEDITOR.env.ie){var l=i.getAttribute("type"),a=this.getValue();l!=a&&(l=CKEDITOR.dom.element.createFromHtml('<input type="'+a+'"></input>',e.document),i.copyAttributes(l,{type:1}),l.replace(i),t.element=l)}else i.setAttribute("type",this.getValue())}},{id:"required",type:"checkbox",label:e.lang.forms.textfield.required,"default":"",accessKey:"Q",value:"required",setup:CKEDITOR.plugins.forms._setupRequiredAttribute,commit:function(e){e=e.element,this.getValue()?e.setAttribute("required","required"):e.removeAttribute("required")}}]}]}});