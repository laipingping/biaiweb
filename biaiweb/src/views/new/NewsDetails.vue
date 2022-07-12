<template>
  <div class="news-detail">
    <banner img="" title="新闻详情" />
    <div class="news-detail-section">
      <ul>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
        <li>新闻详情</li>
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

.news-detail {
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