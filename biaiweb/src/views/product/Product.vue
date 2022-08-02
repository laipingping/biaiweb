<template>
  <div class="product">
    <banner img="../assets/img/bgtop.jpg" title="研发中心" />
    <div class="product-content">
      <div class="p-video">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </div>
      <div class="advantage">
        <h3 class="title">结合人工智能解决人类心身医学问题</h3>
        <div class="advantage-bottom">
          <div class="advantage-bottom-item">
            <div class="advantage-bottom-item-img">
              <img src="../../assets/img/bling1.png" alt />
            </div>
            <p>眼脑一体工程，实现无创性深度脑机交互</p>
          </div>

          <div class="advantage-bottom-item">
            <div class="advantage-bottom-item-img">
              <img src="../../assets/img/bling2.png" alt />
            </div>
            <p>多学科交叉优势，结合强大的技术支撑平台</p>
          </div>

          <div class="advantage-bottom-item">
            <div class="advantage-bottom-item-img">
              <img src="../../assets/img/bling3.png" alt />
            </div>
            <p>强调“上医治未病”，治心病于未病时</p>
          </div>

          <div class="advantage-bottom-item">
            <div class="advantage-bottom-item-img">
              <img src="../../assets/img/bling4.png" alt />
            </div>
            <p>数字疗法，在脑神经认知领域独领风骚</p>
          </div>
        </div>
      </div>
      <!-- 平台目标 -->
      <div class="target">
        <h3 class="title">平台目标</h3>
        <p class="eTitle">TARGET</p>
        <div class="target-img">
          <img src="../../assets/img/target.jpg" alt />
        </div>
      </div>
      <!--功能模块  -->
      <div class="modular">
        <h3 class="title">功能模块</h3>
        <p class="eTitle">MODULAR</p>
        <div class="modular-content">
          <div class="modular-content-same">
            <div class="same-item">
              <div class="same-item-img">
                <img src="../../assets/img/product-group_4-icon_5.png" alt />
              </div>
              <p>个人信息模块</p>
            </div>
            <div class="same-item">
              <div class="same-item-img">
                <img src="../../assets/img/product-group_4-icon_3.png" alt />
              </div>
              <p>步态检测模块</p>
            </div>
            <div class="same-item">
              <div class="same-item-img">
                <img src="../../assets/img/product-group_4-icon_1.png" alt />
              </div>
              <p>声音检测模块</p>
            </div>
            <div class="same-item">
              <div class="same-item-img">
                <img src="../../assets/img/product-group_4-icon_2.png" alt />
              </div>
              <p>眼动检测模块</p>
            </div>
          </div>
          <div class="modular-content-center">
            <img src="../../assets/img/biai.png" alt />
          </div>
          <div class="modular-content-same">
            <div class="same-item">
              <p>信息处理模块</p>
              <div class="same-item-img">
                <img src="../../assets/img/product-group_4-icon_6.png" alt />
              </div>
            </div>
            <div class="same-item">
              <p>脑电检测模块</p>
              <div class="same-item-img">
                <img src="../../assets/img/product-group_4-icon_8.png" alt />
              </div>
            </div>
            <div class="same-item">
              <p>查看结果模块</p>
              <div class="same-item-img">
                <img src="../../assets/img/product-group_4-icon_7.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  data() {
    return {
      loading: true,
      videoSrc: require("../../assets/vidio/vidio.mp4"),
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0, 4.0, 8.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: require("../../assets/vidio/vidio.mp4") //url地址
          }
        ],
        // poster: "../../assets/img/video.jpg", //封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  components: {
    Banner
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  height: 100%;
  background-color: white;
}

.product-content {
  width: 1240px;
  margin: 0 auto;
  background-color: #fff;
}

.p-video {
  width: 1000px;
  margin: 0 auto;
  padding: 60px 0;
}

//优势
.advantage {
  height: 420px;
  padding: 20px 0;
  //margin: 20px 0;

  .advantage-bottom {
    display: flex;
    justify-content: space-around;
    padding: 100px 100px;

    .advantage-bottom-item {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      //justify-content: center;

      .advantage-bottom-item-img {
        width: 200px;
        height: 200px;
        background: white;
        border-radius: 50%;
        overflow: hidden;
        line-height: 160px;
      }
    }
    p {
      font-size: 16px;
      text-align: start;
      margin: 10px 0;
    }
  }
}

//平台目标
.target {
  margin-top: 50px;
  &-img {
    margin-top: 50px;
    text-align: center;
  }
}

//
.modular {
  margin-top: 50px;
  .modular-content {
    padding: 50px 50px;
    display: flex;
    justify-content: space-around;
  }
}
.modular-content-same {
  width: 182px;
  height: 405px;

  .same-item {
    height: 70px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;

    .same-item-img {
      width: 70px;
      height: 70px;
      line-height: 100px;
      background: #4f5051;
      border-radius: 50%;
      text-align: center;
    }
    p {
      color: #4f5051;
      font-weight: 700;
      line-height: 70px;
    }
  }
}

.modular-content-center {
  width: 355px;
  height: 355px;
  img {
    width: 100%;
  }
}
//公共样式
.title,
.eTitle {
  font-size: 34px;
  font-weight: 400;
  color: #333;
  text-align: center;
}
.eTitle {
  font-size: 30px;
  padding: 10px 0;
}
</style>