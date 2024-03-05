<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">时刻保持更新</h1>
                    <p class="lead text-white mt-4">
                        紧盯全球金融市场，覆盖股市、外汇、债券、大宗商品等，7*24不间断为投资者提供资讯服务。首创重要信息“实时”模式，通过App、网站、微信公众号和微博为投资者提供专业、快速的财经信息服务。</p>
                    <a href="#" class="btn btn-white mt-4">了解更多</a>
                </div>
                <div class="col-lg-4 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1" controls>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="/img/gallery/App1.png"></b-carousel-slide>
                            <b-carousel-slide img-src="/img/gallery/App2.png"></b-carousel-slide>
                            <b-carousel-slide img-src="/img/gallery/App3.png"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
    components: {
        BCarousel,
        BCarouselSlide
    }
};
</script>
<style></style>
