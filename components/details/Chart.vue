<template>
  <section id="coin-chart" class="w-full" />
</template>

<script>
import { TAB_ALL, TAB_1Y, TAB_3M, TAB_1M, TAB_7D, TAB_1D } from '@/utils/constants'
import { createChart } from 'lightweight-charts'
import { subtractDays } from '@/utils'

export default {
  props: {
    asset: {
      type: Object,
      required: true
    },
    tab: {
      type: String,
      default: TAB_ALL
    }
  },
  data () {
    const chartOptions = {
      priceScale: {
        position: 'left',
        mode: 1
      },
      layout: {
        backgroundColor: '#fff',
        lineColor: '#2B2B43',
        textColor: '#D9D9D9'
      },
      watermark: {
        color: '#2d68ed'
      },
      crosshair: {
        vertLine: {
          color: '#2d68ed',
          width: 0.5,
          style: 1,
          visible: true,
          labelVisible: false
        },
        horzLine: {
          color: '#2d68ed',
          width: 0.5,
          style: 0,
          visible: true,
          labelVisible: true
        },
        mode: 1
      },
      grid: {
        vertLines: {
          color: '#fcfcfc'
        },
        horzLines: {
          color: '#fcfcfc'
        }
      }
    }
    const seriesOptions = {
      topColor: '#2d68ed',
      bottomColor: 'rgb(32 100 226 / 4%)',
      lineColor: '#2d68ed'
    }
    return {
      history: [],
      areaSeries: {},
      themesData: {
        lightTheme: {
          chart: {
            ...chartOptions,
            layout: {
              backgroundColor: '#f6f6f6',
              lineColor: '#2B2B43',
              textColor: '#D9D9D9'
            },
            grid: {
              vertLines: { color: '#fcfcfc' },
              horzLines: { color: '#fcfcfc' }
            }
          },
          series: seriesOptions
        },
        darkTheme: {
          chart: {
            ...chartOptions,
            layout: {
              backgroundColor: '#2B2B43',
              lineColor: '#2B2B43',
              textColor: '#D9D9D9'
            },
            grid: {
              vertLines: { color: '#2B2B43' },
              horzLines: { color: '#363C4E' }
            }
          },
          series: seriesOptions
        }
      }
    }
  },
  async fetch () {
    this.history = await this.$store.dispatch('actionGetHistoryById', { id: this.asset.id })
    this.printChart()
  },
  watch: {

    'tab' (newVal, oldVal) {
      if (oldVal) {
        this.filterHistoryByTab(newVal)
      }
    },

    '$store.getters.getTheme' (newVal) {
      this.chart.applyOptions(this.themesData[`${newVal}Theme`].chart)
    },

    '$store.getters.getCurrency' () {
      if (this.chart) {
        this.chart.remove()
        this.printChart()
      }
    }
  },
  methods: {

    printChart () {
      this.chart = createChart(document.getElementById('coin-chart'), {
        width: 700,
        height: 500,
        rightPriceScale: {
          borderVisible: false
        },
        timeScale: {
          borderVisible: false
        },
        localization: {
          locale: 'en-US',
          dateFormat: 'dd/MM/yyyy'
        }
      })
      this.areaSeries = this.chart.addAreaSeries({
        priceScaleId: 'left',
        lineWidth: 3
      })

      this.history.forEach((item) => {
        item.value = item.valuePerCurrency[this.$store.getters.getCurrency]
      })
      this.chart.applyOptions(this.themesData[`${this.$store.getters.getTheme}Theme`].chart)
      this.areaSeries.applyOptions(this.themesData[`${this.$store.getters.getTheme}Theme`].series)
      this.areaSeries.setData(this.history)
      this.filterHistoryByTab(this.tab)
    },

    removeSeries () {
      this.chart.removeSeries()
    },

    filterHistoryByTab (tab) {
      const methodsByTag = {
        [TAB_ALL]: () => this.areaSeries.setData(this.history),
        [TAB_1Y]: () => this.areaSeries.setData(this.calculateVisibleRange({ years: 1 })),
        [TAB_3M]: () => this.areaSeries.setData(this.calculateVisibleRange({ months: 3 })),
        [TAB_1M]: () => this.areaSeries.setData(this.calculateVisibleRange({ months: 1 })),
        [TAB_7D]: () => this.areaSeries.setData(this.calculateVisibleRange({ days: 6 })),
        [TAB_1D]: () => this.areaSeries.setData(this.calculateVisibleRange())
      }
      methodsByTag[tab]()
      this.chart.timeScale().fitContent()
    },

    calculateVisibleRange (object = {}) {
      const currentDate = new Date()
      return this.history.filter((item) => {
        return subtractDays(currentDate, object).getTime() - new Date(item.time.year, item.time.month - 1, item.time.day + 1).getTime() <= 0
      })
    }
  },
  fetchOnServer: false
}
</script>

<style scoped>
    section {
        margin-top: 2rem;
    }
</style>
