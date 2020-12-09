<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icondianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont iconyingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/my">
                <i class="iconfont iconwode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #footer{
        width: 100%;
        height: 50px;
        background-color: #fff;
        border-top: 2px solid #ebe8e3;
        position: fixed;
        left: 0;
        bottom: 0;
        ul{
            display: flex;
            text-align: center;
            height: 50px;
            align-items: center;
            .router-link-active{
                    color:#f03d37;
                }
            li{
                flex: 1;
                height: 40px;
                
                
                i{
                    font-size:20px;
                }
                p{
                    font-size: 12px;
                    line-height: 18px;
                }
            }
            
        }

    }
</style>