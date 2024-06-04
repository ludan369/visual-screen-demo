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
					<span id="time">{{ time }}</span>
					<span id="week">{{ week }}</span>
					<span id="year">{{ year }}</span>
				</div>
				<!-- 天气状况 -->
				<div class="weather">
					<span id="sky">多云</span>
					<span id="temperatur">20~17度</span>
					<span id="air">空气质量</span>
					<span id="state">优</span>
				</div>
				<!-- 大标题 -->
				<h1>南方草牧商品交易所</h1>
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
						<!-- 数据中心-结束 -->
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
										<span>{{ index + 1 }}月</span>
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

				<div class="bodyMiddle rel">
					<div class="bodyMiddleChild">
						<div class="add" onclick="Show(this,'bodyMiddle',1.8,'after')">+</div>
						<div class="childtitle">
							<h2>牧草产能区域分布</h2>
						</div>
						<div class="navbar">
							<span @click="changeMap(1)" :class="{ active: activeTab === 1 }">全国分布</span>
							<span @click="changeMap(2)" :class="{ active: activeTab === 2 }">贵州区域</span>
							<span @click="changeMap(3)" :class="{ active: activeTab === 3 }">大盘走势</span>
						</div>
						<!-- 分布区域-开始 -->
						<div class="mapmain">
							<!-- 牧草产能区域分布数据-开始 -->
							<div>
								<ul id="list">
									<li v-for="(item, index) in ChanNeng" :key="index">
										<p>{{ item.name }}</p>
										<span>{{ item.num }}</span>
									</li>
								</ul>
							</div>
							<!-- 牧草产能区域分布数据-开始 -->
							<!-- 中国地图-开始 -->
							<div class="map" ref="map" v-show="activeTab === 1"></div>
							<!-- 中国地图-结束 -->
							<!-- 贵州地图-开始 -->
							<div class="map" ref="map1" v-show="activeTab === 2"></div>
							<!-- 贵州地图-结束 -->
							<!-- 大盘走势-开始 -->
							<div class="map" ref="map2" v-show="activeTab === 3"></div>
							<!-- 大盘走势-结束 -->
						</div>
						<!-- 分布区域-结束 -->
						<!-- 地图下面亮光动画-开始 -->
						<div id="sun"></div>
						<!-- 地图下面亮光动画-结束 -->
					</div>
				</div>

				<div class="bodyRight">
					<!-- 成交量实时动态滚动-开始 -->
					<div class="bodyRightTop rel">
						<div class="childtitle">
							<h2>成交订单实时动态</h2>
						</div>
						<div class="navbar">
							<span @click="changeCJStatus(0)" :class="{ active: CJStatusIndex === 0 }">草牧板块</span>
							<span @click="changeCJStatus(1)" :class="{ active: CJStatusIndex === 1 }">猪板块</span>
							<span @click="changeCJStatus(2)" :class="{ active: CJStatusIndex === 2 }">牛板块</span>
							<span @click="changeCJStatus(3)" :class="{ active: CJStatusIndex === 3 }">羊板块</span>
						</div>
						<div class="add" onclick="Show(this,'bodyRight',2.8,'atusIndexbefore')">+</div>
						<div class="bodyRightTopBG">
							<div class="default">
								<span class="num">成交订单号</span>
								<span class="name">产品名称</span>
								<span class="time">数量</span>
								<span class="status">估重/规格</span>
								<span>成交时间</span>
								<span>订单状态</span>
							</div>
							<!-- 成交订单数据-开始 -->
							<div class="liushuihaoul clear">
								<ul class="moveul">
									<vue3-seamless-scroll :list="CJstatus[CJStatusIndex]" class="scroll" :step="0.5">
										<li class="item" v-for="(item, index) in CJstatus[CJStatusIndex]">
											<span>{{ item.num }}</span>
											<span>{{ item.name }}</span>
											<span>{{ item.cont }}</span>
											<span>{{ item.weight }}</span>
											<span>{{ item.time }}</span>
											<span>{{ item.state }}</span>
										</li>
									</vue3-seamless-scroll>
								</ul>
							</div>
							<!-- 成交订单数据-结束 -->
							<!-- 下方消息提示滚动-开始 -->
							<div class="call">
								<ul class="moveul">
									<li v-for="(item, index) in callMsg">
										<i></i>
										<span>{{ item }}</span>
									</li>
								</ul>
							</div>
							<!-- 下方消息提示滚动-结束 -->
						</div>
					</div>
					<!-- 成交量实时动态滚动-结束 -->

					<!-- 挂牌产品价格动态折线图-开始 -->
					<div class="bodyRightBottom rel">
						<div class="childtitle">
							<h2>挂牌产品价格动态</h2>
						</div>
						<div class="add" onclick="Show(this,'bodyRight',2.8,'after')">+</div>
						<div id="jiagezoushi" ref="jiagezoushi"></div>
					</div>
					<!-- 挂牌产品价格动态折线图-结束 -->
				</div>
			</div>
			<!-- 显示屏中间-结束 -->

			<!-- 显示屏底部-开始-->
			<div id="foot">
				<!-- 挂牌会员实时监控-开始 -->
				<div class="footparent0">
					<div class="footChild">
						<div class="childtitle">
							<h2>挂牌会员实时监控</h2>
						</div>
						<div class="add" onclick="Show(this,'footparent0',2.8,'after')">+</div>
						<!-- 今日入驻申请会员数量-开始 -->
						<div class="huiYuanLst">
							<div class="yibiao" id="yibiao1" ref="yibiao1"></div>
							<div class="huiyuan">
								<ul class="fangkuai">
									<li v-for="i in 13" :key="i" :style="{ background: getBackgroundVip(0, i) }">

									</li>
								</ul>
								<span>{{ vipData[0].value }}</span>
								<p>今日入驻申请会员数量</p>
							</div>
						</div>
						<!-- 今日入驻申请会员数量-结束 -->

						<!-- 入驻动态-开始 -->
						<div class="huiYuanLst">
							<span class="ruzhustatus">(入驻动态)</span>
							<div class="contgundong">
								<ul class="moveul">
									<vue3-seamless-scroll :list="RZstatus" class="scroll" :step="0.5">
										<li v-for="(item, index) in RZstatus" :key="index">
											<i></i>
											<span>{{ RZstatus[index] }}</span>
										</li>
									</vue3-seamless-scroll>
								</ul>
							</div>
						</div>
						<!-- 入驻动态-结束 -->

						<!-- 今日申请实名会员数量-开始 -->
						<div class="huiYuanLst huiYuanLst3">
							<div class="yibiao" id="yibiao2" ref="yibiao2"></div>
							<div class="huiyuan">
								<ul class="fangkuai">
									<li v-for="i in 13" :key="i" :style="{ background: getBackgroundVip(1, i) }">

									</li>
								</ul>
								<span>{{ vipData[1].value }}</span>
								<p>今日申请实名会员数量</p>
							</div>
						</div>
						<!-- 今日申请实名会员数量-结束 -->

						<!-- 今日通过实名认证会员数量-开始 -->
						<div class="huiYuanLst">
							<div class="yibiao" id="yibiao3" ref="yibiao3"></div>
							<div class="huiyuan">
								<ul class="fangkuai">
									<li v-for="i in 13" :key="i" :style="{ background: getBackgroundVip(2, i) }">

									</li>
								</ul>
								<span>{{ vipData[2].value }}</span>
								<p>今日通过实名认证申请会员数量</p>
							</div>
						</div>
						<!-- 今日通过实名认证会员数量-结束 -->
					</div>
				</div>
				<!-- 挂牌会员实时监控-结束 -->

				<!-- 北海市猪链网动态-开始 -->
				<div class="footparent1">
					<div class="footChild">
						<div class="childtitle">
							<h2>北海市猪链网动态</h2>
						</div>
						<div class="add" onclick="Show(this,'footparent1',2.8,'after')">+</div>
						<div id="jiage" ref="jiage"></div>
					</div>
				</div>
				<!-- 北海市猪链网动态-结束 -->

				<!-- 交易大厅实时监控-开始 -->
				<div class="footparent2">
					<div class="footChild">
						<div class="childtitle">
							<h2>交易大厅实时监控</h2>
						</div>
						<div class="add" onclick="Show(this,'footparent2',2.8,'after')">+</div>
						<!-- 各板块成交量格子动画-开始 -->
						<div class="chengjiaoliang">
							<div class="CJL clear">
								<p></p>
								<span>草木板块成交量</span>
								<ul class="fangkuai">
									<li v-for="i in 13" :key="i" :style="{ background: getBackgroundTrade(0, 13 - i) }">

									</li>
								</ul>
							</div>
							<div class="CJL clear">
								<p></p>
								<span>猪联网成交量</span>
								<ul class="fangkuai">
									<li v-for="i in 13" :key="i" :style="{ background: getBackgroundTrade(1, 13 - i) }">

									</li>
								</ul>
							</div>
							<div class="CJL clear">
								<p></p>
								<span>牛联网成交量</span>
								<ul class="fangkuai">
									<li v-for="i in 13" :key="i" :style="{ background: getBackgroundTrade(2, 13 - i) }">

									</li>
								</ul>
							</div>
							<div class="CJL clear">
								<p></p>
								<span>羊联网成交量</span>
								<ul class="fangkuai">
									<li v-for="i in 13" :key="i" :style="{ background: getBackgroundTrade(3, 13 - i) }">

									</li>
								</ul>
							</div>
						</div>
						<!-- 各板块成交量格子动画-结束 -->
						<div id="CJpie" ref="CJpie"></div>
					</div>
				</div>
				<!-- 交易大厅实时监控-结束 -->
				<!-- 成交量实时监控-开始 -->
				<div class="footparent3">
					<div class="footChild">
						<div class="childtitle">
							<h2>成交量实时监控</h2>
						</div>
						<div class="add" onclick="Show(this,'footparent3',2.8,'after')">+</div>
						<!-- 平均成交时间刻度轴-开始 -->
						<div id="timebar">
							<span id="pjtime">平均单笔成交时间：{{ averageTime }} s</span>
							<ul class="kedu clear"></ul>
							<div class="kuang">
								<div class="tianchong" :style="{ width: fillingWidth + 'px' }"></div>
							</div>
						</div>
						<!-- 平均成交时间刻度轴-开始 -->
						<div id="cjliang" ref="cjliang"></div>
					</div>
				</div>
				<!-- 成交量实时监控-结束 -->
			</div>
			<!-- 显示屏底部-结束-->
		</div>
	</screen-adapter>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, nextTick, onUnmounted } from 'vue'
