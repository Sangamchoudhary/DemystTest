<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <v-btn
          variant="text"
          v-bind="props"
          class="submit-btn"
          @click="handleSubmit"
        >
          Submit
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          <v-icon color="success" icon="mdi-check-circle"></v-icon>
          Loan Application
        </v-card-title>
        <v-card-text>{{ loanResult }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="handleReturnToHome"
          >
            Return to Home
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: [
    "show",
    "businessName",
    "businessEstablishmentYear",
    "loanAmount",
    "balanceSheet",
  ],
  data() {
    return {
      dialog: this.show,
      loanResult: "Your application is submitted successfully.",
      loanPassed: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/loan`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            businessName: this.businessName,
            businessEstablishmentYear: this.businessEstablishmentYear,
            loanAmount: this.loanAmount,
            balanceSheet: this.balanceSheet,
          }),
        });
        const data = await response.json();
        this.loanPassed = data.loanApproved;
      } catch (error) {
        alert("Error while fetching balance sheet:", error);
      }
    },
    handleReturnToHome() {
      this.dialog = false;
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.submit-btn {
  outline: none;
}
</style>
