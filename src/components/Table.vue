<template>
  <div class="table">
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>상영영화</th>
            <th>한줄평</th>
            <th>감독에게</th>
            <th>평점</th>
            <th>포스터</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(movie, index) in movieList" :key="index" @click="changeBackgroundColor">
            <td>{{ movie.movieName }}</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="number" max="10" min="0" @click="onChangeTest" /></td>
            <td class="hidden">
              <img :src="movie.imageSrc" :alt="movie.movieName" />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Table-",
  data() {
    return {
      movieList: [
        {
          movieName: "비상선언",
          oneLineReview: "",
          toDirctor: "",
          grade: "",
          imageSrc: require("../assets/emergency_declaration.jpg"),
        },
        {
          movieName: "한산-용의 출현",
          oneLineReview: "",
          toDirctor: "",
          grade: "",
          imageSrc: require("../assets/appearance_of_dragon.jpg"),
        },
        {
          movieName: "헌트",
          oneLineReview: "",
          toDirctor: "",
          grade: "",
          imageSrc: require("../assets/hunt.jpg"),
        },
        {
          movieName: "미니언즈2",
          oneLineReview: "",
          toDirctor: "",
          grade: "",
          imageSrc: require("../assets/minions2.jpg"),
        },
        {
          movieName: "시맨틱 에러-더 무비",
          oneLineReview: "",
          toDirctor: "",
          grade: "",
          imageSrc: require("../assets/symantec_error_the_movie.jpg"),
        },
      ],
    };
  },
  methods: {
    changeBackgroundColor(event) {
      const trElement = document.querySelectorAll("tr");
      const target = event.currentTarget;
      this.classNameActiveRemove(trElement);
      target.classList.add("active");
      this.testFunction(event);
    },
    classNameActiveRemove(target) {
      target.forEach((trElement) => {
        trElement.classList.remove("active");
      });
    },
    testFunction(event) {
      console.log(event.currentTarget.lastChild);
      event.currentTarget.lastChild.classList.remove("hidden");
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  margin: 77px auto 0;
}

.container {
  padding: 5rem;
}

table {
  width: 100%;
  border: 1px solid #000;
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

.active {
  background-color: rgba(61, 192, 116, 0.2);
}

td img {
  width: 31px;
  height: 37px;
  cursor: zoom-in;
}

button {
  /* all: unset; */
  width: 100%;
  padding: 1rem;
  border: 1px solid #000;
  border-top: none;
  text-align: center;
}

.hidden {
  display: none;
}

.show {
  display: show;
}
</style>
