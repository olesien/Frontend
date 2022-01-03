"use strict";(self.webpackChunkuhc=self.webpackChunkuhc||[]).push([[206],{67064:function(n,r,e){var o=e(23645),t=e.n(o)()((function(n){return n[1]}));t.push([n.id,'.qb-drag-handler, .qb-draggable, .query-builder {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.rule--header:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n.group--header,\n.group--footer {\n  display: flex;\n  align-items: center;\n}\n\n.query-builder {\n  overflow: hidden;\n}\n.query-builder *, .query-builder *::before, .query-builder *::after {\n  box-sizing: border-box;\n}\n\n/******************************************************************************/\n/** COMMON ********************************************************************/\n/******************************************************************************/\nbody.qb-dragging .ant-tooltip {\n  display: none;\n}\n\n.query-builder {\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.25;\n  margin: 1rem;\n}\n\n.query-builder.qb-dragging {\n  cursor: -webkit-grabbing !important;\n  cursor: grabbing !important;\n}\n.query-builder.qb-dragging button {\n  pointer-events: none;\n}\n\n.group {\n  background: rgba(250, 240, 210, 0.5);\n  border: 1px solid #DCC896;\n}\n\n.rule {\n  background-color: white;\n  border: 1px solid transparent;\n  padding: 10px;\n}\n\n.rule-with-error .rule {\n  border: 1px solid #e0a1a1;\n}\n\n.rule--body--wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.rule--error {\n  color: red;\n  margin-bottom: -5px;\n  margin-top: 5px;\n}\n\n.group-or-rule {\n  border-radius: 5px;\n  position: relative;\n}\n\n.rule_group {\n  background: rgba(255, 252, 242, 0.5);\n  border: 1px solid #f9f1dd;\n}\n\n.qb-draggable {\n  pointer-events: none;\n  position: absolute;\n  opacity: 0.7;\n  z-index: 1000;\n}\n\n.qb-placeholder {\n  border: 1px dashed gray;\n}\n\n/* slider */\n.ant-tooltip-inner {\n  min-height: 18px;\n}\n\n.ant-slider {\n  margin-bottom: 4px;\n  margin-top: 4px;\n}\n\n.ant-slider-with-marks {\n  margin-bottom: 10px;\n  margin-top: 4px;\n}\n\n.ant-slider-track {\n  visibility: visible !important;\n}\n\n/* tree */\n.ant-select-tree-dropdown > div[role=listbox] {\n  outline: none;\n}\n\nul.ant-select-selection__rendered {\n  margin-right: 11px;\n}\n\n/* for antd v4 default is 32 - too big */\n.ant-select-item {\n  min-height: 22px;\n}\n\n/******************************************************************************/\n/** GROUP *********************************************************************/\n/******************************************************************************/\n.group--children {\n  padding-left: 24px;\n}\n.group--children > .group-or-rule-container > .group-or-rule:before {\n  top: -4px;\n  border-width: 0 0 2px 2px;\n}\n.group--children > .group-or-rule-container > .group-or-rule::after {\n  top: 50%;\n  border-width: 0 0 0 2px;\n}\n.group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after {\n  content: "";\n  position: absolute;\n  left: -14px;\n  width: 14px;\n  height: calc(50% + 8px);\n  border-color: #CCC;\n  border-style: solid;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::before {\n  display: none;\n}\n.group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after {\n  border-radius: 4px 0 0 0;\n  border-width: 2px 0 0 2px;\n}\n.group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::before {\n  display: none;\n}\n.group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after {\n  border-radius: 4px 0 0 0;\n  border-width: 2px 0 0 2px;\n}\n.group--children > .group-or-rule-container:first-child > .group-or-rule::before {\n  top: -12px;\n  height: calc(50% + 14px);\n}\n.group--children > .group-or-rule-container:last-child > .group-or-rule::before {\n  border-radius: 0 0 0 4px;\n}\n.group--children > .group-or-rule-container:last-child > .group-or-rule::after {\n  display: none;\n}\n\n.group--children.hide--line > .group-or-rule-container > .group-or-rule::before, .group--children.hide--line > .group-or-rule-container > .group-or-rule::after {\n  border-color: rgba(128, 128, 128, 0.1);\n}\n\n.qb-draggable::before, .qb-draggable::after {\n  display: none;\n}\n\n.qb-drag-handler {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.group--drag-handler {\n  margin-right: 8px;\n  position: relative;\n  top: 3px;\n}\n\n.group--conjunctions .group--drag-handler {\n  margin-left: 10px;\n}\n\n.group--conjunctions.hide--conj {\n  opacity: 0.3;\n}\n\n.group--actions {\n  margin-left: 10px;\n  flex: 1;\n  display: flex;\n}\n.group--actions--tl, .group--actions--bl {\n  justify-content: flex-start;\n}\n.group--actions--tl {\n  margin-left: 20px;\n}\n.group--actions--tc, .group--actions--bc {\n  justify-content: center;\n}\n.group--actions--tr, .group--actions--br {\n  justify-content: flex-end;\n}\n.group--actions .action--DELETE {\n  margin-top: -1px;\n}\n\n/******************************************************************************/\n/** RULE_GROUP *********************************************************************/\n/******************************************************************************/\n.rule_group {\n  display: flex;\n  padding-left: 10px;\n}\n.rule_group .group--drag-handler {\n  align-self: center;\n}\n.rule_group .group--field {\n  align-self: center;\n}\n.rule_group .group--actions {\n  align-self: center;\n  flex: 0;\n}\n.rule_group .rule_group--children {\n  flex: 1;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 18px;\n}\n.rule_group .rule_group--children .group-or-rule-container {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-right: 5px;\n}\n.rule_group .rule_group--children.one--child {\n  padding-left: 10px;\n}\n.rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::before, .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::after {\n  left: -10px;\n  width: 10px;\n  height: calc(50% + 8px);\n}\n\n/******************************************************************************/\n/** RULE_GROUP_EXT *********************************************************************/\n/******************************************************************************/\n.group--header.hide--drag.with--conjs > .group--field--count--rule {\n  margin-left: 20px;\n}\n\n/******************************************************************************/\n/** RULE **********************************************************************/\n/******************************************************************************/\n.rule {\n  flex: 1;\n  display: flex;\n}\n\n.rule--header {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}\n\n.rule--drag-handler {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n\n.rule--field, .group--field, .rule--operator, .rule--value, .rule--operator-options, .rule--widget, .widget--widget, .widget--valuesrc, .widget--sep, .operator--options--sep, .rule--before-widget, .rule--after-widget {\n  display: inline-block;\n}\n\n.mui .widget--sep, .mui .operator--options--sep, .mui .rule--func--bracket-before, .mui .rule--func--bracket-after, .mui .rule--func--arg-sep {\n  vertical-align: bottom;\n  align-self: flex-end;\n  margin-bottom: 8px;\n}\n.mui .rule--operator-options {\n  vertical-align: bottom;\n}\n.mui .widget--valuesrc {\n  vertical-align: bottom;\n}\n\n.rule--operator, .widget--widget, .widget--valuesrc, .widget--sep {\n  margin-left: 10px;\n}\n\n.widget--valuesrc {\n  margin-right: -8px;\n}\n\n.widget--valuesrc span i {\n  transform: rotate(90deg);\n}\n\n.operator--options--sep {\n  margin-right: 10px;\n}\n\ndiv.tooltip-inner {\n  max-width: 500px;\n}\n\n.rule--field label, .group--field label, .rule--operator label, .widget--widget label {\n  display: block;\n  font-weight: bold;\n}\n\n/******************************************************************************/\n/** CONJUNCTION ***************************************************************/\n/******************************************************************************/\n.conjunction {\n  display: inline-block;\n}\n.conjunction label {\n  display: inline-block;\n  border: 1px solid;\n  cursor: pointer;\n  color: white;\n  text-transform: uppercase;\n  padding: 0.2rem 0.4rem;\n}\n.conjunction input {\n  display: none;\n}\n.conjunction[data-state=active] label {\n  background-color: #3276b1;\n  border-color: #285e8e;\n}\n.conjunction[data-state=inactive] label {\n  background-color: #428bca;\n  border-color: #357ebd;\n}\n.conjunction[data-state=inactive] label:hover {\n  background-color: #3276b1;\n  border-color: #285e8e;\n}\n.conjunction:first-child label {\n  border-radius: 3px 0 0 3px;\n}\n.conjunction:last-child label {\n  border-radius: 0 3px 3px 0;\n}\n.conjunction:first-child:last-child {\n  border-radius: 3px;\n}\n\n/******************************************************************************/\n/** FUNC **********************************************************************/\n/******************************************************************************/\n.rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep {\n  display: inline-block;\n}\n\n.rule--func--bracket-before, .rule--func--bracket-after {\n  margin-left: 3px;\n  margin-right: 3px;\n}\n\n.rule--func--bracket-before {\n  margin-left: 5px;\n}\n\n.rule--func--arg-value > .rule--widget {\n  margin-left: -10px;\n}\n\n.rule--func--arg-sep {\n  margin-left: 3px;\n  margin-right: 6px;\n}\n\n.rule--func--arg-label-sep {\n  margin-left: 1px;\n  margin-right: 6px;\n}\n\n/******************************************************************************/\n/** Minimalism ****************************************************************/\n/******************************************************************************/\n.qb-lite .group--drag-handler, .qb-lite .group--actions {\n  transition: opacity 0.2s;\n}\n.qb-lite .group--header:hover .group--header .group--drag-handler, .qb-lite .group--header:hover .group--header .group--actions,\n.qb-lite .group--header:not(:hover) .group--drag-handler,\n.qb-lite .group--header:not(:hover) .group--actions,\n.qb-lite .rule_group:not(:hover) .group--drag-handler,\n.qb-lite .rule_group:not(:hover) .group--actions {\n  opacity: 0;\n}\n.qb-lite .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .rule_group_ext--drag-handler {\n  transition: padding 0.2s;\n}\n.qb-lite .group--header:hover .group--header .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .group--header:hover .group--header .rule_group_ext--drag-handler,\n.qb-lite .group--header:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .group--header:not(:hover) .rule_group_ext--drag-handler,\n.qb-lite .rule_group:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .rule_group:not(:hover) .rule_group_ext--drag-handler {\n  width: 0;\n  padding: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n.qb-lite .widget--valuesrc, .qb-lite .rule--drag-handler, .qb-lite .rule--header {\n  transition: opacity 0.2s;\n}\n.qb-lite .rule:hover .rule .widget--valuesrc, .qb-lite .rule:hover .rule .rule--drag-handler, .qb-lite .rule:hover .rule .rule--header,\n.qb-lite .rule:not(:hover) .widget--valuesrc,\n.qb-lite .rule:not(:hover) .rule--drag-handler,\n.qb-lite .rule:not(:hover) .rule--header {\n  opacity: 0;\n}\n.qb-lite.qb-dragging .widget--valuesrc, .qb-lite.qb-dragging .rule--drag-handler, .qb-lite.qb-dragging .rule--header, .qb-lite.qb-dragging .group--drag-handler, .qb-lite.qb-dragging .group--actions {\n  opacity: 0 !important;\n}\n.qb-lite.qb-dragging .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite.qb-dragging .rule_group_ext--drag-handler {\n  width: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  opacity: 0 !important;\n}\n\n/******************************************************************************/\n/** Vertical padding ****************************************************************/\n/******************************************************************************/\n.group--header,\n.group--footer {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.group-or-rule-container {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-right: 10px;\n}\n.group-or-rule-container:first-child {\n  margin-top: 0px !important;\n}\n.group-or-rule-container:last-child {\n  margin-bottom: 0px !important;\n}\n\n.group--children {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/******************************************************************************/\n/** Shrink textarea ***********************************************************/\n/******************************************************************************/\n.rule--body.can--shrink--value {\n  display: flex;\n  align-items: center;\n}\n.rule--body.can--shrink--value .rule--value {\n  flex: 1;\n}\n.rule--body.can--shrink--value .rule--value > .rule--widget {\n  display: flex;\n}\n.rule--body.can--shrink--value .rule--value > .rule--widget .widget--widget {\n  flex: 1;\n}\n.rule--body.can--shrink--value .rule--value > .rule--widget > .widget--valuesrc {\n  display: flex;\n  align-items: center;\n}\n\n.rule--value > .rule--widget > .widget--valuesrc .anticon {\n  height: 100%;\n}\n.rule--value > .rule--widget > .widget--valuesrc .anticon svg {\n  height: 100%;\n}\n',""]),r.Z=t},93169:function(n,r,e){var o=e(23645),t=e.n(o)()((function(n){return n[1]}));t.push([n.id,".group{background-color:#2b2c30;border:1px solid #2b2c30}.rule{background-color:#3d3f43}.group--header{background-color:#313336;padding:10px;border-radius:5px}.qb-lite .group--header:hover .group--header .group--drag-handler,.qb-lite .group--header:hover .group--header .group--actions,.qb-lite .group--header:not(:hover) .group--drag-handler,.qb-lite .group--header:not(:hover) .group--actions,.qb-lite .rule_group:not(:hover) .group--drag-handler,.qb-lite .rule_group:not(:hover) .group--actions,.qb-lite .rule:hover .rule .widget--valuesrc,.qb-lite .rule:hover .rule .rule--drag-handler,.qb-lite .rule:hover .rule .rule--header,.qb-lite .rule:not(:hover) .widget--valuesrc,.qb-lite .rule:not(:hover) .rule--drag-handler,.qb-lite .rule:not(:hover) .rule--header{opacity:1}.qb-lite .rule:hover .rule .widget--valuesrc,.qb-lite .rule:hover .rule .rule--drag-handler,.qb-lite .rule:hover .rule .rule--header,.qb-lite .rule:not(:hover) .widget--valuesrc,.qb-lite .rule:not(:hover) .rule--drag-handler,.qb-lite .rule:not(:hover) .rule--header{opacity:1}.group--children>.group-or-rule-container>.group-or-rule::before,.group--children>.group-or-rule-container>.group-or-rule::after{border-color:#1d5dab}.query-builder-container label{padding:6px 8px}.rule--body select,.rule--body input{background-color:#313336;color:#eee;padding:4px 7px;margin:3px}.rule--header button{background-color:#313336;border:none;padding:6px;color:red}.rule--header button:hover{cursor:pointer}.group--actions button{background-color:#3d3f43;color:#eee;border:none;padding:6px 10px;margin-right:10px}.group--actions button:nth-child(3){background-color:#3d3f43;padding:6px;color:red}.MuiInputBase-root,.MuiInputBase-input{color:#eee}.query-builder-container .MuiSelect-select.MuiSelect-select{color:#eee}.query-builder-container .MuiSwitch-switchBase{color:#131415}.query-builder-container .MuiSwitch-colorSecondary.Mui-checked{color:#1d5dab}.MuiFormControl-root .MuiButton-contained{background-color:#3d3f43}.MuiFormControl-root .MuiButton-contained:hover{background-color:#2b2c30}.MuiFormControl-root .MuiButton-containedPrimary{background-color:#1d5dab}.MuiFormControl-root .MuiButton-containedPrimary:hover{background-color:#2071d4}.MuiFormControl-root .MuiButtonBase-root .MuiButton-label{color:#eee}.MuiPopover-root .MuiPaper-root{background-color:#313336;color:#eee}",""]),r.Z=t},10206:function(n,r,e){e.r(r),e.d(r,{Contract:function(){return Z},default:function(){return E}});var o=e(85893),t=e(67294),l=e(59684),i=e(52873),u=e(32920),a=e(13457),d=e(93379),g=e.n(d),p=e(7795),c=e.n(p),b=e(90569),s=e.n(b),h=e(3565),f=e.n(h),x=e(19216),m=e.n(x),v=e(44589),q=e.n(v),y=e(67064),w={};w.styleTagTransform=q(),w.setAttributes=f(),w.insert=s().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=m(),g()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var k=e(93169),_={};_.styleTagTransform=q(),_.setAttributes=f(),_.insert=s().bind(null,"head"),_.domAPI=c(),_.insertStyleElement=m(),g()(k.Z,_),k.Z&&k.Z.locals&&k.Z.locals;var j=e(79610),M=e(13025),C=e(18835),B=function(){return(B=Object.assign||function(n){for(var r,e=1,o=arguments.length;e<o;e++)for(var t in r=arguments[e])Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t]);return n}).apply(this,arguments)},T=(0,u.Z)({palette:{primary:{main:"#2071d4"},secondary:{main:"#313336"}}});function Z(n){console.log("queryDATA: ",n.data);var r=(0,t.useState)({tree:l.cQ.checkTree(l.cQ.loadTree(null!=n.data?n.data:j.T),j.v),config:j.v}),e=r[0],i=r[1];(0,t.useEffect)((function(){null!=n.data&&u((0,C.gb)({queryBuilder:n.data}))}),[]);var u=(0,M.T)();return(0,o.jsx)(a.Z,B({theme:T},{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(l.AE,B({},j.v,{value:e.tree,onChange:function(n,r){i({tree:n,config:r});var e=l.cQ.getTree(n);u((0,C.gb)({queryBuilder:e}))},renderBuilder:function(n){return(0,o.jsx)("div",B({className:"query-builder-container",style:{padding:"10px"}},{children:(0,o.jsx)("div",B({className:"query-builder qb-lite"},{children:(0,o.jsx)(l.Ib,B({},n),void 0)}),void 0)}),void 0)}}),void 0),(0,o.jsx)("div",{className:"query-builder-result"},void 0)]},void 0)}),void 0)}i.Z;var E=Z}}]);