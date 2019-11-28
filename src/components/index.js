export default {
  name: 'HelloWorld',
  data() {
    return {
      numTopData: [7, 8, 9, 4, 5, 6, 1, 2, 3],
      numBottomData: [0, '00', '.'],
      operatorData: ['÷', '×', '+', '-'],
      bodyBottomData: {
        DxAC: 'AC',
        DxDel: '⌫',
        DxEqual: '=',
      },

      expression: '', // 顯示計算歷程
      fedBack: 0, // 當前數值
      previous: null, // 儲存 equal 後的值
      operator: null, // 運算狀態

      operatorStatus: false, // 是否觸發加減乘除運算
      equalStatus: false, // 是否觸發等於
    };
  },

  methods: {
    actBtn(el) {
      // 最大長度只能到 9
      const len = this.fedBack.length;
      if (len >= 9) {
        this.fedBack = this.fedBack;
        return;
      }

      if (!this.fedBack || this.fedBack === '00') {
        // 去掉頭0
        if (el === 0 || el === '00') {
          this.fedBack = 0;
        } else {
          this.fedBack = `${el}`;
          this.expression += el.toString();
          this.operatorStatus = false;
        }
        return;
      }

      // . 的處理
      if (el === '.') {
        if (this.fedBack.indexOf('.') === -1) {
          this.fedBack = `${this.fedBack}${el}`;
          this.expression = this.fedBack;
          this.operatorStatus = false;
          return;
        }
      }

      this.fedBack = `${this.fedBack}${el}`;
      this.expression += el.toString();
      this.operatorStatus = false;
    },

    // 加減乘除運算
    actOperator(el) {
      console.log(el);

      // 避免連按運算符號
      if (this.operatorStatus) {
        return;
      }

      //
      if (this.previous) {
        this.expression = this.previous;
        this.previous = null;
      }

      this.fedBack = 0;
      this.operatorStatus = true;

      // 判斷運算符號
      switch (el) {
        case '+':
          this.expression += el.toString();
          break;

        case '-':
          this.expression += el.toString();
          break;

        case '×':
          this.expression += '*';
          break;

        case '÷':
          this.expression += '/';
          break;

        default:
          break;
      }
    },

    // 歸 0
    actZero() {
      this.fedBack = 0;
      this.expression = '';
      this.previous = null;
    },

    // 減一位數
    actBack() {
      const lenFedBack = this.fedBack.length;
      const lenExp = this.expression.length;
      if (!lenFedBack || lenFedBack === 1) {
        this.fedBack = 0;
      } else {
        this.fedBack = this.fedBack.substring(0, lenFedBack - 1);
        this.expression = this.expression.substring(0, lenExp - 1);
      }
    },

    // 等於
    actEqual() {
      let value = this.expression;
      let answer = 0;

      // 空算式
      if (!value) {
        return;
      }

      // 算式不完整 (正規表達式: 最後一位數不是數字的話)
      if (value.search(/[0-9]$/) === -1) {
        return;
      }

      answer = this.evil(value);
      answer = this.checkStringLen(answer);
      this.fedBack = answer;
      this.previous = this.fedBack;
      value = '';
    },

    // 计算表达式的值
    evil(fn) {
      const Fn = Function; // 一个变量指向Function，防止有些前端编译工具报错
      return new Fn(`return ${fn}`)();
    },

    // 確認數值長度不超過 9
    checkStringLen(number) {
      const str = String(number);
      return str.substring(0, 9);
    },
  },
};
