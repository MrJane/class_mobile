<template>
    <div>
        <mt-navbar v-model="selected" class="page-part">
            <mt-tab-item id="1">我的收藏</mt-tab-item>
            <mt-tab-item id="2">我的创建</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="list-header">
                    <h2 class="title">资源类</h2>
                </div>
                <div class="lists-wrapper">
                    <div class="list-item" @click="toDetail(1)">课例</div>
                    <div class="list-item" @click="toDetail(2)">课件</div>
                    <div class="list-item" @click="toDetail(3)">图片</div>
                    <div class="list-item" @click="toDetail(4)">音频</div>
                    <div class="list-item" @click="toDetail(5)">视频</div>
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
        </mt-tab-container>
    </div>
</template>

<script>
  export default {
    name: "my",
    data() {
      return {
        selected: "1"
      }
    },
    methods: {
      toDetail(type) {
        this.$router.push('/detail/' + type);
        console.log(type);
      }
    }
  }
</script>

<style lang="scss">
    .lists-wrapper {
        display: flex;

        .list-item {
            width: 20%;
            padding: 15px;
            box-sizing: border-box;
            text-align: center;
            border: 1px solid #cccccc;
            margin-left: 4px;
        }
    }
</style>