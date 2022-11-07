<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>User List</h4>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-bordered table-striped text-center">
              <thead>
                <tr>
                  <th style="width: 10%">#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="i in 5" :key="i"> -->
                  <tr>
                  <td>1</td>
                  <td>patrik.bodin@basa.se</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ali@basa.se</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>po@basa.se</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>mb@basa.se</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>yes@basa.se</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>marianne@basa.se</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>alione@live.se</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-list",
  methods: {
    getData: function () {},
  },
};
</script>

<style></style>
