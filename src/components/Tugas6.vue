<template>
  <div class="container">
    <form @submit.prevent="save" class="form-container">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="form.title" class="input-field" />
      <label for="content">Content:</label>
      <textarea
        id="content"
        v-model="form.content"
        class="input-field"
      ></textarea>
      <button type="submit" class="btn btn-save">Save</button>
    </form>
    <table class="articles-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, index) in articles" :key="article.id">
          <td>{{ index + 1 }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.content }}</td>
          <td>
            <button @click="edit(article)" class="btn btn-edit">Edit</button>
            <button @click="deleteArticle(article.id)" class="btn btn-delete">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="load" class="btn btn-load">Load</button>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const form = reactive({
      id: null,
      title: "",
      content: "",
    });

    const articles = ref([]);

    async function load() {
      try {
        const response = await axios.get("http://localhost:3000/articles");
        articles.value = response.data;
      } catch (error) {
        console.error("Error loading articles:", error);
      }
    }

    async function save() {
      try {
        const url = form.id
          ? `http://localhost:3000/articles/${form.id}`
          : "http://localhost:3000/articles";
        const method = form.id ? "put" : "post";
        const response = await axios[method](url, {
          title: form.title,
          content: form.content,
        });

        if (form.id) {
          articles.value = articles.value.map((article) =>
            article.id === response.data.id ? response.data : article
          );
        } else {
          articles.value.push(response.data);
        }

        form.id = null;
        form.title = "";
        form.content = "";
      } catch (error) {
        console.error("Error saving article:", error);
      }
    }

    async function deleteArticle(id) {
      try {
        await axios.delete(`http://localhost:3000/articles/${id}`);
        articles.value = articles.value.filter((article) => article.id !== id);
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    }

    function edit(article) {
      form.id = article.id;
      form.title = article.title;
      form.content = article.content;
    }

    onMounted(load);

    return { form, articles, save, edit, deleteArticle, load };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

.form-container {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.form-container label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #4caf50;
  outline: none;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-save {
  background-color: #4caf50;
  color: #fff;
}

.btn-save:hover {
  background-color: #45a049;
}

.btn-edit {
  background-color: #ff9800;
  color: #fff;
}

.btn-edit:hover {
  background-color: #fb8c00;
}

.btn-delete {
  background-color: #f44336;
  color: #fff;
}

.btn-delete:hover {
  background-color: #e53935;
}

.btn-load {
  background-color: #008cba;
  color: #fff;
  margin-top: 20px;
  width: 100%;
}

.btn-load:hover {
  background-color: #007b9a;
}

.articles-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  background-color: #fff;
}

.articles-table th,
.articles-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.articles-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.articles-table button {
  padding: 5px 10px;
  margin: 2px 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
