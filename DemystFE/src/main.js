import { createApp } from "vue";
import App from "./App.vue";
import "vuetify/dist/vuetify.css";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHistory } from "vue-router";
import LoanScren from "./components/Loan/LoanScren.vue";
import ApplyLoan from "./components/Loan/ApplyLoan.vue";
import LoanForm from "./components/Loan/LoanForm.vue";
import * as labsComponents from "vuetify/labs/components";
import LoanApplicationSubmition from "./components/Loan/LoanApplicationSubmitionDialog.vue";

const app = createApp(App);
const vuetify = createVuetify({
  components: {
    ...components,
    ...directives,
    ...labsComponents,
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/loan" },
    {
      name: "home",
      path: "/loan",
      component: LoanScren,
    },
    {
      name: "loan-application",
      path: "/loanApplication/new",
      component: ApplyLoan,
    },
    { path: "/:notFound(.*)", redirect: "/loan" },
  ],
});

app.use(vuetify);
app.use(router);
app.component("loan-form", LoanForm);
app.component("loanApplication-submition", LoanApplicationSubmition);
app.mount("#app");
