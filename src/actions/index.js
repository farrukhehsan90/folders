import { actionTypes } from "../constants/index";

const { LOGIN, LOADING } = actionTypes;

export const explorerActions = {
  setCurrentParent: payload => {
    return {
      type: "SETCURRENTPARENT",
      payload
    };
  },
  login: payload => {
    return {
      type: LOGIN,
      payload
    };
  },
  setLoading: payload => {
    return {
      type: LOADING,
      payload
    };
  },
  showContextMenu: payload => {
    return {
      type: actionTypes.SHOWCONTEXTMENU,
      payload
    };
  },
  dispatchShowFileInfo: payload => {
    return {
      type: actionTypes.SHOWFILEINFO,
      payload
    };
  },
  setSelectedItemId: payload => {
    return {
      type: actionTypes.SETSELECTEDITEMID,
      payload
    };
  },
  showAddItemForm: payload => {
    return {
      type: actionTypes.SHOWADDITEMFORM,
      payload
    };
  },
  createNewElement: payload => {
    return {
      type: actionTypes.CREATENEWELEMENT,
      payload
    };
  },
  deleteElement: payload => {
    return {
      type: actionTypes.DELETEELEMENT,
      payload
    };
  }
};
