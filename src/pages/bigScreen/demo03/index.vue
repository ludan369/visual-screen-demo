<template>
    <div style="height: 100vh;">
        <div style="background-color: aliceblue;height: 80px;">
            head
        </div>
        <div
            style="height: calc(100vh - 110px); padding: 15px; display: flex; flex-wrap: wrap; justify-content: space-between;">
            <div class="box" style="background-color: blanchedalmond; width: calc(30% - 15px); height: 42%;">
                1
            </div>
            <div class="box" style="background-color: blanchedalmond; width: calc(40% - 15px); height: 42%;">
                2
            </div>
            <div class="box" style="background-color: blanchedalmond; width: calc(30%); height: 42%;">
                3
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.box {}
</style>
