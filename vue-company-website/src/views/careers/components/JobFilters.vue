<template>
    <div>


        <div class="job-category-listing mb-50">
            <!-- single one -->
            <div class="row">
                <div class="col-12">
                    <div class="small-section-tittle2 mb-45">
                        <div class="ion"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="20px" height="12px">
                                <path fill-rule="evenodd" fill="rgb(27, 207, 107)"
                                    d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z">
                                </path>
                            </svg>
                        </div>
                        <h4>搜寻岗位</h4>
                    </div>
                </div>
            </div>
            <div class="single-listing">
                <!--  Select job items End-->
                <!-- select-Categories start -->
                <div id="jobtype" class="select-Categories">
                    <div class="small-section-tittle2">
                        <h4>职位类型</h4>
                    </div>
                    <label class="container">全职
                        <input type="checkbox" value="1" name="jobtype1" v-model="jobtype">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">兼职
                        <input type="checkbox" value="2" name="jobtype2" v-model="jobtype">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">实习
                        <input type="checkbox" value="3" name="jobtype3" v-model="jobtype">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">远程
                        <input type="checkbox" value="4" name="jobtyp4" v-model="jobtype">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <!-- select-Categories End -->
            </div>
            <!-- single two -->
            <div class="single-listing">
                <!-- select-Categories start -->
                <div class="select-Categories">
                    <div class="small-section-tittle2">
                        <h4>经验</h4>
                    </div>
                    <label class="container">1-2 年
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">2-3 年
                        <input type="checkbox" checked="checked active">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">3-6 年
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">6年及更多
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <!-- select-Categories End -->
            </div>
            <!-- single three -->
            <div class="single-listing">
                <!-- select-Categories start -->
                <div class="select-Categories pb-50">
                    <div class="small-section-tittle2">
                        <h4>发布于</h4>
                    </div>
                    <label class="container">任意时间
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">今天
                        <input type="checkbox" checked="checked active">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">昨天
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">前天
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">本周
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">本月
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <!-- select-Categories End -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

            selected: null,
            jobtype: ['1'],
            arrayOfObjects: ['puneeth', 'heam'],
            object: {
                name: 'Object Name',
            }
        }
    },
    methods: {
        shouldBeChecked(val) {
            return this.jobtype.includes(val)
        },
        methodToRunOnSelect(payload) {
            this.object = payload;
        },
        updateVals(e) {
            let isChecked = e.target.checked
            let val = e.target.value

            if (isChecked) {
                this.jobtype.push(val)
            } else {
                this.jobtype.splice(this.jobtype.indexOf(val), 1)
            }

        }
    }

};
</script>
<style lang="scss"></style>
