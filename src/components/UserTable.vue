<template>
    <el-input v-model="nameVlue" style="width: 240px" placeholder="搜索" :prefix-icon="Search"
        @change="handleInputChange" />
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="id" width="180" />
        <el-table-column prop="name" label="姓名" width="380" />
        <el-table-column prop="name" label="用户名" />
    </el-table>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, watch } from 'vue'
import userApi from '@/api/user.ts'
import { useCounterStore } from '@/stores/counter'
import { Search } from '@element-plus/icons-vue'
const counter = useCounterStore()


const nameVlue = ref('')

const pageDate = reactive<{ tableData: [] | { id: string, name: string }[] }>({
    tableData: []
})

const tableData = toRefs(pageDate).tableData

// 请求默认数据
userApi.query({ orgId: counter.searchTypeId }).then((users) => {
    tableData.value = users
})
// 见听到左侧orgTree变化重新筛选数据
watch(()=>counter.searchTypeId, () => {
    userApi.query({ orgId: counter.searchTypeId }).then((users) => {
        tableData.value = users
    })
})
// 搜索数据
const handleInputChange = () => {
    userApi.query({ name: nameVlue.value }).then((users) => {
        tableData.value = users
    })
}


</script>

<style></style>