<script setup lang="ts">
import { ref, onMounted } from "vue"

import Vue3EasyDataTable from "vue3-easy-data-table"
import type { Header, ServerOptions } from "vue3-easy-data-table"
import "vue3-easy-data-table/dist/style.css"

import { api } from "../api/api.ts"

const loading = ref(false)
const rows = ref([])
const serverItemsLength = ref(0)
const columns: Header[] = [
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Height",
    value: "height",
  },
  {
    text: "Mass",
    value: "mass",
  },
  {
    text: "Hair color",
    value: "hair_color",
  },
]
const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 5,
  sortBy: "age",
  sortType: "desc",
})

onMounted(() => {
  loadPeople()
})

const loadPeople = async (): Promise<void> => {
  loading.value = true
  const resp = await api.send("get", "https://swapi.dev/api/people")
  console.log(resp?.data)
  if (resp != null) {
    rows.value = resp.data.results
    serverItemsLength.value = resp.data.count
  }
  loading.value = false
}
</script>

<template>
  <Vue3EasyDataTable
    v-model:server-options="serverOptions"
    :headers="columns"
    :items="rows"
    :loading="loading"
    :server-items-length="serverItemsLength"
  >
    <template #loading>
      <img
        src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
        style="width: 100px; height: 80px"
      >
    </template>
  </Vue3EasyDataTable>
</template>