import * as echarts from "echarts"
import { options, echarts3 as optionsForE3, mapCharts, 
	echarts6 as optionsForE6, 
	echarts9 as optionsForE9, 
	echarts2 as optionsForE2,
	echarts8 as optionsForE8 } from '@/pages/bigScreen/demo11/options/options'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue'
import { DataCenter, echartdata, ChanNeng, ChinaData, GuiZhouData, CJstatus, callMsg, RZstatus } from '@/pages/bigScreen/demo11/options/data.js'
import BgAnimate from '@/pages/bigScreen/demo11/components/BgAnimate.vue'
import China from '@/pages/chartsModules/json/China.json'
import GUIZHOU from '@/pages/chartsModules/json/520000/520000.json'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll"

// 生成随机数据
function generateRandomData(num: number, random: number) {
	return Array.from({ length: num }, () => Math.round(Math.random() * random));
}

// 头部时间日期-开始
let time = ref('');
let week = ref('');
let year = ref('');
let weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
function updateTime() {
	const now = new Date();
	time.value = now.toTimeString().split(' ')[0];
	week.value = weekDays[now.getDay()];
	year.value = now.getFullYear() + '';
}
// 头部时间日期-结束

// 产品挂牌实时监控方块-开始
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
// 产品挂牌实时监控方块-结束

