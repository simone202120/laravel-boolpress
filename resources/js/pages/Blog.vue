 <template>
    <div class="container">
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <Mypost v-for="(post, index) in posts" :key="index" :post="post">
           
        </Mypost>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link"  @click="getposts(currentPage - 1)">Previous</a></li>
                <li class="page-item"><a class="page-link"  @click="getposts(currentPage + 1)">Next</a></li>
            </ul>
        </nav>
    </div>
  
</template>

<script>
import Axios from 'axios';
import Mypost from '../components/Mypost.vue'

export default {
    name: 'Blog',

    components:{
        Mypost
    },
    data() {
        return {
            posts:[],
            loading: true,
            currentPage:1,
            lastPage:null,
        }
    },

    methods:{
        getposts(page){
            this.loading=true;
            Axios.get('/api/posts',{
                params:{
                    page: page
                }
            })
            .then((response)=> {
                this.posts = response.data.results.data;
                this.loading=false;
                this.currentPage= response.data.results.current_page;
                this.lastPage= response.data.results.last_page;

            });
        },
    },
    mounted(){
            this.getposts(1);
        }
}

</script>

<style>

</style>