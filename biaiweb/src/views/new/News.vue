<template>
  <div class="news">
    <banner img="" title="BIAI资讯" />
    <div class="news-section">
      <ul>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
        <li>新闻资讯</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.news {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  overflow: hidden;

  &-section {
    width: 1240px;
    min-height: 1000px;
    margin: 0 auto;
    background-color: #fff;
  }
}
</style>