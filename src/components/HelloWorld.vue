<template>
  <div class="wrap mt-3 mx-auto">
    <div class="header">
      <p class="expression">{{ expression }}</p>
      <p>{{ fedBack }}</p>
    </div>
    <div class="body">
      <div class="body-top">
        <div class="body-num">
          <div class="num-top">
            <div
              class="button"
              v-for="(item, k) in numTopData"
              :key="k"
              @click="actBtn(item)"
            >{{ item }}</div>
          </div>
          <div class="num-bottom">
            <div
              class="button"
              v-for="(item, k) in numBottomData"
              :key="k"
              @click="actBtn(item)"
            >{{ item }}</div>
          </div>
        </div>
        <div class="body-operator">
          <div
            class="button bg-buttom"
            v-for="(item, k) in operatorData"
            :key="k"
            @click="actOperator(item)"
          >{{ item }}</div>
        </div>
      </div>
      <div class="body-bottom mt-3">
        <div class="button" @click="actZero()">{{ bodyBottomData.DxAC }}</div>
        <div class="button" @click="actBack()">{{ bodyBottomData.DxDel }}</div>
        <div
          class="button bg-buttom-eqrul flexGrow text-right pr-4"
          @click="actEqual()">{{ bodyBottomData.DxEqual }}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./index.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: #062145;
$dark: #041936;
$white: #fff;

.button {
  width: 4.5rem;
  max-height: 4rem;
  line-height: 4rem;
  text-align: center;
  font-size: 1.3rem;
  color: $white;
  cursor: pointer;
}

.bg-buttom {
  background-color: $dark;
  border-radius: 16px;
  margin: 1.2rem 0rem;
}

.bg-buttom-eqrul {
  background: transparent linear-gradient(90deg, #00c4ff 0%, #6c00ff 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 16px;
}

.flexGrow {
  flex: 2;
}

.wrap {
  width: 21.85rem;
  height: 38rem;
  background-color: $primary;
  box-shadow: 0px 20px 40px #00000066;
  border-radius: 20px;
  opacity: 1;
}

.header {
  width: 100%;
  height: 10.8125rem;
  background: $dark 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  padding-right: 1.4rem;

  .expression {
    width: 100%;
    color: $white;
    font-size: 2rem;
    margin-bottom: 0;
  }

  p {
    width: 100%;
    color: $white;
    font-size: 3.5rem;
  }
}

.body {
  width: 100%;
  height: 25.9975rem;
  border-radius: 0px 0px 20px 20px;
}

.body-top {
  width: 100%;
  height: 80%;
  display: flex;

  .body-num {
    width: 75%;
    height: 100%;

    .num-top {
      height: 75%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 1rem;
    }

    .num-bottom {
      height: 25%;
      display: flex;
      justify-content: center;
    }
  }

  .body-operator {
    justify-content: 100%;
  }
}

.body-bottom {
  height: 20%;
  display: flex;
  justify-content: center;
  padding-left: 1.3rem;
  padding-right: 0.9rem;
}
</style>
