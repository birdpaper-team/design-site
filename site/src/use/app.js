/**
 * @Author: Sam
 * @Date: 2021-11-05 20:02:25
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2021-11-05 20:02:25
 */

import api from "../request/api";
import { reactive } from "vue";
import emitter from "@/model/mitt";
import { randomString } from "../lib/util";
import { useLocalStorage } from "./storage";

export const useApp = () => {
  const { home } = api;
  const { local } = useLocalStorage();

  const generateLocalId = () => randomString();

  const initApp = () => {
    let local_id = local.get('local_id');
    if (!local_id) {
      local_id = randomString();
      local.set('local_id', local_id);
    };

    return new Promise((resolve, reject) => {
      home(local_id).then(res => {
        local.set('config', res.data && res.data.site.config);
        emitter.emit("app-complete")
      });
    });
  }

  return {
    initApp
  }
}