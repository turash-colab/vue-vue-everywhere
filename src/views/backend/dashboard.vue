<template>
  <div>
    <!-- Loader starts -->
    <!-- <div class="loader-wrapper">
            <div class="loader bg-white">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <h4>Have a great day at work today <span>&#x263A;</span></h4>
            </div>
        </div> -->
    <!-- Loader ends -->

    <!--page-wrapper Start-->
    <div class="page-wrapper">
      <!--Page Header Start-->
      <page-header></page-header>
      <!--Page Header Ends-->

      <!--Page Body Start-->
      <div class="page-body-wrapper">
        <!--Page Sidebar Start-->
        <side-bar-nav></side-bar-nav>
        <!--Page Sidebar Ends-->

        <div class="page-body">
          <router-view />
        </div>
      </div>
      <!--Page Body Ends-->
    </div>
    <!--page-wrapper Ends-->
  </div>
</template>

<script>
import PageHeader from "../../components/backend/pageHeader.vue";
import SideBarNav from "../../components/backend/sideBarNav.vue";
export default {
  components: { PageHeader, SideBarNav },
};
</script>

<style></style>
