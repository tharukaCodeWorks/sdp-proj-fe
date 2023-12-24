import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { SystemUserLayout } from "../../components/layouts/sys-user-layout/SystemUserLayout";
import { newSystemUserValidationScema } from "../../data";
import { CustomTable } from "../../components/common/custom-table/CustomTable";
import { CustomDrawer } from "../../components/common/drawer/CustomDrawer";
import { NewSystemUserDrawerContent } from "../../components/sys-user/NewSystemUserDawerContent";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { SYSTEM_USERS_TABLE } from "../../data/table-data/system-users-table";
import { getSystemUsers } from "../../redux/actions/UsersAction";

export const ManageUsersPage = () => {
  const [openCreateDrawer, setOpenCreateDrawer] = useState(false);
  const dispatch = useAppDispatch();
  const { systemUsers } = useAppSelector((state) => state.users);
  const [dataSet, setDataSet] = useState<any>([]);

  const handleOnClickNewUser = () => {
    setOpenCreateDrawer(true);
  };

  const handleCloseCreateDrawer = () => {
    setOpenCreateDrawer(false);
  };

  useEffect(() => {
    dispatch(getSystemUsers());
  }, []);

  useEffect(() => {
    prepareDataTable();
  }, [systemUsers]);

  const handleOnSaved=()=>{
    dispatch(getSystemUsers());
  }

  const prepareDataTable = () => {
    const tempDataSet: any = [];
    systemUsers?.body.forEach((item) => {
      const dataItem = [
        item.id,
        item.first_name,
        item.last_name,
        item.email,
        item.usertype,
        item.division_name,
      ];
      tempDataSet.push(dataItem);
    });
    setDataSet(tempDataSet);
  };

  return (
    <SystemUserLayout
      pageTitle="Manage Users"
      rightActionButtonText="New User"
      onClickRightAction={handleOnClickNewUser}
    >
      <CustomTable headers={SYSTEM_USERS_TABLE} data={dataSet} />
      <CustomDrawer
        drawerOpen={openCreateDrawer}
        onClose={handleCloseCreateDrawer}
        title="New User"
      >
        <NewSystemUserDrawerContent onSaved={handleOnSaved}/>
      </CustomDrawer>
    </SystemUserLayout>
  );
};
