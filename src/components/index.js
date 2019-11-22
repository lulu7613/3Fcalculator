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

      fedBack: 0,
    };
  },

  methods: {
    actBtn(el) {
      console.log(el);
      this.fedBack = el;
    },
  },
};
