<template>
    <div class="paim">
        <ul>
            <li>
                <span>{{ index }}</span>
                <div class="pmnav">
                    <p style="margin-left: 10px;">{{ title }}</p>
                    <div class="pmbar"><span style="width:80%;margin-left: 10px;"></span><i>{{ num }}</i></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['index','title','num'])
</script>

<style scoped>

.paim li{display: flex; align-items: center; }
.paim li>span{width: 38px; height: 33px; text-align: center; background: #878787; border-radius: 2px;  font-size: 23px;}
.paim li:nth-child(1)>span{ background: #ed405d}
.paim li:nth-child(2)>span{background: #f78c44}
.paim li:nth-child(3)>span{background: #49bcf7}

.paim ul {height: 100%;list-style: none;margin: 15px;}

.paim ul li {padding: 5px;}

.pmbar span{ background: linear-gradient(to right,#14b6ff,#9cefff); display: inline-block; vertical-align: middle; height: 10px; border-radius: 10px;}
.pmbar i{ line-height: 5px; font-style: normal; padding-left: 5px; color: #49bcf7}
.pmnav{width:100%;}
.pmnav p{color: #fff; opacity: .6; font-size: 15px; white-space: nowrap; }
</style>
