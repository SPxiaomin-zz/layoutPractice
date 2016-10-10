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

### 商品介绍页面总结

#### .userPosition

- .userPosition 实现总结

    - 布局分析

        - 通过 .comWidth 实现水平居中的效果；
        - 通过 `margin` 来实现上下和其他元素之间的隔离；

    - 细节分析

        - 由于元素之间是存在空白字符的，所以通过在 `.userPosition` 设置字体大小为0，然后分别再在各个元素上设置字体的大小就可以实现去掉元素之间的空白符的影响；

#### .description_info

- .description_info 实现总结

    - 布局分析

        - 通过 .comWidth 实现水平居中的效果；
        - 通过浮动和定宽来实现左右布局的效果；

- .description_imgs 实现总结

    - 布局分析

        - .des_smimg 中的图片是通过浮动来布局的，并且此元素使用 `margin` 实现水平居中；

    - 细节分析

        - .des_smimg 中的每一张图片都设置了 `border` 属性，所以在相邻的图片之间就存在2倍边框，通过使用 `margin-left: -1;` 来实现边框重叠的效果；当要实现 `.active` 的效果的时候，由于后来居上的原则，右边框会被右边的图片覆盖掉，所以通过 `position: relative;` 来提高元素的层级；

- .des_content 实现总结

    - 布局分析

        - 其中的左右两栏效果都是通过 `float: left;` 和 `padding` 来实现的；    
        - .shop_buy 通过的是 `text-align: center` 和 `vertical-align: middle` 来实现水平和垂直方向居中效果的；

    - 细节分析

        - .dt 部分通过的是 `text-indent` 和 `line-height` 来实现水平方向上的字体位置移动和垂直方向上的字体居中效果；
        - .hg_icon 通过了 `background` 设置背景图片；通过 `text-indent` 和 `line-height` 实现字体的水平和垂直方向上的位置偏移效果；
        - .des_number 实现：

            - 通过浮动和定宽实现了位置效果；
            - 左右的两个加减按钮通过 `text-align: center` 和 `line-height` 来实现了水平方向和垂直方向上的居中效果；
            - 中间的输入框通过 `text-align: center` 实现从框中间开始输入的效果；

        - .des_select 和 .notes 都是通过 `text-indent` 来实现字体偏移的；

#### .des_info 实现总结

- 布局分析

    - 通过 .comWidth 实现水平方向内容居中的效果；
    - 通过浮动和定宽来实现左右两栏的效果；

#### .recommend 实现总结

- 细节分析

    - .tit 通过的是 `line-height` 来实现垂直方向上字体的居中效果，`text-indent` 实现的水平方向上的字体位置偏移效果；

#### .des_tit 实现总结

- 布局分析

    - 通过浮动和 50% 的定宽实现了水平方向的两个元素的平排效果;
    - 每个元素又是通过使用 `text-align: center` 实现内部内容的水平居中效果的；

- 细节分析

    - 通过 `margin-left` 负值的辅助实现了，在定宽浮动并且盒子模型是w3c标准模型的情况下多添加一个边框的效果；
    - 其中的每个 span 元素又是通过 `padding` 和 `background` 设置来实现了左侧图片的设置、通过 `line-height` 实现了内容的垂直居中效果；

#### .ad 实现总结

- 布局分析

    - 通过 `text-align: center;` 和 `padding` 来实现了水平方向的居中效果和垂直方向上与其它元素之间的偏移；

#### .info_text 实现总结

- 布局分析

    - 通过左右的内边距来实现内容与边框之间间隙的实现效果；

- 细节分析

    - .center 的实现也是非常的巧妙的运用规范的知识，`block replaced element` 通过 `margin: 0 auto;` 可以实现水平方向上的居中效果；

#### .shopDes_tit 实现总结

- 布局分析

    - 通过 `line-height` 实现了垂直方向上的居中效果；
    - 通过左内边距实现了水平方向上与边框之间的位置偏移效果；

#### .score_box 实现总结

- 布局分析

    - 通过浮动实现了两列并排的效果；

- 细节分析

    - .score_speed 设置 `position: relative` 成为 .score_num 绝对定位时的包含块；
    - .score_speed 设置了行高并且通过继承的方式使得 `li` 中的字体实现垂直居中的效果；
    - li:

        - 每一个 `li` 通过设置宽度和浮动来实现并排的效果；
        - 第一个 `li` 使用了 `text-indent` 来使得字体产生一定的偏移效果；
        - 最后的一个 `li` 并没有设置宽度，可以方便其它的 `li` 元素修改宽度；
    - .score_num 中的小三角实现得也是挺有技巧的；

