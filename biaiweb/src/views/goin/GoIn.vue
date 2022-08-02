<template>
  <div class="go-in">
    <banner img="../assets/img/bgtop.jpg" title="走进BIAI" />
    <div class="section">
      <div class="section-content">
        <div class="content-summary">
          <div class="summary-left">
            <p class="title">公司简介</p>
            <p class="eTitle">ABOUT US</p>
            <div class="content">
              <p>
              BIAI（深圳市必爱智能生命科技有限公司），结合生物智能（Biological intelligence, BI）和人工智能（Artificial intelligence,
              AI），竭诚服务所有人，拥抱更健康、聪明、快乐的大脑。

              BIAI强调治未病，主打电子数字药物开发，专注于精神压力相关的脑功能失调问题（包括失眠、焦虑、抑郁、认知退化等）。
              通过对大脑进行即时评估、监测和干预，帮助人们在学习和工作中更科学、高效地用脑；同时，帮助心脑问题患者进行压力管理和慢病防治。

              BIAI,作为高科技创新型企业，整合了来自美国麻省理工和中国科学院最前沿的脑科学理念和最先进的人工智能技术，潜心科研攻关与产品创新，
              已发表国际学术论文20余篇，申请国内外专利20余项，致力于打造智能化、科学性、高灵敏的，由数据算法端(AI)、平台服务端(App)及智能穿戴终端(SWD)共同组成的系统性平台服务。
              </p>
              <!-- <br />
              <p>
              BIAI (Shenzhen BIAI Intelligent Life Technology Co., LTD.), combining Biological Intelligence (BI) and
              Artificial Intelligence (AI), is dedicated in serving everyone to embrace healthier, smarter and happier
              brain.
              We emphasizes the prevention of mental issues before their attacking.
              We focus on brain dysfunction related to mental stress (including insomnia, anxiety, depression, cognitive
              degradation, etc.), and develop electronic and digital drugs, through real time assessment, monitoring and
              intervention of the brain, to help healthy people use their brains more scientifically and efficiently,
              and to help patients with stress management and chronic disease prevention.
              BIAI, as a high-tech innovative enterprise, integrates the cutting edge brain science and the most
              advanced AI technology from MIT (United States) and CAS (Chinese Academy of Sciences) together.
              We persist on scientific progression and product innovation, has published more than 20 high-level
              international academic essays, and has applied for more than 20 patents,
              We are committed to build intelligent, scientific, precise complex service system, composed with algorithm
              terminal (AI), platform terminal (App) and smart wearable device terminal (SWD).
              </p> -->

              
            </div>
          </div>
          <div class="summary-right">
            <img src="../../assets/img/biaiTop2.jpg" alt />
          </div>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>

        <!-- 发展历程 -->
        <div class="content-course">
          <div class="top">
            <h3>发展历程</h3>
            <p>DEVELOPMENT</p>
          </div>
          <div class="course-time">
            <Timeline :timelineList="timeLineArr" @scrollEvent="scrollEvent" />
          </div>
        </div>
        <div class="content-culture">
          <h3>企业文化</h3>
          <h3>CULTURE</h3>
          <p>我们致力于——</p>
          <span>应用最前沿脑科学知识武装我们大脑</span>
          <span>结合最先进的大数据和人工智能技术</span>
          <span>基于眼脑一体工程的智能监测技术</span>
          <span>让人人都可以拥有健康聪明的大脑</span>
        </div>
        <!-- 公司荣誉 -->
        <div class="content-honor">
          <div class="honor-big-img">
            <el-dialog>
              <img alt />
            </el-dialog>
          </div>
          <div class="top">
            <h3>公司荣誉</h3>
            <p>HONOR</p>
            <div class="border"></div>
          </div>
          <ul class="honor-show">
            <li v-for="(honor,index) in honorList" :key="index">
              <img :src="honor.img" />
            </li>
          </ul>
          <!-- <p>点击图片查看大图</p> -->
        </div>
        <!-- 团队风采 -->
        <div class="content-team">
          <div class="top">
            <h3>团队风采</h3>
            <p>TEAM</p>
          </div>
          <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="(item,index) in teamItem" :key="index">
              <img :src="item.img" class="swiper-img" alt>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 合作伙伴 -->
        <div class="content-partner">
          <div class="top">
            <h3>合作伙伴</h3>
            <p>RARTNERS</p>
            <ul class="partner-img">
              <li v-for="(item,i) in partnerImg" :key="i">
                <img :src="item.img" alt />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import TimeLine from "../../components/TimeLine.vue";
