<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('customer.columns.name')" width="150">
        <template slot-scope="{row}">
          <el-tag v-if="row.isVip" type="danger" size="small" effect="plain" round
            style="font-size: 12px;margin-right: 10px">V</el-tag>
          <span>{{ locale === 'zh' ? row.cname : row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('customer.columns.sales')" width="150">
        <template slot-scope="{row}">
          <span>{{ row.sales | salesNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" :label="$t('customer.columns.phone')"></el-table-column>
      <el-table-column prop="email" :label="$t('customer.columns.email')"></el-table-column>

      <el-table-column align="center" :label="$t('common.actions')" width="150">
        <template slot-scope="{row}">
          <el-button size="small" icon="el-icon-service">
            {{ $t('common.contactCustomer') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/customer'
import { i18n } from '@/langs';

export default {
  name: 'InlineEditTable',
  filters: {
    salesNumber(value) {
      if (i18n.locale === 'zh') {
        if (value >= 10000) {
          return (value / 10000).toFixed(1) + '万';
        } else {
          return value;
        }
      } else {
        return value.toLocaleString();
      }
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
      const items = data.items
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
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
  },
  computed: {
    locale: () => i18n.locale,
  },
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
