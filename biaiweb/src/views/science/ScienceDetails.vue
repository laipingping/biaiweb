<template>
  <div class="case">
    <banner img="" title="案例详情" />
    <div class="case-product">
      <div class="case-product-content" v-for="(item, index) in caseIdList" :key="index">
        <img :src="item.img" alt />
        <p class="product-title">{{item.title}}</p>
        <p class="product-time">{{item.createtime}}</p>
        <p class="product-content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      pid: 0,
      caseIdList: [
        {
          pid: 1, 
          img: require("../../assets/img/case1.jpg"), 
          content: "从知人知面，到知心知肺：超越简单肤浅的人脸表情识别技术", 
          title: "脸部分析", 
          createtime: 2022/7,
        },
        {
          pid: 2, img: require("../../assets/img/case2.jpg"), 
          content: "从眼动轨迹、眼睛注意点，分析人们的注意力以及认知状态", 
          title: "眼动分析", 
          createtime: 2022/7
          },
        {
          pid: 3, 
          img: require("../../assets/img/case3.jpg"), 
          content: "人们自然的走路姿态，不经意表露出最真实的情感、认知、心理状态", 
          title: "步态分析", 
          createtime: 2022/7
          },
        {
          pid: 4, 
          img: require("../../assets/img/case4.jpg"), 
          content: "声音转化成声纹波谱后，应用机器视觉技术，同样可以进行精准的情绪分析，而且不需要知道具体的语言内容", 
          title: "声音分析", 
          createtime: 2022/7
          },
        {
          pid: 5, 
          img: require("../../assets/img/case5.jpg"), 
          content: "通过用户安装软件、常用软件、浏览记录、使用时长、时间分布等大数据，可用于刻画用户，发现用户的性格、偏好及行为特征", 
          title: "手机行为分析", 
          createtime: 2022/7
          }
      ]
    };
  },
  created() {
    this.pid = this.$route.params.id;
    window.console.log(this.pid);
  }
};
</script>

<style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;
  &-product {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
    //border: 1px solid red;
    &-content {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
      img {
        width: 100%;
        height: 430px;
      }
      .product-title {
        font-size: 25px;
        color: #e13834;
        padding: 20px 0;
      }
      .product-content {
        font-size: 17px;
        font-weight: bolder;
        padding: 20px 0;
      }
    }
  }
}
</style>