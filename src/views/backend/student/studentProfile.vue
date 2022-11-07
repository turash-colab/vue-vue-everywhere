<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="page-header">
          <div class="row">
            <div class="col-lg-12">
              <h3>Under Development</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "student-profile",
  created: function () {
    console.log(this.get_auth_info);
  },
  methods: {
    ...mapMutations(["set_auth_info"]),
    update_profile: function () {
      let form_data = new FormData(document.getElementById("update_profile"));
      window.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.get_auth_token}`;
      window.axios.post("/user/update-profile", form_data).then((res) => {
        console.log(res.data);
        this.set_auth_info(res.data.user);
      });
    },

    change_profile: function () {
      let form_data = new FormData(
        document.getElementById("change_profile_form")
      );
      window.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.get_auth_token}`;
      window.axios.post("/user/update-profile-pic", form_data).then((res) => {
        // console.log(res.data);
        this.set_auth_info(res.data.user);
      });
    },
  },
  computed: {
    ...mapGetters(["get_auth_info", "get_auth_token", "get_profile_image_url"]),
  },
};
</script>

<style></style>
