<template>
  <section id="coin-chart" />
</template>

<script>
import { createChart } from 'lightweight-charts'
import { getAssetHistoryById } from '@/api'
import { addDays, formatAsset } from '@/utils'
import { TAB_ALL, TAB_1Y, TAB_3M, TAB_1M, TAB_7D, TAB_1D } from '@/utils/constants'

export default {
  props: {
    asset: {
      type: Object,
      required: true
    },
    tab: {
      type: String,
      default: 'ALL'
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
      themesData: {
        lightTheme: {
          chart: {
            ...chartOptions,
            layout: {
              backgroundColor: '#fff',
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
  watch: {

    'tab' (newVal) {
      this.filterHistoryByTab(newVal)
    },

    'getHistoryAssetSelected' (newVal) {
      this.history = newVal
    },

    '$store.getters.getCurrency' () {
      // this.removeSeries()
    }
  },
  async beforeMount () {
    const response = await getAssetHistoryById(this.asset.id)
    const { data } = await response.json()
    this.history = data.reduce((result, currentVal) => {
      result.push(formatAsset(currentVal))
      return result
    }, [])
    this.printChart()
  },
  methods: {

    printChart () {
      this.chart = createChart(document.getElementById('coin-chart'), {
        width: 760,
        height: 500,
        rightPriceScale: {
          borderVisible: false
        },
        timeScale: {
          borderVisible: false
        },
        localization: {
          locale: navigator?.language || 'en-US',
          dateFormat: 'dd/MM/yyyy'
        }
      })
      const areaSeries = this.chart.addAreaSeries({
        priceScaleId: 'left',
        lineWidth: 3
      })

      this.history.forEach((item) => {
        item.value = item.valuePerCurrency[this.$store.getters.getCurrency]
      })
      this.chart.applyOptions(this.themesData.darkTheme.chart)
      areaSeries.setData(this.history)
      areaSeries.applyOptions(this.themesData.darkTheme.series)
      this.filterHistoryByTab(this.tab)
    },

    removeSeries () {
      this.chart.removeSeries()
    },

    filterHistoryByTab (tab) {
      if (tab === TAB_ALL) {
        this.chart.timeScale().resetTimeScale()
      } else if (tab === TAB_1Y) {
        this.chart.timeScale().setVisibleRange(this.calculateVisibleRange({ year: 1 }))
      } else if (tab === TAB_3M) {
        this.chart.timeScale().setVisibleRange(this.calculateVisibleRange({ month: 3 }))
      } else if (tab === TAB_1M) {
        this.chart.timeScale().setVisibleRange(this.calculateVisibleRange({ month: 1 }))
      } else if (tab === TAB_7D) {
        this.chart.timeScale().setVisibleRange(this.calculateVisibleRange({ days: 7 }))
      } else if (tab === TAB_1D) {
        this.chart.timeScale().setVisibleRange(this.calculateVisibleRange({ days: 1 }))
      }
    },

    calculateVisibleRange (object) {
      const currentDate = new Date()
      return {
        start: currentDate.getTime() / 1000,
        end: addDays(currentDate, object).getTime() / 1000
      }
    }
  }
}
</script>

<style scoped>
    section {
        margin-top: 2rem;
        width: 100%;
    }
</style>
