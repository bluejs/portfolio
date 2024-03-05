<template>
  <div>
    <main-slider></main-slider>
    <features></features>
    <pricing-area></pricing-area>
    <pricing-card></pricing-card>
    <customer-support></customer-support>
    <amazing-team></amazing-team>
    <carousel></carousel>
    <say-hello-area></say-hello-area>
  </div>
</template>
<script>

import MainSlider from "./components/MainSlider";
import Features from "./components/Features";
import PricingCard from "./components/PricingCard";
import PricingArea from "./components/PricingArea";
import CustomerSupport from "./components/CustomerSupport";
import AmazingTeam from "./components/AmazingTeam";
import Carousel from "./components/Carousel";
import SayHelloArea from "./components/SayHelloArea";
export default {
  name: "components",
  components: {
    MainSlider,
    Features,
    PricingArea,
    PricingCard,
    CustomerSupport,
    AmazingTeam,
    Carousel,
    SayHelloArea,
  },
  metaInfo() {
    return {
      title: "Epiloge - Build your network in your field of interest",
      meta: [
        { name: 'description', content: '我们的愿景是帮助人们分享他们的知识、工作、项目、论文和想法，并通过他们所做的事情而不是他们生活、学习或工作的地方建立他们的网络。' },
        { property: 'og:title', content: "在您感兴趣的领域建立您的网络" },
        { property: 'og:site_name', content: '作品网站' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
        { name: 'twitter:card', value: 'test' },
        { name: 'twitter:site', value: '@test' },
        { property: "og:url", content: "https://abc.com" },
        { name: "referrer", content: "no-referrer" }

      ]
    }
  },
};
</script>
<style></style>