// 月成交量动效-开始
let mothnumber = [4536, 2030, 4872, 4931, 4980, 4500, 7036, 3030, 2872, 3931, 1980, 4530];
function getMonthWidth(value: number) {
	if (value > 5000) {
		value = 5000
	}
	return 450 * (value / 5000) + "px"
}
// 月成交量动效-结束

// 挂牌会员实时监控方块-开始
let vipData = reactive([
	{ label: '入驻', value: 268, activeIndex: 0 },
	{ label: '通过', value: 155, activeIndex: 0 },
	{ label: '申请三项数量', value: 200, activeIndex: 0 }
]);
function getGenerateData() {
	vipData[0].value = generateRandomData(1,500)[0]
	vipData[1].value = generateRandomData(1,500)[0]
	vipData[2].value = generateRandomData(1,500)[0]
}
function getBackgroundVip(index: number, n: number) {
	const data = vipData[index];
	const highlight = data.activeIndex === n;
	const active = n <= Math.floor(data.value / 25);
	if (highlight) return '#FBED14';
	return active ? '#00A0E9' : '#1D2088';
}
function animateHighlightsVip() {
	setInterval(() => {
		vipData.forEach((item: any, index: any) => {
			item.activeIndex++;
			if (item.activeIndex > Math.floor(item.value / 25)) {
				item.activeIndex = 0;
			}
		});
	}, 300);
}
// 挂牌会员实时监控方块-结束

