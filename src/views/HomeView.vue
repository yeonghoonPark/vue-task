<template>
  <div class="home">
    <div class="container">
      <div class="login">
        <h2>로그인 후 이용 가능합니다.</h2>
        <form class="login-form">
          <label for="userId">
            <span class="id-span">ID: </span>
            <input
              type="text"
              id="userId"
              class="userId"
              placeholder="ID"
              required
              maxlength="12"
              ref="userId"
            />
          </label>

          <label for="userPassword">
            <span lass="password-span">PASSWORD: </span>
            <input
              type="password"
              id="userPassword"
              class="userPassword"
              placeholder="Password"
              required
              maxlength="12"
            />
          </label>

          <div class="btn-box">
            <ButtonLogin style="margin-top: 2rem" :message="login" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import ButtonLogin from "../components/ButtonDefault.vue";

export default {
  components: { ButtonLogin },
  setup() {
    onMounted(() => {
      console.log(userId.value);
    });
    const userId = ref(null);

    console.log(userId.value);
    console.log(userId.value);

    const login = ref("로그인");

    const saveUserInfoArray = reactive([]);

    const saveUserInfor = () => {
      localStorage.setItem("userInfo", JSON.stringify(saveUserInfoArray));
    };

    const onLoginSubmit = () => {
      console.log("121");
    };

    return { login, saveUserInfoArray, saveUserInfor, onLoginSubmit, userId };
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

.home {
  width: 100%;
  margin: 77px auto 0;
}

.container {
  padding: 5rem;
}

.login {
  width: 100%;
}

.login h2 {
  margin: 0 auto 6rem;
  text-align: center;
}

.login-form {
  width: 70%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #111101;
}

.login-form label {
  padding: 0.5rem;
}

.id-span {
  margin-right: 68px;
}
</style>
