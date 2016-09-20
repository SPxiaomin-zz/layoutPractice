## Imooc 电商网站实战总结

### 首页总结

#### .headerBar

- .topBar 实现总结

    - 背景部分：

        - 通过设置 `line-height` 使得 .topBar 中的文字内容实现垂直居中的效果；
        - 由于中间的内容是居中的，所以通过多添加了一个 `div.comWidth` 来实现中间内容居中；

    - 小技巧:

        - 在文字旁边添加小图片

            - 在 .topBar 中是通过 padding 和 background 方式来实现的，代码如下所示:

                    <a class="collection" href="#">收藏慕课</a>

                    .collection {
                        padding-left: 19px;

                        font-weight: bold;

                        background: url(../images/icon/collection.jpg) no-repeat left center;
                    }

- .logoBar 实现总结

    - 背景部分:

        - 由于中间的内容是居中的，所以通过多添加了一个 `div.comWidth` 来实现中间内容居中；

    - 布局分析：

        - .log、.search_box 左浮动，.shopCar 右浮动；
        - .log、.search_box 是通过 padding 来实现与偏移的，.shopCar 是通过 margin 来设置偏移的；

    - 细节分析：

        - .shopText部分：

            这一部分的文字旁边添加图片是通过-`background` 和 `text-indent` 来实现的；

        - .shopNum部分：

            这一部分的文字旁边添加图片是通过 `text-align`、padding 和 background 来实现的；这个地方通过这种方式实现是有一个妙处的，也就是当数字不断的增加位数的时候，它距离右边的宽度是不会变换的，而是它的宽度是不断的往左边增长的；

- .navBox 实现总结

    - 布局分析

        - 通过 div.comWidth 来实现了内容居中和背景颜色的设置；
        - 然后通过浮动设置了 .shopClass 和 .nav 两块；
        - 在 .shopClass 中的 .shopClass_show 和 .shopClass_list 是通过 relative 和 absolute 来定位实现的；
        - .nav 中的各个选项是通过 float 来实现的；

    - 细节部分

        - .shopClass

            - .shopClass 中的 h3 中的小箭头实现：

                是通过多添加一个标签并设置背景图片来实现的，实现了位置跟随的特性（一个不错的小技巧）；

            - .shopClass_show 的 `width: 100%` 设置实现得也非常的巧妙，其包含块是设置了 `relative` 的 .shopClass；
            - .shopClass_item 中的小箭头是通过设置背景图片来实现的；
            - .shopClass_cont 标签的添加也是一个小技巧

                作者在需要设置　padding 的时候，由于 .shopClass_list 和 其中的内容都已经写好了，如果这个时候要在 .shopClass_list 中设置 padding 就要修改 .shopClass_list 的宽度（由于作者并没有使用 box-sizing 设置盒子模型的种类），于是作者就通过多添加一个标签的方式实现了 padding 的设置；

            - .shopList_item 的实现也是挺巧妙的：

                通过设置 dt 元素的 padding-left 和 margin-top 就实现了和浮动一样的效果，太棒了；

                但是作者貌似在 a 元素没有设置 `display: inline-block` 就导致了文字分行时断开的现象，于是我便添加了此声明；

            - .shopList_links 中的按钮中的的箭头：

                是通过多添加一个 span 标签并设置背景图片来实现的；

#### .banner

- .banner 实现总结

    - 布局分析

        - 通过 .comWidth 实现了内容居中显示的效果；
        - 然后 .banner_bar、.imgBox、li 通过浮动和宽高度的设置实现布局效果，并通过 `overflow: hidden` 和 relative、absolute 来实现动画的效果；
        - 图片位置标识 .imgNum 小方框是通过 absolute 绝对定位来实现的；

    - 细节分析

        - .imgNum 部分使用了 absolute，由于其具有收缩性，所以可以通过 `width: 100%` 使其宽度为父元素的宽度或者也可以通过多添加一个 `right: 0` 的属性来实现同样的效果；

#### .shopTit