// 交易大厅实时监控方块-开始
let tradeData = reactive([
	{ label: '草木板块成交量', value: 268, activeIndex: 0 },
	{ label: '猪联网成交量', value: 155, activeIndex: 0 },
	{ label: '牛联网成交量', value: 200, activeIndex: 0 },
	{ label: '羊联网成交量', value: 189, activeIndex: 0 }

]);
function getBackgroundTrade(index: number, n: number) {
	const data = tradeData[index];
	const highlight = data.activeIndex === n;
	const active = n <= Math.floor(data.value / 25);
	if (highlight) return '#FBED14';
	return active ? '#00A0E9' : '#1D2088';
}
function animateHighlightsTrade() {
	setInterval(() => {
		tradeData.forEach((item, index) => {
			item.activeIndex++;
			if (item.activeIndex > Math.floor(item.value / 25)) {
				item.activeIndex = 0;
			}
		});
	}, 300);
}
// 交易大厅实时监控方块-结束

// 平均成交时间刻度轴-开始
const averageTime = ref(0);
const fillingWidth = ref(0);
// 生成填充宽度和更新平均成交时间的函数
function updateTradingInfo() {
	const W = Math.round(Math.random() * 10) * 78;
	const H = W / 13
	fillingWidth.value = W;
	averageTime.value = H;
}
// 平均成交时间刻度轴-结束

// 地图切换变化-开始
let activeTab = ref(1)
const map = ref()
const map1 = ref()
const map2 = ref()
let mapInitialized = reactive([false, false, false])
function changeMap(index: number) {
	activeTab.value = index;
}
// 仅当地图第一次变为可见时初始化
function initMap(index: number) {
	if (!mapInitialized[index]) {
		mapInitialized[index] = true;
		let myChart: any;
		if (index === 0) { // 中国地图
			myChart = echarts.init(map.value);
			// @ts-ignore
			echarts.registerMap('China', China)
			myChart.setOption(mapCharts('China', ChinaData))
		} else if (index === 1) { // 贵州地图
			myChart = echarts.init(map1.value);
			// @ts-ignore
			echarts.registerMap('guizhou', GUIZHOU)
			myChart.setOption(mapCharts('guizhou', GuiZhouData))
		} else if (index === 2) { // 走势图
			myChart = echarts.init(map2.value);
			myChart.setOption(options.echarts4)
		}
		// 监听窗口大小变化
		window.addEventListener('resize', () => {
			myChart.resize();
		});
	}
}
watch(activeTab, (newVal, oldVal) => {
	if (newVal !== oldVal) {
		nextTick(() => {
			initMap(newVal - 1);  // 保证 DOM 更新完成后初始化地图
		});
	}
})
// 地图切换变化-结束

// 图表信息
const guapai = ref()
const leftBottom = ref()
const leftTopRightCircle = ref()
const jiagezoushi = ref()
const yibiao1 = ref()
const yibiao2 = ref()
const yibiao3 = ref()
const jiage = ref()
const CJpie = ref()
const cjliang = ref()

const echarts11 = ref();
const echarts2 = ref()
const echarts10 = ref()
const echarts6 = ref()
const echarts7 = ref()
const echarts8 = ref()

