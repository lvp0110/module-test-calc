<template>
    <div class="search row" >            
        <div class="col-12" >
            <input type="text" class="form-control" placeholder="поиск..." v-model="$store.state.searchText" style="margin-top:5px;">
        </div>
    </div> 
</template>

<script>

    export default {
       data()
        {
            return {
                selected: 'Category'
            }
        },
       
        props: ['options']
    }
</script>


