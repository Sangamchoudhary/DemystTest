<template>
  <v-card
    class="mx-auto my-16"
    max-width="500"
    style="
      background-image: linear-gradient(
        to right,
        rgba(40, 0, 0, 0),
        rgba(40, 0, 0, 1)
      );
    "
  >
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title
                class="text-white"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <router-link to="loanApplication/new">
                <v-btn class="ma-2" color="primary">
                  Start Loan
                  <v-icon end icon="mdi-play"></v-icon>
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Demyst Loan Application system",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOICTwVRJpoHVITRWTuXUxf0Dh-PJGNyjUWQ",
        flex: 12,
      },
    ],
  }),
};
</script>
