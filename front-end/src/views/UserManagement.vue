<template>
    <div class="main">

        <el-dialog :visible.sync="isCreateDialogShow" width="45%" center>
            <div slot="title" class="dialog-title">
                Add
            </div>
            <el-form :model="createObj" status-icon label-width="150px" class="demo-ruleForm" style="font-size: 10px">
                <el-form-item label="first name :">
                    <el-input clearable v-model="createObj.firstName" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="last name :">
                    <el-input clearable v-model="createObj.lastName" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="username :">
                    <el-input clearable v-model="createObj.username" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="password :">
                    <el-input clearable v-model="createObj.password" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="email :">
                    <el-input clearable v-model="createObj.email" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="address :">
                    <el-input clearable v-model="createObj.address" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="roleId :">
                    <el-input clearable v-model="createObj.roleId" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="teamId :">
                    <el-input clearable v-model="createObj.teamId" style="width: 85%"></el-input>
                </el-form-item>
            </el-form>
            <div style="display: flex;align-items: center;">
                <el-button  style="margin: auto; margin-top: 2vh; width: 50%" type="primary" @click="handleCreate">Submit</el-button>
            </div>
        </el-dialog>

        <el-dialog :visible.sync="isEditDialogShow" width="45%" center>
            <div slot="title" class="dialog-title">
                Edit
            </div>
            <el-form :model="editObj" status-icon label-width="150px" class="demo-ruleForm" style="font-size: 10px">
                <el-form-item label="first name :">
                    <el-input clearable v-model="editObj.firstName" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="last name :">
                    <el-input clearable v-model="editObj.lastName" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="username :">
                    <el-input clearable v-model="editObj.username" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="password :">
                    <el-input clearable v-model="editObj.password" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="email :">
                    <el-input clearable v-model="editObj.email" style="width: 85%"></el-input>
                </el-form-item>
                <el-form-item label="role :">
                    <el-input clearable v-model="editObj.roleId" style="width: 85%"></el-input>
                </el-form-item>
            </el-form>
            <div style="display: flex;align-items: center;">
                <el-button  style="margin: auto; margin-top: 2vh; width: 50%" type="primary" @click="handleEdit">Submit</el-button>
            </div>
        </el-dialog>

        <div class="container">
            <div class="search">
                <el-row :gutter="20" style="margin-top: 20px;">
                    <el-col :span="2" :offset="1">
                        <el-button size="small" style="width: 100px" type="primary" icon="el-icon-circle-plus-outline"
                                   @click="() => { this.isCreateDialogShow = true; }">Create</el-button>
                    </el-col>

                    <el-col :span="3" :offset="14">
                        <el-input clearable size="mini" placeholder="username" suffix-icon="el-icon-search"
                                  v-model="searchCondition.username" @change="getTableData"></el-input>
                    </el-col>
                    <el-col :span="3" :offset="0">
                        <el-input clearable size="mini" placeholder="email" suffix-icon="el-icon-search"
                                  v-model="searchCondition.email" @change="getTableData"></el-input>
                    </el-col>

                </el-row>
            </div>
            <div class="table">
                <el-table :data="tableList" style="width: 95%" height="100%" max-height="100%" empty-text="无匹配行"
                          :cell-style="{ padding: '5px' }">
                    <el-table-column label="user Id" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.userId }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="first name" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.firstName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="last name" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.lastName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="username" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.username }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="password" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.password }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="email" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.email }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="address" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.address }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="role" min-width="10" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span>{{ scope.row.roleId }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Operation" min-width="15">
                        <template slot-scope="scope">

                            <el-button size="mini" type="primary" @click="() => {editObj = $util.copyShallow(scope.row);isEditDialogShow = true;}" icon="el-icon-edit">Edit</el-button>

                            <el-button size="mini" type="danger" @click="handleDelete(scope.row)" icon="el-icon-delete">Delete</el-button>

                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="bottom">
            </div>
        </div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            searchCondition: {
                username: '',
                email: ''
            },
            tableList: [],
            detailObj: {},
            editObj: {},
            createObj: {},
            isDetailDialogShow: false,
            isCreateDialogShow: false,
            isEditDialogShow: false
        };
    },
    methods: {
        getTableData() {
            this.$http.search(this.searchCondition.username,this.searchCondition.email).then(res => {
                this.tableList = res.data;
            })
        },
        handleDelete(row){
            let message = "<span style='color: orange;font-size:15px'> [Delete] </span> this data permanently，continue？"
            this.$hint.confirm(message).then(res => {
                if (res) {
                    this.$http.deleteUser(Number(row.userId)).then(res => {
                        if (res.code === 1) {
                            this.getTableData();
                        }
                    })
                }
            })
        },


        handleEdit() {
            this.$http.updateUser(this.editObj).then(res => {
                if (res.code === 1) {
                    this.isEditDialogShow = false;
                    this.getTableData();
                }
            })
        },

        handleCreate() {
            this.$http.createUser(this.createObj).then(res => {
                if (res.code === 1) {
                    this.isCreateDialogShow = false;
                    this.getTableData();
                }
            })
        },

    },
    created() {
        this.getTableData();
    }
};
</script>
<style scoped>
/deep/ .el-select-dropdown__item span {
    font-size: 12px;
}

/deep/ .el-form-item__label {
    font-size: 12px;
    letter-spacing: 1px;
}

/deep/ .el-input__inner {
    height: 34px;
}

/deep/ .el-form-item {
    margin-bottom: 25px;
}

/deep/ .el-input__inner {
    font-size: 12px;
}

.main {
    height: 100%;
}

.search {
    flex: 2;
}

.container {
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    width: 100%;
    flex-direction: column;
}

::v-deep ::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.table {
    flex: 15;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 98%;
    margin: auto;
}

/deep/ .el-table {
    background-color: rgba(243, 245, 237, 0) !important;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: auto;
}

/deep/ .el-table tr {
    background-color: rgba(243, 245, 237, 0) !important;
}

/deep/ .el-table th {
    background-color: rgba(243, 245, 237, 0) !important;
}

/deep/ .el-tooltip__popper {
    border: 1px solid red;
}

.bottom {
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/deep/ .el-pagination {
    background-color: rgba(243, 245, 237, 0) !important;
    margin: auto;
}

/deep/ .el-pagination ul {
    background-color: rgba(243, 245, 237, 0) !important;
}

/deep/ .el-pagination li {
    background-color: rgba(243, 245, 237, 0) !important;
}

/deep/ .el-pagination button {
    background-color: rgba(243, 245, 237, 0) !important;
}

.avatar-uploader-icon {
    border: 1px dashed rgb(170, 163, 163);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader-icon:hover {
    border-color: #409eff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}

.avatar {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
</style>