import{d as s,c as e,a,o as d}from"./vue.92e5ffbc.js";const r={class:"markdown-body"},o=a(`<h1>Watermark</h1><h3>Intro</h3><p>Watermark - adding text or patterns on the page (applicable to preventing information theft scenarios)</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Watermark } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Watermark</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;quark-design&quot;</span> /&gt;</span>
</code></pre><h3>Image Watermark</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Watermark</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;36&quot;</span>
  <span class="hljs-attr">rotate</span>=<span class="hljs-string">&quot;-12&quot;</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/o7HKA_image.png?x-oss-process=image/quality,q_80&quot;</span>
/&gt;</span>
</code></pre><h3>Adjust the watermark spacing</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Watermark</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;quark-design&quot;</span> <span class="hljs-attr">gapy</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">gapx</span>=<span class="hljs-string">&quot;48&quot;</span> /&gt;</span>
</code></pre><h3>Multiline text watermark</h3><pre><code class="language-js"><span class="hljs-built_in">this</span>.$refs.watermark.setText([<span class="hljs-string">&quot;quark-design&quot;</span>, <span class="hljs-string">&quot;A component library&quot;</span>]);
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>watermark text content</td><td><code class="">string</code></td><td><code class="">-</code></td></tr><tr><td>image</td><td>For the source of watermark images, if both text and image are passed in, the image will be used to render the watermark first.</td><td><code class="">string</code></td><td><code class="">-</code></td></tr><tr><td>width</td><td>watermark width</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">120</code></td></tr><tr><td>height</td><td>watermark height</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">64</code></td></tr><tr><td>rotate</td><td>The rotation angle when drawing the watermark,unit \xB0</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">-22</code></td></tr><tr><td>fontsize</td><td>text size</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">14</code></td></tr><tr><td>fontcolor</td><td>text color</td><td><code class="">string</code></td><td><code class="">rgba(0, 0, 0, .15)</code></td></tr><tr><td>gapx</td><td>horizontal spacing between watermarks</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">24</code></td></tr><tr><td>gapy</td><td>vertical spacing between watermarks</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">48</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setText</td><td>Set the watermark text. Multi-line text needs to be passed in through an array</td><td><code class="">string</code> or <code class="">string[]</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--z-index</code></td><td>switch z-index of Watermark</td><td><code class="">2000</code></td></tr></tbody></table>`,21),c=[o],i={},g="",m=s({__name:"doc-react.en-US",setup(n,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(l,h)=>(d(),e("div",r,c))}});export{m as default,g as excerpt,i as frontmatter};