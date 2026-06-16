<script lang="ts">
import { defineComponent } from 'vue'
import { TodoItem } from '../types'

export default defineComponent({
  data: () => ({
    newTask: {
      label: '',
      type: 'personal'
    } as TodoItem
  })
})
</script>