let CJStatusIndex = ref(0)
function changeCJStatus(index: number) {
	CJStatusIndex.value = index
}

onMounted(() => {
	// 头部时间信息-开始
	updateTime();
	setInterval(updateTime, 1000)
	// 头部时间信息-结束

	// 初始化为中国地图
	initMap(0)

	// 滚动-各区域产品挂牌数
	animateHighlights()

	// 滚动-VIP处
	animateHighlightsVip()

	// 滚动-交易量
	animateHighlightsTrade()

	// 平均成交时间
	updateTradingInfo();
	setInterval(updateTradingInfo, 1000)

	// 
	setInterval(getGenerateData,3000)

	// echarts--start
	let echarts1 = echarts.init(guapai.value, null, { devicePixelRatio: 1 })
	echarts1.setOption(options.echarts1)

	echarts2.value = echarts.init(leftBottom.value, null, { devicePixelRatio: 1 })
	// init
	echarts2.value.setOption(optionsForE2(generateRandomData(4,600)));
	setInterval(() => {
		let e2ops = optionsForE2(generateRandomData(4,600))
		echarts2.value.setOption(e2ops);
	}, 2000);

	let echarts3 = echarts.init(leftTopRightCircle.value, null, { devicePixelRatio: 1 })
	let e3ops = optionsForE3(echartdata)
	echarts3.setOption(e3ops)

	let echarts5 = echarts.init(jiagezoushi.value, null, { devicePixelRatio: 1 })
	echarts5.setOption(options.echarts5)

	echarts6.value = echarts.init(yibiao1.value, null, { devicePixelRatio: 1 })
	// init
	echarts6.value.setOption(optionsForE6('今日入驻', generateRandomData(1,500)[0]))
	setInterval(() => {
		let e6ops = optionsForE6('今日入驻', vipData[0].value)
		echarts6.value.setOption(e6ops)
	}, 3000);
	
	echarts7.value = echarts.init(yibiao2.value, null, { devicePixelRatio: 1 })
	// init
	echarts7.value.setOption(optionsForE6('今日入驻', generateRandomData(1,500)[0]))
	setInterval(() => {
		let e7ops = optionsForE6('今日入驻', vipData[1].value)
		echarts7.value.setOption(e7ops)
	}, 3000);

	echarts8.value = echarts.init(yibiao3.value, null, { devicePixelRatio: 1 })
	// init
	echarts8.value.setOption(optionsForE6('今日入驻', generateRandomData(1,500)[0]))
	setInterval(() => {
		let e8ops = optionsForE6('今日入驻', vipData[2].value)
		echarts8.value.setOption(e8ops)
	}, 3000);

	let echarts9 = echarts.init(jiage.value, null, { devicePixelRatio: 1 })
	echarts9.setOption(options.echarts7)

	echarts10.value = echarts.init(CJpie.value, null, { devicePixelRatio: 1 })
	// init
	echarts10.value.setOption(optionsForE8(generateRandomData(4,600)));
	setInterval(() => {
		let e8ops = optionsForE8(generateRandomData(4,600))
		echarts10.value.setOption(e8ops);
	}, 2000);

	echarts11.value = echarts.init(cjliang.value, null, { devicePixelRatio: 1 })
	// init
	echarts11.value.setOption(optionsForE9(generateRandomData(7,1000)));
	setInterval(() => {
		const data = generateRandomData(7,1000);
		const e9options = optionsForE9(data);
		echarts11.value.setOption(e9options);
	}, 2000);

	window.addEventListener("resize", function () {
		echarts1.resize()
		echarts2.value.resize()
		echarts3.resize()
		echarts5.resize()
		echarts6.value.resize()
		echarts7.value.resize()
		echarts8.value.resize()
		echarts9.resize()
		echarts10.value.resize()
		echarts11.value.resize()
	})
	// echarts--end
})

onUnmounted(() => {

})
</script>

<style lang="less" scoped>
@import url('./style/index.less');

.scroll {
	height: 100%;
	width: 100%;
	overflow: hidden;
}

.scroll .item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3px 0;
}
</style>
