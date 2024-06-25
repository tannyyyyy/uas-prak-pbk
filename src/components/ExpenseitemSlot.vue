<template>
  <div>
    <slot name="expense" :expense="expense">
      <div>
        {{ expense.description }} - {{ expense.price }} -
        {{ expense.quantity }} - Total: {{ expense.total }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "ExpenseItemSlot",
  props: {
    expense: {
      type: Object,
      required: true,
    },
  },
};
</script>
