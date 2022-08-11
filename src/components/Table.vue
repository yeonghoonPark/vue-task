<template>
  <div class="desk">
    <div class="container">
      <table>
        <thead>
          <tr>
            <th v-for="(theadTitle, index) in theadTitles" :key="index">
              {{ theadTitle.th }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(movie, index) in movieList"
            :key="index"
            @mousedown="showPoster($event), changeBackgroundColor($event)"
          >
            <td>
              <div>{{ movie.movieName }}</div>
              <ButtonInputActivation
                class="btn-activation"
                @click="giveToLifeInput"
                :message="activation"
              />
            </td>
            <td>
              <FirstInput
                class="inputs-first"
                maxlength="15"
                placeholder="15자"
                disabled
                v-model="movie.oneLineReview"
              />
            </td>
            <td>
              <SecondInput
                class="inputs-second"
                maxlength="15"
                placeholder="15자"
                disabled
                v-model="movie.toDirector"
              />
            </td>
            <td>
              <ThirdInput
                type="number"
                class="inputs-third"
                min="0"
                max="5"
                placeholder="Max 5"
                disabled
                v-model="movie.grade"
              />
            </td>
            <td class="hidden" @click="showImage">
              <MiniImage
                :src="movie.imageSrc"
                :alt="movie.movieName"
                title="확대"
              />
              <!-- v-if, isImageModalShow -->
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
      {{ movieList }}확인
      <form>
        <div class="btn-box">
          <ButtonTable
            style="margin-top: 1.5rem"
            :message="confirm"
            @click="onClick"
          />
        </div>
      </form>
      <div class="print" v-show="isInputModalShow">
        <div class="output-box">
          <h3 style="text-align: center"></h3>
          <ul>
            <li v-for="(aF, index) in inputArray" :key="index">
              {{ aF }}
            </li>
          </ul>

          <div v-for="(movie, index) in movieList" :key="index">
            <img
              v-if="movie.testIndex === index"
              style="width: 80px; height: 100px"
              :src="movie.imageSrc"
              alt=""
            />
          </div>
        </div>
        <div class="btn-box">
          <ButtonPrintModalClose
            style="margin-top: 6.3rem"
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
import ButtonInputActivation from "./ButtonDefault.vue";
import MiniImage from "./ImageDefault.vue";
import ModalImage from "./ImageDefault.vue";
import FirstInput from "./InputDefault.vue";
import SecondInput from "./InputDefault.vue";
import ThirdInput from "./InputDefault.vue";

export default {
  components: {
    ButtonTable,
    ButtonModalClose,
    ButtonPrintModalClose,
    ButtonInputActivation,
    MiniImage,
    ModalImage,
    FirstInput,
    SecondInput,
    ThirdInput,
  },
  name: "Table-",
  setup() {
    const movieList = reactive([
      {
        movieName: "비상선언",
        oneLineReview: "",
        toDirector: "",
        grade: "",
        imageSrc: require("../assets/emergency_declaration.jpg"),
        testIndex: 0,
      },
      {
        movieName: "한산-용의 출현",
        oneLineReview: "",
        toDirector: "",
        grade: "",
        imageSrc: require("../assets/appearance_of_dragon.jpg"),
        testIndex: 1,
      },
      {
        movieName: "헌트",
        oneLineReview: "",
        toDirector: "",
        grade: "",
        imageSrc: require("../assets/hunt.jpg"),
        testIndex: 2,
      },
      {
        movieName: "미니언즈2",
        oneLineReview: "",
        toDirector: "",
        grade: "",
        imageSrc: require("../assets/minions2.jpg"),
        testIndex: 3,
      },
      {
        movieName: "시맨틱 에러-더 무비",
        oneLineReview: "",
        toDirector: "",
        grade: "",
        imageSrc: require("../assets/symantec_error_the_movie.jpg"),
        testIndex: 4,
      },
    ]);
    const theadTitles = reactive([
      { th: "영화" },
      { th: "한줄평" },
      { th: "감독에게" },
      { th: "평점" },
      { th: "포스터" },
    ]);
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
    //   isImageModalShow.value = true;
    //   console.log(isImageModalShow);
    // };

    // const modalClosing = (event) => {
    //   event.stopPropagation();
    //   isImageModalShow = false;
    //   isInputModalShow = false;
    // };

    return {
      movieList,
      theadTitles,
      close,
      confirm,
      // isImageModalShow,
      // isInputModalShow,
      changeBackgroundColor,
      showPoster,
    };
  },
  data() {
    return {
      inputArray: [],

      isImageModalShow: false,
      isInputModalShow: false,
      isDisabled: true,

      activation: "Activation",
    };
  },
  methods: {
    showImage() {
      this.isImageModalShow = true;
    },

    modalClosing(event) {
      event.stopPropagation();
      this.isImageModalShow = false;
      this.isInputModalShow = false;
    },

    inputModalClosing(event) {
      event.stopPropagation();
      this.isInputModalShow = false;
      this.inputArray = [];
    },

    saveInputValue(inputValue) {
      this.inputArray.push(inputValue);
    },

    onClick(event) {
      event.preventDefault();
      const printInputs = document.querySelectorAll("input");
      this.isInputModalShow = true;

      printInputs.forEach((input) => {
        if (input.parentNode.parentNode.className === "active") {
          this.saveInputValue(input.value);
        }
      });
    },

    giveToLifeInput(event) {
      const target = event.currentTarget.parentNode;
      const inputs = target.parentNode.parentNode.querySelectorAll("input");
      const testTitle = target.firstChild.innerText;
      const h3 = document.querySelector("h3");
      h3.innerText = testTitle;

      // 마지막 작업.
      const testImage = target.lastChild;
      console.log(testImage);

      inputs.forEach((input) => {
        {
          input.parentNode.parentNode.className === "active"
            ? (input.disabled = false)
            : (input.disabled = true);
        }
      });
    },
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

.btn-activation {
  width: 80px;
  height: 22px;
  margin: 5px auto 0;
  font-size: 12px;
  line-height: 12px;
  background-color: #aabbaa;
}

.btn-activation:hover {
  color: #3dc074;
  background-color: #111101;
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
  background: rgba(0, 0, 0, 0.9);
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
  background: rgba(0, 0, 0, 0.9);
}

.output-box {
  position: relative;
  width: 50%;
  height: 500px;
  margin: 2rem auto;
  transform: translateY(22%);
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  background: #ffffff;
  border: 5px solid #3dc074;
}

.output-box ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding: 1rem;
}
</style>
