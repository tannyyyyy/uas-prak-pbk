<template>
  <div>
    <h2>Form Pencatatan Sipil</h2>
    <form @submit.prevent="submitForm" class="expense-form">
      <div class="form-group">
        <label for="description">Nama</label>
        <input
          type="text"
          v-model="description"
          class="form-control"
          placeholder="Masukkan nama Anda"
        />
      </div>
      <div class="form-group">
        <label for="no_induk" class="label-nomer-induk">Nomer Induk</label>
        <input
          type="text"
          v-model="price"
          class="form-control"
          placeholder="Masukkan nomer induk"
          id="no_induk"
        />
      </div>

      <div class="form-group">
        <label>Jenis Kelamin</label><br />
        <input type="radio" v-model="gender" value="pria" /> Pria<br />
        <input type="radio" v-model="gender" value="wanita" /> Wanita
      </div>

      <button type="submit" class="btn">Tambah Pencatatan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ExpenseForm",
  data() {
    return {
      description: "",
      price: "",
      quantity: "",
    };
  },
  methods: {
    submitForm() {
      const total = this.price * this.quantity;
      const expense = {
        description: this.description,
        price: this.price,
        quantity: this.quantity,
        total: total,
      };
      this.$emit("add-expense", expense);
      this.clearForm();
    },
    clearForm() {
      this.description = "";
      this.price = 0;
      this.quantity = 1;
    },
  },
};
</script>

<style scoped>
.expense-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

.form-control {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #2980b9;
}
</style>
