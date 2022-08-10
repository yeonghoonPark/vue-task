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
              <input
                type="text"
                class="inputs-first"
                maxlength="15"
                placeholder="15자"
                disabled
              />
            </td>
            <td>
              <input
                type="text"
                class="inputs-second"
                maxlength="15"
                placeholder="15자"
                disabled
              />
            </td>
            <td>
              <input
                type="number"
                class="inputs-third"
                min="0"
                max="5"
                placeholder="Max 5"
                disabled
              />
            </td>
            <td class="hidden" @click="showImage">
              <MiniImage
                :src="movie.imageSrc"
                :alt="movie.movieName"
                title="확대"
              />
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
            <li v-for="(aF, index) in arrayOne" :key="index">
              {{ aF }}
            </li>
          </ul>
          <img class="confirm-image" src="" alt="" />
        </div>
        <div class="btn-box">
          <ButtonPrintModalClose
            style="margin-top: 2rem"
            :message="close"
            @click="inputModalClosing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import ButtonTable from './ButtonDefault.vue';
import ButtonModalClose from './ButtonDefault.vue';
import ButtonPrintModalClose from './ButtonDefault.vue';
import ButtonInputActivation from './ButtonDefault.vue';
import MiniImage from './ImageDefault.vue';
import ModalImage from './ImageDefault.vue';
// import ConfirmImage from './ImageDefault.vue';

export default {
  components: {
    ButtonTable,
    ButtonModalClose,
    ButtonPrintModalClose,
    ButtonInputActivation,
    MiniImage,
    ModalImage,
  },
  name: 'Table-',
  setup() {
    const movieList = reactive([
      {
        movieName: '비상선언',
        oneLineReview: '',
        toDirctor: '',
        grade: '',
        imageSrc: require('../assets/emergency_declaration.jpg'),
      },
      {
        movieName: '한산-용의 출현',
        oneLineReview: '',
        toDirctor: '',
        grade: '',
        imageSrc: require('../assets/appearance_of_dragon.jpg'),
      },
      {
        movieName: '헌트',
        oneLineReview: '',
        toDirctor: '',
        grade: '',
        imageSrc: require('../assets/hunt.jpg'),
      },
      {
        movieName: '미니언즈2',
        oneLineReview: '',
        toDirctor: '',
        grade: '',
        imageSrc: require('../assets/minions2.jpg'),
      },
      {
        movieName: '시맨틱 에러-더 무비',
        oneLineReview: '',
        toDirctor: '',
        grade: '',
        imageSrc: require('../assets/symantec_error_the_movie.jpg'),
      },
    ]);
    const theadTitle = reactive({
      th1: '영화',
      th2: '한줄평',
      th3: '감독에게',
      th4: '평점',
      th5: '포스터',
    });
    const close = ref('닫기');
    const confirm = ref('확인');
    const CLASS_NAME_ACTIVE = 'active';
    const CLASS_NAME_HIDDEN = 'hidden';
    // let isImageModalShow = ref(false);
    // let isInputModalShow = ref(false);

    const classNameActiveRemove = (trElement) => {
      trElement.forEach((trElement) => {
        trElement.classList.remove(CLASS_NAME_ACTIVE);
      });
    };

    const changeBackgroundColor = (event) => {
      const trElement = document.querySelectorAll('tbody>tr');
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
      const lastTdElement = document.querySelectorAll('tbody>tr>td:last-child');
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
    };
  },
  data() {
    return {
      arrayOne: [],
      arrayTwo: [],
      arrayThree: [],
      arrayFour: [],
      arrayFive: [],

      isImageModalShow: false,
      isInputModalShow: false,
      isDisabled: true,

      activation: 'Activation',
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
      this.arrayOne = [];
    },

    // onClick 원본
    // onClick(event) {
    //   event.preventDefault();
    //   const inputsFirst = document.querySelectorAll('.inputs-first');
    //   const inputsSecond = document.querySelectorAll('.inputs-second');
    //   const inputsThird = document.querySelectorAll('.inputs-third');
    //   if (
    //     inputsFirst[0].value !== '' &&
    //     inputsFirst[1].value !== '' &&
    //     inputsFirst[2].value !== '' &&
    //     inputsFirst[3].value !== '' &&
    //     inputsFirst[4].value !== '' &&
    //     inputsSecond[0].value !== '' &&
    //     inputsSecond[1].value !== '' &&
    //     inputsSecond[2].value !== '' &&
    //     inputsSecond[3].value !== '' &&
    //     inputsSecond[4].value !== '' &&
    //     inputsThird[0].value !== '' &&
    //     inputsThird[1].value !== '' &&
    //     inputsThird[2].value !== '' &&
    //     inputsThird[3].value !== '' &&
    //     inputsThird[4].value !== ''
    //   ) {
    //     console.log('성공');
    //     this.saveInputValue();
    //     this.isInputModalShow = true;
    //   } else {
    //     alert('빈 칸을 모두 입력해주세요');
    //   }
    // },

    saveInputValue(inputValue) {
      this.arrayOne.push(inputValue);
    },

    onClick(event) {
      event.preventDefault();
      const printInputs = document.querySelectorAll('input');
      // const outputUl = document.querySelector('.output-ul');
      // console.log(outputUl);
      this.isInputModalShow = true;

      printInputs.forEach((input) => {
        if (input.parentNode.parentNode.className === 'active') {
          // console.log(input.value);
          // const outputUl = document.querySelector('.output-ul');
          // const li = document.createElement('li');
          // outputUl.appendChild(li);
          // const inpuValue = input.value;
          // li.innerText = inpuValue;
          this.saveInputValue(input.value);
        }
      });
    },

    giveToLifeInput(event) {
      const target = event.currentTarget.parentNode;
      const inputs = target.parentNode.parentNode.querySelectorAll('input');
      const testTitle = target.firstChild.innerText;
      const h3 = document.querySelector('h3');
      h3.innerText = testTitle;

      const confirmImage = document.querySelector('.confirm-image');
      console.log(confirmImage);

      inputs.forEach((input) => {
        {
          input.parentNode.parentNode.className === 'active'
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
  background-color: rgba(61, 192, 116, 0.2);
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
  height: 700px;
  margin: 2rem auto;
  transform: translateY(5%);
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
