<template>
    <footer class="">
        <!-- Footer Start-->
        <div class="footer-main">
            <div class="footer-area footer-padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-4 col-sm-8">
                            <div class="single-footer-caption mb-30">
                                <!-- logo -->
                                <div class="footer-logo">
                                    <a href="index.html"><img src="@/assets/img/logo/logo2_footer.png" alt=""></a>
                                </div>
                                <div class="footer-tittle">
                                    <div class="footer-pera">
                                        <p class="info1">
                                            未经许可，任何人不得复制、转载、或以其他方式使用本网站的内容。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-5">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>快速链接</h4>
                                    <ul>
                                        <li><a href="#">关于我们</a></li>
                                        <li><a href="#">广告投放</a></li>
                                        <li><a href="#">版权与商务合作</a></li>
                                        <li><a href="#">联系方式</a></li>
                                        <li><a href="#">意见反馈</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-7">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>法律信息</h4>
                                    <ul>
                                        <li><a href="#">版权声明</a></li>
                                        <li><a href="#">用户协议</a></li>
                                        <li><a href="#">付费内容订阅协议</a></li>
                                        <li><a href="#">商品购买协议</a></li>
                                        <li><a href="#">隐私政策</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <mail-chip></mail-chip>
                        </div>
                    </div>

                    <div class="row row-grid align-items-center my-md">
                        <div class="col-lg-12 text-lg-center btn-wrapper">
                            <a target="_blank" rel="noopener" href="https://x.com/"
                                class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                                data-original-title="Follow us">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a target="_blank" rel="noopener" href="https://www.facebook.com/"
                                class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                                data-original-title="Like us">
                                <i class="fa fa-facebook-square"></i>
                            </a>
                            <a target="_blank" rel="noopener" href="https://github.com/"
                                class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                                data-original-title="Star on Github">
                                <i class="fa fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Copy-Right -->
                    <div class="row align-items-center">
                        <div class="col-xl-12 ">
                            <div class="footer-copy-right">
                                <p>
                                    ©{{ year }} xxx信息科技有限公司 版权所有
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End-->

    </footer>
</template>
<script>
import MailChip from "./components/MailChip";
export default {
    name: 'app-footer',
    data() {
        return {
            year: Date.UTC.year,
        }
    },
    components: {
        MailChip
    },
};
</script>
<style lang="scss"></style>
