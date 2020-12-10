<template>
    <div class="movie-body">
        <ul>
            <li v-for="item in movieList" :key="item.filmId">
                <div class="pic"><img :src="item.poster"></div>
                <div class="info-list">
                    <h2>{{item.name}}</h2>
                    <p>主演： {{item.actors[0].name}} {{item.actors[1].name}} {{item.actors[2].name}}</p>
                    <p>{{item.category}}</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
             
        </ul>
    </div>
</template>
<script>
export default {
    name:'comingSoon',
    data(){
        return{
            movieList:[]
        }
    },
    mounted(){
        this.axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=3956840",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605591823507686609223681","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            // console.log(res.data)
            this.movieList=res.data.data.films
        })
    }
    
}
</script>
<style lang="scss" scoped>
#content .movie-body{ flex:1; overflow:auto;}
.movie-body ul{ margin:0 12px; overflow: hidden;}
.movie-body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie-body .pic{ width:64px; height: 90px; background-color: pink;}
.movie-body .pic img{ width:100%;}
.movie-body .info-list { margin-left: 10px; flex:1; position: relative;}
.movie-body .info-list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie-body .info-list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie-body .info-list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie-body .info-list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie-body .btn_mall , .movie-body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie-body .btn_pre{ background-color: #3c9fe6;}
</style>