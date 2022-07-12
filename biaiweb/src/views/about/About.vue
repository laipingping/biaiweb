<template>
  <div class="about">
    <banner img="" title="关于我们" />
    <div class="about-section">
      <!-- <img src="../../assets/img/appDown.jpg" alt=""> -->
      <div class="about-section-none">
        <el-empty :image-size="200"></el-empty>
      </div>
      
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

.about {
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  overflow: hidden;

  &-section {
    width: 1240px;
    // min-height: 500px;
    margin: 0 auto;
    background-color: #fff;

    &-none {
      margin: 180px 0;
    }
  }
}
</style>