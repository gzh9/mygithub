<script setup lang="ts">
import OrgTree from '@/components/OrgTree.vue';
import UserTable from '@/components/UserTable.vue';
</script>

<template>
  <div class="main">
    <div class="left">
      <OrgTree />
    </div>
    <div class="right">
      <UserTable />
    </div>
  </div>
</template>
<style scoped>
.main{
  width: 100%;
  display: flex;
}
.left{
  width: 200px;
}
.right{
  flex: 1;
}
</style>