export default {
  components: {
    Banner,
    TimeLine,
    swiper,
    swiperSlide
  },
  data() {
    return {
      honorList: [
        {id: 1, img: require("../../assets/img/24.png")},
        {id: 2, img: require("../../assets/img/25.png")},
        {id: 3, img: require("../../assets/img/26.png")},
        {id: 4, img: require("../../assets/img/27.png")},
      ],
      partnerImg: [
        {id: 1, img: require("../../assets/img/partner2.png")},
        {id: 2, img: require("../../assets/img/partner3.png")},
        {id: 3, img: require("../../assets/img/partner4.png")},
        {id: 4, img: require("../../assets/img/partner5.png")},
        {id: 5, img: require("../../assets/img/partner6.png")},
        {id: 6, img: require("../../assets/img/partner7.png")},
        {id: 7, img: require("../../assets/img/partner8.png")},
        {id: 8, img: require("../../assets/img/partner9.png")},
        {id: 9, img: require("../../assets/img/partner10.png")},
        {id: 10, img: require("../../assets/img/partner11.png")},
        {id: 11, img: require("../../assets/img/partner12.png")},
        {id: 12, img: require("../../assets/img/partner13.png")},
        {id: 13, img: require("../../assets/img/partner14.png")},
        {id: 14, img: require("../../assets/img/partner15.png")},
        {id: 15, img: require("../../assets/img/partner16.png")},
        {id: 16, img: require("../../assets/img/partner17.png")},
        {id: 17, img: require("../../assets/img/partner18.png")},
        {id: 18, img: require("../../assets/img/partner19.png")},
        {id: 19, img: require("../../assets/img/partner20.png")},
        {id: 20, img: require("../../assets/img/partner21.png")},
        {id: 21, img: require("../../assets/img/partner22.png")},
        {id: 22, img: require("../../assets/img/partner23.png")},
        {id: 23, img: require("../../assets/img/partner24.png")},
        {id: 24, img: require("../../assets/img/partner25.png")},
        {id: 25, img: require("../../assets/img/partner26.png")},
        {id: 26, img: require("../../assets/img/partner27.png")},
        {id: 27, img: require("../../assets/img/partner28.png")},
        {id: 28, img: require("../../assets/img/partner29.png")},
        // {id: 29, img: require("../../assets/img/partner30.png")},
        // {id: 30, img: require("../../assets/img/partner31.png")},
        
      ],
      timeLineArr: [
        {
          id: 1,
          date: "2018",
          title: "公司成立",
          content: "成立于美国波士顿",
          isShow: true,
          children: [],
        },
        {
          id: 2,
          date: "2019",
          title: "总部迁移",
          content: "总部迁入中国深圳",
          isShow: true,
          children: [],
        },
        {
          id: 3,
          date: "2020",
          title: "独立运营",
          content: "正式独立运营",
          isShow: true,
          children: [
            {
              name: "2020.3",
              content: "共同成立上海织生科技有限公司，专注于长三角的老年认知退化的评估和干预业务"
            },
            {
              name: "2020.09",
              content: "获得第十二届中国深圳创新创业大赛晋级半决赛的资格证书",
            },
            {
              name: "2020.10",
              content: "与深圳市耀年品牌咨询公司建立战略合作伙伴关系，共同推进BIAI科技品牌的塑造",
            },
            {
              name: "2020.11",
              content: "首次亮相第二十二届中国国际高新技术成果交易会（高交会）",
            },
            {
              name: "2020.11",
              content: "荣获2020年深圳国际生物／生命健康产业展览会“创新成果奖”",
            },
            {
              name: "2020.12",
              content: "申请具有完全自主知识产权的若干专利和软件著作权",
            },
            {
              name: "2020.12",
              content: "获邀申请加入深圳市人工智能行业协会以及深圳市高科技企业协同创新促进会",
            },
          ],
        },
        {
          id: 4,
          date: "2021",
          title: "",
          content: "",
          isShow: true,
          children: [
            {
              name: "",
              content: "",
            },
            {
              name: "",
              content: "",
            },
            {
              name: "",
              content: "",
            },
          ],
        },
        {
          id: 5,
          date: "2022",
          title: "",
          content: "",
          isShow: true,
          children: [
            {
              name: "",
              content: "",
            },
          ],
        },
      ],
      teamItem: [
        {id: 1, img: require("../../assets/img/team1.jpg")},
        {id: 2, img: require("../../assets/img/team2.png")},
        {id: 3, img: require("../../assets/img/team3.jpg")},
        {id: 4, img: require("../../assets/img/13.jpg")},
        {id: 5, img: require("../../assets/img/14.jpg")},
        {id: 6, img: require("../../assets/img/15.jpg")},
        {id: 7, img: require("../../assets/img/16.jpg")},
        {id: 8, img: require("../../assets/img/18.jpg")},
        {id: 11, img: require("../../assets/img/24.png")},
        {id: 12, img: require("../../assets/img/25.png")},
        {id: 13, img: require("../../assets/img/26.png")},
        {id: 17, img: require("../../assets/img/30.png")},
        {id: 14, img: require("../../assets/img/32.png")},
        {id: 15, img: require("../../assets/img/33.png")},
        {id: 16, img: require("../../assets/img/34.png")},
      ],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
    };
  },
  methods: {
  // 滚动监听
    scrollEvent(e) {
      if (
        e.srcElement.scrollLeft + e.srcElement.clientWidth >=
        e.srcElement.scrollWidth
      ) {
        console.log("在底部触发请求数据");
        // 请求数据
        let data = [];
        if (!this.nomore) {
          this.timeLineArr[this.timeLineArr.length - 1].isShow = true;
          this.timeLineArr.push(...data);
          this.nomore = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.go-in {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  overflow: hidden;
  .section {
    width: 100%;
    &-content {
      width: 1240px;
      margin: 0 auto;
      background-color: #fff;

      .content-summary {
        //height: 500px;
        display: flex;
        justify-content: space-around;
        padding: 60px 0;
        .summary-left {
          width: 600px;
          .title {
            font-size: 25px;
            color: black;
          }
          .eTitle {
            font-size: 17px;
            color: black;
            padding: 20px 0;
          }
          .content {
            color: black;
            font-size: 16px;
            text-indent: 21px;
            line-height: 24px;
          }
        }

        .summary-right {
          width: 400px;
          height: 310px;
          border: 2px solid #02050e;
          //animation: imgboxkey 4s infinite;
          border-radius: 10px;
          margin-top: 80px;
          text-align: center;

          img {
            width: 360px;
            height: 270px;
            margin-top: 20px;
            //animation: imgbo 4s infinite;
          }
        }
      }

      //发展历程
      .content-course {
        padding: 20px 0;
        .course-time {
          // width: 200px;
          // height: 200px;
          margin: 50px auto;
          font-size: 17px;
        }
      }

      //企业文化
      .content-culture {
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 100px;
        background-color: #dbdbdb;
        h3 {
          color: #03080e;
          font-size: 26px;
        }
        p {
          color: #0b0e11;
          font-size: 26px;
          padding: 5px 0;
        }
        span {
          font-weight: 400;
          line-height: 36px;
          font-size: 18px;
          padding: 5px 0;
          color: #383737;
        }
      }

      //公司荣誉
      .content-honor {
        padding: 10px 0;
        .honor-show {
          width: 1000px;
          margin: 30px auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;

          li {
            width: 220px;
            height: 320px;
            margin-left: 15px;
            list-style: none;
            border: 1px solid palegoldenrod;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        p {
          text-align: center;
          color: #666666;
        }
      }

      //团队风采
      .content-team {
        padding: 50px 100px;
        .swiper-img {
          height: 400px;
          background: no-repeat center;
          background-size: cover;
        }
      }

      //合作伙伴
      .content-partner {
        padding: 50px 0;
        .partner-img {
          width: 950px;
          margin: 20px auto;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            width: 67px;
            height: 67px;
            list-style: none;
            margin: 10px 25px;

            img {
              width: 100%;
              height: 100%;
              border: 1px solid rgb(194, 218, 235);
            }
          }
        }
      }
    }
  }
}

@keyframes imgboxkey {
  0% {
    border: solid rgb(29, 66, 185) 2px;
  }
  40% {
    border: solid rgb(255, 255, 255) 2px;
  }
  60% {
    border: solid rgb(255, 255, 255) 2px;
  }
  100% {
    border: solid rgb(29, 66, 185) 2px;
  }
}

@keyframes imgbo {
  0% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px #ababab;
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
}
.el-divider--horizontal {
  margin: 1px 0;
}

.top {
  h3,
  p {
    text-align: center;
    color: #000000;
    font-weight: 400;
    padding: 10px 0;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  .border {
    border-bottom: 1px solid #666667;
    width: 15%;
    margin: 0 auto;
  }
}
// .swiper-button-disabled {
//   display: none;
// }
.order {
  order: -1;
}
.order-top {
  order: 1;
}
.el-divider {
  background-color: rgb(109, 109, 109);
  height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: #fff;
    border: 3px solid rgb(177, 171, 171);
  }
}
.el-divider-active {
  background-color: #000000;
}
.honor-big-img {
  width: 100%;
  height: 100%;
  z-index: 10;
  text-align: center;
  padding-bottom: 20px;
  padding: 5%;
  //background-color: #14679f;
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;

    .el-dialog__body {
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>