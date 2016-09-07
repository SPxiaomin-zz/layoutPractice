### Imooc 电商网站实战总结

#### 首页总结



小技巧:

- 在文字旁边添加小图片

    - 在 .topBar 中是通过 padding 和 background 方式来实现的，代码如下所示:

            <a class="collection" href="#">收藏慕课</a>

            .collection {
                padding-left: 19px;

                font-weight: bold;

                background: url(../images/icon/collection.jpg) no-repeat left center;
            }
