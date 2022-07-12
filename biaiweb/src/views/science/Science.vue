<template>
  <div class="case">
    <banner img="" title="经典案例" />
    <div class="case-section">
      <div class="case-section-content">
        <div class="case-section-content-list" v-for="(cas,index) in caseList" :key="index">
          <img :src="cas.img" alt>
          <div class="content-list-abstract" :class="{'abstract-active' : index%2!=1}">
            <p class="abstract-title">{{cas.title}}</p>
            <p class="abstract-content">{{cas.content}}</p>
            <div class="more">
              <router-link
                class="text-decoration"
                :to="{ name: 'CaseDetails', params: { id: cas.Id }}"
              >
                <span>more</span>
                <img src="../../assets/img/sanjiao.png" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/Banner.vue";
export default {
  components: {
    Banner
  },
  data() {
    return {
      caseList: [
        {id: 1, img: require("../../assets/img/case1.jpg"), content: "从知人知面，到知心知肺：	超越简单肤浅的人脸表情识别技术", title: "脸部分析"},
        {id: 2, img: require("../../assets/img/case2.jpg"), content: "从眼动轨迹、眼睛注意点，分析人们的注意力以及认知状态", title: "眼动分析"},
        {id: 3, img: require("../../assets/img/case3.jpg"), content: "人们自然的走路姿态，不经意表露出最真实的情感、认知、心理状态", title: "步态分析"},
        {id: 4, img: require("../../assets/img/case4.jpg"), content: "声音转化成声纹波谱后，应用机器视觉技术，同样可以进行精准的情绪分析，而且不需要知道具体的语言内容", title: "声音分析"},
        {Id: 5, img: require("../../assets/img/case5.jpg"), content: "通过用户安装软件、常用软件、浏览记录、使用时长、时间分布等大数据，可用于刻画用户，发现用户的性格、偏好及行为特征", title: "手机行为分析"}
      ]
    };
  },
};
</script>

 <style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: white;

  &-section {
    width: 100%;
    &-content {
      width: 1240px;
      min-height: 1000px;
      margin: 0 auto;
      background-color: #fff;

      &-list {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(255, 255, 255);

        img {
          width: 612px;
          height: 314px;
        }
        .content-list-abstract {
          width: 290px;
          height: 350px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .abstract-title {
            line-height: 30px;
            font-size: 22px;
            color: #e13834;
          }
          .abstract-content {
            height: 150px;
            color: #484848;
            font-size: 15px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
            white-space: normal !important;
            word-wrap: break-word;
            //border: 1px solid pink;
          }
          .more {
            display: flex;
            justify-content: flex-start;
            .text-decoration {
              text-decoration: none;

              span {
                color: #000;
              }
              img {
                width: 12px;
                height: 12px;
              }
            }
          }
        }
        .abstract-active {
          order: -1;
        }
      }
    }
  }
}
</style>