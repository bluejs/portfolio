<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" fit highlight-current-row style="width: 100%">
      <el-table-column prop="id" align="center" label="ID" width="80"></el-table-column>
      <el-table-column prop="name" :label="$t('product.columns.name')" width="500"></el-table-column>
      <el-table-column prop="price" align="center" :label="$t('product.columns.price')"></el-table-column>

      <el-table-column align="center" :label="$t('product.columns.states')">
        <template slot-scope="{row}">
          <el-tag type="primary" v-if="row.states === 'normal'">{{ $t('states.normal') }}</el-tag>
          <el-tag type="success" v-else-if="row.states === 'pending'">{{ $t('states.pending') }}</el-tag>
          <el-tag type="info" v-else-if="row.states === 'suspended'">{{ $t('states.suspended') }}</el-tag>
          <el-tag type="danger" v-else-if="row.states === 'pause'">{{ $t('states.pause') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="inStock" align="center" :label="$t('product.columns.inStock')"></el-table-column>

      <el-table-column align="center" :label="$t('product.columns.heat')">
        <template slot-scope="{row}">
          <el-progress :percentage="100 * row.heat / 4" :show-text="false" />
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('common.actions')" width="120">
        <template slot-scope="{row}">
          <el-button type="primary" size="small" icon="el-icon-edit" @click="">
            {{ $t('common.edit') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/product'

export default {
  name: 'InlineEditTable',
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 50
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)

      console.log(data.items);

      const items = data.items
      this.list = items.map(v => {
        this.$set(v, 'edit', false)
        v.originalTitle = v.title
        return v
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
