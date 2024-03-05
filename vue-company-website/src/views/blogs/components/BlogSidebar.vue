<template>
    <div id="secondary" class="widget-area" role="complementary">


        <aside class="single_sidebar_widget popular_post_widget" id="recent-posts-2">
            <h3 class="widget_title">热门文章</h3>

            <div class="media post_item">


                <img src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873126-image1.png" alt="如何调试Node.js应用">

                <div class="media-body">
                    <a href="/article/2020/8/10/2/let-s-debug-a-node-js-application.html" title="如何调试Node.js应用">
                        <h3>如何调试Node.js应用</h3>
                    </a>
                    <p>调试应用程序时总会遇到挑战。 Node.js 的异步工作流程给这个艰巨的过程增加了额外的复杂性...</p>
                    <p class="mt-3">19 阅读</p>
                </div>
            </div>

            <div class="media post_item">


                <img src="https://heroku-blog-files.s3.amazonaws.com/posts/1594999218-cambly-02.jpg"
                    alt="How a Live Tutoring Platform Helps the Working World Get Ahead">

                <div class="media-body">
                    <a href="/article/2020/8/10/1/how-a-live-tutoring-platform-helps-the-working-world-get-ahead.html"
                        title="远程工作的机会和挑战">
                        <h3>远程工作的机会和挑战</h3>
                    </a>
                    <p>远程工作中我们经常面对各种问题，如何面对这些挑战并享受远程工作独有的优点成为...</p>
                    <p class="mt-3">5 阅读</p>
                </div>
            </div>
        </aside>

        <aside class="single_sidebar_widget popular_post_widget" id="recent-posts-2">
            <h3 class="widget_title">最新文章</h3>

            <div class="media post_item">


                <img src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873126-image1.png" alt="如何调试Node.js应用">

                <div class="media-body">
                    <a href="/article/2020/8/10/2/let-s-debug-a-node-js-application.html" title="如何调试Node.js应用">
                        <h3>如何调试Node.js应用</h3>
                    </a>
                    <p>调试应用程序时总会遇到挑战。 Node.js 的异步工作流程给这个艰巨的过程增加了额外的复杂性...</p>
                    <p class="mt-3">19 阅读</p>
                </div>
            </div>

            <div class="media post_item">


                <img src="https://heroku-blog-files.s3.amazonaws.com/posts/1594999218-cambly-02.jpg"
                    alt="How a Live Tutoring Platform Helps the Working World Get Ahead">

                <div class="media-body">
                    <a href="/article/2020/8/10/1/how-a-live-tutoring-platform-helps-the-working-world-get-ahead.html"
                        title="远程工作的机会和挑战">
                        <h3>远程工作的机会和挑战</h3>
                    </a>
                    <p>远程工作中我们经常面对各种问题，如何面对这些挑战并享受远程工作独有的优点成为...</p>
                    <p class="mt-3">5 阅读</p>
                </div>
            </div>
        </aside>

        <aside class="single_sidebar_widget tag_cloud_widget">
            <h4 class="widget_title">热门标签</h4>
            <ul class="list">


                <li>
                    <a href="/tag/develop.html" title="开发">开发 (1)</a>
                </li>

                <li>
                    <a href="/tag/remote.html" title="远程">远程 (1)</a>
                </li>

                <li>
                    <a href="/tag/hot.html" title="热门">热门 (2)</a>
                </li>

            </ul>
        </aside>

    </div>
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
<style>
.post_item img {
    width: 120px;
    height: 100px;
}
</style>