- .shopTit 实现总结

    - 布局分析

        - 通过 .comWidth 实现了内容的居中显示的效果；
        - 通过 .shopTit 的 line-height 样式的设置，实现了这一行中的字体居中的效果；
        - 通过 float 属性的设置来实现 .icon、h3 和 .more 的位置设置效果；

#### .shopList

- .shopList 实现总结

    - 布局分析

        - 通过 .comWidth 实现了内容的居中显示效果；
        - .leftArea 和 .rightArea 通过浮动和定宽实现了左右布局效果；
        - .leftArea 中的轮播图的实现和上面的 .banner 实现是一样的；
        - .rightArea 中分为上下两块，上下的两个部分都是通过 float 来实现布局的；

    - 细节分析

        - .rightArea

            - 由于 .shopList_top 和 .shopList_sm 都通过 `margin-right: -4px` 来实现了内容超过父元素的宽度但是浮动到一行的效果，所以通过在 .rightArea 上设置了 `overflow: hidden` 来将超出的内容实现隐藏；
            - .shop_img 中的 img 设置了 `width: 100%`，虽然其包含在了 a 元素中，但是 img 的包含块依然是 .shop_img，所以百分比值是相对于 .shop_img 来进行计算的；
            - .shop_item 通过设置 `text-align: center` 来实现了其中的文字居中的效果；
            - .shopItem_sm 中通过了浮动来实现布局的效果；

#### .hr_25

- .hr_25 这个空标签的使用也是非常的有技巧性的: 如果在 .shopList 和 .footer 分别设置 margin-bottom 和 margin-top 的话，就会发生外边距合并的问题，所以通过此方式的实现真的是非常的妙；

#### .footer

- .footer 实现总结

    - 布局分析

        - .footer 通过上下的 padding、text-align: center 和 line-height 来实现文本居中和空隙的设置效果；

### 产品分类页面总结

#### .products

- .products 实现总结

    - 布局分析

        - .leftArea 和 .rightArea 通过浮动和定宽实现了左右布局的效果；
        - 通过 .comWidth 实现了内容居中的效果；

#### .leftNav

- .leftNav 实现总结

    - 布局分析

        - .nav_title 通过 `line-height` 和 `text-align: center` 实现了垂直和水平方向的居中效果；
        - .nav_cont 中的 li 元素通过 `width: 50%` 和 float 实现了左右两栏的效果；

    - 细节分析

        - 在每一个 .nav_cont 的下方都设置了下边框，这样最后一个 .nav_cont 就会和父元素 .leftNav 的边框产生了重复的效果，于是作者通过了 `margin-bottom: -1px` 的小技巧让 .nav_cont 的 border-bottom 和 .leftNav 的 border-bottom 发生重叠；

#### .products_title

- .products_title 实现总结

    - 细节分析

        - h3 通过了 .line-height 实现了垂直方向居中的效果；通过 `text-indent` 实现字体的偏移效果；

#### .products_list

- .products_list 实现总结

    - 布局分析

        - 通过 `float` 和 `width: 25%` 实现了4列布局的效果；

### 筛选页面总结

#### .screening_box

- 前三个 .screening

    - 布局分析

        - `dt` 和 `dd` 通过了浮动、定宽来实现布局的效果；通过 `line-height` 实现了垂直方向居中的效果；

- 最后一个 .screening

    - 细节分析

        - .screen_more 中的箭头是通过在其中包含的 a 标签设置背景和 padding 来实现的；

#### .addInfo

- .addInfo 实现总结

    - 布局分析

        - 通过左右浮动实现了布局的效果；

    - 细节分析

        - .select 设置了 `position: relative;` 和 `padding`，然后其中的图标标签设置了绝对定位实现了定位于右边的效果；
        - .screen_text 部分中的 .checkbox 和 .check 通过 `vertical-align: middle` 和 `relative` 布局实现了垂直居中的效果；

#### .page

- .page 实现总结

    - 布局分析

        - 通过 `text-align: center` 实现水平居中的效果；
        - 通过文本基线对齐的特性实现垂直方向上的对齐；
