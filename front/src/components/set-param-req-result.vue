<template>
	<div class="set-param-widget">
    <h3>Параметры запроса</h3>
    <p><label>User: </label><input type="text" v-model="user"></p>
    <p><label>За последние 30 дней: </label><input type="radio" id="30day" value="30day" v-model="picked"></p>
    <p>
      <label>За месяц: </label><input type="radio" id="month" value="month" v-model="picked">
      <span v-show="picked == 'month'">
        <label>Выберите год</label>
        <select v-model="yearSelected">
            <option>2013</option><option>2020</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option>
        </select>
      </span>
      <span v-show="picked == 'month'">
        <label>Выберите месяц</label>
        <select v-model="monthSelected">
            <option>1</option><option>2</option><option>3</option><option>4</option>
            <option>5</option><option>6</option><option>7</option><option>8</option>
            <option>9</option><option>10</option><option>11</option><option>12</option>
        </select>
      </span>
    </p>
    <div class="button" @click="setParam()">Получить результаты</div>
	</div>
</template>
<script>

export default {
	data() {
    return {
      picked: "30day",
      monthSelected: "1",
      yearSelected: "2016",
      user: "latish86"
    };
  },
	methods: {
		setParam: function(){
			this.$emit('setReqParam', {
	      picked: this.picked,
	      monthSelected: this.monthSelected,
	      yearSelected: this.yearSelected,
	      user: this.user
	    })
		}
	},
	created: function(){
		// Передаем параметры по умолчанию
		this.$emit('setReqParam', {
      picked: this.picked,
      monthSelected: this.monthSelected,
      yearSelected: this.yearSelected,
      user: this.user
    })
	}
}

</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.set-param-widget{
	padding: 20px;
}
.button {
  background-color: $dark-blue;
  box-sizing: border-box;
  padding: 5px 10px;
  color: $milk;
  display: inline-block;
  &:hover {
    color: $light-blue;
    cursor: pointer;
  }
}
</style>