<template>
    <div class="movie_body" ref="movie_body">
		<Loading v-if="isLoading" />
		<Scroller v-else :handleToScroll="handleToScroll" :handleToEnd="handleToEnd">
			<ul>
				<li class="pullDown">{{pullDownMsg}}</li>
				<li v-for="item in movieList" :key="item.filmId" @click="handleToDetail(item.filmId)">
					<div class="pic_show"><img :src="item.poster"></div>
					<div class="info_list">
						<h2>{{item.name}}</h2>
						<p>观众评分 <span class="grade">{{item.grade}}</span></p>
						<p>主演: {{item.actors[0].name}} {{item.actors[1].name}} {{item.actors[2].name}}</p>
						<p>{{item.nation}}|{{item.runtime}}分钟</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
			</ul>
		</Scroller>
	</div>
</template>
<script>
// import BScroll from 'better-scroll'
export default {
	name:'nowPlaying',
	data(){
		return{
			movieList:[],
			pullDownMsg:'',
			isLoading:true,
			preCityId:-1
		}
	},
	activated(){
		var cityId = this.$store.state.city.id
		if(this.preCityId==cityId){return}
		this.isLoading=true
		this.axios({
			url:"https://m.maizuo.com/gateway?cityId="+cityId+"&pageNum=1&pageSize=10&type=1&k=2411577",
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605591823507686609223681","bc":"110100"}',
				'X-Host': 'mall.film-ticket.film.list'
			}
		}).then(res=>{
			if(res.data.msg==='ok'){
				this.movieList=res.data.data.films
				this.isLoading=false
				this.preCityId = cityId
			}
		})
	},
	methods:{
		handleToDetail(movieId){
			// console.log(id)
			this.$router.push('/movie/detail/1/'+movieId)
		},
		handleToScroll(pos){
			if(pos.y>30){
				this.pullDownMsg="正在刷新"
			}
		},
		handleToEnd(pos){
			if(pos.y>30){
				this.axios({
					url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2411577",
					headers:{
						'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605591823507686609223681","bc":"110100"}',
						'X-Host': 'mall.film-ticket.film.list'
					}
				}).then(res=>{
					if(res.data.msg==='ok'){
						this.pullDownMsg="刷新成功"
						setTimeout(() => {
							this.movieList=res.data.data.films
							this.pullDownMsg=''
						}, 1000);
					}
				})
			}
		},
	}
}
</script>
<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;background-color: pink;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{margin: 0; padding: 0; border: none;}
</style>