 <template>
    <div class="container">
        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-else class="card text-center mt-5" v-for="(post, index) in posts" :key="index">
            <div class="card-header">
                <H5>TITOLO</H5>
                <H5>{{post.title}}</H5>
            </div>
            <div v-if="loading">
                <div class="spinner-border text-warning" role="status">
                 <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">{{trocatetext(post.content, 50)}}</p>
                <P>CATEGORY:{{post.category.name}}</P>
                <a href="#" class="btn btn-primary">Leggi articolo</a>
            </div>
            <div class="card-footer text-muted">
                {{post.updated_at}}
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" @click="getposts(currentPage - 1)">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="getposts(currentPage + 1)">Next</a></li>
            </ul>
        </nav>
    </div>
  
</template>

<script>
import Axios from 'axios';

export default {
    name: 'MyMain',
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

        trocatetext(text, maxlength){

            if (text.length < maxlength) {
                return text;
            } else {
                return text.substring(0,maxlength) + '...';
            }
            
        }
    },
    mounted(){
            this.getposts(1);
        }
}

</script>

<style>

</style>