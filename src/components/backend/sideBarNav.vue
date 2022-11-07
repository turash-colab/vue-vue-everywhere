<template>
  <div class="page-sidebar custom-scrollbar">
    <ul class="sidebar-menu">
      <li v-if="get_auth_role_name == 'admin'">
        <router-link :to="{ name: 'admin' }" class="sidebar-header mt-2">
          <i class="icon-bar-chart"></i><span>Dashboard</span>
        </router-link>
        <router-link :to="{ name: 'adminProfile' }" class="sidebar-header mt-2">
          <i class="icon-desktop"></i><span>Profile</span>
        </router-link>
        <router-link :to="{ name: 'userList' }" class="sidebar-header mt-2">
          <i class="icon-anchor"></i><span>Users</span>
        </router-link>
        <router-link :to="{ name: 'clientList' }" class="sidebar-header mt-2">
          <i class="icon-layout"></i><span>Client</span>
        </router-link>
        <router-link :to="{ name: 'clientEntry' }" class="sidebar-header mt-2">
          <i class="icon-notepad"></i><span>Client Entry</span>
        </router-link>
        <a href="#" class="sidebar-header mt-2">
          <i class="icon-notepad"></i><span>Hours (under dev)</span>
        </a>
        <a href="#" class="sidebar-header mt-2">
          <i class="icon-notepad"></i><span>Sales (under dev)</span>
        </a>
      </li>

      <li v-if="get_auth_role_name == 'student'">
        <div class="sidebar-title">Client</div>
        <router-link :to="{ name: 'student' }" class="sidebar-header mt-2">
          <i class="icon-bar-chart"></i><span>Dashboard</span>
        </router-link>
        <router-link
          :to="{ name: 'studentProfile' }"
          class="sidebar-header mt-2"
        >
          <i class="icon-desktop"></i><span>Profile</span>
        </router-link>
        <router-link
          :to="{ name: 'studentClientList' }"
          class="sidebar-header mt-2"
        >
          <i class="icon-anchor"></i><span>Sales</span>
        </router-link>
      </li>

      <li v-if="get_auth_role_name == 'management'">
        <div class="sidebar-title">Agent</div>
        <router-link :to="{ name: 'management' }" class="sidebar-header mt-2">
          <i class="icon-bar-chart"></i><span>Dashboard</span>
        </router-link>
        <router-link
          :to="{ name: 'managementProfile' }"
          class="sidebar-header mt-2"
        >
          <i class="icon-desktop"></i><span>Profile</span>
        </router-link>
        <router-link
          :to="{ name: 'managementClientList' }"
          class="sidebar-header mt-2"
        >
          <i class="icon-anchor"></i><span>Sales</span>
        </router-link>
        <!-- <router-link
          :to="{ name: 'managementEntryList' }"
          class="sidebar-header mt-2"
        >
          <i class="icon-notepad"></i><span>Entry List</span>
        </router-link>
        <router-link
          :to="{ name: 'managementNewEntry' }"
          class="sidebar-header mt-2"
        >
          <i class="icon-layout"></i><span>New Entry</span>
        </router-link>-->
      </li>
      <li>
        <a href="#" @click="get_logout()" class="sidebar-header mt-2">
          <i class="icon-rocket"></i> <span>Logout</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "sidebar-nav",
  created: function () {
    this.init_jq();
  },
  methods: {
    ...mapMutations(["set_logout"]),
    get_logout: function () {
      window.axios.get("/user/logout").then((res) => {
        console.log(res.data);
      });
      this.$router.replace({ name: "login" });
      this.set_logout();
    },
    init_jq: function () {
      "use strict";
      setTimeout(() => {
        $.sidebarMenu = function (menu) {
          var animationSpeed = 300,
            subMenuSelector = ".sidebar-submenu";
          $(menu).on("click", "li a", function () {
            var $this = $(this);
            var checkElement = $this.next();
            if (
              checkElement.is(subMenuSelector) &&
              checkElement.is(":visible")
            ) {
              checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass("menu-open");
              });
              checkElement.parent("li").removeClass("active");
            } else if (
              checkElement.is(subMenuSelector) &&
              !checkElement.is(":visible")
            ) {
              var parent = $this.parents("ul").first();
              var ul = parent.find("ul:visible").slideUp(animationSpeed);
              ul.removeClass("menu-open");
              var parent_li = $this.parent("li");
              checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass("menu-open");
                parent.find("li.active").removeClass("active");
                parent_li.addClass("active");
              });
            }
          });
        };
        $(".mobile-sidebar .switch-state").click(function () {
          $(".page-body-wrapper").toggleClass("sidebar-close");
        });
        $.sidebarMenu($(".sidebar-menu"));
      }, 300);
    },
  },
  computed: {
    ...mapGetters([
      "get_auth_role_name",
      "get_check_auth_status",
      "get_auth_info",
      "get_profile_image_url",
    ]),
  },
};
</script>

<style></style>
