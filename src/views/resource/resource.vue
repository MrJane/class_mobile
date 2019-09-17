<template>
    <div>
        <mt-navbar v-model="selected" class="page-part">
            <mt-tab-item id="1">资源类</mt-tab-item>
            <mt-tab-item id="2">交互类</mt-tab-item>
            <mt-tab-item id="3">评价类</mt-tab-item>
            <mt-tab-item id="4">游戏类</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="list-header">
                    <h2 class="title">课列(200)</h2>
                    <a> 更多</a>
                </div>
                <div class="list-views">
                    <div>直线与射线</div>
                    <div>一年级>语文>清明上河图</div>
                    <div>2018-11-25 <span>12:00:00</span> <span>张三</span> <span>引用 30</span> <span> 活动20</span> <span>...</span>
                    </div>
                </div>
                <div class="list-views">
                    <div>直线与射线</div>
                    <div>一年级>语文>清明上河图</div>
                    <div>2018-11-25 <span>12:00:00</span> <span>张三</span> <span>引用 30</span> <span> 活动20</span> <span>...</span>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="module-title">
                    <h2 class="title">课件(200)</h2>
                    <a> 更多</a>
                </div>
                <div class="list-views imgs">
                    <div class="container">
                        <div class="img-wrap">
                            <img src="../../assets/tool/swipe1.jpg" alt="">
                            <p class="desc"><span>张三</span><span>引用30</span></p>
                        </div>
                        <p class="kejian-name">课件名称...</p>
                    </div>
                    <div class="container">
                        <div class="img-wrap">
                            <img src="../../assets/tool/swipe1.jpg" alt="">
                            <p class="desc"><span>张三</span><span>引用30</span></p>
                        </div>
                        <p class="kejian-name">课件名称...</p>
                    </div>

                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="module-title">
                    <h2 class="title">视频(200)</h2>
                    <a> 更多</a>

                </div>
                <div class="video-container">
                    <div class="video-list-views">
                        <div class="video">
                            <p class="video-desc"><span>张三</span><span>引用30</span></p>
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
  export default {
    name: "resource",
    data() {
      return {
        selected: "1"
      }
    }
  }
</script>

<style lang="scss">
    .list-header, .module-title {
        display: flex;
        /*flex-direction: column;*/
        margin-bottom: 15px;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding-left: 4px;

        &:before {
            content: '';
            width: 2px;
            background: red;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
        }

        .title {
            font-size: 16px;
            margin: 0;
        }

        a {
            color: #3366ff;
            font-size: 14px;
        }

    }

    .list-views {
        border: 1px solid #ccc;
        margin-bottom: 15px;
        padding: 10px;
        box-sizing: border-box;

        &.imgs {
            display: flex;
            border: none;
        }

        .kejian-name {
            margin-top: 5px;
        }

        .container {
            width: 50%;
            margin: 0 10px;
        }

        .img-wrap {
            width: 100%;
            overflow: hidden;
            height: 140px;

            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            .desc {
                position: absolute;
                bottom: 0;
                height: 24px;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, .3);
                margin: 0;
                display: flex;
            }
        }
    }

    .page-part {
        margin-bottom: 15px;

    }
    .video-list-views{
        display: flex;
        .video{
            width: 100%;
            height: 140px;
            border: 1px solid red;
            position: relative;
            .video-desc{
                position: absolute;
                width: 100%;
                margin: 0;
                bottom: 0;
                left: 0;
                height: 24px;
                background: rgba(255,255,20,.3);
            }
        }
    }
</style>