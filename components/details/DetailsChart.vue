<template>
  <section id="coin-chart" />
</template>

<script>
import { createChart } from 'lightweight-charts'
import { getAssetHistoryById } from '@/api'

export default {
  props: {
    asset: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      themesData: {
        lightTheme: {
          chart: {
            layout: {
              backgroundColor: '#FFFFFF',
              lineColor: '#2B2B43',
              textColor: '#191919'
            },
            watermark: {
              color: 'rgba(0, 0, 0, 0)'
            },
            grid: {
              vertLines: {
                visible: false
              },
              horzLines: {
                color: '#f0f3fa'
              }
            }
          },
          series: {
            topColor: 'rgba(33, 150, 243, 0.56)',
            bottomColor: 'rgba(33, 150, 243, 0.04)',
            lineColor: 'rgba(33, 150, 243, 1)'
          }
        },
        darkTheme: {
          chart: {
            layout: {
              backgroundColor: '#2B2B43',
              lineColor: '#2B2B43',
              textColor: '#D9D9D9'
            },
            watermark: {
              color: 'rgba(0, 0, 0, 0)'
            },
            crosshair: {
              color: '#758696'
            },
            grid: {
              vertLines: {
                color: '#2B2B43'
              },
              horzLines: {
                color: '#363C4E'
              }
            }
          },
          series: {
            topColor: 'rgba(32, 226, 47, 0.56)',
            bottomColor: 'rgba(32, 226, 47, 0.04)',
            lineColor: 'rgba(32, 226, 47, 1)',
          }
        }
      }
    }
  },
  async mounted () {
    const res = await getAssetHistoryById(this.asset.id)
    const { data } = await res.json()
    const chart = createChart(document.getElementById('coin-chart'), {
      width: 600,
      height: 400,
      rightPriceScale: {
        borderVisible: false
      },
      timeScale: {
        borderVisible: false
      }
    })
    data.forEach((item) => {
        item.value = (item.priceUsd*1).toFixed(2)*1
        item.time = item.date
    })
    const areaSeries = chart.addAreaSeries({
        priceScaleId: 'left',
        title: 'Bitcoin in USD',
        topColor: 'rgba(33, 150, 243, 0.56)',
        bottomColor: 'rgba(33, 150, 243, 0.04)',
        lineColor: 'rgba(33, 150, 243, 1)',
        lineWidth: 2
    })
    chart.applyOptions(this.themesData.darkTheme.chart)
    areaSeries.applyOptions(this.themesData.darkTheme.series)
    areaSeries.setData(data)
  }
}
</script>

<style scoped>
    section {
        margin: 1rem;
        width: 100%;
    }
</style>
