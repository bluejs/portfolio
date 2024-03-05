<template>
    <div>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="/img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5 bg-gradient-primary text-white" size="lg"
                                type="warning" shadow rounded></icon>
                            <h3>我们的特色</h3>
                            <p>三个预构建的页面，可帮助您更快地开始使用。 您可以更改文本和图像，然后就可以开始了。</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3 bg-gradient-success text-white"
                                            icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">精心制作的组件</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="warning" circle class="mr-3 bg-gradient-warning text-white"
                                            icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">惊人的演示页面</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="primary" circle class="mr-3 bg-gradient-primary text-white"
                                            icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">友好的支持团队</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <amazing-team></amazing-team>
        <image-gallery></image-gallery>
    </div>
</template>
<script>

import AmazingTeam from "./components/AmazingTeam";
import ImageGallery from "./components/ImageGallery";

export default {
    name: "about-page",
    components: {
        AmazingTeam,
        ImageGallery
    }
};
</script>
