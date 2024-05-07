<template>
	<screen-adapter :width="3840" :height="2160">
		<div class="content">
			<!-- 底层背景动画-开始 -->
			<bg-animate></bg-animate>
			<!-- 底层背景动画-结束 -->

			<!-- 显示屏头部开始 -->
			<div id="head">
				<!-- 时间日期 -->
				<div class="getDate">
					<span id="time">09:00:00</span>
					<span id="week">星期一</span>
					<span id="year">2024-04-07</span>
				</div>
				<!-- 天气状况 -->
				<div class="weather">
					<span id="sky">多云</span>
					<span id="temperatur">20~17度</span>
					<span id="air">空气质量</span>
					<span id="state">优</span>
				</div>
				<!-- 大标题 -->
				<h1> 南方草牧商品交易所</h1>
			</div>
			<!-- 显示屏头部结束 -->

			<!-- 显示屏中间-开始-->
			<div id="body">
				<div class="bodyLeft rel">
					<div class="bodyLeftTop">
						<div class="childtitle">
							<h2>各区域产品挂牌数</h2>
						</div>
						<div class="add" onclick="Show(this,'bodyLeft',2.8,'before')">+</div>
						<!-- 数据中心-开始 -->
						<div class="dataCenter clear">
							<ul class="Data">
								<li v-for="(item, index) in DataCenter">
									<span>{{ item.num }}</span>
									<p>{{ item.name }}</p>
									<i></i>
								</li>
							</ul>
						</div>
						<!-- 数据中心-开始 -->
						<div ref="guapai" class="guapai"></div>
						<!-- 产品挂牌实时监控-开始 -->
						<div class="yuyue">
							<div class="yuyuejiankong">
								<div id="left-top-right" class="bodyLeftTopGPZB" ref="bodyLeftTopGPZB">
									<div v-for="(data, index) in gpzbData" :key="index" class="GPZB">
										<ul>
											<li v-for="n in 10" :key="n"
												:style="{ background: getBackground(index, n) }"></li>
										</ul>
										<p>{{ data.label }}<span>{{ data.value }}</span></p>
									</div>
								</div>
								<div ref="leftTopRightCircle" class="left-top-right-circle"></div>
							</div>
						</div>
						<!-- 产品挂牌实时监控-结束 -->
					</div>
					<div class="bodyLeftBottom rel">
						<div class="add" onclick="Show(this,'bodyLeft',2.8,'after')">+</div>
						<div class="bodyLeftBottomLeft">
							<div class="childtitle">
								<h2>当前成交总量</h2>
							</div>
							<div ref="leftBottom" class="left-bottom"></div>
						</div>
						<!-- 月成交量-开始 -->
						<div class="bodyLeftBottomRight rel">
							<div class="childtitle">
								<h2>月成交总量</h2>
							</div>
							<div class="t-right">
								<ul id="cp">
									<li class="line"></li>
									<li v-for="(data, index) in mothnumber" :key=index>
										<span>{{index+1}}月</span>
										<div>
											<p :style="{ width: getMonthWidth(data) }">
												<i :style="{ width: getMonthWidth(data) }"></i>
												<span>{{ data }}</span>
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</screen-adapter>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import * as echarts from "echarts"
import { options, echarts3 as optionsForE3 } from '@/pages/bigScreen/demo11/options/options'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue';
import { DataCenter, echartdata } from '@/pages/bigScreen/demo11/options/data.js'
import BgAnimate from '@/pages/bigScreen/demo11/components/BgAnimate.vue';

let gpzbData = reactive([
	{ label: '今日交割', value: 515, activeIndex: 0 },
	{ label: '今日挂牌', value: 300, activeIndex: 0 },
	{ label: '今日冻结', value: 200, activeIndex: 0 }
])
function animateHighlights() {
	setInterval(() => {
		gpzbData.forEach((item: any, index: any) => {
			item.activeIndex++;
			if (item.activeIndex > Math.floor(item.value / 100)) {
				item.activeIndex = 0;
			}
		});
	}, 300);
}

function getBackground(index: number, n: number) {
	const data = gpzbData[index];
	const highlight = data.activeIndex === n;
	const active = n <= Math.floor(data.value / 100);
	if (highlight) return '#FBED14';
	return active ? '#00A0E9' : '#1D2088';
}

// 月成交量滚动
let mothnumber = [4536, 2030, 4872, 4931, 4980, 4500, 7036, 3030, 2872, 3931, 1980, 4530];
function getMonthWidth(value: number) {
	if (value > 5000) {
		value = 5000
	}
	return 450 * (value / 5000) + "px"
}

function animateMonth() {

}

const guapai = ref()
const leftBottom = ref()
const leftTopRightCircle = ref()

onMounted(() => {
	// 滚动-各区域产品挂牌数
	animateHighlights()

	// echarts--start
	let echarts1 = echarts.init(guapai.value, null, { devicePixelRatio: 1 })
	echarts1.setOption(options.echarts1)

	let echarts2 = echarts.init(leftBottom.value, null, { devicePixelRatio: 1 })
	echarts2.setOption(options.echarts2)

	let echarts3 = echarts.init(leftTopRightCircle.value, null, { devicePixelRatio: 1 })
	let e3ops = optionsForE3(echartdata)
	echarts3.setOption(e3ops)

	window.addEventListener("resize", function () {
		echarts1.resize()
		echarts2.resize()
		echarts3.resize()
	})
	// echarts--end


})

</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
