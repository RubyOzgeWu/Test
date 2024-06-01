<template>
  <div>
    <!-- 文件上傳表單 -->
    <form @submit.prevent="uploadFile">
      <input type="file" ref="fileInput" @change="handleFileChange" />
      <button type="submit">上傳文件</button>
    </form>
  </div>

  <!-- 下載上傳的檔案 -->
  <div>
    <h5>已上傳的檔案</h5>
    <ul>
      <li v-for="file in uploadedFiles" :key="file._id">
        <a :href="file.filePath" target="_blank">{{ file.fileName }}</a>
        <button @click="downloadFile(file._id)">下載</button>
        <button @click="confirmDelete(file)">刪除</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
// import axios from "axios";
import { api } from "../boot/axios.js";

const fileInput = ref(null);
const uploadedFiles = ref([]);

const handleFileChange = () => {
  if (fileInput.value.files.length > 0) {
    // 在這裡執行文件選擇時的操作
  }
};

const uploadFile = async () => {
  const file = fileInput.value.files[0];
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await api.post("/task/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert("上傳成功");
    await init();
    console.log("File uploaded:", response.data);
  } catch (error) {
    alert("上傳失敗");
    console.error("Error uploading file:", error);
  }
};
// 处理文件下载
const downloadFile = async (fileId) => {
  try {
    const response = await api.get(`/task/${fileId}`, {
      responseType: "blob",
    });

    let fileName = "downloaded_file"; // 设置默认文件名

    // 从响应头中获取文件名
    const contentDisposition = response.headers["content-disposition"];
    console.log(contentDisposition);
    if (contentDisposition) {
      const match = contentDisposition.match(/filename=([^;]+)/);
      if (match && match[1]) {
        fileName = match[1];
      }
    }

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName); // 使用后端发送的文件名
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);

    alert("下载成功");
  } catch (error) {
    console.error("下载文件时出错:", error);
  }
};

/* 刪除檔案 */
const confirmDelete = (file) => {
  const isConfirmed = confirm("確定要刪除檔案 ？");
  if (isConfirmed) {
    deleteFile(file._id);
  }
};
const deleteFile = async (fileId) => {
  try {
    await api.delete(`/task/${fileId}`);
    // return response.data; // 如果后端返回了任何信息，你可以在这里处理它
    alert("刪除成功");
    await init(); // Refresh the projects list after deleting the project
  } catch (error) {
    throw new Error("Error deleting file:", error);
  }
};

const init = async () => {
  try {
    const response = await api.get("/task/files");
    uploadedFiles.value = response.data;
  } catch (error) {
    console.error("Error fetching uploaded files:", error);
  }
};
init();
</script>
