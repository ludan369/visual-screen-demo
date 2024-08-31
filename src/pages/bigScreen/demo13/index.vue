<template>
    <div class="main">
        <HeaderTitle title="新能源汽车数量统计" fontSize="28px"></HeaderTitle>

        <div class="mainbox">
            <div class="left">
                <BoxContent02 title="各类型新能源汽车上牌数" style="height: 48%;"></BoxContent02>
                <BoxContent02 title="新能源汽车不同价格的占比" style="height: 48%;margin-top: 4%;"></BoxContent02>
            </div>

            <div class="center">
                <BoxContent02 title="用户评论" style="height: 48%; width: 49%;float: left;"></BoxContent02>
                <BoxContent02 title="" style="height: 48%; width: 49%;float: right;"></BoxContent02>
                <BoxContent02 title="各类别销售(上牌数)趋势" style="width: 100%;height: 48%;margin-top: 2%;float: right;"></BoxContent02>
            </div>

            <div class="right">
                <BoxContent02 title="新能源汽车销量前10" style="height: 48%;"></BoxContent02>
                <BoxContent02 title="新能源汽车销量后10" style="height: 48%;margin-top: 4%;"></BoxContent02>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderTitle from '@/pages/bigScreen/components/head/HeaderTitle.vue'
import BoxContent02 from '@/pages/bigScreen/components/box/BoxContent02.vue'

</script>

<style scoped>
@import url('./style/index.less');
</style>
