<template>
    <div class="movie-body">
        <ul>
            <li>
                <div class="pic"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>人想看</p>
                    <p>主演：陈建兵，任素喜，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
             <li>
                <div class="pic"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>人想看</p>
                    <p>主演：陈建兵，任素喜，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
             <li>
                <div class="pic"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>人想看</p>
                    <p>主演：陈建兵，任素喜，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
             <li>
                <div class="pic"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>人想看</p>
                    <p>主演：陈建兵，任素喜，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
             <li>
                <div class="pic"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>人想看</p>
                    <p>主演：陈建兵，任素喜，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
             <li>
                <div class="pic"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>人想看</p>
                    <p>主演：陈建兵，任素喜，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
             <li>
                <div class="pic"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>人想看</p>
                    <p>主演：陈建兵，任素喜，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'comingSoon'
    
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