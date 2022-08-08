<template>
  <div class="table">
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>{{ theadTitle.th1 }}</th>
            <th>{{ theadTitle.th2 }}</th>
            <th>{{ theadTitle.th3 }}</th>
            <th>{{ theadTitle.th4 }}</th>
            <th>{{ theadTitle.th5 }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(movie, index) in movieList"
            :key="index"
            @click="changeBackgroundColor"
            @mouseup="showPoster"
          >
            <td>{{ movie.movieName }}</td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td>
              <input type="text" max="5" min="0" title="Max Score is 5" />
            </td>
            <td class="hidden" @click.capture="showImage">
              <img :src="movie.imageSrc" :alt="movie.movieName" />
              <div class="modal-image" v-if="isIfshow">
                <img :src="movie.imageSrc" :alt="movie.movieName" />
                <div class="btn-box">
                  <ButtonModalClose
                    style="margin-top: 9rem"
                    :message="close"
                    @click="modalClosing"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <form>
        <div class="btn-box">
          <ButtonTable :message="confirm" @click="onSubmit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { provide } from "@vue/runtime-core";
// import { ref } from "vue";
// import { reactive } from "vue";
import ButtonTable from "./ButtonDefault.vue";
import ButtonModalClose from "./ButtonDefault.vue";

export default {
  components: { ButtonTable, ButtonModalClose },
  // name의 목적?
  name: "Table-",
  setup() {
    // provide("message", "닫기");

    const CLASS_NAME_ACTIVE = "active";
    const CLASS_NAME_HIDDEN = "hidden";

    const classNameActiveRemove = (trElement) => {
      trElement.forEach((trElement) => {
        trElement.classList.remove(CLASS_NAME_ACTIVE);
      });
    };

    const changeBackgroundColor = (event) => {
      const trElement = document.querySelectorAll("tbody>tr");
      const target = event.currentTarget;
      classNameActiveRemove(trElement);
      target.classList.add(CLASS_NAME_ACTIVE);
    };

    const classNameAddHidden = (lastTdElements) => {
      lastTdElements.forEach((lastTdElement) => {
        lastTdElement.classList.add(CLASS_NAME_HIDDEN);
      });
    };

    const showPoster = (event) => {
      const lastTdElement = document.querySelectorAll("tbody>tr>td:last-child");
      const target = event.currentTarget;
      const lastTarget = target.lastChild;
      classNameAddHidden(lastTdElement);
      lastTarget.classList.remove(CLASS_NAME_HIDDEN);
    };

    return { changeBackgroundColor, showPoster };
  },
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
      theadTitle: {
        th1: "영화",
        th2: "소감",
        th3: "평가",
        th4: "평점",
        th5: "포스터",
      },
      close: "닫기",
      confirm: "확인",
      isIfshow: false,

      testValue: "",
      testValue2: "",
      as: "",
    };
  },
  methods: {
    showImage() {
      this.isIfshow = true;
    },

    modalClosing(event) {
      event.stopPropagation();
      this.isIfshow = false;
    },

    onSubmit(event) {
      event.preventDefault();
      const inputs = document.querySelectorAll("input");
      console.log(inputs[0]);
      inputs.forEach((input) => {
        if (input.value !== "") {
          console.log("완료");
        } else {
          console.log("빈칸없이 입력해주세요");
        }
      });
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.show {
  display: show;
}

.table {
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

.active {
  background-color: rgba(61, 192, 116, 0.2);
}

td img {
  width: 31px;
  height: 37px;
  cursor: zoom-in;
}

.btn-box {
  width: 100%;
  text-align: center;
}

.modal-image {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.2);
}

.modal-image img {
  width: 440px;
  height: 620px;
  transform: translateY(20%);
}
</style>
