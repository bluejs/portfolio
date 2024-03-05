<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('message.columns.ticketNo')" width="400">
        <template slot-scope="{row}">
          <span>{{ row.ticketNo }}</span>

          <el-tag v-if="row.isUrgent" type="danger" size="small" effect="plain" round
            style="font-size: 12px;margin-left: 10px">
            {{ $t('common.urgent') }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="$t('message.columns.customer')" width="100">
        <template slot-scope="{row}">
          <span>{{ locale === 'zh' ? row.cname : row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('message.columns.type')">
        <template slot-scope="{row}">
          <el-tag v-if="row.type === 'bug'" type="danger">{{ $t('message.types.bug') }}</el-tag>
          <el-tag v-else-if="row.type === 'advise'" type="info">{{ $t('message.types.advise') }}</el-tag>
          <el-tag v-else-if="row.type === 'support'" type="primary">{{ $t('message.types.support') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="$t('message.columns.title')">
        <template slot-scope="{row}">
          <span>{{ locale === 'zh' ? row.ctitle : row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('common.actions')" width="100">
        <template slot-scope="{row}">
          <el-button size="small" icon="el-icon-service">
            {{ $t('common.reply') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/message'
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
      console.log(items);
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
