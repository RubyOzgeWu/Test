<template>
  <q-form v-model="valid" @submit.prevent="addProject" class="row">
    <q-input
      dense
      class="col col-12"
      ref="inputRef"
      v-model="projectForm.projectName"
      label="專案名稱"
    />
    <q-date v-model="projectForm.projectDate" minimal />
    <q-select
      filled
      v-model="projectForm.projectStatus"
      label="專案狀態"
      :options="statusOptions"
      style="width: 250px"
      behavior="menu"
    />
    <q-select
      filled
      v-model="projectForm.projectPhase"
      label="專案階段"
      :options="phaseOptions"
      style="width: 250px"
      behavior="menu"
    />
    <q-select
      filled
      v-model="projectForm.projectOwner"
      label="專案主管"
      :options="ownerOptions"
      style="width: 250px"
      behavior="menu"
    />
    <q-btn
      dense
      type="submit"
      size="22px"
      class="q-px-xl q-py-xs sign-up col-12"
      color="secondary"
      label="新增專案"
    />
  </q-form>
  <div>
    <DoughnutChart :phase="selectedProjectPhase"></DoughnutChart>
  </div>

  <!-- project card -->
  <q-card
    flat
    bordered
    class="my-card"
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
    v-for="project in projects"
    :key="project._id"
    style="margin-bottom: 30px"
    @click="selectProjectPhase(project.phase)"
    @dblclick="goToProjectPage(project)"
  >
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">{{ project.name }}</div>
          <div class="text-subtitle2">{{ formatDate(project.date) }}</div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable @click="openEditDialog(project)">
                  <q-item-section>編輯</q-item-section>
                </q-item>
                <q-item clickable @click="confirmDelete(project)">
                  <q-item-section>刪除</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section :class="getStatusColorClass(project.status)">
      {{ project.status }}
    </q-card-section>
    <q-card-section>
      {{ project.owner.label }}
    </q-card-section>
  </q-card>
  <q-dialog v-model="isEditDialogOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">編輯專案</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="currentProject.name" label="專案名稱" dense />
        <q-date v-model="currentProject.date" label="專案日期" dense />
        <q-select
          v-model="currentProject.status"
          label="專案狀態"
          :options="statusOptions"
          dense
        />
        <q-select
          v-model="currentProject.phase"
          label="專案階段"
          :options="phaseOptions"
          dense
        />
        <q-select
          v-model="currentProject.owner"
          label="專案主管"
          :options="ownerOptions"
          dense
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="取消" v-close-popup />
        <q-btn flat label="儲存" @click="saveProject" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { reactive, ref } from "vue";
import { api, apiAuth } from "../boot/axios.js";
// import { date } from "quasar";
import DoughnutChart from "src/components/doughnutChart.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const projectForm = reactive({
  projectName: "",
  projectDate: "",
  projectStatus: "",
  projectPhase: "",
  projectOwner: "",
});
const currentProject = reactive({
  _id: "",
  name: "",
  date: "",
  status: "",
  phase: "",
  owner: {
    label: "",
    value: "",
  },
});
const isEditDialogOpen = ref(false);

const statusOptions = ["準備中", "進行中", "已完成", "已逾期"];
const phaseOptions = ["提案階段", "設計階段", "工程階段"];
const getStatusColorClass = (status) => {
  return {
    "text-grey": status === "準備中",
    "text-blue": status === "進行中",
    "text-green": status === "已完成",
    "text-red": status === "已逾期",
  };
};
const ownerOptions = ref([]);

const projects = ref([]);
const selectedProjectPhase = ref("");

const selectProjectPhase = (phase) => {
  selectedProjectPhase.value = phase;
};
const goToProjectPage = (project) => {
  router.push(`/project/${project._id}`); // 跳转到项目页面，假设项目页面的路由为 `/project/:id`
};
/* 發送新增專案請求 */
const addProject = async () => {
  try {
    await apiAuth.post("/projects", projectForm);
    alert("新增成功");
    await init();
  } catch {
    alert("新增失敗");
  }
};

const init = async () => {
  try {
    // 使用 Promise.all 同时发起两个请求
    const [usersResponse, projectsResponse] = await Promise.all([
      apiAuth.get("/users/all"),
      api.get("/projects/all"),
    ]);

    // 处理用户数据
    const usersData = usersResponse.data;
    const getOwnerOptions = usersData.result.map((user) => ({
      label: user.account,
      value: user._id,
    }));
    ownerOptions.value = getOwnerOptions;

    // 处理项目数据
    const projectsData = projectsResponse.data;
    projects.value = projectsData.result;
  } catch (error) {
    console.log(error);
    alert("error");
  }
};
const formatDate = (date) => {
  return new Date(date).toLocaleDateString(); // 格式化日期
};

const openEditDialog = (project) => {
  currentProject._id = project._id;
  currentProject.name = project.name;
  currentProject.date = project.date;
  currentProject.status = project.status;
  currentProject.phase = project.phase;
  currentProject.owner.label = project.owner.label;
  currentProject.owner.value = project.owner.value;
  isEditDialogOpen.value = true;
};

const saveProject = async () => {
  const updateData = {
    name: currentProject.name,
    date: currentProject.date,
    status: currentProject.status,
    phase: currentProject.phase,
    owner: {
      label: currentProject.owner.label,
      value: currentProject.owner.value,
    },
  };
  try {
    await apiAuth.patch(`/projects/${currentProject._id}`, updateData);
    alert("儲存成功");
    isEditDialogOpen.value = false;
    await init();
  } catch {
    alert("儲存失敗");
  }
};

const confirmDelete = (project) => {
  const isConfirmed = confirm(`確定要刪除專案 "${project.name}" ？`);
  if (isConfirmed) {
    deleteProject(project._id);
  }
};
const deleteProject = async (projectId) => {
  try {
    await apiAuth.delete(`/projects/${projectId}`);
    alert("刪除成功");
    await init(); // Refresh the projects list after deleting the project
  } catch (error) {
    console.log(error);
    alert("刪除失敗");
  }
};

init();
</script>
