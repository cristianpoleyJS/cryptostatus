<template>
  <div>
    <ul class="display-flex justify-start align-items-center">
      <li
        v-for="(tab, ix) in tabs"
        :key="ix"
        :class="{
          'selected': tab === tabSelected
        }"
        class="cursor-pointer text-2xs"
        @click="$emit('select-tab', tab)">
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script>
import { TAB_ALL, TAB_1Y, TAB_3M, TAB_1M, TAB_7D, TAB_1D } from '@/utils/constants'

export default {
  props: {
    tabSelected: {
      type: String,
      default: TAB_ALL
    }
  },
  data () {
    return {
      tabs: [TAB_1D, TAB_7D, TAB_1M, TAB_3M, TAB_1Y, TAB_ALL]
    }
  }
}
</script>

<style scoped>
    ul {
        grid-gap: 1rem;
        margin-top: 1rem;
        max-width: 300px;
        max-width: fit-content;
        background-color: var(--bg-tabs);
        height: 36px;
        border-radius: var(--border-radius-3);
        padding: 0 10px;
    }

    li {
        padding: 4px 8px;
        white-space: nowrap;
        font-weight: var(--font-weight-medium);
        border-radius: var(--border-radius-3);
    }

    li.selected {
        background: var(--bg-tabs-items);
        font-weight: var(--font-weight-medium);
    }
</style>
