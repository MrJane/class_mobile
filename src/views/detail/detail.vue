<template>
    <div class="detail">
        <mt-search
                v-model="value"
                cancel-text="取消"
                placeholder="搜索">
        </mt-search>
        <div class="list-views">
            <div>直线与射线</div>
            <div>一年级>语文>清明上河图</div>
            <div>2018-11-25
                <span>12:00:00</span>
                <span>张三</span>
                <span>引用 30</span>
                <span> 活动20</span>
                <span @click="moreEvents()">...</span>
            </div>
        </div>
        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        value: '',
        sheetVisible: false,
        actions: [{
          name: '拍照',
          method: ''
        }],
      }
    },
    mounted() {
      // this.actions = [{
      //   name: '拍照',
      //   method: this.takePhoto
      // }, {
      //   name: '从相册中选择',
      //   method: this.openAlbum
      // }];
      console.log(this.$route.params.id)
    },
    methods: {
      moreEvents() {
        this.sheetVisible = true;
        console.log('hahaha')
      },
      takePhoto() {
        console.log('taking photo');
      },
      openAlbum() {
        console.log('opening album');
      },
      goBack() {
        history.go(-1);
      }
    }
  }
</script>

<style lang="scss">
    .mint-search {
        height: 53px;
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
</style>