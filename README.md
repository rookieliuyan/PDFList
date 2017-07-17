# PDFList（纯属自娱自乐）
一个so easy的PDF列表

#/PDF/pdf/
直接写在项目中

#/PDF/pdflist
测试demo

#需求：公司项目好多pdf显示，为省一部分代码量，写了一个简单的js（超级简单，勿喷）
#原理：动态生成外层分类列表和pdf标题列表，点击标题切换pdf（闪屏问题一场严重，后续解决）
#使用：
① 基于jquery，项目中引入jquery最好
② 写好html、css，主要html、css如下所示（主要html类、id不可更改，js中有使用，否则会导致找不到对应标签）
③ 把/PDF/pdf/index.js引入项目，并在html用script标签引用
④ js中初始化一个PDFList对象，对应的数据，具体数据格式见/PDF/pdflist/index.js, 可以自定义type列表和pdf标题列表的class

#初始化
#非自定义
example: let pDFList = new PDFList(type, list)即可实现对应功能
#自定义clas(自定义class绑定事件中调用childListClick(this)和parentListClick(this)）
example: 
let pDFList = new PDFList(type, list, 'firstCustom', 'secondCustom')
$(document).on('click', '.secondCustom', function() {
    这里可以加上你想执行的东西
    pDFList.childListClick(this) or pDFList.parentListClick(this)
})

#html
#左侧列表&pdf显示区域(list:列表, pdf:显示区域)
 <div class="list"> 
    <ul class="type" id="type"></ul>
</div>
<div class="pdf">
    <embed src="" type="application/pdf">
</div>

#css(我写的是这样,可以自己定义)
div.list {
    height: 100%;
    width: 200px;
    float: left;
}
div.list li {
    padding: 5px 0;
    cursor: pointer;
}
div.pdf {
    height: 100%;
    float: left;
    margin-left: 30px;
}
div.pdf > embed {
    display: block;
    height: 100%;
    width: 870px;
}

#js
具体见/PDF/pdf/index.js
