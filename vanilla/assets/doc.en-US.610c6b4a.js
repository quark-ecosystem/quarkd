import{d as a,c as n,a as t,o as l}from"./vue.9e1e0b13.js";const e={class:"markdown-body"},p=t(`<h1>Picker</h1><h3>Intro</h3><p>Users can choose multiple option sets, and there are single-column selection and multi-column selection in Picker, use CascadePicker for cascade selection.</p><h3>Install</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u5F15\u5165 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/picker&quot;</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-comment">&lt;!-- \u4F7F\u7528 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span>
  <span class="hljs-attr">open</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">onclose</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">onconfirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
  <span class="hljs-attr">onchange</span>=<span class="hljs-string">&quot;change&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//Simulate async fetch</span>
      <span class="hljs-keyword">const</span> picker = <span class="hljs-built_in">this</span>.$refs.pickerRef;
      picker.setColumns(
        [
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Monday&#39;</span>, <span class="hljs-string">&#39;Tuesday&#39;</span>, <span class="hljs-string">&#39;Wednesday&#39;</span>, <span class="hljs-string">&#39;Thursday&#39;</span>, <span class="hljs-string">&#39;Friday&#39;</span>]
          },
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Morning&#39;</span>, <span class="hljs-string">&#39;Afternoon&#39;</span>]
          }
        ]
      )
    }, <span class="hljs-number">1000</span>)
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value)
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    },
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value)
    }
  }
};
</code></pre><h3>Custom Header</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickerRef&quot;</span> <span class="hljs-attr">bottomhidden</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;head-container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cancel&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>Cancel<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;picker-title&quot;</span>&gt;</span>Please choose city<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ensure&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;confirm&quot;</span>&gt;</span>Confirm<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-picker</span>&gt;</span>
</code></pre><pre><code class="language-js">picker.setColumns([
  {
    <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Monday&#39;</span>, <span class="hljs-string">&#39;Tuesday&#39;</span>, <span class="hljs-string">&#39;Wednesday&#39;</span>, <span class="hljs-string">&#39;Thursday&#39;</span>, <span class="hljs-string">&#39;Friday&#39;</span>]
  },
  {
    <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u4E0A\u5348&#39;</span>, <span class="hljs-string">&#39;\u4E0B\u5348&#39;</span>]
  }
])

picker.getValues()

picker.onchange = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">{ detail }</span>) </span>{
  <span class="hljs-comment">// detail.value</span>
}

picker.addEventListener(<span class="hljs-string">&#39;change&#39;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">ev</span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.open);
    <span class="hljs-built_in">console</span>.log(ev.target.checked);
})
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Whether to show picker</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td>-</td></tr><tr><td>confirmtext</td><td>Text of the ok button</td><td><code class="">string</code></td><td><code class="">Confirm</code></td></tr><tr><td>bottomhidden</td><td>Whether to show bottom button (use with custom header)</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>close</td><td>Emitted when click mask or cancel button.</td><td><code class="">() =&gt; void</code></td></tr><tr><td>confirm</td><td>Emitted when click confirm button.</td><td><code class="">\uFF08e: {detail:{value: SelectColumn[]}}\uFF09=&gt; void</code></td></tr><tr><td>change</td><td>Emitted when current option changed.</td><td><code class="">\uFF08e: {detail:{value: SelectColumn[]}}\uFF09=&gt; void</code></td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=header</td><td>Custom header</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setColumns</td><td>Set current value of Picker</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get values selected by Picker, usually used with custom header.</td><td><code class="">\uFF08\uFF09=&gt; SelectColumn[]</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type PickerColumn = {
  <span class="hljs-attr">values</span>: string[];
  defaultIndex: number;
};

type SelectColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};
</code></pre><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--picker-title-font-size</code></td><td>Title font size</td><td><code class="">18px</code></td></tr><tr><td><code class="">--picker-title-color</code></td><td>Title font color</td><td><code class=""> #242729</code></td></tr><tr><td><code class="">--picker-title-font-weight</code></td><td>Title font weight</td><td><code class="">500</code></td></tr><tr><td><code class="">--picker-title-font-family</code></td><td>Title font family</td><td><code class="">PingFangSC-Medium, PingFang SC</code></td></tr></tbody></table>`,23),c=[p],i={},u="",j=a({__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(l(),n("div",e,c))}});export{j as default,u as excerpt,i as frontmatter};
