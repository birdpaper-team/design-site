/*
 * @Author: Sam
 * @Date: 2023-02-16 08:42:34
 * @Last Modified by: Sam
 * @Last Modified time: 2023-02-16 18:03:30
 */

import BirdpaperUI from "../../basic-components/packages";
import "../../basic-components/packages/style/index.less";
export type DocType = "_component";
import { HTMLDecode, parseDom } from "@/util/dom";
import hljs from "highlight.js/lib/core.js";
import { marked } from "marked";
import { createApp } from "vue";

export const useMarkdown = () => {
  /** 组件目录映射 */
  const pathMap = {
    _component: {
      glob: import.meta.glob(`../../basic-components/**/*.md`),
      perfix: `../../basic-components/`,
    },
  };

  /**
   * 获取文档内容
   * @param type
   * @param resoure
   */
  const getContent = async (type: DocType, resoure: string) => {
    const modules = pathMap[type]?.glob;
    // const mdObj = modules[`${pathMap[type]?.perfix}${resoure}.md`];
    let finalStr = "";

    // let mdRes = await import(/* @vite-ignore */ mdObj?.name);
    // const content = HTMLDecode(mdRes.html);
    // console.log("[ content ]-33", content);
    // finalStr = content;

    const demoObj = modules[`../../basic-components/packages/bp-button/demo.md`];
    let demoRes = await import(/* @vite-ignore */ demoObj?.name);
    console.log('[ demoRes ]-40', demoRes);
    // let demo = HTMLDecode(parseDom(demoRes.html)[0].children[0].innerHTML);

    // finalStr = demo;
    // const el = document.createElement("div");
    // el.setAttribute("id","app-test");
    // document.body.append(el);
    const MyComponent = createApp(demoRes.VueComponent).use(BirdpaperUI);
    MyComponent.mount('#app-test')

    // const dom = parseDom(content);
    // for (let i = 0; i < dom.length; i++) {
    //   const path = dom[i].innerHTML.split("@import ")[1];
    //   console.log("[ path ]-39", path);

    //   const demoObj = modules[`${pathMap[type]?.perfix}${path}.md`];
    //   let demoRes = await import(/* @vite-ignore */ demoObj?.name);

    //   let demo = HTMLDecode(parseDom(demoRes.html)[0].children[0].innerHTML);
    //   console.log("[ demo ]-46", demo);

    //   finalStr += demo;
    // }

    // console.log("[ demoRes ]-42", demoRes.VueComponent);
    // console.log("[ demoRes.html ]-43", demoRes.html);
    // demo = `<div>${demo}</div>`
    // console.log("[ demo ]-46", demo);
    //   const com = Vue.extend({
    //     template: demo
    // })

    console.log("[ finalStr ]-62", finalStr);
    return {
      html: finalStr,
    };
  };

  return {
    getContent,
  };
};
