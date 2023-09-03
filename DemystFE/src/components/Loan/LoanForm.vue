<template>
  <div class="container add-movie-form mt-10 mb-10">
    <v-form @submit.prevent="submit" v-show="!showBalanceSheet">
      <v-container>
        <v-label for="companyName">Company Name</v-label>
        <v-text-field
          v-model="companyName"
          :rules="companyNameRules"
          placeholder="Enter your company name"
          id="companyName"
        ></v-text-field>

        <v-label for="establishmentYear">Establishment year</v-label>
        <v-text-field
          v-model="establishmentYear"
          :counter="4"
          :rules="establishmentYearRules"
          placeholder="20XX"
          id="establishmentYear"
        ></v-text-field>

        <v-label for="loanAmount">Loan amount</v-label>
        <v-text-field
          v-model="loanAmount"
          :counter="4"
          :rules="loanAmountRules"
          placeholder="Enter your amount in $"
          id="loanAmount"
        ></v-text-field>

        <v-label for="accountingProvider">Accounting provider</v-label>
        <v-row>
          <v-col cols="12" md="12">
            <v-select
              v-model="accountingProvider"
              :items="accountingProviderList"
              :rules="accountingProviderRules"
              placeholder="select any 1 accounting provider"
              id="actors"
            ></v-select>
          </v-col>
        </v-row>

        <v-btn class="me-4" type="submit"> Submit </v-btn>

        <v-btn @click="handleReset"> clear </v-btn>
      </v-container>
    </v-form>
    <balance-sheet
      v-show="showBalanceSheet"
      :businessName="companyName"
      :businessEstablishmentYear="establishmentYear"
      :loanAmount="loanAmount"
      :balanceSheet="balanceSheet"
    ></balance-sheet>
  </div>
</template>
<script>
import BalanceSheet from "./BalanceSheet";
export default {
  components: { BalanceSheet },
  data: () => ({
    valid: false,
    dialog: false,
    companyName: "",
    establishmentYear: "",
    accountingProvider: "",
    loanAmount: "",
    accountingProviderList: ["xero", "myob"],
    showBalanceSheet: false,
    balanceSheet: [],
    companyNameRules: [
      (value) => {
        if (value) return true;
        return "company name is required.";
      },
    ],
    establishmentYearRules: [
      (value) => {
        if (value) return true;
        return "established year is required";
      },
    ],
    loanAmountRules: [
      (value) => {
        if (value.length && value.match(/^-?\d+$/)) return true;
        return "enter a valid amount in digits";
      },
    ],
    accountingProviderRules: [
      (value) => {
        if (value.length) return true;
        return "select 1 accounting provider from the dropdown";
      },
    ],
  }),
  methods: {
    requiredValuesFilledOrNot() {
      const res1 = this.companyName.length && this.establishmentYear.length;
      const res2 = this.loanAmount.length && this.loanAmount.match(/^-?\d+$/);
      const res3 = this.accountingProvider.length;
      const res = res1 && res2 && res3;
      return res != 0;
    },
    fetchProducers() {},
    async submit() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/balance-sheet?businessName=${this.companyName}&businessEstablishmentYear=${this.establishmentYear}&account=${this.accountingProvider}`
        );
        const data = await response.json();
        if (response.status === 200) {
          this.balanceSheet = data.balanceSheet;
        } else {
          alert("Failed to fetch balance sheet" + response.message);
        }
      } catch (error) {
        alert("Error while fetching balance sheet:", error);
      }
      if (this.requiredValuesFilledOrNot()) this.showBalanceSheet = true;
    },
    handleReset() {
      this.companyName = "";
      this.establishmentYear = "";
      this.accountingProvider = "";
      this.loanAmount = "";
    },
  },
};
</script>
<style scoped>
form {
  background-color: rgb(255, 250, 243);
  border: 2px solid rgb(255, 255, 157);
  border-radius: 9px;
}
</style>
