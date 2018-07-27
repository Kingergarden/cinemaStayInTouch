new Vue({
  el: '#app',
  data () {

    return {
      info: "Default",
      info2: "Default"
    }
  },

  // define methods under the `methods` object
  methods: {
    Movies: function (event) {
       axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5dc9a3781f42af69c2b5049477186671&language=en-US&page=1')
     .then(response => {
     let veha = [];
     let movie = {};
     for(let i = 0; i < response.data.results.length; i++){
     movie = response.data.results[i]
     veha.push({ title: movie.title, vote_average: movie.vote_average})
     }
      this.info = veha
     } 
     )
  
},

TVShows: function (event)
{
axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5dc9a3781f42af69c2b5049477186671&language=en-US&page=1')
.then(response => {
let veha1 = [];
let tvshows = {};
for (let x=0; x<response.data.results.length; x++)
{
tvshows = response.data.results[x]
veha1.push({name: tvshows.name, popularity: tvshows.popularity})
}
this.info2=veha1
}
)
}
}

})