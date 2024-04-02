<template>
  <el-tree style="max-width: 200px" :data="data" :props="defaultProps" lazy :load="loadNode"
    @node-click="handleNodeClick" />
</template>

<script setup lang='ts'>
import orgApi from '@/api/org.ts'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

interface Tree {
  id?: string
  label: string
  children?: Tree[]
}


// 点击左侧存储数据到pinia仓库 使userTable当做条件筛选 
const handleNodeClick = (data: Tree) => {
  counter.changeSearchTypeId(data.id as string)
}
// 左侧结构一层数据
const data: Tree[] = [
  {
    id: '1',
    label: 'Level one 1',
  },
  {
    id: '2',
    label: 'Level one 2',
  },
  {
    id: '3',
    label: 'Level one 3',
  },
]

// 点击加载子数据
const loadNode = (node: any, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve(data)
  }
  return orgApi.query(node.id).then((users) => {
    users.forEach(item => {
      item.label = item.name
    })
    resolve(users as Tree[])
  })

}

const defaultProps = {
  children: 'children',
  label: 'label',
  isLeaf: 'leaf'
}
</script>

<style></style>