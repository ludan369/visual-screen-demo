<template>
    <screen-adapter :width="1920" :height="1080">
        <div class="main">
            <!-- 头部标题 -->
            <header-title title="大数据可视化系统数据分析通用模版"></header-title>
            <div class="mainbox">
                <ul class="clearstyle">
                    <li>
                        <box-content title="这是一个标题" style="height: 15%;">

                        </box-content>
                        <box-content title="这是一个标题" style="height:calc(43% - 20px);margin-top: 20px;">

                        </box-content>
                        <box-content style="height:calc(42% - 40px);margin-top: 20px;">

                        </box-content>
                    </li>
                    <li>
                        <box-content style="height: 20%;">

                        </box-content>
                        <box-content title="这是一个标题" style="height:calc(38% - 20px);margin-top: 20px;">

                        </box-content>
                        <box-content style="height:calc(42% - 40px);margin-top: 20px;">

                        </box-content>
                    </li>
                    <li>
                        <box-content style="height: 15%;">

                        </box-content>
                        <box-content style="height:calc(43% - 20px);margin-top: 20px;">

                        </box-content>
                        <box-content style="height:calc(42% - 40px);margin-top: 20px;">

                        </box-content>
                    </li>
                </ul>
            </div>
        </div>
    </screen-adapter>
</template>

<script setup lang="ts">
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import HeaderTitle from '@/pages/bigScreen/demo02/components/HeaderTitle.vue'
import BoxContent from '@/pages/bigScreen/demo02/components/BoxContent.vue'

</script>

<style lang="less" scoped>
.clearstyle {
    list-style: none;
}

.main {
    width: 1920px;
    height: 1080px;
    background-size: cover;
    font-family: "微软雅黑";
}

.mainbox {
    height: calc(100% - 80px);
    width: 100%;
    display: flex;
    /* 使用 Flexbox 布局 */
    justify-content: space-between;
    /* 在元素之间添加空间 */
}

.mainbox>ul {
    height: 100%;
    width: 100%;
    display: flex;
    /* 使用 Flexbox 布局 */
    padding: 0;
    /* 移除默认的内边距 */
    list-style: none;
    /* 移除默认的列表样式 */
    margin: 10px 10px;
    /* 在列表的上下左右两侧添加 10px 的外边距 */
}

.mainbox>ul>li {
    height: 100%;
    width: calc(33.33% - 20px);
    /* 减少宽度以适应间距 */
    box-sizing: border-box;
    /* 边框和内边距包含在宽度内 */
    margin: 0 10px;
    /* 在每个 li 元素的左右两侧添加 10px 的外边距 */
}
</style>
