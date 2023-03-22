/**
 * @Author: Sam
 * @Date: 2021-11-01 09:35:53
 * @LastModifiedBy:   Sam
 * @LastModifiedTime: 2021-11-01 09:35:53
 */

// 站点底部控制
export const useFooter = () => {
  const menuList = {
    cn: [
      {
        title: "相关资源",
        children: [
          { title: "Github 地址", type: "link", disabled: false, path: "https://github.com/liluanhui/birdpaper-ui", target: "self" },
          { title: "Gitee 地址", type: "link", disabled: false, path: "https://gitee.com/birdpaper/birdpaper-ui", target: "self" },
        ]
      },
      {
        title: "社区",
        children: [
          { title: "语雀文档", type: "link", disabled: false, path: "https://www.yuque.com/birdpaper.design", target: "self" },
        ]
      }, {
        title: "帮助",
        children: [
          { title: "更新日志", type: "link", disabled: false, path: "/components/version_c", target: "self" },
          // { title: "反馈 Bug", type: "link", disabled: false, path: "", target: "self" },
          // { title: "Vue3 组件库开发实战", type: "link", disabled: false, path: "", target: "self" },
        ]
      },
      //  {
      //   title: "更多",
      //   children: [
      //     { title: "微信公众号", type: "link", disabled: false, path: "", target: "self" },
      //   ]
      // }
    ],

    en: [
      {
        title: "Related resources",
        children: [
          { title: "Github Repositories", type: "link", disabled: false, path: "https://github.com/liluanhui/birdpaper-ui", target: "self" },
          { title: "Gitee Repositories", type: "link", disabled: false, path: "https://gitee.com/birdpaper/birdpaper-ui", target: "self" },
        ]
      },
      {
        title: "Community",
        children: [
          { title: "Yuque document", type: "link", disabled: false, path: "https://www.yuque.com/birdpaper.design", target: "self" },
        ]
      }, {
        title: "Help",
        children: [
          { title: "Change log", type: "link", disabled: false, path: "/components/version_c", target: "self" },
          // { title: "Feedback Bug", type: "link", disabled: false, path: "", target: "self" },
          // { title: "Vue3 Development practice", type: "link", disabled: false, path: "", target: "self" },
        ]
      },
      //  {
      //   title: "More",
      //   children: [
      //     { title: "Birdpaper's weChat", type: "link", disabled: false, path: "", target: "self" },
      //   ]
      // }
    ],
  };

  return {
    menuList
  }
}