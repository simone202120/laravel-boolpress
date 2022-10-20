<template>
    <div class="container">
        <div class="card-header">
            <H5>TITOLO</H5>
            <H5>{{post.title}}</H5>
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
        
    
</template>

<script>
import { METHODS } from 'http';

export default {
    name:'Mypost',
    props:['post'],
    

    methods:{
        trocatetext(text, maxlength){

            if (text.length < maxlength) {
                return text;
            } else {
                return text.substring(0,maxlength) + '...';
            }

        }
        
    }
}
</script>

<style>

</style>