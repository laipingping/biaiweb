<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/img/2.png" alt />
        </div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
        
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/go-in">走进BIAI</el-menu-item>
          <el-menu-item index="/news">新闻资讯</el-menu-item>
          <el-menu-item index="/product">产品中心</el-menu-item>
          <!-- <el-menu-item index="/case">经典案例</el-menu-item> -->
          <el-menu-item index="/science">科学支持</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <!-- <el-menu-item index="/join-us">加入我们</el-menu-item> -->
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer" v-show="isShow">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>走进BIAI</p>
              <span>发展历程</span>
              <span>企业文化</span>
              <span>荣誉证书</span>
              <span>合作伙伴</span>
            </li>
            <li>
              <p>新闻资讯</p>
              <span>公司新闻</span>
              <span>行业动态</span>
            </li>
            <li>
              <p>产品中心</p>
              <span>介绍视频</span>
              <span>管理模式</span>
              <span>平台目标</span>
              <span>功能模块</span>
            </li>
            <li>
              <p>联系我们</p>
              <span>邮箱:xtli@mit.edu && zxlin@biai123.net && xtli@biai123.net</span>
              <span>电话:18588272528</span>
              <span>微信: @BIAI2018</span>
              <span>脸书: @BIAI2018</span>
              <span>推特: @BIAI2018</span>
            </li>
          </ul>
          <img src="./assets/img/wx3.png" alt />
        </div>
        <div class="copyright">
          <span>biai版权所有</span>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #bababa;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin: 10px auto;
  //background-color: #fff;

  .logo {
    width: 200px;
    // padding: 20px;
    opacity: 0.8;
    img {
      width: 45%;
      line-height: 100px;
    }
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #000000;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #b9b9b9;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #000000;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
