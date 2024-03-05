<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="id" align="center" label="ID" width="80"></el-table-column>

      <el-table-column prop="orderNo" :label="$t('order.columns.orderNo')" width="320"></el-table-column>
      <el-table-column :label="$t('order.columns.orderTime')">
        <template slot-scope="{row}">
          {{ row.time | orderTime }}
        </template>
      </el-table-column>
      <el-table-column prop="zip" :label="$t('order.columns.zip')"></el-table-column>
      <el-table-column :label="$t('order.columns.states')">
        <template slot-scope="{row}">
          <el-tag type="info" v-if="row.states === 'pending'">{{ $t('states.pending') }}</el-tag>
          <el-tag type="primary" v-else-if="row.states === 'delivery'">{{ $t('states.delivery') }}</el-tag>
          <el-tag type="success" v-else-if="row.states === 'received'">{{ $t('states.received') }}</el-tag>
          <el-tag type="danger" v-else-if="row.states === 'rejected'">{{ $t('states.rejected') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('common.actions')" width="300">
        <template slot-scope="{row}">
          <el-button type="primary" size="small" icon="el-icon-edit">
            {{ $t('common.edit') }}
          </el-button>

          <el-button size="small" icon="el-icon-position">
            {{ $t('common.delivery') }}
          </el-button>

          <el-button size="small" icon="el-icon-service">
            {{ $t('common.contactCustomer') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/order'
import { i18n } from '@/langs';

export default {
  name: 'InlineEditTable',
  filters: {
    orderTime(value) {
      console.log(this);
      return value + i18n.t('common.minutesBefore');
    }
  },
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

      this.list = data.items
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
