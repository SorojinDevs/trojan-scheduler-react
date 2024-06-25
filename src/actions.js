import { createAction } from "@reduxjs/toolkit";

export const addCourse = createAction("courses/add");
export const toggleCourseInclude = createAction("courses/toggleInclude");
export const toggleCoursePenalize = createAction("courses/togglePenalize");
export const recursiveSetPenalize = createAction("courses/recSetPenalize");
export const deleteCourse = createAction("courses/delete");
export const setIncludeCourse = createAction("courses/setInclude");
export const setGroupCourse = createAction("courses/setGroup");
export const resetCourseGroup = createAction("courses/resetGroup");
export const startGroupFromOne = createAction("courses/startGroupOne");
export const loadCoursebin = createAction("courses/load");
export const filterSelection = createAction("courses/filterExclude");
export const filterPenalize = createAction("courses/filterExempt");
export const editPreferences = createAction("preferences/edit");
export const loadPreferences = createAction("preferences/load");
export const addReservedSlot = createAction("reserved/add");
export const removeReservedSlot = createAction("reserved/remove");
export const saveTaskResult = createAction("task/save");
export const setUserTokens = createAction("user/setToken");
export const setUserProfile = createAction("user/setProfile");
export const clearUserState = createAction("user/clear");
export const editSetting = createAction("setting/edit");
export const loadSetting = createAction("setting/load");