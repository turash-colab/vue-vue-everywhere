<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between flex-wrap">

              <h4>Client List</h4>
              <input type="text" class="form-control w-50" @keyup="search($event.target.value)" placeholder="search..">
              <button
                v-if="selected_data.length > 0"
                @click.prevent="delete_multiple()"
                class="btn btn-success"
              >
                Delete Selected ( {{ selected_data.length }} )
              </button>
            </div>
          </div>
          <div class="card-body table-responsive">
            <table
              class="
                table table-bordered table-striped
                text-center
                align-middle
              "
            >
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      @click="check_all()"
                      id="check_all"
                      class="form-check"
                    />
                  </th>
                  <th>#</th>
                  <th>Client</th>
                  <th>Client</th>
                  <th>Section</th>
                  <th class="text-center" style="width: 20%">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(client, index) in client_list.data" :key="client.id">
                  <td>
                    <input
                      v-if="selected_data.includes(client.id)"
                      checked
                      type="checkbox"
                      @change="add_to_selected(client.id)"
                      class="form-check"
                    />
                    <input
                      v-else
                      type="checkbox"
                      @change="add_to_selected(client.id)"
                      class="form-check"
                    />
                  </td>
                  <td>{{ client.id }}</td>
                  <td>{{ client.name }}</td>
                  <td>{{ client.category_name }}</td>
                  <td>{{ client.description }}</td>
                  <td>
                    <div class="d-flex justify-content-end">
                      <!-- <a href="#" class="btn btn-sm btn-primary mx-1"
                        >New Entry</a
                      > -->
                      <router-link
                        :to="{ name: 'clientEdit', params: { id: client.id } }"
                        class="btn btn-sm btn-warning mx-1"
                        >Edit</router-link
                      >
                      <!-- <a href="#" class="btn btn-sm btn-warning mx-1">Edit</a> -->
                      <a
                        href="#"
                        @click.prevent="delete_client(client, index)"
                        class="btn btn-sm btn-danger mx-1"
                        >Delete</a
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <pagination
              v-model="page"
              :options="pagination_option"
              :records="total"
              :per-page="per_page"
              @paginate="getData"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "admin-base",
  data: function () {
    return {
      client_list: {},
      page: 1,
      per_page: 0,
      total: 0,
      pagination_option: {
        edgeNavigation: true,
      },
      search_key: '',

      selected_data: [],
    };
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: function (page = 1) {
      let url = `/client-list?page= ${page}`;
      if(this.search_key.length > 0){
        url += `&key=${this.search_key}`;
      }
      window.axios.get(url).then((res) => {
        // console.log(res.data);
        this.client_list = res.data;
        this.total = res.data.total;
        this.per_page = res.data.per_page;
      });
    },
    delete_client: function (client, index) {
      let con = confirm("sure want to delete??");
      console.log(index);
      if (con) {
        window.axios.post("/client-list/delete", { id: client.id }).then((res) => {
          console.log(res.data);
          // this.client_list.data.splice(index,1);
          this.getData();
        });
      }
    },
    add_to_selected: function (id) {
      this.selected_data.includes(id)
        ? (this.selected_data = this.selected_data.filter((item) => item != id))
        : this.selected_data.push(id);

      console.log(this.selected_data);
    },
    check_all: function () {
      this.client_list.data.map((item) => {
        this.selected_data.includes(item.id)
          ? (this.selected_data = this.selected_data.filter(
              (item2) => item2 != item.id
            ))
          : this.selected_data.push(item.id);

        return 0;
      });
    },
    delete_multiple: function () {
      let con = confirm("sure want to delete??");
      if (con) {
        window.axios
          .post("/client-list/delete-multi", { ids: this.selected_data })
          .then((res) => {
            console.log(res.data);
            this.selected_data = [];
            this.getData();
            window.$("#check_all").prop("checked", false);
          });
      }
    },
    search: function (key){
      console.log(key);
      this.search_key = key;
      this.getData();
    },
  },
  computed: {
    ...mapGetters(["get_server_url"]),
  },
};
</script>

<style></style>
