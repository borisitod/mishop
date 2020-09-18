<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href target="_blank">个人主页</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain"> mishop.com All Rights Reserved. </span></div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";

.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;

  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;

    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }

  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }

  .copyright {
    .domain {
      color: $colorA;
    }
  }

}
</style>