#### .review_tab 实现总结

- 布局分析

    - 通过左右浮动实现了水平方向上的布局效果；

- 细节分析

    - .review 上设置了 `line-height` 实现其中的字体的垂直方向上的居中效果；
    - li 元素通过浮动和右外边距实现了水平方向上的并排效果和元素之间的空隙效果；
    - .review_sort 中的两个 a 元素 `display: inline-block` 和 line-height 的设置实现了垂直方向上的高度设置和字体的垂直方向居中效果，通过 padding 的设置和 `background` 实现了背景的设置；

#### .review_list 实现总结

- 布局分析

    - 通过左边的元素定宽和浮动，右边的元素左内边距实现了两列布局；
    - 通过上边设置 `padding` 和 下边设置 `margin` 从而使得和其它的元素产生空隙；

- 细节分析

    - .review_t 设置了 height 的元素：

        - 由于 .review_t 上设置了 .clearfix，这个 .clearfix 是通过伪元素来实现消除浮动的效果的，然后这个时候左边的头像是个浮动，这个时候这个伪元素就必须在浮动元素的 `bottom margin edge` 的下方，所以就得通过设置高度来消除这种现象了；

### 购物车页面总结

#### .stepBox 实现总结

- 布局分析

    - 三个 li 使用了浮动和百分数定宽；

- 细节分析

    - li 使用了 `line-height` 来实现字体在垂直方向上的居中效果、使用 `text-align` 来实现字体的水平方向偏移的效果；

#### 第一个 .shopping_item 实现总结

- 布局分析

    - .shopping_list 中的 li 都是使用左浮动，右边位置跟随的效果实现的；

- 细节分析

    - .shopping_tit 通过使用 `line-height` 和 `text-indent` 实现了字体水平和垂直方向上的位置偏移关系；
    - 每一个 li 都设置了高度，这样就可以解决由于浮动元素存在造成的乱七八糟排列效果；
    - .shop_list_text 使用 `line-height` 实现垂直方向上的居中效果；

#### 第二个 .shopping_item 实现总结

- 细节分析

    - 单选按钮通过的是相对定位与字体实现中线对齐的；

#### 第三个 .shopping_item 实现总结

- 细节分析

    - .backCar 继承了父元素的行高，通过又由于设置了浮动，所以 `display` 属性变成了 `block`，于是它的高度就和父元素的高度是一致的，并且字体垂直居中；
    - .cart_head .cart_item 元素通过浮动和定宽实现了水平方向位置排列效果、通过 `line-height` 实现垂直方向上的位置排列效果；
    - .cart_cont .cart_item 元素通过浮动和定宽实现了水平方向位置排列效果、并且除了第一个元素之外的其它元素都是通过 `line-height` 实现垂直方向上的居中效果；

        - 第一个元素是通过左边的图片浮动，右边的元素设置左 `padding` 来实现水平方向上的位置排列效果的；

    - .cart_prompt 中左边的图片是通过多添加一个 `i` 标签来实现的；

#### 第四个 .shopping_item 实现总结

- 布局分析

    - .cart_count 通过右浮动的位置特性及其宽度的收缩特性排列在右边；
    - .cart_rmb 使用的 `text-align: right;` 来实现了字体的右侧排列效果；

### 登录页面总结

#### .login_logo 实现总结

- 布局分析

    - 通过 .comWidth 实现页面居中的效果；

- 细节分析

    - .welcome_title 通过浮动并设置 padding 来实现和左侧图片的间隔，通过设置行高的方式实现垂直居中的效果；

#### .loginBox 实现总结

- 布局分析

    - 通过 `margin` 和 定宽实现水平居中的效果；
    - 使用了 `position: relative` 从而成为了 .reg_link 绝对定位时候的包含块；
    - .login_cont 使用的原因：没有使用 `box-sizing` 来定义盒子模型，如果要增加 .loginBox 的内边距的话，就得在每次更改内边距的时候重新设置尺寸值，所以通过多添加一个 `div` 的方法来实现这种效果；

#### .login 实现总结

- 细节分析

    - 前两个 input 元素

        - 通过设置 `text-indent` 属性的方式来使得在控件中输入文字的时候与左侧有间隔；
        - 右侧的人头图像通过的是特殊的截图方式和背景来实现的；

    - checkbox 通过的是 `position: relative` 来实现右侧文字的居中对齐的；
    - .login_btn 通过的是背景的设置方式来实现的；

#### .login_partners 实现总结

- 布局分析

    - li 通过左浮动来实现的布局方式；
