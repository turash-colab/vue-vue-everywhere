<template>
  <div>
    <div class="row justify-content-center mt-4">
      <div class="col-sm-12 col-md-8 col-lg-9">
        <div class="card">
          <div class="card-header">
            <h4>Client Entry</h4>
          </div>
          <div class="card-body">
            <form
              action=""
              id="client_form"
              @submit.prevent="save_client"
              enctype="multipart/form-data"
            >
              <div class="form-group">
                <label for="">Clients</label>
                <input type="text" name="name" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Category Name</label>
                <input type="text" name="category_name" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Description</label>
                <input type="text" name="description" class="form-control" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "new-entry",
  data: function () {
    return {
      id: 0,
      url: "/client-list/store",
    };
  },
  created: function () {
    console.log(this.$route.params.id);
    this.id = parseInt(this.$route.params.id);
    if (this.id > 0) {
      this.get_client();
      this.url = "/client-list/update";
    }
  },
  methods: {
    get_client: function () {
      window.axios.get("/client-list/get/" + this.id).then((res) => {
        console.log(res.data);
        for (const key in res.data) {
          if (Object.hasOwnProperty.call(res.data, key)) {
            const element = res.data[key];
            if (key != "image") {
              window.$(`input[name="${key}"`).val(element);
            }
          }
        }
      });
    },
    save_client: function () {
      let form_data = new FormData(document.getElementById("client_form"));
      if (this.url === "/client-list/update") {
        form_data.append("id", this.id);
      }
      window.axios
        .post(this.url, form_data)
        .then((res) => {
          console.log(res.data);
          this.$router.push({ name: "clientList" });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  computed: {
    ...mapGetters(["get_server_url"]),
  },
};
</script>
