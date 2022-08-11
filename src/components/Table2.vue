<template>
  <div class="desk">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th
              v-for="(theadTitle, index) in theadTitles"
              :key="index"
              :class="theadTitle.class"
            >
              {{ theadTitle.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(movie, index) in movieList"
            :key="index"
            :class="movie.class"
            @mousedown="changeBackgroundColor($event), showPoster($event)"
          >
            <td :class="movie.class">{{ movie.movieName }}</td>
            <td :class="movie.class">
              <InputOneLineReview maxlength="5" v-model="inpuText" />
            </td>
            <td :class="movie.class"><InputToDirector maxlength="5" /></td>
            <td :class="movie.class">
              <InputGrade type="number" min="0" max="5" />
            </td>
            <td v-show="isPoster" :class="movie.class">
              <ImagePoster :src="movie.imageSrc" />
            </td>
          </tr>
        </tbody>
      </table>
      <ButtonSubmit :message="click" @click="onClick" />
      <div>
        <ul v-show="isShow">
          <li>{{ inputText }}</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <!-- <input type="text" v-model="inputText" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import InputOneLineReview from "./InputDefault.vue";
import InputToDirector from "./InputDefault.vue";
import InputGrade from "./InputDefault.vue";
import ImagePoster from "./ImageDefault.vue";
import ButtonSubmit from "./ButtonDefault.vue";

export default {
  name: "Table-2",
  components: {
    InputOneLineReview,
    InputToDirector,
    InputGrade,
    ImagePoster,
    ButtonSubmit,
  },
  setup() {
    const movieList = reactive([
      {
        movieName: "Emergency",
        oneLineReview: "",
        toDirector: "",
        grade: "",
        imageSrc: require("../assets/emergency_declaration.jpg"),
        testIndex: 0,
        class: "emergency_declaration",
      },
      {
        movieName: "Dragon",
        oneLineReview: "",
        toDirector: "",
        grade: "",
        imageSrc: require("../assets/appearance_of_dragon.jpg"),
        testIndex: 1,
        class: "appearance_of_dragon",
      },
    ]);
    const theadTitles = reactive([
      { title: "영화", class: "movie" },
      { title: "한줄평", class: "onLineReview" },
      { title: "감독에게", class: "toDirector" },
      { title: "평점", class: "grade" },
      { title: "포스터", class: "poster" },
    ]);
    const isPoster = ref(false);
    const isActive = ref(false);
    const click = ref("Click");

    const isShow = ref(false);
    const inputText = ref("");

    const changeBackgroundColor = (event) => {
      const target = event.currentTarget;
    };

    const showPoster = (event) => {};

    const onClick = () => {
      isShow.value = true;
      console.log(inputText.value);
    };

    return {
      movieList,
      theadTitles,
      isPoster,
      isActive,
      changeBackgroundColor,
      showPoster,
      click,
      isShow,
      onClick,
      inputText,
    };
  },
};
</script>

<style scoped>
/* Effective className */
.hidden {
  display: none;
}

.show {
  display: block;
}

.active {
  background-color: #3dc07433;
}

/* CSS */
.desk {
  width: 100%;
  margin: 77px auto 0;
}

.container {
  padding: 5rem;
}

table {
  width: 100%;
  border: 1px solid #111101;
  text-align: center;
}

thead tr th,
tbody tr td {
  padding: 1rem;
}

thead {
  background-color: #111101;
}

thead th {
  color: #fff;
}

tbody tr {
  background-color: #f8f8f5;
}

tbody tr td:last-child {
  padding: 0 1rem;
}

td img {
  width: 31px;
  height: 37px;
  cursor: zoom-in;
}
</style>
