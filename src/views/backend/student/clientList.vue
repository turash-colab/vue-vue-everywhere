<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Client</h4>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-bordered table-striped text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Client</th>
                  <th>Client Name</th>
                  <th>Date</th>
                  <th>Return Date</th>
                  <th>Section</th>
                  <th class="text-center" style="width: 20%">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 5" :key="i">
                  <td>1</td>
                  <td>Client</td>
                  <td>ali@basa.se</td>
                  <td>21,mar 2021</td>
                  <td>26,mar 2021</td>
                  <td>B Block</td>
                  <td>
                    <div class="d-flex justify-content-end">
                      <!-- <a href="#" class="btn btn-sm btn-primary mx-1"
                        >New Entry</a
                      > -->
                      <a href="#" class="btn btn-sm btn-warning mx-1">Edit</a>
                      <a href="#" class="btn btn-sm btn-danger mx-1">Delete</a>
                    </div>
                  </td>
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
  name: "clientList",
  methods: {
    getData: function () {},
  },
};
</script>

<style></style>
