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

    -
