<template>
    <section class="section section-lg">
        <div class="container">
            <div class="row justify-content-center text-center mb-lg">
                <div class="col-lg-8">
                    <h2 class="display-3">我们的团队</h2>
                    <p class="lead text-muted">在产品背后默默工作的优秀员工</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'/img/theme/team-1-800x800.jpg'"
                            class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">张三</span>
                                <small class="h6 text-muted">CTO</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="twitter" icon="fa fa-twitter" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="facebook" icon="fa fa-facebook" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="linkedin" icon="fa fa-linkedin" rounded
                                    icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'/img/theme/team-2-800x800.jpg'"
                            class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">李四</span>
                                <small class="h6 text-muted">市场总监</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="twitter" icon="fa fa-twitter" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="facebook" icon="fa fa-facebook" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="linkedin" icon="fa fa-linkedin" rounded
                                    icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'/img/theme/team-3-800x800.jpg'"
                            class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">王五</span>
                                <small class="h6 text-muted">UI设计师</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="twitter" icon="fa fa-twitter" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="facebook" icon="fa fa-facebook" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="linkedin" icon="fa fa-linkedin" rounded
                                    icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <div class="px-4">
                        <img v-lazy="'/img/theme/team-4-800x800.jpg'"
                            class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                        <div class="pt-4 text-center">
                            <h5 class="title">
                                <span class="d-block mb-1">赵六</span>
                                <small class="h6 text-muted">创始人兼CEO</small>
                            </h5>
                            <div class="mt-3">
                                <base-button tag="a" href="#" type="twitter" icon="fa fa-twitter" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="facebook" icon="fa fa-facebook" rounded
                                    icon-only></base-button>
                                <base-button tag="a" href="#" type="linkedin" icon="fa fa-linkedin" rounded
                                    icon-only></base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style></style>
