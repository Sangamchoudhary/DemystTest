<template>
  <div>
    <v-data-table-virtual
      :headers="headers"
      :items="balanceSheetRepresentation"
      class="elevation-1"
      height="500"
      item-value="name"
    ></v-data-table-virtual>
    <v-btn
      style="background-color: #009d99"
      class="mt-4 mr-6 p-2 mb-7 float-right"
    >
      <loanApplication-Submition
        :businessName="businessName"
        :businessEstablishmentYear="businessEstablishmentYear"
        :loanAmount="loanAmount"
        :balanceSheet="balanceSheet"
      ></loanApplication-Submition>
    </v-btn>
  </div>
</template>
<script>
import LoanApplicationSubmition from "./LoanApplicationSubmitionDialog.vue";
export default {
  props: [
    "businessName",
    "businessEstablishmentYear",
    "loanAmount",
    "balanceSheet",
  ],
  components: { LoanApplicationSubmition },
  data: () => ({
    headers: [
      {
        title: "Year",
        align: "start",
        sortable: false,
        key: "year",
      },
      { title: "Month", align: "end", key: "month" },
      { title: "Profit/Loss", align: "end", key: "profitOrLoss" },
      { title: "Assets Value", align: "end", key: "assetsValue" },
    ],
    balanceSheets: [],
  }),
  computed: {
    balanceSheetRepresentation() {
      return [...Array(this.balanceSheets.length).keys()].map((i) => {
        const bs = { ...this.balanceSheets[i % 10] };
        bs.name = `${bs.year} #${i}`;
        return bs;
      });
    },
  },
  methods: {},
  updated() {
    this.balanceSheets = this.balanceSheet;
  },
};
</script>
