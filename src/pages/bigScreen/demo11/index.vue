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
						<div class="dataCenter2 clear">
							<ul class="Data2"></ul>
						</div>
						<!-- 数据中心-开始 -->
						<div ref="guapai" class="guapai"></div>
						<!-- 产品挂牌实时监控-开始 -->
						<div class="yuyue">
							<div class="yuyuejiankong">
								<div id="left-top-right" class="bodyLeftTopGPZB">
									<div class="GPZB">
										<ul></ul>
										<p>今日交割<span></span></p>
									</div>
									<div class="GPZB">
										<ul></ul>
										<p>今日挂牌<span></span></p>
									</div>
									<div class="GPZB">
										<ul></ul>
										<p>今日冻结<span></span></p>
									</div>
								</div>
								<div id="left-top-right-circle" class="left-top-right-circle"></div>
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
									<li>
										<span>一月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>二月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>

									<li>
										<span>三月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>四月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>五月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>六月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>七月</span>
										<div>
											<p class="active"><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>八月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>九月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>十月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>十一月</span>
										<div>
											<p><i></i><span></span></p>
										</div>
									</li>
									<li>
										<span>十二月</span>
										<div>
											<p><i></i><span></span></p>
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
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import options from '@/pages/bigScreen/demo11/options/options'
import ScreenAdapter from '@/components/bigScreen/ScreenAdapter.vue';
import BgAnimate from '@/pages/bigScreen/demo11/components/BgAnimate.vue';

const guapai = ref()
const leftBottom = ref()

onMounted(() => {
    let echarts1 = echarts.init(guapai.value, null, { devicePixelRatio: 2 })
    echarts1.setOption(options.echarts1)

	let echarts2 = echarts.init(leftBottom.value, null, { devicePixelRatio: 2 })
    echarts2.setOption(options.echarts2)

	window.addEventListener("resize", function () {
        echarts1.resize()
		echarts2.resize()
    })
})

</script>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
