# imooc 企业网站实例

## 最终效果

<img src="./represent.png" alt="最终效果图">

## 制作过程总结

- `.top` 部分

    - 块状元素通过设置 `width` 和 `margin: 0 auto` 即可进行水平居中
    - 设置 `line-height` 将字体进行垂直居中
    - `li` 元素使用到了 `float` ， 所以使用 `.clearfix` 消除浮动
    - 通过设置 `li` 元素的宽度，可将 `li` 元素之间的距离隔离开来
    
- `.wrapper logo` 部分

    - 通过 `float` 属性分为左右两个部分，同时使用 `.clearfix` 消除浮动，防止父元素高度塌陷
    - 通过 `vertical-align` 属性将图片近似居中显示
    
- `.wrapper nav` 部分

    - 左中右三个部分是通过 `float` 属性进行布局的
    - `.nav-left` 和 `.nav-right` 部分是通过背景图片实现的，同时需设置高度、宽度
    - `.nav-mid` 部分设置了行高，导致了 `.nav-mid-right` 部分的 `input` 距离上下顶部有一定的空隙

- `.wrapper .main .news` 部分

    - `.title` 部分通过 `float` 进行左右布局，通过 `line-height` 进行垂直居中
    - `.pic-news` 部分通过 `float` 进行左右布局，设置 `line-height` 实现行与行之间的空隙
    - `.news-list` 部分通过 `background` 和 `padding` 设置左边的小红三角形，`line-height` 实现与 `border` 之间的距离
    
- `.wrapper .main .products` 部分

    - `product-type` 部分通过 `.clearfix` 消除浮动，其中 `li` 元素左浮动并通过 `line-height` 进行水平居中效果
    
- `.copyright` 部分

    - 通过浮动 `li` 并且设置其宽度实现了多列的效果
