<template>
  <div class="desk">
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
            <td>
              <input
                type="text"
                class="inputs-first"
                maxlength="15"
                placeholder="1~15자까지 입력 가능합니다."
                :disabled="isDisabled"
              />
            </td>
            <td>
              <input
                type="text"
                class="inputs-second"
                maxlength="15"
                placeholder="1~15자까지 입력 가능합니다."
              />
            </td>
            <td>
              <input
                type="number"
                class="inputs-third"
                min="0"
                max="5"
                placeholder="1~5"
              />
            </td>
            <td class="hidden" @click="showImage">
              <MiniImage :src="movie.imageSrc" :alt="movie.movieName" />
              <div class="modal-image" v-if="isImageModalShow">
                <ModalImage :src="movie.imageSrc" :alt="movie.movieName" />
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
          <ButtonTable :message="confirm" @click="onClick" />
        </div>
      </form>
      <div class="print" v-if="isInputModalShow">
        <div class="output-box">
          <ul class="fi-output">
            <li v-for="(movie, index) in movieList" :key="index">
              Title: {{ movie.movieName }}
            </li>
          </ul>
          <ul class="se-output">
            <li v-for="(aF, index) in arrayFirst" :key="index">
              한줄평: {{ aF }}
            </li>
          </ul>
          <ul class="th-output">
            <li v-for="(aC, index) in arraySecond" :key="index">
              감독에게: {{ aC }}
            </li>
          </ul>
          <ul class="fo-output">
            <li v-for="(aT, index) in arrayThird" :key="index">
              평점: {{ aT }}
            </li>
          </ul>
        </div>
        <div class="btn-box">
          <ButtonPrintModalClose
            style="margin-top: 3rem"
            :message="close"
            @click="inputModalClosing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import ButtonTable from "./ButtonDefault.vue";
import ButtonModalClose from "./ButtonDefault.vue";
import ButtonPrintModalClose from "./ButtonDefault.vue";

import MiniImage from "./ImageDefault.vue";
import ModalImage from "./ImageDefault.vue";

export default {
  components: {
    ButtonTable,
    ButtonModalClose,
    ButtonPrintModalClose,
    MiniImage,
    ModalImage,
  },
  name: "Table-",
  setup() {
    const movieList = reactive([
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
    ]);
    const theadTitle = reactive({
      th1: "영화",
      th2: "한줄평",
      th3: "감독에게",
      th4: "평점",
      th5: "포스터",
    });
    const close = ref("닫기");
    const confirm = ref("확인");
    const CLASS_NAME_ACTIVE = "active";
    const CLASS_NAME_HIDDEN = "hidden";
    // let isImageModalShow = ref(false);
    // let isInputModalShow = ref(false);

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

    // const showImage = () => {
    //   isImageModalShow = true;
    //   console.log(isImageModalShow);
    // };

    // const modalClosing = (event) => {
    //   event.stopPropagation();
    //   isImageModalShow = false;
    //   isInputModalShow = false;
    // };

    return {
      movieList,
      theadTitle,
      close,
      confirm,
      // isImageModalShow,
      // isInputModalShow,
      changeBackgroundColor,
      showPoster,
      // showImage,
      // modalClosing,
    };
  },
  data() {
    return {
      arrayFirst: [],
      arraySecond: [],
      arrayThird: [],

      isImageModalShow: false,
      isInputModalShow: false,
    };
  },
  methods: {
    showImage() {
      this.isImageModalShow = true;
      console.log(this.isImageModalShow);
    },

    modalClosing(event) {
      event.stopPropagation();
      this.isImageModalShow = false;
      this.isInputModalShow = false;
    },

    inputModalClosing(event) {
      event.stopPropagation();
      this.isInputModalShow = false;
      this.arrayFirst = [];
      this.arraySecond = [];
      this.arrayThird = [];
    },

    // onClick 원본
    onClick(event) {
      event.preventDefault();
      const inputsFirst = document.querySelectorAll(".inputs-first");
      const inputsSecond = document.querySelectorAll(".inputs-second");
      const inputsThird = document.querySelectorAll(".inputs-third");
      if (
        inputsFirst[0].value !== "" &&
        inputsFirst[1].value !== "" &&
        inputsFirst[2].value !== "" &&
        inputsFirst[3].value !== "" &&
        inputsFirst[4].value !== "" &&
        inputsSecond[0].value !== "" &&
        inputsSecond[1].value !== "" &&
        inputsSecond[2].value !== "" &&
        inputsSecond[3].value !== "" &&
        inputsSecond[4].value !== "" &&
        inputsThird[0].value !== "" &&
        inputsThird[1].value !== "" &&
        inputsThird[2].value !== "" &&
        inputsThird[3].value !== "" &&
        inputsThird[4].value !== ""
      ) {
        console.log("성공");
        this.saveInputValue();
        this.isInputModalShow = true;
      } else {
        alert("빈 칸을 모두 입력해주세요");
      }
    },

    saveInputValue() {
      const inputsFirst = document.querySelectorAll(".inputs-first");
      const inputsSecond = document.querySelectorAll(".inputs-second");
      const inputsThird = document.querySelectorAll(".inputs-third");

      inputsFirst.forEach((item) => {
        this.arrayFirst.push(item.value);
      });

      inputsSecond.forEach((item) => {
        this.arraySecond.push(item.value);
      });

      inputsThird.forEach((item) => {
        this.arrayThird.push(item.value);
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

.active {
  background-color: #3dc07433;
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

.print {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.output-box {
  position: relative;
  width: 80%;
  height: 600px;
  margin: 2rem auto;
  transform: translateY(10%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  border: 5px solid #111101;
}

.output-box ul,
.output-box li {
  padding: 1rem;
}
</style>
