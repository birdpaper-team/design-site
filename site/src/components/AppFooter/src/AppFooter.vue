<template>
  <bp-row class="app-footer" type="flex" justify="center">
    <bp-col
      :xl="{ span: 14 }"
      :lg="{ span: 17 }"
      :md="{ span: 20 }"
      :sm="{ span: 0 }"
      :xs="{ span: 0 }"
      class="app-footer-container"
    >
      <bp-row type="flex" justify="space-around" align="top">
        <template
          v-for="(item, index) in menuList[t(`Pages.Home.footer`)]"
          :key="`footer-${index}`"
        >
          <bp-col span="24" class="footer-menu-list">
            <ul>
              <p class="footer-menu-list-title">{{ item.title }}</p>
              <template
                v-for="(v, k) in item.children"
                :key="`footer-menu-${index}-${k}`"
              >
                <li
                  class="footer-menu-list-item"
                  v-if="v.type === 'link'"
                  @click="toLink(v)"
                >
                  {{ v.title }}
                </li>
              </template>
            </ul>
          </bp-col>
        </template>
      </bp-row>
    </bp-col>
  </bp-row>

  <!-- Where show copyright info and resume entry -->
  <footer class="footer-bar">
    <p class="footer-bar-text font-quick">
      <span v-html="cfg.VITE_APP_NAME + ' - ' + cfg.VITE_APP_VERSION"></span>
      <a href="http://beian.miit.gov.cn" class="record-num" target="_blank">
        {{ cfg.VITE_APP_RECORD_NUM }}
      </a>
    </p>
  </footer>
</template>

<script>
import { useI18n } from "vue-i18n";
import { inject } from "vue";
import { useFooter } from "@/use/footer";
export default {
  name: "app-footer",
  setup() {
    const cfg = inject("cfg");
    const { t } = useI18n();

    const { menuList } = useFooter();

    const toLink = (v) => {
      window.open(v.path);
    };

    return {
      t,
      cfg,
      toLink,
      menuList,
    };
  },
};
</script>
