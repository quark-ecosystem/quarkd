;(function(){System.register(['./component-legacy.7457f53a.js','./mobile-legacy.cd71a676.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,createTextVNode,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;createTextVNode=module.h;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("collapse");const _sfc_main=createDemo({props:{},setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基本用法",openState:"打开状态",iconhide:"无icon样式",customTitile:"自定义标题",customIcon:"自定义图标",title:"标题",title1:"标题1",title2:"标题2",content:"生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。"},"en-US":{basic:"Basic Usage",openState:"Open State",iconhide:"Custom Style",customTitile:"Custom titile",customIcon:"Custom Icon",title:"Title",title1:"Title1",title2:"Title2",content:"  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this."}});});return{translate};}});const _hoisted_1={class:"demo no-padding action-sheet-demo"};const _hoisted_2=["title"];const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=["title"];const _hoisted_6=["title"];const _hoisted_7={slot:"title"};const _hoisted_8={style:{"color":"blueviolet"}};const _hoisted_9=["title"];const _hoisted_10=/*#__PURE__*/createBaseVNode("span",{slot:"icon",class:"collapse-icon"},"🎉🎉🎉",-1);function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("div",null,[createBaseVNode("quark-collapse",{title:_ctx.translate('title1')},toDisplayString(_ctx.translate("content")),9,_hoisted_2),createBaseVNode("quark-collapse",{title:_ctx.translate('title2')},toDisplayString(_ctx.translate("content")),9,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("openState")),1),createBaseVNode("div",null,[createBaseVNode("quark-collapse",{title:_ctx.translate('title'),open:""},toDisplayString(_ctx.translate("content")),9,_hoisted_4)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("iconhide")),1),createBaseVNode("div",null,[createBaseVNode("quark-collapse",{title:_ctx.translate('title'),iconhide:""},toDisplayString(_ctx.translate("content")),9,_hoisted_5)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("customTitile")),1),createBaseVNode("div",null,[createBaseVNode("quark-collapse",{title:_ctx.translate('title')},[createBaseVNode("div",_hoisted_7,[createBaseVNode("span",_hoisted_8,toDisplayString(_ctx.translate("title"))+toDisplayString(_ctx.translate("title")),1)]),createTextVNode(" "+toDisplayString(_ctx.translate("content")),1)],8,_hoisted_6)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("customIcon")),1),createBaseVNode("div",null,[createBaseVNode("quark-collapse",{title:_ctx.translate('title')},[_hoisted_10,createTextVNode(" "+toDisplayString(_ctx.translate("content")),1)],8,_hoisted_9)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();